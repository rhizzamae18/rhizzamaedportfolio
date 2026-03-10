import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Lightweight Global Tech Solutions Inc.",
            date: "Nov 2025 – Feb 2026",
            role: "Web Developer – Academic Internship",
            location: "Remote",
            details: [
                "Debugged, tested, and improved application performance.",
                "Collaborated with team using Git and agile workflows."
            ]
        },
        {
            company: "Amazon Web Services Cloud Clubs",
            date: "Mar 2025 – Jan 2026",
            role: "Committee and Member",
            location: "NU Baliwag",
            details: [
                "Helped organize trainings and activities for students learning AWS.",
                "Assisted in planning events and sharing learning resources."
            ]
        },
        {
            company: "Google Developers Student Clubs",
            date: "Sep 2022 – Jan 2026",
            role: "Member – NU Baliwag",
            location: "NU Baliwag",
            details: [
                "Joined coding workshops and tech events.",
                "Learned and practiced basic programming and development skills."
            ]
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
                }}>Academic Experience</h3>
                <div style={{
                    flex: 1,
                    height: '3px',
                    background: 'linear-gradient(to right, #a8d5e2, transparent)',
                    borderRadius: '10px'
                }}></div>
            </div>

            <div style={{ position: 'relative', paddingLeft: 'clamp(3rem, 7vw, 5rem)' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: 'clamp(1.2rem, 3vw, 2rem)',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    background: 'linear-gradient(to bottom, #7eb8cc, #a8d5e2, rgba(168, 213, 226, 0.1))',
                    borderRadius: '4px'
                }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                // Perfect alignment: Center of dot aligned with center of line
                                // Line center is at L + 1.5px. Dot center is at P + D.
                                // So D = L - P + 1.5px.
                                transform: 'translateX(-50%)',
                                left: 'calc(clamp(1.2rem, 3vw, 2rem) - clamp(3rem, 7vw, 5rem) + 1.5px)',
                                top: '1.2rem',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: 'white',
                                border: '4px solid #6ba3be',
                                boxShadow: '0 0 15px rgba(107, 163, 190, 0.4)',
                                zIndex: 2
                            }}></div>

                            <div style={{
                                background: 'white',
                                padding: 'clamp(1.2rem, 4vw, 2rem)',
                                borderRadius: '24px',
                                boxShadow: '0 10px 30px rgba(168, 213, 226, 0.1)',
                                border: '1px solid rgba(168, 213, 226, 0.2)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(168, 213, 226, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(107, 163, 190, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 213, 226, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(168, 213, 226, 0.2)';
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: 700, marginBottom: '0.4rem' }}>{exp.company}</h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#6ba3be', fontWeight: 600, fontSize: '0.95rem' }}>
                                            <Briefcase size={16} />
                                            <span>{exp.role}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            background: 'linear-gradient(135deg, #7eb8cc, #6ba3be)',
                                            color: 'white',
                                            padding: '0.5rem 1.2rem',
                                            borderRadius: '50px',
                                            boxShadow: '0 4px 12px rgba(107, 163, 190, 0.2)'
                                        }}>
                                            <Calendar size={14} />
                                            {exp.date}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <ul style={{
                                    paddingLeft: '1.2rem',
                                    margin: 0,
                                    fontSize: '1rem',
                                    color: '#5a6c7d',
                                    lineHeight: '1.8',
                                    listStyleType: 'none'
                                }}>
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} style={{
                                            position: 'relative',
                                            marginBottom: '0.6rem',
                                            paddingLeft: '1.5rem'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '10px',
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: '#a8d5e2'
                                            }}></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
