import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const ImageUpload = ({ label, currentImage, onImageChange }) => {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(currentImage);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Preview immediate
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setUploading(true);

        const formData = new FormData();
        formData.append('image', file);

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
                onImageChange(data.url); // Pass back the /uploads/filename.ext path
            } else {
                alert('Error subiendo imagen');
                setPreview(currentImage); // Revert
            }
        } catch (error) {
            console.error('Upload error', error);
            alert('Error de conexión al subir');
            setPreview(currentImage); // Revert
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="form-group">
            <label className="block text-sm font-medium mb-1 text-slate-700">{label}</label>
            <div className="flex items-start gap-4">
                <div className="w-32 h-20 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden relative flex-shrink-0">
                    {preview ? (
                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <span className="text-xs">Sin imagen</span>
                        </div>
                    )}
                    {uploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-300">
                        <Upload size={16} />
                        {uploading ? 'Subiendo...' : 'Cambiar Imagen'}
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                            disabled={uploading}
                        />
                    </label>
                    <p className="text-xs text-slate-400 mt-2">Formatos aceptados: JPG, PNG, WEBP. Máx 5MB.</p>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
