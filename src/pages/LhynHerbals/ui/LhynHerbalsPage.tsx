import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import herbal1 from '@/shared/assets/images/herbal1.webp';
import herbal2 from '@/shared/assets/images/herbal2.webp';
import herbal3 from '@/shared/assets/images/herbal3.webp';
import herbal4 from '@/shared/assets/images/herbal4.webp';
import '@/app/styles/project-pages.css';

const LhynHerbalsPage = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const images = [
        { src: herbal1, alt: 'Lhyn Herbals Screenshot 1' },
        { src: herbal2, alt: 'Lhyn Herbals Screenshot 2' },
        { src: herbal3, alt: 'Lhyn Herbals Screenshot 3' },
        { src: herbal4, alt: 'Lhyn Herbals Screenshot 4' },
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
        <motion.div
            className="project-page-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Back Button */}
            <Link to="/" className="bw-button project-back-btn">
                ← Back to Portfolio
            </Link>

            {/* Title */}
            <div className="project-header">
                <h1 className="project-title">Lhyn Herbals</h1>
                <p className="project-subtitle">E-Commerce & Inventory Management System</p>
                <p className="project-tech-stack">PHP • JavaScript • CSS • MySQL</p>
            </div>

            {/* Overview */}
            <div className="bw-border project-section bg-gray">
                <p style={{ lineHeight: '1.8', fontSize: '1rem', margin: '0' }}>
                    Lhyn Herbals is a small Philippine-based business that has been selling herbal products for over five years.
                    As online shopping and demand for natural health products continue to grow, the business needed a digital solution
                    to better manage sales, inventory, and customer orders. This project focuses on designing and developing a system
                    that streamlines operations while improving the customer shopping experience.
                </p>
            </div>

            {/* Two Column Layout */}
            <div className="project-grid-2-col">
                {/* The Problem */}
                <div className="bw-border project-section bg-white">
                    <h3 className="project-section-title">The Problem</h3>
                    <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        Lhyn Herbals relied on manual processes for tracking sales and inventory, which led to several challenges:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                        <li>Difficulty predicting high-demand products</li>
                        <li>Frequent overstocking and stock shortages</li>
                        <li>Time-consuming restocking due to supplier reservations and travel</li>
                        <li>No centralized view of daily or monthly sales performance</li>
                        <li>Limited online purchasing options for customers</li>
                    </ul>
                </div>

                {/* Project Info Sidebar */}
                <div className="bw-border project-section bg-gray">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PROJECT INFO</h4>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Category</p>
                        <p className="project-info-value">E-Commerce & Inventory System</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <p className="project-info-label">Timeline</p>
                        <p className="project-info-value">5+ Years in Operation</p>
                    </div>

                    <div>
                        <p className="project-info-label">My Role</p>
                        <p className="project-info-value">UI/UX Designer & Full-Stack Developer</p>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">The Solution</h3>
                <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    Designed a comprehensive e-commerce and inventory management platform tailored to the needs of a small herbal business.
                    The system provides:
                </p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Real-time inventory tracking</li>
                    <li>Automated low-stock alerts</li>
                    <li>Sales reporting and analytics</li>
                    <li>Online product browsing and ordering</li>
                    <li>In-store pickup and delivery options</li>
                </ul>
            </div>

            {/* Key Features - Two Column */}
            <h3 className="project-section-title" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Key Features</h3>
            <div className="project-grid-2-col">
                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Inventory Management</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Real-time stock level monitoring</li>
                        <li>Automatic low-stock notifications</li>
                        <li>Inventory reports to support restocking decisions</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Online Shopping Experience</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Product browsing with detailed descriptions</li>
                        <li>Add-to-cart and reservation for in-store pickup</li>
                        <li>Delivery option integrated with J&T Express</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Sales Tracking & Analytics</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Daily and monthly sales reports</li>
                        <li>Visual charts to identify trends and best-selling products</li>
                    </ul>
                </div>

                <div className="bw-border project-section bg-gray">
                    <h4 className="project-section-title" style={{ fontSize: '1.1rem' }}>Customer Accounts</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', margin: '0' }}>
                        <li>Order history tracking</li>
                        <li>Product reviews and customer messages</li>
                        <li>Improved customer engagement and loyalty</li>
                    </ul>
                </div>
            </div>

            {/* Impact */}
            <div className="bw-border project-section bg-white">
                <h3 className="project-section-title">Impact</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem', margin: '0' }}>
                    <li>Reduced inventory issues such as overstocking and stockouts</li>
                    <li>Improved decision-making through clear sales insights</li>
                    <li>Expanded customer reach through online ordering and delivery</li>
                    <li>More convenient shopping experience for customers</li>
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
        </motion.div>
    );
};

export default LhynHerbalsPage;
