import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('hhttps://backend-portfolio-qdol.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Failed to send message' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ 
                type: 'error', 
                message: 'Network error. Please make sure the server is running.' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">
                Contact <span>Me</span>
            </h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>

                    <div className="info-items">
                        <div className="info-item">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>geethasamminga@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhone className="contact-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 [6301043911]</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>[Hyderabad], India</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/geetha-samminga-4bb406254/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    {status.message && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
