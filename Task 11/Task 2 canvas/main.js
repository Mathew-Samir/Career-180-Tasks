const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '1.webp';
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Set up text properties
        ctx.font = '50px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'right';
        // Text shadow properties
        ctx.shadowColor = "black";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 5;
        // Add the text to the canvas
        const memeText = "it's gonna be OK";
        ctx.fillText(memeText, canvas.width / 1.6, canvas.height - 20); // Position text near the bottom of the canvas
    };
    img.onerror = function () {
        console.error('Failed to load the image. Please check the image path.');
    };