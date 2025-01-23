import { Project } from "../utils/types";

export const projects: Project[] = [
    {
        "title": "Chorechestra",
        "imagePath": "chorechestra-thumbnail.png",
        "overview": "Chorechestra is a React Native mobile app for Android designed to streamline household chore management. Built with a focus on intuitive UI and efficient task tracking, the app offers tagging, prioritization, and notifications to ensure chores are completed on time.",
        "features": [
            "Chore creation with tags, priority levels, and detailed instructions",
            "Interactive charts and graphs for completion history",
            "Notifications for due or overdue chores",
            "Customizable chore sorting and filtering by tags, priority, or time remaining",
            "Importance-level tracking for more critical tasks",
            "Comprehensive list and task editing through user-friendly modals"
        ],
        "challenges": [
            {
                "challenge": "State Management",
                "solution": "Implemented a Context API structure to manage chore data efficiently"
            },
            {
                "challenge": "Sorting & Filtering",
                "solution": "Developed customizable chore sorting based on priority and time left"
            },
            {
                "challenge": "Performance Optimization",
                "solution": "Used memoization techniques to prevent unnecessary re-renders"
            },
            {
                "challenge": "Offline Data Storage",
                "solution": "Leveraged AsyncStorage to maintain persistent local data"
            }
        ],
        "technologies": ["React Native (Expo)", "Typescript", "NativewindCSS", "React Query", "Expo FileSystem"],
        "githubRepo": "https://github.com/MattMiss/Chorchestra",
        "liveDemo": null,
        "imageGrid": [
            "chorechestra-features-1.jpg",
            "chorechestra-features-2.jpg",
            "chorechestra-features-3.jpg",
            "chorechestra-features-4.jpg",
            "chorechestra-features-5.jpg"
        ]
    },
    {
        "title": "Green Coffee Beauty",
        "imagePath": "salon-app-thumbnail.png",
        "overview": "Green Coffee Beauty is a salon management mobile app built with React Native and TypeScript, designed to streamline operations for salon owners. The app leverages Expo for rapid development and deployment, using React Query for efficient data fetching and state management. With a focus on scalability and maintainability, the project follows modern software development best practices, including modular components and context-driven state management.",
        "features": [
            "Service creation and management with pricing and duration",
            "Appointment scheduling with client tracking",
            "Automated reminders for clients and staff",
            "Secure login with Google authentication",
            "Interactive calendar views for planning and tracking",
            "Customizable themes for a personalized experience"
        ],
        "challenges": [
            {
                "challenge": "Efficient State Management",
                "solution": "Used React Query to minimize API calls and improve performance"
            },
            {
                "challenge": "Authentication Integration",
                "solution": "Implemented Firebase Google Sign-In for secure and seamless login"
            },
            {
                "challenge": "Responsive Design",
                "solution": "Applied NativeWind for consistent UI across screen sizes"
            },
            {
                "challenge": "Offline Data Support",
                "solution": "Utilized AsyncStorage to ensure access without an internet connection"
            }
        ],
        "technologies": ["React Native (Expo)", "Node.js", "Express", "Typescript", "NativewindCSS", "React Query", "MongoDB", "Firebase"],
        "githubRepo": "https://github.com/BigGeF/salon-owner-app2024",
        "liveDemo": null,
        "imageGrid": []
    },
    {
        "title": "Watchlist Duo",
        "imagePath": "watchlist-duo-thumbnail.jpg",
        "overview": "WatchList Duo is a web app built with Vite and TypeScript, designed to help users collaboratively track movies and TV shows they want to watch. Users can connect with a partner to see shared interests and find common titles they both want to watch. The app leverages Firebase for authentication and data storage, ensuring seamless real-time updates and accessibility across devices. Tailwind CSS is used to create a clean and responsive UI, while Context API manages state efficiently.",
        "features": [
            "Designed and implemented a new test case to improve application reliability",
            "Authored and organized a detailed TODO documentation and design document for ongoing feature development",
            "Developed an automated database backup script to enhance data security and recovery processes",
            "Collaborated with team members on code reviews, debugging, and feature integration"
        ],
        "challenges": [
            {
                "challenge": "Real-time Data Syncing",
                "solution": "Used Firebase Firestore to synchronize watchlists instantly across devices"
            },
            {
                "challenge": "User Authentication",
                "solution": "Implemented Firebase Google Sign-In for secure partner connections"
            },
            {
                "challenge": "UI Consistency",
                "solution": "Applied Tailwind CSS for responsive and visually appealing design"
            },
            {
                "challenge": "State Management Efficiency",
                "solution": "Optimized with Context API for smooth and scalable state handling"
            }
        ],
        "technologies": ["React (Vite)", "Node.js", "Express", "Typescript", "TailwindCSS", "React Query", "Firebase"],
        "githubRepo": "https://github.com/MattMiss/watchlist-duo",
        "liveDemo": null,
        "imageGrid": []
    },
    {
        "title": "Open Energy Dashboard",
        "imagePath": "oed-thumbnail.png",
        "overview": "Open Energy Dashboard (OED) is an existing open-source project that provides real-time energy data visualization for organizations to monitor and reduce their energy consumption. My contributions focused on enhancing project reliability and maintainability by adding automated database tests, improving project documentation, and developing a backup script for scheduled tasks.",
        "features": [
            "Designed and implemented a new test case to improve application reliability",
            "Authored and organized a detailed TODO documentation and design document for ongoing feature development",
            "Developed an automated database backup script to enhance data security and recovery processes",
            "Collaborated with team members on code reviews, debugging, and feature integration"
        ],
        "challenges": [
            {
                "challenge": "Database Reliability",
                "solution": "Added test cases to validate database functionality, ensuring data integrity and proper query execution"
            },
            {
                "challenge": "Project Documentation",
                "solution": "Documented outstanding TODO items to provide clarity and facilitate future contributions"
            },
            {
                "challenge": "Automated Backups",
                "solution": "Developed a Bash backup script for scheduled execution via CRON, enhancing data security and recovery processes"
            }
        ],
        "technologies": ["React", "Node.js", "PostgreSQL", "Typescript", "Bash", "CRON"],
        "githubRepo": "https://github.com/MattMiss/OED",
        "liveDemo": null,
        "imageGrid": []
    },
    {
        "title": "Application Tracking Tool",
        "imagePath": "att-thumbnail.jpg",
        "overview": "The ATT Application Tracking Tool is a PHP-based web application designed to help users efficiently track their job applications. Users can organize applications by company, store job links, set follow-up reminders, and update job statuses such as 'Need to Apply,' 'Applied,' and 'Rejected.' The application provides admin functionality to manage users and send job announcements, with all data securely stored in an SQL database. The project also includes sorting and filtering capabilities, along with dark and light mode options for an enhanced user experience.",
        "features": [
            "Comprehensive tracking of job applications with statuses",
            "Email reminders for upcoming application deadlines",
            "Built-in templates for crafting application notes",
            "Responsive design for access on any device",
            "User-friendly dashboards for quick overviews",
            "Secure login to protect sensitive data"
        ],
        "challenges": [
            {
                "challenge": "Data Management",
                "solution": "Designed efficient SQL queries to store and retrieve job applications with filtering and sorting options"
            },
            {
                "challenge": "User Authentication",
                "solution": "Implemented secure user sign-up/login with hashed passwords and session management"
            },
            {
                "challenge": "Admin Privileges",
                "solution": "Developed an admin dashboard for managing users and sending job announcements"
            },
            {
                "challenge": "User Experience",
                "solution": "Created a dark/light mode toggle to improve accessibility and usability"
            },
            {
                "challenge": "Follow-up System",
                "solution": "Enabled users to set and track follow-up reminders to stay on top of their applications"
            }
        ],
        "technologies": ["PHP", "SQL", "HTML", "JavaScript", "Bootstrap"],
        "githubRepo": "https://github.com/MattMiss/DragonflySprint2",
        "liveDemo": null,
        "imageGrid": []
    },
    {
        "title": "Book Library",
        "imagePath": "book-library-thumbnail.jpg",
        "overview": "The Book Library is a web application built with the Fat-Free PHP framework that mimics a real-world library system. Users can search for books using the Google Books API, borrow and return books, and support the library through donations processed via the Stripe API. A SQL database is used to manage book and user data, ensuring efficient data storage and retrieval.",
        "features": [
            "Adding, editing, and deleting book records",
            "Search and filter options for quick access to titles",
            "Loan management with return date tracking",
            "User role management for administrators and borrowers",
            "Responsive Bootstrap design for a seamless experience",
            "Export options for library inventory reports"
        ],
        "challenges": [
            {
                "challenge": "API Integration",
                "solution": "Implemented the Google Books API to provide accurate and efficient search functionality"
            },
            {
                "challenge": "Borrow/Return System",
                "solution": "Developed a structured borrowing system to track book statuses and availability"
            },
            {
                "challenge": "Payment Processing",
                "solution": "Integrated Stripe API to facilitate secure and seamless donations"
            },
            {
                "challenge": "Database Optimization",
                "solution": "Designed SQL queries for fast and reliable book and user data management"
            },
            {
                "challenge": "User Experience",
                "solution": "Designed a responsive and user-friendly interface using Bootstrap for accessibility across devices"
            }
        ],
        "technologies": ["Fat-Free PHP", "SQL", "JavaScript", "Bootstrap"],
        "githubRepo": "https://github.com/MattMiss/public_library",
        "liveDemo": null,
        "imageGrid": []
    }
];
