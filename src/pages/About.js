import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About bg-gray-50 min-h-screen">
      <header className="about-header">
        <h1 className="about-title">Bergen Brickfest — WCMS LegoTechs</h1>
        <p className="about-subtitle">Building, Learning, and Innovating Since 2008</p>
      </header>

      <main className="about-main container mx-auto px-4 py-8">
        <div className="about-grid">
          <div className="about-card">
            <h2 className="about-heading">Our History</h2>
            <p>
              Our team has been proudly participating in <strong>Bergen Brickfest</strong> since 2008. Over the years,
              we’ve grown from a small group of curious students into a team that thrives on creativity, problem-solving,
              and teamwork. Each year brings new challenges, new members, and new opportunities to learn together.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-heading">Team Structure</h2>
            <p>
              This year, our team is divided into two main groups — the <strong>Seniors</strong> and the
              <strong> Juniors</strong>. The seniors are returning members with prior experience, while the juniors
              include new students and 6th graders joining robotics for the first time. Together, they collaborate
              to bring fresh ideas and strong leadership to every part of our project.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-heading">Innovation & Robot Game</h2>
            <p>
              The <strong>Seniors</strong> primarily pilot the <em>robot game</em>, showcasing engineering skill and
              precision, while the <strong>Juniors</strong> take the lead on the <em>innovation project</em>, focusing
              on creativity and real-world problem-solving. This collaboration builds a bridge between experience and
              imagination — the core of what makes our team special.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
