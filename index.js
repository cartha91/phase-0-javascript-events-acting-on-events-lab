function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left + 40 < 400) {
    dodger.style.left = `${left + 7}px`;
    }
}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left - 1 > 0) {
      dodger.style.left = `${left - 7}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
  });

  