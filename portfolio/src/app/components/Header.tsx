"use client";

import React from 'react';
import ProfileCard from '@/app/components/ProfileCard';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/spaceship_cockpit_background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Wrapper for scaling */}
      <div className="profile-card-wrapper">
        <ProfileCard />
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .profile-card-wrapper {
          transform: scale(1.5);
          transform-origin: center;
        }
        @media (max-width: 640px) {
          .profile-card-wrapper {
            transform: scale(1); /* smaller on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
