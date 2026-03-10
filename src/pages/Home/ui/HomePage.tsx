import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Stars, Award } from 'lucide-react';
import { Header } from '@/widgets/Header';
import { Expertise } from '@/widgets/Expertise';
import { Projects } from '@/widgets/Projects';
import { Certifications } from '@/widgets/Certifications';
import { Experience } from '@/widgets/Experience';
import { Footer } from '@/widgets/Footer';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const tabs = [
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
        { id: 'expertise', label: 'Expertise', icon: <Stars size={18} /> },
        { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> }
    ];

    return (
        <div className="app-container" style={{
            paddingBottom: '0',
            position: 'relative',
            overflow: 'hidden',
            background: '#f8fbff'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(168, 213, 226, 0.15), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'blur(60px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '35%',
                height: '35%',
                background: 'radial-gradient(circle, rgba(126, 184, 204, 0.1), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'blur(50px)'
            }}></div>

            <Header />

            {/* Main Content with Tabs */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="tab-container" style={{
                    display: 'flex',
                    gap: '0.8rem',
                    marginBottom: '2rem',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    padding: '0.6rem',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}>
                    <style>{`
                        .tab-container::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="tab-button"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.8rem 1.5rem',
                                border: 'none',
                                background: activeTab === tab.id
                                    ? 'linear-gradient(135deg, #7eb8cc, #6ba3be)'
                                    : 'transparent',
                                color: activeTab === tab.id ? 'white' : '#5a6c7d',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                borderRadius: '18px',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                letterSpacing: '0.3px',
                                boxShadow: activeTab === tab.id
                                    ? '0 4px 15px rgba(107, 163, 190, 0.3)'
                                    : 'none',
                                transform: activeTab === tab.id ? 'scale(1.05)' : 'scale(1)',
                                whiteSpace: 'nowrap',
                                flexShrink: 0
                            }}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content" style={{
                    minHeight: '400px'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{
                                padding: 'clamp(1rem, 3vw, 2rem) 0'
                            }}
                        >
                            {activeTab === 'experience' && <Experience />}
                            {activeTab === 'projects' && <Projects />}
                            {activeTab === 'expertise' && <Expertise />}
                            {activeTab === 'certifications' && <Certifications />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
