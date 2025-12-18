import React, { useState, useEffect } from 'react';
import { Upload, X, FileVideo, Image as ImageIcon } from 'lucide-react';

const MediaUpload = ({ label, currentMedia, onMediaChange }) => {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(currentMedia);
    const [mediaType, setMediaType] = useState('image');

    useEffect(() => {
        setPreview(currentMedia);
        if (currentMedia) {
            const ext = currentMedia.split('.').pop().toLowerCase();
            if (['mp4', 'webm', 'ogg', 'mov'].includes(ext)) {
                setMediaType('video');
            } else {
                setMediaType('image');
            }
        }
    }, [currentMedia]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Determine type for immediate preview
        const isVideo = file.type.startsWith('video/');
        setMediaType(isVideo ? 'video' : 'image');

        // Preview immediate
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setUploading(true);

        const formData = new FormData();
        formData.append('image', file); // Keep field name 'image' for backend compatibility, or change backend to 'media'

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                onMediaChange(data.url); // Pass back the /uploads/filename.ext path
            } else {
                alert('Error subiendo archivo');
                setPreview(currentMedia); // Revert
            }
        } catch (error) {
            console.error('Upload error', error);
            alert('Error de conexión al subir');
            setPreview(currentMedia); // Revert
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="form-group">
            <label className="block text-sm font-medium mb-1 text-slate-700">{label}</label>
            <div className="flex items-start gap-4">
                <div className="w-40 h-24 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                    {preview ? (
                        mediaType === 'video' ? (
                            <video src={preview} className="w-full h-full object-cover" controls={false} muted autoPlay loop />
                        ) : (
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center text-slate-400">
                            <ImageIcon size={20} />
                            <span className="text-[10px] mt-1">Sin archivo</span>
                        </div>
                    )}
                    {uploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-300">
                        <Upload size={16} />
                        {uploading ? 'Subiendo...' : 'Cambiar Archivo'}
                        <input
                            type="file"
                            accept="image/*,video/*"
                            className="hidden"
                            onChange={handleFileChange}
                            disabled={uploading}
                        />
                    </label>
                    <p className="text-xs text-slate-400 mt-2">Soporta Imágenes (JPG, PNG, WEBP) y Videos (MP4, WEBM). Máx 50MB.</p>
                </div>
            </div>
        </div>
    );
};

export default MediaUpload;
