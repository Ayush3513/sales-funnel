import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

interface HeroVideoPlayerProps {
    videoSrc: string;
}

const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const modalVideoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        setIsPlaying(true);
        setTimeout(() => {
            if (modalVideoRef.current) {
                modalVideoRef.current.play();
            }
        }, 100);
    };

    const closeModal = () => {
        setShowModal(false);
        setIsPlaying(false);
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            modalVideoRef.current.currentTime = 0;
        }
    };

    const togglePlay = () => {
        if (!showModal) {
            openModal();
        } else {
            if (modalVideoRef.current) {
                if (isPlaying) {
                    modalVideoRef.current.pause();
                } else {
                    modalVideoRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (modalVideoRef.current) {
            modalVideoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleActivity = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 1500);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 1500);
        } else {
            setShowControls(true);
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        }
        return () => {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        };
    }, [isPlaying]);

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
                className="relative w-[60vw] sm:w-full sm:max-w-[240px] mx-auto rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(249,118,24,0.6)] border border-gray-800 group cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                onClick={openModal}
            >
                <video
                    ref={videoRef}
                    className="w-full h-auto object-cover"
                    loop
                    muted
                    playsInline
                    src={videoSrc}
                />

                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 opacity-100"></div>

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
                        className="relative w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <video
                                ref={modalVideoRef}
                                className="w-full h-full object-contain rounded-2xl"
                                loop
                                playsInline
                                src={videoSrc}
                                onClick={togglePlay}
                            />

                            <div
                                className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
                                onMouseMove={handleActivity}
                                onTouchStart={handleActivity}
                                onClick={handleActivity}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all transform hover:scale-110 cursor-pointer"
                                        onClick={togglePlay}
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-10 h-10 text-white fill-current" />
                                        ) : (
                                            <Play className="w-10 h-10 text-white fill-current ml-1" />
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md p-3 rounded-full hover:bg-black/70 transition-all transform hover:scale-105"
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-6 h-6 text-white" />
                                    ) : (
                                        <Volume2 className="w-6 h-6 text-white" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Aesthetic Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-110 hover:rotate-90 z-10 group"
                        >
                            <X className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeroVideoPlayer;
