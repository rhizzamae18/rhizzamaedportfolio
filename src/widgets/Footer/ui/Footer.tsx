import React from 'react';
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '2px solid black',
            padding: '2rem 1rem',
            marginTop: '2rem',
            backgroundColor: '#f4f4f5',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '1rem'
            }}>
                <a href="https://www.facebook.com/rhizzamae.discaya" className="social-link">
                    <Facebook size={24} color="black" />
                </a>
                {/* <a href="" className="social-link">
                    <Instagram size={24} color="black" />
                </a> */}
                <a href="https://github.com/rhizzamae18/rhizzamaedportfolio.git" className="social-link">
                    <Github size={24} color="black" />
                </a>
                <a href="https://www.linkedin.com/in/rhizza-mae-discaya-162abb37a/" className="social-link">
                    <Linkedin size={24} color="black" />
                </a>
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>© 2026 Rhizza Mae C. Discaya. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
