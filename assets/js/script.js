// VideoHeroSection
  document.querySelector('.video-icon').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    if (video.style.display === 'block') {
      video.style.display = 'none';  
    } else {
      video.style.display = 'block';  
      video.play(); 
    }
  });
  

  // const items = document.querySelectorAll('.marquee-item');
  // let currentIndex = 0;

  // function showNextItem() {
  //     // إزالة الـ active من العنصر الحالي
  //     items[currentIndex].classList.remove('active');
  //     items[currentIndex].classList.add('exit');

  //     // التحديث إلى العنصر التالي
  //     currentIndex = (currentIndex + 1) % items.length;

  //     // إظهار العنصر التالي
  //     items[currentIndex].classList.remove('exit');
  //     items[currentIndex].classList.add('active');
  // }
  //    // بدء الحركة
  //     items[currentIndex].classList.add('active');
  //    setInterval(showNextItem, 3000); // تبديل كل 3 ثوانٍ

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

