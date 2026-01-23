import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Lightweight Global Tech Solutions Inc.",
            date: "Nov 2025 – Feb 2026",
            role: "Web Developer – Academic Internship",
            details: [
                "Debugged, tested, and improved application performance.",
                "Collaborated with team using Git and agile workflows."
            ]
        },
        {
            company: "Amazon Web Services Cloud Clubs",
            date: "Mar 2025 – Jan 2026",
            role: "Committee and Member",
            details: [
                "Helped organize trainings and activities for students learning AWS.",
                "Assisted in planning events and sharing learning resources."
            ]
        },
        {
            company: "Google Developers Student Clubs",
            date: "Sep 2022 – Jan 2026",
            role: "Member – NU Baliwag",
            details: [
                "Joined coding workshops and tech events.",
                "Learned and practiced basic programming and development skills."
            ]
        }
    ];

    return (
        <section>
            <h3 className="section-title">ACADEMIC EXPERIENCE</h3>

            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content bw-border">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                <h4 style={{ fontSize: '1.1rem' }}>{exp.company}</h4>
                                <span style={{ fontSize: '0.9rem', fontWeight: 600, background: 'black', color: 'white', padding: '0.1rem 0.5rem' }}>{exp.date}</span>
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '0.8rem', fontSize: '0.9rem', fontWeight: 500 }}>{exp.role}</p>
                            <ul style={{ marginLeft: '1rem', fontSize: '0.9rem' }}>
                                {exp.details.map((detail, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.3rem' }}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
