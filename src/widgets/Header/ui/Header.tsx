import idPic from '@/shared/assets/images/idpic.webp';

const Header = () => {
    return (
        <header className="section-container header-section" style={{ display: 'flex', gap: '3rem', alignItems: 'center', minHeight: '60vh', background: '#fefefe' }}>
            {/* Profile Image */}
            <div
                className="profile-img bw-border"
                style={{
                    width: '280px',
                    height: '320px',
                    flexShrink: 0,
                    background: 'white',
                    boxShadow: '10px 10px 0 black',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={idPic}
                    alt="Rhizza Mae C. Discaya"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div className="profile-info">
                <h1 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '0.5rem' }}>RHIZZA MAE C. DISCAYA</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', background: 'black', color: 'white', display: 'inline-block', padding: '0.2rem 1rem' }}>WEB DEVELOPER</h2>
                <p style={{ maxWidth: '600px', fontSize: '1rem', marginBottom: '1rem' }}>
                    BSIT Student majoring in Web and Mobile Applications. Experienced in building full-stack applications using React, Node.js, and Figma. Passionate about creating user-friendly digital solutions.
                </p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                    0925-554-7426 | rhizzadiscaya@gmail.com | Pandi, Bulacan
                </p>
            </div>
        </header>
    );
};

export default Header;
