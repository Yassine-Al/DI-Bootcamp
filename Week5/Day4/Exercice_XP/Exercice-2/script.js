let moveButton = document.getElementById("Button");
let animateDiv = document.getElementById("animate");
let containerDiv = document.getElementById("container");

moveButton.addEventListener("click", () => {
    let position = 0;
    let containerWidth = containerDiv.offsetWidth;
    let animateWidth = animateDiv.offsetWidth;
    let intervalId = setInterval(() => {
        position += 1;
        animateDiv.style.left = position + "px";

        if (position + animateWidth >= containerWidth) {
            clearInterval(intervalId);
        }
    }, 1);
});

