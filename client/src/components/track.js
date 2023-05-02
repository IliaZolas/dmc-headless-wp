import { useEffect, useState, useRef } from 'react';
import './track.scss';

const Track = () => {
    const [isIntersecting, setIntersecting] = useState(false);
    const [translateY, setTranslateY] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin: '1%',
            }
            );
            if (containerRef.current) {
            observer.observe(containerRef.current);
            }
            return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            };
        }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setTranslateY(scrollTop);
    };

    useEffect(() => {
        if (isIntersecting) {
            window.addEventListener('scroll', handleScroll);
            } else {
            window.removeEventListener('scroll', handleScroll);
            }
            return () => window.removeEventListener('scroll', handleScroll);
        }, [isIntersecting]);

    return (
        <div className="track-container" ref={containerRef}>
            <div className="circle" style={{ transform: `translateY(${translateY}px)` }} />
        </div>
    );
};

export default Track;
