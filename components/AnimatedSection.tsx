import React, { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in-left' | 'zoom-in';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    type?: AnimationType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', type = 'fade-in-up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const animationClassMap = {
        'fade-in-up': 'anim-fade-in-up',
        'fade-in-left': 'anim-fade-in-left',
        'zoom-in': 'anim-zoom-in',
    };

    const animationClass = animationClassMap[type] || animationClassMap['fade-in-up'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.15,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`section-animate ${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;