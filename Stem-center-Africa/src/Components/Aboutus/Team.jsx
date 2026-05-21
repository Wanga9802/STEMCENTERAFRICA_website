import React, { useState } from 'react';
import '../../Styles/Team.css';

const teamData = {
  board: [
    {
      name: 'Sebastian McKinlay',
      role: 'Board Chairman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      profile: '#',
    },
    {
      name: 'Audrey Cheng',
      role: 'Board Member, Co-founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      profile: '#',
    },
    {
      name: 'Snehar Shah',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      profile: '#',
    },
    {
      name: 'Karen Serem Waithaka',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
      profile: '#',
    },
  ],
  executive: [
    {
      name: 'James Mwangi',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      profile: '#',
    },
    {
      name: 'Amina Hassan',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      profile: '#',
    },
    {
      name: 'David Ochieng',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      profile: '#',
    },
    {
      name: 'Lydia Kamau',
      role: 'Head of Academics',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      profile: '#',
    },
  ],
};

export default function Team() {
  const [activeTab, setActiveTab] = useState('board');
  const members = teamData[activeTab];

  return (
    <section className="team-section">
      {/* Decorative background lines */}
      <div className="team-bg-lines" aria-hidden="true">
        <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,300 Q200,100 500,300 T1100,300" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
          <path d="M-100,350 Q200,150 500,350 T1100,350" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
          <path d="M-100,250 Q200,50 500,250 T1100,250" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
          <path d="M-100,400 Q200,200 500,400 T1100,400" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5"/>
          <path d="M-100,200 Q200,0 500,200 T1100,200" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5"/>
          <path d="M50,600 Q150,300 300,200 Q450,100 500,0" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="60" strokeLinecap="round" opacity="0.3"/>
        </svg>
      </div>

      <div className="container team-container">

        {/* ── Heading ── */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="team-heading">Meet the Team</h2>
            <p className="team-subtext">
              Our success is fueled by a passionate team of industry experts and dedicated professionals
              committed to transforming tech education in Africa. With diverse backgrounds in technology,
              education, and business, our team brings a wealth of experience to ensure our students
              receive world-class training and career support.
            </p>
          </div>
        </div>

        {/* ── Tab buttons ── */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="team-tabs">
              <button
                className={`team-tab-btn${activeTab === 'board' ? ' active' : ''}`}
                onClick={() => setActiveTab('board')}
              >
                Board Members
              </button>
              <button
                className={`team-tab-btn${activeTab === 'executive' ? ' active' : ''}`}
                onClick={() => setActiveTab('executive')}
              >
                Executive Team
              </button>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="row justify-content-center team-cards-row">
          {members.map((member, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 team-card-col">
              <div className="team-card">
                <div className="team-card-img-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-img"
                  />
                </div>
                <div className="team-card-body">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                  <a href={member.profile} className="team-card-link">
                    See full profile →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
