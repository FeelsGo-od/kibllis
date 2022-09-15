let arrowDown = document.getElementsByClassName('down-btn')[0];

arrowDown.addEventListener('click', function () {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
});

// ..

let headerContent = document.querySelector('.header-content');

window.onload = () => {
  headerContent.style.opacity = '1';
  headerContent.style.transform = 'translateX(0)';
};

function scrollTriger(selector, options = {}) {
  let els = document.querySelectorAll(selector);

  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(el);
}

// scrollTriger('.scroll-reveal');

scrollTriger('.scroll-reveal', {
  rootMargin: '-450px',
});
