import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section>
            <h3 className="section-title">PROJECTS</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {/* Project 1 */}
                <div className="bw-border" style={{ background: '#f4f4f5', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <h4 style={{ fontSize: '1.2rem' }}>DialiEase (CAPD Management App)</h4>
                        <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>UI/UX Designer | Mobile Full-Stack Developer</p>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>Built a mobile app to help Peritoneal Dialysis patients track treatments. Used React Native, Expo, Node.js, MySQL.</p>
                    <Link to="/projects/dialiease" className="bw-button" style={{ alignSelf: 'flex-start', textAlign: 'center', textDecoration: 'none', display: 'inline-block', marginTop: 'auto' }}>Read More</Link>
                </div>

                {/* Project 2 */}
                <div className="bw-border" style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: 'none' }}>
                    <div>
                        <h4 style={{ fontSize: '1.2rem' }}>Lhyn Herbals (E-Commerce)</h4>
                        <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>UI/UX Designer | Full-Stack Developer</p>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>Developed a responsive e-commerce platform for herbal products. Published on ResearchGate. Tech: PHP, JS, MySQL.</p>
                    <Link to="/projects/lhyn-herbals" className="bw-button" style={{ alignSelf: 'flex-start', textAlign: 'center', textDecoration: 'none', display: 'inline-block', marginTop: 'auto' }}>Read More</Link>
                </div>

                {/* Project 3 */}
                <div className="bw-border" style={{ background: '#f4f4f5', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: 'none' }}>
                    <div>
                        <h4 style={{ fontSize: '1.2rem' }}>Van Reservation & Destination Rate System</h4>
                        <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>System Planning | UI/UX | Full-Stack Dev</p>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>Designed a system for organization-owned vans to automate booking, rate calculation, and scheduling. Tech: React, Node.js, MySQL.</p>
                    <Link to="/projects/van-reservation" className="bw-button" style={{ alignSelf: 'flex-start', textAlign: 'center', textDecoration: 'none', display: 'inline-block', marginTop: 'auto' }}>Read More</Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
