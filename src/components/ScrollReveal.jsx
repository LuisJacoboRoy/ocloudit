import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Option: unobserve if we only want it to animate once
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => {
            if (revealRef.current) {
                observer.unobserve(revealRef.current);
            }
        };
    }, []);

    const directionClass = {
        up: 'reveal-up',
        down: 'reveal-down',
        left: 'reveal-left',
        right: 'reveal-right',
    }[direction];

    return (
        <div
            ref={revealRef}
            className={`reveal ${directionClass} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
