export const sidebarVariants = {
    open: {
        width: 256,
        transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    },
    closed: {
        width: 80,
        transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    },
};

export const navListVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const navItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: 0 },
};