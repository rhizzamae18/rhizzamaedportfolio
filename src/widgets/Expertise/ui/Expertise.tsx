import React from 'react';

const Expertise = () => {
    return (
        <section>
            <h3 className="section-title">TECHNICAL EXPERTISE</h3>

            <div className="expertise-grid">
                {/* Technical Skills Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="pill-label" style={{ background: '#e5e5e5', padding: '0.5rem 2rem', borderRadius: '50px', border: '2px solid black', alignSelf: 'center' }}>
                        Technical Skills
                    </div>
                    <div className="bw-border" style={{ padding: '1.5rem', background: '#f4f4f5' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                            <li>HTML, CSS, JavaScript, React</li>
                            <li>Python, FastAPI, Node.js</li>
                            <li>React Native, Dart</li>
                            <li>MySQL, Firebase, PostgreSQL</li>
                            <li>Figma Prototyping</li>
                        </ul>
                    </div>
                </div>

                {/* Tools & Platforms Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="pill-label" style={{ background: '#e5e5e5', padding: '0.5rem 2rem', borderRadius: '50px', border: '2px solid black', alignSelf: 'center' }}>
                        Tools & Platforms
                    </div>
                    <div className="bw-border" style={{ padding: '1.5rem', background: '#f4f4f5' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                            <li>VS Code, Git/GitHub, Expo</li>
                            <li>Canva, Google Cloud</li>
                            <li>Virtual Machines (Hyper-V)</li>
                            <li>AI Tools (ChatGPT, Claude, Gemini)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
