import { useState, useEffect } from 'react';
import idPic from '@/shared/assets/images/idpic.webp';
import picc2 from '@/shared/assets/images/picc2.jpg';

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <header style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 2rem'
        }}>
            {/* Animated Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #d4ebf2 100%)',
                zIndex: 0
            }}>
                {/* Floating Circles */}
                <div className="floating-circle" style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(168, 213, 226, 0.3), transparent)',
                    top: '10%',
                    left: '5%',
                    animation: 'float 6s ease-in-out infinite',
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}></div>

                <div className="floating-circle" style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(126, 184, 204, 0.2), transparent)',
                    top: '60%',
                    right: '10%',
                    animation: 'float 8s ease-in-out infinite',
                    animationDelay: '2s',
                    transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
                }}></div>

                <div className="floating-circle" style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(168, 213, 226, 0.25), transparent)',
                    bottom: '15%',
                    left: '15%',
                    animation: 'float 7s ease-in-out infinite',
                    animationDelay: '1s',
                    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                }}></div>

                {/* Sparkles */}
                <div className="sparkle" style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#a8d5e2',
                    top: '20%',
                    left: '30%',
                    animation: 'sparkle 3s ease-in-out infinite',
                    boxShadow: '0 0 10px #a8d5e2'
                }}></div>

                <div className="sparkle" style={{
                    position: 'absolute',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: '#7eb8cc',
                    top: '70%',
                    right: '25%',
                    animation: 'sparkle 4s ease-in-out infinite',
                    animationDelay: '1s',
                    boxShadow: '0 0 8px #7eb8cc'
                }}></div>

                <div className="sparkle" style={{
                    position: 'absolute',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#6ba3be',
                    top: '40%',
                    right: '15%',
                    animation: 'sparkle 3.5s ease-in-out infinite',
                    animationDelay: '2s',
                    boxShadow: '0 0 12px #6ba3be'
                }}></div>
            </div>

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                gap: '3rem',
                alignItems: 'center',
                maxWidth: '1200px',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {/* Profile Image with cute frame */}
                <div style={{
                    position: 'relative',
                    animation: 'slideInLeft 0.8s ease-out'
                }}>
                    <div style={{
                        width: '300px',
                        height: '350px',
                        background: 'white',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(168, 213, 226, 0.4)',
                        border: '5px solid white',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                            e.currentTarget.style.boxShadow = '0 25px 70px rgba(168, 213, 226, 0.5)';
                            setIsHovered(true);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(168, 213, 226, 0.4)';
                            setIsHovered(false);
                        }}
                    >
                        <img
                            src={isHovered ? picc2 : idPic}
                            alt="Rhizza Mae C. Discaya"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.5s ease'
                            }}
                        />
                    </div>

                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #a8d5e2, #7eb8cc)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 15px rgba(168, 213, 226, 0.4)',
                        animation: 'bounce 2s ease-in-out infinite'
                    }}></div>

                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '-15px',
                        width: '30px',
                        height: '30px',
                        background: 'linear-gradient(135deg, #6ba3be, #a8d5e2)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 15px rgba(168, 213, 226, 0.4)',
                        animation: 'bounce 2s ease-in-out infinite',
                        animationDelay: '0.5s'
                    }}></div>
                </div>

                {/* Profile Info */}
                <div style={{
                    flex: 1,
                    minWidth: '300px',
                    maxWidth: '600px',
                    animation: 'slideInRight 0.8s ease-out'
                }}>
                    <div style={{
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #a8d5e2, #7eb8cc)',
                            color: 'white',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            boxShadow: '0 4px 15px rgba(168, 213, 226, 0.3)',
                            display: 'inline-block'
                        }}>
                            Hello, I'm
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: '3rem',
                        lineHeight: '1.2',
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #6ba3be, #a8d5e2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 700
                    }}>
                        Rhizza Mae C. Discaya
                    </h1>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #7eb8cc, #6ba3be)',
                        color: 'white',
                        display: 'inline-block',
                        padding: '0.6rem 1.8rem',
                        borderRadius: '30px',
                        boxShadow: '0 6px 20px rgba(168, 213, 226, 0.4)',
                        fontWeight: 600
                    }}>
                        Web Developer
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        marginBottom: '1.5rem',
                        color: '#5a6c7d',
                        lineHeight: '1.8',
                        background: 'rgba(255, 255, 255, 0.7)',
                        padding: '1.5rem',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 15px rgba(168, 213, 226, 0.1)'
                    }}>
                        Dedicated Web Developer and BSIT Student specializing in Web and Mobile Applications. Proficient in building high-performance full-stack solutions with React, Node.js, and FastAPI. Committed to delivering seamless, user-centric digital experiences through clean code and modern design principles.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem',
                        fontSize: '0.95rem',
                        color: '#6ba3be',
                        fontWeight: 500
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>0925-554-7426</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>rhizzadiscaya@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>Pandi, Bulacan</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave decoration at bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                overflow: 'hidden',
                lineHeight: 0,
                transform: 'rotate(180deg)'
            }}>
                <svg
                    style={{
                        position: 'relative',
                        display: 'block',
                        width: 'calc(100% + 1.3px)',
                        height: '80px'
                    }}
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        style={{
                            fill: '#f8fbff',
                            opacity: 0.3
                        }}
                    ></path>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        style={{
                            fill: '#f8fbff'
                        }}
                    ></path>
                </svg>
            </div>
        </header>
    );
};

export default Header;
