const root = document.documentElement;
let targetX = 50, targetY = 50;
let currentX = 50, currentY = 50;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    window.addEventListener("pointermove", (e) => {
        targetX = (e.clientX / window.innerWidth) * 100;
        targetY = (e.clientY / window.innerHeight) * 100;
    });

    function animate() {
        currentX += (targetX - currentX) * 0.09;
        currentY += (targetY - currentY) * 0.09;
        root.style.setProperty("--mx", currentX + "%");
        root.style.setProperty("--my", currentY + "%");
        requestAnimationFrame(animate);
    }
    animate();
}