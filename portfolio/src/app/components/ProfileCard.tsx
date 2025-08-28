import React from 'react';
import Link from 'next/link';

interface ProfileCardProps {
  profilePicUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profilePicUrl = '/alejandro.png',
}) => {
  const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      background: 'rgba(0,0,0,0.5)',
      borderRadius: '20px',
      boxShadow: '0 0 50px rgba(0,255,255,0.3)',
      maxWidth: '450px',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      marginBottom: '20px',
      objectFit: 'cover',
      border: '4px solid #00f7ff',
      boxShadow: '0 0 20px rgba(0,247,255,0.5)',
    },
    greeting: {
      fontSize: '1.8em',
      fontWeight: 600,
      color: '#fff',
      marginBottom: '10px',
    },
    message: {
      fontSize: '1.1em',
      color: '#ccefff',
      marginBottom: '20px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
button: {
  backgroundColor: 'rgba(0, 247, 255, 0.15)', // slight blue glow background
  border: '1px solid #00f7ff',
  color: '#00f7ff',
  padding: '14px 30px',
  fontSize: '1.1em',
  cursor: 'pointer',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '6px',
  boxShadow: '0 0 12px rgba(0, 247, 255, 0.4)',
  textDecoration: 'none',
  display: 'inline-block',
}
,
  };

  return (
    <div style={styles.cardContainer}>
      <img src={profilePicUrl} alt="Gensik Rubio" style={styles.profileImage} />
      <h1 style={styles.greeting}>Hello! I’m Gensik Rubio.</h1>
      <p style={styles.message}>
        Come explore my miniverse! I’m hoping my work catches your eye, and compels you to help me expand it.
      </p>
      <div style={styles.buttonContainer}>
        <Link href="/portfolio" style={styles.button}>
          View Projects
        </Link>
        <Link href="/contact" style={styles.button}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
