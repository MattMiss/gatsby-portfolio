import { Project } from "../utils/types";

export const projects: Project[] = [
  {
    "title": "Chorechestra",
    "tagline": "Conduct Your Daily Chores Like a Symphony",
    "imagePath": "chorechestra-thumbnail.jpg",
    "category": "Mobile",
    "overview": "Chorechestra is a mobile Android application designed to simplify chore management. With its intuitive interface and robust features, users can create, organize, and track household chores efficiently. The app ensures that every task gets the attention it deserves through tagging, prioritization, and reminders.",
    "features": [
      "Chore creation with tags, priority levels, and detailed instructions",
      "Interactive charts and graphs for completion history",
      "Notifications for due or overdue chores",
      "Customizable chore sorting and filtering by tags, priority, or time remaining",
      "Importance-level tracking for more critical tasks",
      "Comprehensive list and task editing through user-friendly modals"
    ],
    "technologies": ["React Native", "Typescript", "Expo-Go", "NativewindCSS", "Expo FileSystem"],
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
    "tagline": "Effortless Salon Management for Modern Business Owners",
    "imagePath": "green-coffee-beauty-thumbnail.jpg",
    "category": "Mobile",
    "overview": "Green Coffee Beauty is a salon management mobile app that empowers salon owners to streamline their daily operations. From managing services and appointments to tracking client preferences, the app is a one-stop solution for improving efficiency and enhancing client satisfaction.",
    "features": [
      "Service creation and management with pricing and duration",
      "Appointment scheduling with client tracking",
      "Automated reminders for clients and staff",
      "Secure login with Google authentication",
      "Interactive calendar views for planning and tracking",
      "Customizable themes for a personalized experience"
    ],
    "technologies": ["React Native", "Typescript", "Expo-Go", "NativewindCSS", "MongoDB"],
    "githubRepo": "https://github.com/BigGeF/GreenCafeSalonApp",
    "liveDemo": null,
    "imageGrid": []
  },
  {
    "title": "Open Energy Dashboard",
    "tagline": "Collaborating to Enhance an Open-Source Energy Management Tool",
    "imagePath": "oed-thumbnail.png",
    "category": "React Web",
    "overview": "Contributed as part of a development team to the Open Energy Dashboard, a React-based web application for visualizing energy data. The project focuses on energy efficiency and sustainability, offering robust tools for tracking and analyzing energy usage.",
    "features": [
      "Designed and implemented a new test case to improve application reliability",
      "Authored and organized a detailed TODO documentation and design document for ongoing feature development",
      "Developed an automated database backup script to enhance data security and recovery processes",
      "Collaborated with team members on code reviews, debugging, and feature integration"
    ],
    "technologies": ["React", "Typescript"],
    "githubRepo": "https://github.com/MattMiss/OED",
    "liveDemo": null,
    "imageGrid": []
  },
  {
    "title": "Application Tracking Tool",
    "tagline": "Simplify Your Job Application Process",
    "imagePath": "att-thumbnail.png",
    "category": "PHP",
    "overview": "The Application Tracking Tool (ATT) is a PHP-based web application designed to help job seekers stay organized. With features like tracking applications, setting reminders, and recording progress, ATT ensures that users remain on top of their career pursuits.",
    "features": [
      "Comprehensive tracking of job applications with statuses",
      "Email reminders for upcoming application deadlines",
      "Built-in templates for crafting application notes",
      "Responsive design for access on any device",
      "User-friendly dashboards for quick overviews",
      "Secure login to protect sensitive data"
    ],
    "technologies": ["PHP", "SQL", "Bootstrap"],
    "githubRepo": "https://github.com/MattMiss/DragonflySprint2",
    "liveDemo": null,
    "imageGrid": []
  },
  {
    "title": "Book Library",
    "tagline": "Your Personal Digital Library Assistant",
    "imagePath": "library-thumbnail.jpg",
    "category": "PHP",
    "overview": "Book Library is a PHP-based web application created to manage and explore book collections efficiently. Built with the Fat-Free PHP framework, the app offers an intuitive interface for cataloging, searching, and tracking book loans.",
    "features": [
      "Adding, editing, and deleting book records",
      "Search and filter options for quick access to titles",
      "Loan management with return date tracking",
      "User role management for administrators and borrowers",
      "Responsive Bootstrap design for a seamless experience",
      "Export options for library inventory reports"
    ],
    "technologies": ["Fat-Free PHP", "Bootstrap"],
    "githubRepo": "https://github.com/BigGeF/public_library_TeamEZ",
    "liveDemo": null,
    "imageGrid": []
  }
];
