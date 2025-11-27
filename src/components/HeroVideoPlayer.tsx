import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface HeroVideoPlayerProps {
    videoId: string;
}

const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ videoId }) => {
    const [showModal, setShowModal] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        // Fetch Vimeo thumbnail
        fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
            .then(response => response.json())
            .then(data => {
                if (data && data[0]) {
                    setThumbnailUrl(data[0].thumbnail_large);
                }
            })
            .catch(error => console.error('Error fetching Vimeo thumbnail:', error));
    }, [videoId]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && showModal) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [showModal]);

    return (
        <>
            {/* Thumbnail/Preview */}
            <div
                className="relative w-[60vw] sm:w-full sm:max-w-[240px] mx-auto rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(249,118,24,0.6)] border border-gray-800 group cursor-pointer aspect-[9/16] bg-gray-900"
                onClick={openModal}
            >
                {thumbnailUrl && (
                    <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                )}

                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all transform hover:scale-110">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-auto h-[80vh] max-h-[90vh] aspect-[9/16] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-gray-800">
                            <iframe
                                src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-full h-full"
                                title="Vimeo Video"
                            ></iframe>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                        </div>


                    </div>
                </div>
            )}
        </>
    );
};

export default HeroVideoPlayer;
