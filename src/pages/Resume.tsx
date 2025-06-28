import React from 'react';
import { Button, Flex } from '@mantine/core';
export default function Resume() {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Resume
      </h1>
      <div style={{
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '1.25rem', // Larger text
      }}>
        <a href="/Timothy Harrell Resume - Contact Removed.pdf" download style={{ textDecoration: 'none' }}>
          <button>Download Resume</button>
        </a>
        <a href="/Unity Programmer certificate Official.pdf" download style={{ textDecoration: 'none' }}>
          <button>Download Certification</button>
        </a>
      </div>
      {/* Contact Info */}
      <header style={{ marginBottom: '2rem' }}>
        <p><strong>Location:</strong> Chicago, IL</p>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Summary</h2>
        <p>
          Unity Developer with hands-on experience driving the design, development, and release of interactive and engaging single and multiplayer video games.
          Motivated Self-starter focused on crafting fluid and engaging experiences for players around the world.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Engineering:</strong> Creative Direction, Content Creation, Gameplay Design & Development, Core Game Loop Design, Player Experience, Playtesting,
            Fullstack Development, Frontend & UI/UX, Backend & Infrastructure, Testing & Code Coverage, DevOps, Data Analytics, User Research, 2D & 3D Graphics,
            Animation, Software Quality, Performance, Reliability, Documentation
          </li>
          <li>
            <strong>Leadership:</strong> Strategic Planning & Execution, Project Management, Process Improvement, Cross-functional Collaboration
          </li>
          <li>
            <strong>Technology:</strong> Unity (Coroutines, UnityActions & Subscribing, ScriptableObjects, Frame lifecycle, NavMesh, NavMeshAgents, Mecanim Animator Controller,
            Final IK, Unity IK, Root motion, URP, Cinemachine, Custom Editor Inspectors, Gizmos, Scene Management, Object Pooling, LODs, Profiler, AudioSource, AudioMixer,
            Reverb Pass Zones, Heathen Unity Steamworks), C# (LINQ, POST Requests), DevOps (Git, PlasticSCM, CI/CD), Agile (standups, code review, jira, trello, sprints)
          </li>
        </ul>
      </section>

      {/* Relevant Experience */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Relevant Experience</h2>

        {/* Independent Unity Developer */}
        <article style={{ marginBottom: '1.5rem' }}>
          <h3>Independent Unity Developer</h3>
          <time>April 2020 - Present</time>
          <ul>
            <li>Spearheaded design, development, and release of innovative single-player and multiplayer experiences focused on engaging players with compelling narratives and gameplay loops for Windows OS.</li>
            <li>Developed gameplay systems, mechanics, and levels including collision detection, progression, rewards, and clear player objectives.</li>
          </ul>

          {/* Project Lilith */}
          <h4>Project Lilith</h4>
          <ul>
            <li>Created a single-player third-person survival horror/shooter with exploration elements like weapons, ammo, health packs, and upgrades promoting exploration.</li>
            <li>Implemented complex observational puzzles and challenges requiring player interaction with environment items.</li>
            <li>Built strategic movement emphasizing player decisions in combat.</li>
            <li>Used low-poly building models for environment immersion and optimized performance with Unity Profiler.</li>
            <li>Implemented NPC dialogue branches with skip options based on quest state.</li>
            <li>Designed enemy pathing and obstacle avoidance using Unity NavMesh.</li>
            <li>Leveraged Animator Root Motion for realistic enemy movement.</li>
            <li>Created scripted cutscenes using Unity Timeline for narrative pacing.</li>
            <li>Stored player save data securely using JSON serialization.</li>
          </ul>

          {/* Synth Race */}
          <h4>Synth Race</h4>
          <ul>
            <li>Designed, developed, and launched a multiplayer parkour racing game in Unity with 20 unique levels featuring 1st-person challenging stages.</li>
            <li>Built P2P networking leveraging Steamworks API and Valve relay servers, optimizing network payload frequency.</li>
            <li>Created leaderboard UI with worldwide and friend-only times, mastery tracking, and gameplay info.</li>
            <li>Implemented unlockable player skins and hats to encourage player expression and engagement.</li>
            <li>Developed diverse obstacles including grind rails, moving blocks, gravity lifts, super slides, rotating platforms, and wall runs.</li>
            <li>Implemented item mechanics for player combat interactions.</li>
            <li>Tracked player placements over races with cutscenes highlighting winners on a podium.</li>
          </ul>
        </article>

        {/* Tutor.com */}
        <article style={{ marginBottom: '1.5rem' }}>
          <h3>Computer Science Tutor, Tutor.com</h3>
          <time>December 2022 - November 2024</time>
          <p>
            Provided one-on-one tutoring on Java, C#, and backend web development to high school and college students, improving outcomes.
          </p>
        </article>

        {/* JP Morgan Chase */}
        <article style={{ marginBottom: '1.5rem' }}>
          <h3>Java Developer, JP Morgan Chase</h3>
          <time>November 2019 - April 2022</time>
          <p>Contractor, October 2018 - November 2019</p>
          <ul>
            <li>Developed and maintained fullstack corporate banking systems for clients like Disney and Coca-Cola using Ember.js, Java, Spring Boot, NoSQL, and SQL.</li>
            <li>Ensured 90%+ test coverage and 100% pass rate using JUnit and Mockito.</li>
          </ul>
        </article>
      </section>

      {/* Education & Certifications */}
      <section>
        <h2>Education & Certifications</h2>
        <ul>
          <li>Bachelor of Arts in Biology with Minors in Mathematics & Chemistry, University of Redlands</li>
          <li>Fullstack Development Bootcamp, Revature</li>
          <li>Unity Associate Programmer</li>
        </ul>
      </section>
    </section>
  );
}
