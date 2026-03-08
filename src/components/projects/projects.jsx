import React from 'react';
import "./projects.css"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Real-Time Chat Application",
            description: "A full-stack real-time messaging platform with instant communication capabilities. Features include private messaging, group chats, typing indicators, online/offline status, message notifications, and emoji support. Built with WebSocket technology for seamless real-time updates.",
            features: [
                "Real-time messaging with Socket.io",
                "User authentication & authorization",
                "Typing indicators & online status",
            ],
            techStack: "React, Node.js, Express, Socket.io, MongoDB, JWT",
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
            githubFrontend: "https://github.com/GeethaSamminga/chatApp-frontend",
            githubBackend: "https://github.com/GeethaSamminga/chatApp-backend",
            liveDemo: "https://chat-app-frontend-two-zeta.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">
                My <span>Projects</span>
            </h2>

            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                            <div className="project-overlay"></div>
                        </div>
                        
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <p className="tech-stack">
                                <strong>Tech Stack:</strong> {project.techStack}
                            </p>
                            
                            <div className="project-links">
                                {project.githubFrontend && (
                                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="project-btn">
                                        {project.githubBackend ? 'Frontend' : 'GitHub'}
                                    </a>
                                )}
                                {project.githubBackend && (
                                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="project-btn">
                                        Backend
                                    </a>
                                )}
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;
