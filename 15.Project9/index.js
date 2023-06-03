document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting game")
    let ball = document.getElementById("ball"); // getting the ball
    let table = document.getElementById("ping-pong-table"); // getting the table
    let ballX = 100; // x coordinate of the ball
    let ballY = 300; // y coordinate of the ball
    let dx = 2; // +1 -> it will move the ballX by 1 pixel to right, -1 -> move ballX by 1 pixel to left
    let dy = 2; // +1 -> it will move the ballY by 1 pixel to bottom, -1 -> move ballY by 1 pixel to top


    function gameBall() {
        ballX += dx;
        ballY += dy;

        ball.style.top = `${ballY}px`;
        ball.style.left = `${ballX}px`;

        if(ballY < 0 || ballY + ball.offsetHeight > table.offsetHeight) {
            dy *= -1;
        }

        if(ballX < 0 || ballX + ball.offsetWidth > table.offsetWidth) {
           dx *= -1;
        }
    
    }

    function loop() {
        gameBall();
        requestAnimationFrame(loop);
    }

    loop();
})