
  
// Animation for the "Hi, I am" and "Matt Miss"
export const slideInFromRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
  
// Animation for paragraphs
export const paragraphVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};
  
// Button animation (slides in one after another)
export const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};
  
// Animation for the profile picture (fade in + from left)
export const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
};

export const projectCardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen, slightly below
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,  // Controls bounce (higher = less bounce)
            damping: 10,     // Controls how fast it settles
            mass: 1,         // Higher mass means slower bounce
        },
    },
};

export const staggerVariants = {
    hidden: {},
    visible: {
        transition: {
            // This will stagger the appearance of child elements by 0.2s
            staggerChildren: 0.2,
        },
    },
};
  
export const categoryTypeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};
  
export const skillItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

export const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Desktop navbar link hover animation
export const linkHoverVariants = {
    rest: { scale: 1, opacity: 1 },
    hover: {
    scale: 1.1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
    },
};

// Mobile menu animation
export const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Navbar fade-in animation
export const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};