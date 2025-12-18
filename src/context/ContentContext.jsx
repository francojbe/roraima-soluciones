import React, { createContext, useState, useEffect, useContext } from 'react';
import defaultContent from '../content.json';

const ContentContext = createContext();

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(defaultContent);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchContent = async () => {
        try {
            // In development purely with Vite, this might fail if the API isn't proxying yet.
            // In production (served by Node) or with proxy, it works.
            const response = await fetch('/api/content');
            if (response.ok) {
                const data = await response.json();
                setContent(data);
                setError(null);
            } else {
                console.warn('Failed to fetch dynamic content, using default.');
            }
        } catch (err) {
            console.warn('Error fetching content (API might be unreachable), using default.', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    const updateContent = (newContent) => {
        setContent(newContent);
    };

    // If still loading, we can decide to show a spinner or just render with default content temporarily
    // For better UX on first load with pure static serving, let's render.
    // Ideally, loading should be fast.

    return (
        <ContentContext.Provider value={{ content, loading, error, refreshContent: fetchContent, updateContent }}>
            {children}
        </ContentContext.Provider>
    );
};
