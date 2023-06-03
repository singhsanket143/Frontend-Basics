document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting game")
    let ball = document.getElementById("ball"); // getting the ball
    let table = document.getElementById("ping-pong-table"); // getting the table
    let paddle = document.getElementById("paddle");
    let ballX = 100; // x coordinate of the ball
    let ballY = 300; // y coordinate of the ball
    let dx = 2; // +1 -> it will move the ballX by 1 pixel to right, -1 -> move ballX by 1 pixel to left
    let dy = 2; // +1 -> it will move the ballY by 1 pixel to bottom, -1 -> move ballY by 1 pixel to top
    let paddleY = 0;
    paddle.style.top = `${paddleY}px`; // wrt table

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if(event.keyCode == 38 && paddleY > 0) {
            // up arrow
            paddleY-=10;
        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            // down arrow
            paddleY+=10;
        }
        paddle.style.top = `${paddleY}px`;
    })

    document.addEventListener("mousemove", (event) => {
        let mousePoint = event.clientY - table.offsetTop - paddle.offsetHeight/2;
        paddleY = mousePoint;
        if(paddleY < 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return;
        
        paddle.style.top = `${paddleY}px`;
    });

    console.log(paddle)

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

        if(
            ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddleY &&
            ballY + ball.offsetHeight < paddleY + paddle.offsetHeight
        ) {
            console.log("collision", paddle.offsetLeft + paddle.offsetWidth);
            dx*=-1;
        }
    
    }

    function loop() {
        gameBall();
        requestAnimationFrame(loop);
    }

    loop();
})