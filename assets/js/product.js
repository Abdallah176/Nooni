let count = 0;
const countElement = document.getElementById('count');

function increment() {
    count++;
    countElement.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}


// Zoom
document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("main-image");
    let lens = document.getElementById("zoom-lens");
    let zoomResult = document.getElementById("zoom-result");
    
        image.addEventListener("mousemove", function (e) {
        let rect = image.getBoundingClientRect();
        let x = e.clientX - rect.left - lens.offsetWidth / 2;
        let y = e.clientY - rect.top - lens.offsetHeight / 2;
    
        // التأكد من أن العدسة لا تخرج عن حدود الصورة
        x = Math.max(0, Math.min(x, rect.width - lens.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - lens.offsetHeight));
    
        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        lens.style.display = "block";
        zoomResult.style.display = "block";
    
        // هنااااااااااااااا المشكله
        let zoomLevel = 2; 
        zoomResult.style.backgroundImage = `url('${image.src}')`;
        zoomResult.style.backgroundPosition = `-${x * zoomLevel}px -${y * zoomLevel}px`;
        zoomResult.style.backgroundSize = `${image.width * zoomLevel}px ${image.height * zoomLevel}px`;
        });
    
        image.addEventListener("mouseleave", function () {
        lens.style.display = "none";
        zoomResult.style.display = "none";
      });
    });