console.log("SMC page loaded");

// Simple fade-in animation
document.body.style.opacity = 0;

window.onload = () => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
};
