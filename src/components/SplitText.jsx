import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
    text,
    className = '',
    delay = 100,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars', // 'chars' or 'words' supported mostly
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    onLetterAnimationComplete
}) => {
    const ref = useRef(null);
    const [key, setKey] = useState(0); // Force re-render on resize if needed

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;

            // Select targets based on splitType
            let targets = [];
            if (splitType === 'words') {
                targets = el.querySelectorAll('.split-word');
            } else {
                // Default to chars
                targets = el.querySelectorAll('.split-char');
            }

            if (targets.length === 0) return;

            const startPct = (1 - threshold) * 100;
            // Simple offset calculation
            const start = `top ${startPct}%`;

            gsap.fromTo(
                targets,
                { ...from },
                {
                    ...to,
                    duration,
                    ease,
                    stagger: delay / 1000,
                    scrollTrigger: {
                        trigger: el,
                        start: `${start} ${rootMargin}`,
                        once: true,
                    },
                    onComplete: () => {
                        onLetterAnimationComplete?.();
                    }
                }
            );
        },
        { dependencies: [text, key], scope: ref }
    );

    // Manual Split Logic
    const renderContent = () => {
        if (splitType === 'words') {
            return text.split(' ').map((word, i) => (
                <span key={i} className="split-word inline-block will-change-transform" style={{ whiteSpace: 'pre' }}>
                    {word}&nbsp;
                </span>
            ));
        }

        // Default: Chars (splitting by words first to keep structure)
        return text.split(' ').map((word, i) => (
            <span key={i} className="inline-block whitespace-nowrap">
                {word.split('').map((char, j) => (
                    <span key={j} className="split-char inline-block will-change-transform">
                        {char}
                    </span>
                ))}
                <span className="inline-block">&nbsp;</span>
            </span>
        ));
    };

    const Tag = tag;

    return (
        <Tag
            ref={ref}
            className={className}
            style={{ textAlign, overflow: 'hidden' }}
        >
            {renderContent()}
        </Tag>
    );
};

export default SplitText;
