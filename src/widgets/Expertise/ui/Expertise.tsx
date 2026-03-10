import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';

const Expertise = () => {
    const technicalSkills = [
        "HTML", "CSS", "JavaScript", "React", "TypeScript",
        "Python", "FastAPI", "Node.js", "React Native", "Dart",
        "MySQL", "Firebase", "PostgreSQL", "Figma Prototyping"
    ];

    const toolsPlatforms = [
        "VS Code", "Git/GitHub", "Expo", "Canva",
        "Google Cloud", "Virtual Machines", "Hyper-V",
        "ChatGPT", "Claude", "Gemini"
    ];

    const skillCategories = [
        {
            title: "Technical Skills",
            icon: <Code2 size={24} />,
            skills: technicalSkills,
            color: '#7eb8cc'
        },
        {
            title: "Tools & Platforms",
            icon: <Cpu size={24} />,
            skills: toolsPlatforms,
            color: '#6ba3be'
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
                }}>Technical Expertise</h3>
                <div style={{
                    flex: 1,
                    height: '3px',
                    background: 'linear-gradient(to right, #a8d5e2, transparent)',
                    borderRadius: '10px'
                }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 400px), 1fr))',
                gap: 'clamp(1.5rem, 5vw, 2.5rem)'
            }}>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'white',
                            padding: 'clamp(1.5rem, 6vw, 2.5rem)',
                            borderRadius: '30px',
                            boxShadow: '0 10px 30px rgba(168, 213, 226, 0.1)',
                            border: '1px solid rgba(168, 213, 226, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                padding: '0.8rem',
                                background: `rgba(${category.color === '#7eb8cc' ? '126, 184, 204' : '107, 163, 190'}, 0.15)`,
                                color: category.color,
                                borderRadius: '16px'
                            }}>
                                {category.icon}
                            </div>
                            <h4 style={{ fontSize: '1.4rem', color: '#2c3e50', fontWeight: 700 }}>{category.title}</h4>
                        </div>

                        {/* Skills Grid */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {category.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1, backgroundColor: category.color, color: 'white' }}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        background: '#f8fbff',
                                        color: '#5a6c7d',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        border: '1px solid rgba(168, 213, 226, 0.3)',
                                        cursor: 'default',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Subtle background decoration */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            opacity: 0.05,
                            color: category.color,
                            transform: 'rotate(-15deg)'
                        }}>
                            {category.icon}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
