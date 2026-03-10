import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Award, Calendar } from 'lucide-react';
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

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    const certifications = [
        {
            title: "Alison Diploma in E-Commerce Web Development",
            subtitle: "Comprehensive study of e-commerce strategies and full-stack development.",
            date: "October 2025",
            id: 1,
            image: null,
            issuer: "Alison"
        },
        {
            title: "Microsoft Certified SC900",
            subtitle: "Security, Compliance, and Identity Fundamentals",
            date: "March 2025",
            id: 2,
            image: sc900Cert,
            issuer: "Microsoft"
        },
        {
            title: "IRCITE Certificate of Participation",
            subtitle: "International Research Conference on Information Technology Education.",
            date: "April 2025",
            id: 3,
            image: irciteCert,
            issuer: "IRCITE"
        },
        {
            title: "iNUvation Certificate of Recognition",
            subtitle: "Innovative networking and development competition.",
            date: "January 2024",
            id: 4,
            image: inuvationCert,
            issuer: "NU Baliwag"
        }
    ];

    return (
        <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                <h3 style={{
                    margin: 0,
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    color: '#2c3e50',
                    fontWeight: 800,
                    letterSpacing: '-0.5px'
                }}>Certifications</h3>
                <div style={{
                    flex: 1,
                    height: '3px',
                    background: 'linear-gradient(to right, #a8d5e2, transparent)',
                    borderRadius: '10px'
                }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45%, 500px), 1fr))',
                gap: '2rem',
                justifyContent: 'center',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="cert-card-premium"
                        onClick={() => setSelectedCert(cert)}
                        style={{
                            background: 'white',
                            padding: 'clamp(1.5rem, 5vw, 2.2rem)',
                            borderRadius: '28px',
                            border: '1px solid rgba(168, 213, 226, 0.2)',
                            boxShadow: '0 10px 30px rgba(168, 213, 226, 0.08)',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            minHeight: '260px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 45px rgba(168, 213, 226, 0.18)';
                            e.currentTarget.style.borderColor = 'rgba(107, 163, 190, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 213, 226, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(168, 213, 226, 0.2)';
                        }}
                    >
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'rgba(168, 213, 226, 0.15)',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#6ba3be',
                            marginBottom: '0.5rem'
                        }}>
                            <Award size={22} />
                        </div>

                        <div style={{ minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <h4 style={{
                                fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)',
                                color: '#1e293b',
                                fontWeight: 800,
                                marginBottom: '0.6rem',
                                lineHeight: '1.3'
                            }}>{cert.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.3px' }}>{cert.issuer}</p>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 'auto',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid #f1f5f9'
                        }}>
                            <span style={{
                                fontSize: '0.8rem',
                                color: '#94a3b8',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: 700
                            }}>
                                <Calendar size={14} /> {cert.date}
                            </span>
                            <div style={{
                                background: 'rgba(168, 213, 226, 0.1)',
                                padding: '0.4rem',
                                borderRadius: '8px',
                                color: '#6ba3be',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ZoomIn size={18} />
                            </div>
                        </div>
                    </motion.div>
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
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(15, 23, 42, 0.85)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 1000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 'clamp(10px, 3vw, 20px)'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'white',
                                width: '95%',
                                maxWidth: '600px',
                                maxHeight: '85vh',
                                borderRadius: '28px',
                                overflowY: 'auto',
                                position: 'relative',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none'
                            }}
                        >
                            <style>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            <button
                                onClick={() => setSelectedCert(null)}
                                style={{
                                    position: 'sticky',
                                    top: '20px',
                                    right: '20px',
                                    width: '40px',
                                    height: '40px',
                                    marginLeft: 'auto',
                                    borderRadius: '50%',
                                    background: 'white',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    zIndex: 100,
                                    marginBottom: '-40px'
                                }}
                            >
                                <X size={20} />
                            </button>

                            <div style={{ padding: 'clamp(1.2rem, 5vw, 2.5rem)', textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', color: '#1e293b', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.2' }}>{selectedCert.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>{selectedCert.subtitle}</p>
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    borderRadius: '24px',
                                    padding: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: 'clamp(200px, 40vh, 350px)',
                                    border: '1px dashed #cbd5e1'
                                }}>
                                    {selectedCert.image ? (
                                        <img
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                    ) : (
                                        <div style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                                            <Award size={48} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                                            <p>Official certificate image pending</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
