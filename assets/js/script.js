// VideoHeroSection
// document.querySelector('.video-icon').addEventListener('click', function() {
//     const video = document.getElementById('myVideo');
//     if (video.style.display === 'block') {
//         video.style.display = 'none';  
//         } else {
//         video.style.display = 'block';  
//         video.play(); 
//         }
//     });

// Link
function redirectToPage() {
    window.location.href = "../register.html";
}
// left Shop Category 
const section = document.getElementById('mySectionLeft');
let hasAnimated = false; // متغير للتحقق من أن الحركة حدثت بالفعل

window.addEventListener('scroll', () => {
    if (hasAnimated) return; // إذا حدثت الحركة بالفعل، لا تفعل شيئًا

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
        section.classList.add('active');
        hasAnimated = true; // تم تنفيذ الحركة
    }
});


// Photo
const photo = document.querySelector('.photo');
window.addEventListener('scroll', () => {
    const sectionTop = photo.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
        photo.classList.add('active');
    }
});


