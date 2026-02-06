import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import dialiease1 from '@/shared/assets/images/dialieae1.webp';
import dialiease2 from '@/shared/assets/images/dialiease2.webp';
import dialiease3 from '@/shared/assets/images/dialiease3.webp';
import dialiease4 from '@/shared/assets/images/dialiease4.webp';
import dialiease5 from '@/shared/assets/images/dialiease5.webp';
import '@/app/styles/project-pages.css';

const DialiEasePage = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const images = [
        { src: dialiease1, alt: 'DialiEase Screenshot 1' },
        { src: dialiease2, alt: 'DialiEase Screenshot 2' },
        { src: dialiease3, alt: 'DialiEase Screenshot 3' },
        { src: dialiease4, alt: 'DialiEase Screenshot 4' },
        { src: dialiease5, alt: 'DialiEase Screenshot 5' },
    ];

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    const handlePrevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    const handleNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="project-page-container">
            {/* Back Button */}
            <Link to="/" className="bw-button project-back-btn">
                ← Back to Portfolio
            </Link>

            {/* Title */}
            <div className="project-header">
                <h1 className="project-title">DialiEase</h1>
                <p className="project-subtitle">CAPD Management Mobile Application</p>
                <p className="project-tech-stack">Figma • React Native • Expo • Node.js • MySQL</p>
            </div>

            {/* Overview */}
            <div className="bw-border project-section bg-gray">
                <p style={{ lineHeight: '1.8', fontSize: '1rem', margin: '0' }}>
                    DialiEase is a mobile application designed to support patients undergoing Continuous Ambulatory Peritoneal Dialysis (CAPD)
                    by simplifying daily treatment tracking at home. Manual logging of dialysis treatments can be tedious and error-prone,
                    making it difficult for patients to consistently monitor their condition. This project focuses on designing and developing
                    a patient-centered mobile solution that enables accurate recording of dialysis data and automated progress monitoring to
                    support safer and more manageable home-based care.
                </p>
            </div>

            {/* Two Column Layout */}
            <div className="project-grid-2-col">
                {/* The Problem */}
                <div className="bw-border project-section bg-white">
                    <h3 className="project-section-title">The Problem</h3>
                    <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        Peritoneal dialysis patients often rely on handwritten logs or memory to track their daily treatments, which leads to several challenges:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                        <li>Inconsistent or incomplete treatment records</li>
                        <li>Difficulty tracking daily dialysis exchanges and fluid measurements</li>
                        <li>Limited visibility into treatment progress over time</li>
                        <li>Increased risk of missed abnormalities</li>
                        <li>Existing tools that are complex or not patient-friendly</li>
                    </ul>
                </div>

                {/* Project Info Sidebar */}
                <div className="bw-border project-section bg-gray">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PROJECT INFO</h4>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Category</p>
                        <p className="project-info-value">Healthcare Mobile Application</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Platform</p>
                        <p className="project-info-value">iOS & Android</p>
                    </div>

                    <div>
                        <p className="project-info-label">My Role</p>
                        <p className="project-info-value">UI/UX Designer & Mobile Full-Stack Developer</p>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">The Solution</h3>
                <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    Designed and built DialiEase, a mobile CAPD management app tailored for home-based peritoneal dialysis patients.
                    The system provides:
                </p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Structured daily dialysis data recording</li>
                    <li>Automated progress monitoring</li>
                    <li>Clear visualization of treatment history</li>
                    <li>A simple, accessible interface designed for regular daily use</li>
                </ul>
            </div>

            {/* Key Features - Two Column */}
            <h3 className="project-section-title" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Key Features</h3>
            <div className="project-grid-2-col">
                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Dialysis Treatment Tracking</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Daily logging of CAPD exchanges</li>
                        <li>Recording of dialysis-related data and measurements</li>
                        <li>Organized treatment history for easy review</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Monitoring & Progress Insights</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Automated tracking of treatment trends</li>
                        <li>Visual summaries to help patients recognize potential concerns</li>
                        <li>Easy-to-understand progress views</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>User-Centered Mobile Experience</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Patient-friendly UI designed for non-technical users</li>
                        <li>Streamlined data entry to reduce user effort</li>
                        <li>Optimized for consistent home-based usage</li>
                    </ul>
                </div>
            </div>

            {/* Impact */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">Impact</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Improved accuracy and consistency of dialysis records</li>
                    <li>Increased patient awareness of treatment progress</li>
                    <li>Reduced dependence on manual logs</li>
                    <li>Enhanced confidence in managing daily CAPD treatments at home</li>
                </ul>
            </div>

            {/* Screenshots - Responsive Grid */}
            <h3 className="project-section-title" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Project Screenshots</h3>
            <div className="project-screenshots-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="minimal-border"
                        style={{
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                        onClick={() => setSelectedImageIndex(index)}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ))}
            </div>

            {/* Modal for Full View */}
            {selectedImageIndex !== null && (
                <div className="project-modal-overlay" onClick={() => setSelectedImageIndex(null)}>
                    <div className="project-modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            className="project-modal-close-btn"
                            onClick={() => setSelectedImageIndex(null)}
                        >
                            ✕
                        </button>

                        {/* Previous Button */}
                        <button
                            className="project-modal-nav-btn prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage();
                            }}
                        >
                            ←
                        </button>

                        <img
                            src={images[selectedImageIndex].src}
                            alt={images[selectedImageIndex].alt}
                            className="project-modal-content"
                        />

                        {/* Next Button */}
                        <button
                            className="project-modal-nav-btn next"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage();
                            }}
                        >
                            →
                        </button>

                        {/* Image Counter */}
                        <div className="project-modal-counter">
                            {selectedImageIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}

            {/* Back to Top */}
            <div className="back-to-top-container">
                <button className="back-to-top-btn" onClick={scrollToTop}>
                    <div className="back-to-top-icon">
                        <ArrowUp size={20} />
                    </div>
                    <span>Back to Top</span>
                </button>
            </div>
        </div>
    );
};

export default DialiEasePage;
