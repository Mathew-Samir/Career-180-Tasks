window.onload = function() {
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');
    const button = document.getElementById('generateCircles');
    const colorInput = document.getElementById('circleColor');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    function generateCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const numberOfCircles = 150;
        const ringColor = colorInput.value;
        const ringRadius = 30;
        const lineWidth = 1;
        ctx.lineWidth = lineWidth;
        for (let i = 0; i < numberOfCircles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = ringColor;
            ctx.stroke();
        }
    }
    button.addEventListener('click', generateCircles);
}