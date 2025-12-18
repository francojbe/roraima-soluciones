import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Save, Layers, Layout, Type } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import MediaUpload from '../components/admin/MediaUpload';

const Admin = () => {
    const { content, updateContent, refreshContent } = useContent();
    const [localContent, setLocalContent] = useState(content);
    const [activeTab, setActiveTab] = useState('hero');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
        }
        setLocalContent(content);
    }, [content, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage(null);
        const token = localStorage.getItem('authToken');

        try {
            const response = await fetch('/api/content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(localContent)
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Cambios guardados con éxito!' });
                updateContent(localContent); // Optimistic update
                refreshContent(); // Ensure consistency
            } else {
                setMessage({ type: 'error', text: 'Error al guardar cambios.' });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Error de conexión.' });
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(null), 3000);
        }
    };

    // Helper for nested updates
    const updateNested = (path, value) => {
        setLocalContent(prev => {
            const newState = JSON.parse(JSON.stringify(prev)); // Deep copy
            let current = newState;
            const keys = path.split('.');
            const lastKey = keys.pop();

            for (const key of keys) {
                if (!current[key]) current[key] = {};
                current = current[key];
            }
            current[lastKey] = value;
            return newState;
        });
    };

    // Helper for array item updates
    const updateArrayItem = (arrayPath, index, field, value) => {
        setLocalContent(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            let current = newState;
            const keys = arrayPath.split('.');

            for (const key of keys) {
                if (!current[key]) current[key] = []; // Should be array
                current = current[key];
            }

            if (current[index]) {
                current[index][field] = value;
            }
            return newState;
        });
    };

    // --- Render Logic for Tabs ---
    const renderHeroEditor = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Layout size={20} /> Sección Hero (Inicio)</h3>

            <div className="form-group">
                <label className="block text-sm font-medium mb-1">Título Principal</label>
                <input
                    type="text"
                    value={localContent.hero_content?.main_heading || ''}
                    onChange={(e) => updateNested('hero_content.main_heading', e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="form-group">
                <label className="block text-sm font-medium mb-1">Subtítulo</label>
                <textarea
                    value={localContent.hero_content?.sub_heading || ''}
                    onChange={(e) => updateNested('hero_content.sub_heading', e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={3}
                />
            </div>
            <div className="form-group">
                <label className="block text-sm font-medium mb-1">Etiqueta (Badge)</label>
                <input
                    type="text"
                    value={localContent.hero_content?.expert_badge || ''}
                    onChange={(e) => updateNested('hero_content.expert_badge', e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-3">Fondo (Imagen o Video)</h4>
                <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm text-blue-800">
                    Puede subir una imagen (.jpg, .png) o un video (.mp4, .webm). Los videos se reproducirán automáticamente en bucle.
                </div>
                <MediaUpload
                    label="Subir archivo"
                    currentMedia={localContent.hero_content?.background_image_url}
                    onMediaChange={(url) => updateNested('hero_content.background_image_url', url)}
                />
            </div>
        </div>
    );

    const renderServicesEditor = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Layers size={20} /> Servicios</h3>
            <p className="text-sm text-slate-500 mb-4">Edite el título, descripción e imagen de sus servicios.</p>

            <div className="space-y-6">
                {localContent.services?.map((service, index) => (
                    <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold mb-3 text-blue-800">Servicio #{index + 1}</h4>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Título</label>
                                <input
                                    type="text"
                                    value={service.title || ''}
                                    onChange={(e) => updateArrayItem('services', index, 'title', e.target.value)}
                                    className="w-full p-2 border rounded bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Descripción</label>
                                <textarea
                                    rows={3}
                                    value={service.description || ''}
                                    onChange={(e) => updateArrayItem('services', index, 'description', e.target.value)}
                                    className="w-full p-2 border rounded bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Imagen del Servicio</label>
                                <MediaUpload
                                    label="Cambiar Imagen"
                                    currentMedia={service.image_url}
                                    onMediaChange={(url) => updateArrayItem('services', index, 'image_url', url)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContactEditor = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Type size={20} /> Información de Contacto</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="text"
                        value={localContent.contact_info?.email || ''}
                        onChange={(e) => updateNested('contact_info.email', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Teléfono</label>
                    <input
                        type="text"
                        value={localContent.contact_info?.phone || ''}
                        onChange={(e) => updateNested('contact_info.phone', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Enlace WhatsApp</label>
                <input
                    type="text"
                    value={localContent.contact_info?.whatsapp_url || ''}
                    onChange={(e) => updateNested('contact_info.whatsapp_url', e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
        </div>
    );


    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold">Roraima Admin</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('hero')}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'hero' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
                    >
                        Hero / Inicio
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'services' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
                    >
                        Servicios
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'contact' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
                    >
                        Contacto
                    </button>
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <LogOut size={20} /> Salir
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-800">Editar Contenido</h2>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-white transition-all ${saving ? 'bg-slate-400' : 'bg-green-600 hover:bg-green-700 shadow-md'}`}
                        >
                            <Save size={20} />
                            {saving ? 'Guardando...' : 'Guardar Cambios'}
                        </button>
                    </div>

                    {message && (
                        <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message.text}
                        </div>
                    )}

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                        {activeTab === 'hero' && renderHeroEditor()}
                        {activeTab === 'services' && renderServicesEditor()}
                        {activeTab === 'contact' && renderContactEditor()}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;
