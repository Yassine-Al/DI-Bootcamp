let box = document.getElementById("box");
let target = document.getElementById("target");

let isDragging = false;

box.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        box.style.left = event.clientX - box.offsetWidth / 2 + "px";
        box.style.top = event.clientY - box.offsetHeight / 2 + "px";
    }
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        if (isInsideTarget()) {
            box.style.backgroundColor = "green";
        } else {
            box.style.backgroundColor = "red";
        }
    }
});

function isInsideTarget() {
    const boxRect = box.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    return (
        boxRect.left >= targetRect.left &&
        boxRect.right <= targetRect.right &&
        boxRect.top >= targetRect.top &&
        boxRect.bottom <= targetRect.bottom
    );
}