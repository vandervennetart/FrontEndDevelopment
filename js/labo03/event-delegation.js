"use strict";
(function () {
    for (let i = 0; i < 1000; i++) {
        const diameter = Math.random() * 100 + "px";
        const ball = document.createElement("span");
        ball.style.height = diameter;
        ball.style.width = diameter;
        ball.style.borderRadius = "50%";

        ball.style.position = "absolute";
        ball.style.left = Math.random() * 1000 + "px";
        ball.style.top = Math.random() * 1000 + "px";
        ball.style.backgroundColor = `hsl(${Math.random() * 360},80%, 70%)`;
        document.body.appendChild(ball);
    }

    let lastTarget;

    document.body.addEventListener("click", function (event) {
        const ball = event.target;
        if (ball.tagName !== "SPAN") return;

        if (lastTarget){
            lastTarget.style.borderStyle = "none";
        }
        lastTarget = ball

        ball.style.borderStyle = "solid";
    });
})();
