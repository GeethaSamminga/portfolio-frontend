import './experience.css';

const Experience = () => {
    const projects = [
        {
            id: 1,
            title: "Instagram & Facebook API Integration",
            description: "Integrated social media APIs to Create and publish posts to Facebook and Instagram from a single interface.",
            details: [
                "Post Scheduling:Schedule posts for future publication with automated job processing using Agenda",
                "Media Management:Upload and manage images and videos with AWS S3 integration, supporting multiple formats (JPG, PNG, MP4, MOV, etc.)",
                "OAuth Integration: Secure authentication and authorization with Facebook and Instagram APIs",
                "Post Management: Full CRUD operations for posts including create, read, update, and delete scheduled content"
            ]
        },
        {
            id: 2,
            title: "Draft Auto-Save Feature",
            description: "Built an auto-save draft system for quizzes. Users can save their work while creating quizzes, preventing data loss and allowing them to continue editing later from any device.",
            details: [
                "Automatic Save - Users can save their work as drafts while creating quizzes. System automatically updates existing drafts or creates new ones with timestamp tracking",
                "Easy Access to Drafts - Users can view all their saved drafts, open specific drafts by ID, or find drafts linked to published forms",
                "Works with Published Forms - Users can save published forms as drafts to make changes. Drafts are automatically deleted when forms are published or removed",
            ],

        },
        {
            id: 3,
            title: "FAQ Management System",
            description: "Developed a RESTful API-based FAQ management system enabling efficient organization and delivery of help content with platform-specific instructions.",
            details: [
                "Built category-based organization with CRUD operations, pagination, and automatic FAQ count tracking for efficient content management",
                "Designed flexible data structure supporting separate instruction sets for Android, iOS, and Web platforms within single FAQ entries",
                "Implemented MongoDB full-text search with keyword matching and pagination for quick FAQ discovery across large datasets",
                "Integrated JWT authentication, input validation, cascading deletes."
            ],
        },
        {
            id: 4,
            title: "Manual Email OTP Sign-In",
            description: "Built a secure email-based OTP (One-Time Password) authentication system for SurveyHeart responders. Users can sign in using their email by receiving a 6-digit OTP code for form and quiz respondents.",
            details: [
                "System generates random 6-digit OTP codes and sends them via email using SendGrid. OTPs are valid for 5 minutes and automatically expire",
                "Prevents spam by blocking OTP resend requests for 1 minute. If valid OTP exists, resends the same code instead of generating new one",
                "Validates OTP against stored value and checks expiration time. On successful verification, generates JWT token valid for 1 hour for authenticated sessions",
                "Uses MongoDB with automatic document expiration (TTL index). Updates existing OTP records instead of creating duplicates, keeping database clean and efficient"
            ]
        },
        {
            id: 5,
            title: "File uploads to AWS (Yogappify)",
            description: "Implemented organized folder structure for storing user files, videos, PDFs, and images with upload, retrieval, and deletion capabilities. Managed storage quotas based on user subscription plans.",
            details: [
                "Files stored in AWS S3 with structured paths using hashed user IDs (logos/, files/, pdfs/, attachment-videos/). Each user's files organized by form ID for easy management and retrieval.",
                "Deletes files from AWS S3 using deleteObject command and updates user storage count. Extracts file keys from URLs and removes files while maintaining database consistency.",
                "Tracks file sizes in MongoDB and user storage limits. Prevents uploads when storage limit reached based on subscription plan.",
            ],
        },
        {
            id: 6,
            title: "Lead Follow-Ups System (Yogappify)",
            company: "SurveyHeart LLP",
            description: "Engineered a scalable lead management system with advanced database optimization.",
            details: [
                "Built RESTful APIs for lead tracking and follow-up management",
                "Implemented partial indexes for improved query performance",
                "Ensured data integrity with validation and constraints",
                "Reduced database query time by 60% through optimization"
            ],
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">
                My <span>Experience</span>
            </h2>
            <p className="experience-subtitle">1 Year as Node.js Developer at SurveyHeart LLP</p>

            <div className="experience-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-header">
                            <h3>{project.title}</h3>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <ul className="project-details">
                            {project.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
