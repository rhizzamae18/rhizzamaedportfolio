import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import inuvationCert from '@/shared/assets/images/inuvation_cert.webp';
import irciteCert from '@/shared/assets/images/ircite_cert.webp';
import sc900Cert from '@/shared/assets/images/sc900_cert.webp';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<any>(null);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to ensure scroll is restored
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    const certifications = [
        {
            title: "Alison Diploma in E-Commerce Web Development",
            date: "October 2025",
            id: 1,
            image: null // No image provided for this one
        },
        {
            title: "Microsoft Certified SC900",
            subtitle: "Security, Compliance, and Identity",
            date: "March 2025",
            id: 2,
            image: sc900Cert
        },
        {
            title: "IRCITE Certificate of Participation",
            subtitle: "Mastered principles of user-centered design, prototyping, and usability testing.",
            date: "April 2025",
            id: 3,
            image: irciteCert
        },
        {
            title: "iNUvation Certificate of Recognition",
            subtitle: "Gained foundational knowledge of Google Cloud services and infrastructure.",
            date: "January 2024",
            id: 4,
            image: inuvationCert
        }
    ];

    return (
        <section>
            <h3 className="section-title">CERTIFICATIONS</h3>

            <div className="cert-grid-responsive">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="bw-border cert-card-interactive"
                        onClick={() => setSelectedCert(cert)}
                    >
                        <h4 style={{ fontSize: '1rem' }}>{cert.title}</h4>
                        {cert.subtitle && <span style={{ fontSize: '0.8rem', display: 'block' }}>{cert.subtitle}</span>}
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{cert.date}</span>
                        <div className="click-hint">
                            <ZoomIn size={16} /> <span>View Certificate</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="modal-content bw-border"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedCert(null)}>
                                <X size={24} />
                            </button>
                            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>{selectedCert.title}</h3>
                            <div className="cert-image-placeholder" style={{
                                background: selectedCert.image ? 'transparent' : '#f0f0f0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '400px'
                            }}>
                                {selectedCert.image ? (
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '70vh',
                                            objectFit: 'contain',
                                            border: '2px solid black'
                                        }}
                                    />
                                ) : (
                                    <p>Certificate image not available</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
