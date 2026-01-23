import { Link } from 'react-router-dom';
import '@/app/styles/project-pages.css';
import { useState, useEffect } from 'react';
import van1 from '@/shared/assets/images/van1.webp';
import van2 from '@/shared/assets/images/van2.webp';
import van3 from '@/shared/assets/images/van3.webp';
import van4 from '@/shared/assets/images/van4.webp';

const VanReservationPage = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const images = [
        { src: van1, alt: 'Van Reservation Screenshot 1' },
        { src: van2, alt: 'Van Reservation Screenshot 2' },
        { src: van3, alt: 'Van Reservation Screenshot 3' },
        { src: van4, alt: 'Van Reservation Screenshot 4' },
    ];

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

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

    return (
        <div className="project-page-container">
            {/* Back Button */}
            <Link to="/" className="bw-button project-back-btn">
                ← Back to Portfolio
            </Link>

            {/* Title */}
            <div className="project-header">
                <h1 className="project-title">Van Reservation and Destination Rate System</h1>
                <p className="project-subtitle">For Organization-Owned Vans</p>
                <p className="project-tech-stack">Figma • React JS • Node JS • MySql</p>
            </div>

            {/* Overview */}
            <div className="bw-border project-section bg-gray">
                <p style={{ lineHeight: '1.8', fontSize: '1rem', margin: '0' }}>
                    The Reservation and Destination Rate System for Organization-Owned Vans is designed to help organizations efficiently manage the booking, usage, and cost computation of their service vehicles. The system provides a centralized digital platform for reserving vans, assigning destinations, and calculating travel rates, ensuring smooth coordination and transparent operations.
                    <br /><br />
                    This project focuses on improving vehicle utilization, reducing scheduling conflicts, and simplifying the reservation process for both administrators and users.
                </p>
            </div>

            {/* Two Column Layout */}
            <div className="project-grid-2-col">
                {/* The Problem */}
                <div className="bw-border project-section bg-white">
                    <h3 className="project-section-title">The Problem</h3>
                    <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        The organization previously relied on manual scheduling and paper-based records for van usage, which led to several challenges:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                        <li>Double bookings and scheduling conflicts</li>
                        <li>Difficulty tracking van availability and trip schedules</li>
                        <li>Inconsistent or unclear destination-based rate computation</li>
                        <li>Time-consuming approval and reservation process</li>
                        <li>Lack of trip history and usage reports for decision-making</li>
                    </ul>
                </div>

                {/* Project Info Sidebar */}
                <div className="bw-border project-section bg-gray">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PROJECT INFO</h4>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Category</p>
                        <p className="project-info-value">Web Application</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Platform</p>
                        <p className="project-info-value">Web (Desktop)</p>
                    </div>

                    <div>
                        <p className="project-info-label">My Role</p>
                        <p className="project-info-value">System Planning, UI/UX Design, Full-Stack Development</p>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">The Solution</h3>
                <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    Designed a Reservation and Destination Rate System that automates vehicle booking and rate calculation while providing real-time visibility of van availability.
                    The system provides:
                </p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Online van reservation and scheduling</li>
                    <li>Destination-based rate computation</li>
                    <li>Real-time availability tracking</li>
                    <li>Trip history and usage reports</li>
                    <li>Centralized management for organization-owned vehicles</li>
                </ul>
            </div>

            {/* Key Features - Two Column */}
            <h3 className="project-section-title" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Key Features</h3>
            <div className="project-grid-2-col">
                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Van Reservation Management</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Online reservation request and approval</li>
                        <li>Real-time van availability calendar</li>
                        <li>Prevention of double bookings and schedule conflicts</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Destination & Rate Calculation</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Predefined destination rates</li>
                        <li>Automatic fare computation based on selected destination</li>
                        <li>Transparent cost breakdown for each trip</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Trip Monitoring & Records</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Trip logs with date, destination, and assigned vehicle</li>
                        <li>Historical records for auditing and reporting</li>
                        <li>Usage summaries per vehicle</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>User & Admin Management</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Role-based access (administrator and requester)</li>
                        <li>Reservation status tracking</li>
                        <li>Notifications for approvals and updates</li>
                    </ul>
                </div>
            </div>

            {/* Impact */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">Impact</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Reduced scheduling conflicts and manual errors</li>
                    <li>Improved transparency in destination-based pricing</li>
                    <li>Better utilization and monitoring of organization-owned vans</li>
                    <li>Faster and more efficient reservation process</li>
                </ul>
            </div>

            {/* Screenshots */}
            <h3 className="project-section-title" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Project Screenshots</h3>
            <div className="project-screenshots-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bw-border"
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
                        onClick={(e) => e.stopPropagation()}
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

                    {/* Close Button */}
                    <button
                        className="project-modal-close-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex(null);
                        }}
                    >
                        ✕
                    </button>

                    {/* Image Counter */}
                    <div className="project-modal-counter">
                        {selectedImageIndex + 1} / {images.length}
                    </div>
                </div>
            )}

        </div>
    );
};

export default VanReservationPage;
