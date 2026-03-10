import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projectList = [
        {
            title: "DialiEase (CAPD Management App)",
            role: "UI/UX Designer | Mobile Full-Stack Developer",
            desc: "Built a mobile app to help Peritoneal Dialysis patients track treatments. Used React Native, Expo, Node.js, MySQL.",
            link: "/projects/dialiease",
            colors: ['#7eb8cc', '#6ba3be'],
            tech: ["React Native", "Node.js", "MySQL"]
        },
        {
            title: "Lhyn Herbals (E-Commerce)",
            role: "UI/UX Designer | Full-Stack Developer",
            desc: "Developed a responsive e-commerce platform for herbal products. Published on ResearchGate. Tech: PHP, JS, MySQL.",
            link: "/projects/lhyn-herbals",
            colors: ['#a8d5e2', '#7eb8cc'],
            tech: ["PHP", "JavaScript", "MySQL"]
        },
        {
            title: "Van Reservation & Destination Rate System",
            role: "System Planning | UI/UX | Full-Stack Dev",
            desc: "Designed a system for organization-owned vans to automate booking, rate calculation, and scheduling. Tech: React, Node.js, MySQL.",
            link: "/projects/van-reservation",
            colors: ['#6ba3be', '#a8d5e2'],
            tech: ["React", "Node.js", "MySQL"]
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
                }}>Featured Projects</h3>
                <div style={{
                    flex: 1,
                    height: '3px',
                    background: 'linear-gradient(to right, #a8d5e2, transparent)',
                    borderRadius: '10px'
                }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                justifyContent: 'center'
            }}>
                {projectList.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'white',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(168, 213, 226, 0.12)',
                            border: '1px solid rgba(168, 213, 226, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            minHeight: '520px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-12px)';
                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(168, 213, 226, 0.25)';
                            e.currentTarget.style.borderColor = 'rgba(107, 163, 190, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 40px rgba(168, 213, 226, 0.12)';
                            e.currentTarget.style.borderColor = 'rgba(168, 213, 226, 0.2)';
                        }}
                    >
                        {/* Card Header Decoration */}
                        <div style={{
                            height: '10px',
                            background: `linear-gradient(to right, ${project.colors[0]}, ${project.colors[1]})`
                        }}></div>

                        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: project.colors[1], marginBottom: '1.2rem' }}>
                                <Layout size={20} />
                                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Project</span>
                            </div>

                            <h4 style={{ fontSize: '1.5rem', color: '#1e293b', fontWeight: 800, marginBottom: '0.8rem', lineHeight: '1.2' }}>{project.title}</h4>
                            <p style={{ fontSize: '0.95rem', color: project.colors[1], fontWeight: 600, marginBottom: '1.5rem', opacity: 0.8 }}>{project.role}</p>

                            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>{project.desc}</p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.6rem',
                                marginBottom: '2.5rem',
                                marginTop: 'auto'
                            }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.5rem 1.2rem',
                                        background: 'rgba(241, 245, 249, 1)',
                                        color: '#475569',
                                        borderRadius: '50px',
                                        fontWeight: 700,
                                        border: '1px solid rgba(226, 232, 240, 0.8)'
                                    }}>{t}</span>
                                ))}
                            </div>

                            <Link
                                to={project.link}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    color: project.colors[1],
                                    textDecoration: 'none',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    padding: '0.5rem 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.gap = '1rem';
                                    e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.gap = '0.6rem';
                                    e.currentTarget.style.opacity = '1';
                                }}
                            >
                                View Case Study <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
