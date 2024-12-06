const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

function createParticles(x, y) {
  const numParticles = 5; 
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
  
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const angle = Math.random() * 360; 
    const speed = Math.random() * 100 + 50; 

    const moveX = Math.cos(angle) * speed * 1.5; 
    const moveY = Math.sin(angle) * speed * 1.5; 
    particle.style.setProperty('--move-x', `${moveX}px`);
    particle.style.setProperty('--move-y', `${moveY}px`);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}

function startParticleEmission() {
  setInterval(() => {
    const cursorX = cursor.offsetLeft;
    const cursorY = cursor.offsetTop;

    createParticles(cursorX, cursorY);
  }, 100); 
}

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

window.onload = startParticleEmission;


  