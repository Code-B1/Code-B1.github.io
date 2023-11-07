const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};

  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

  const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {

        if (entry.target.className == 'servicePageCard') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__jackInTheBox');
        }

        if (entry.target.id == 'imageOne') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__backInRight');
        }

        if (entry.target.id == 'imageTwo') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__backInLeft');
        }

        if (entry.target.id == 'imageThree') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__backInRight');
        }

        if (entry.target.id == 'sectionOne') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInLeft');
        }

        if (entry.target.id == 'sectionTwo') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInRight');
        }

        if (entry.target.id == 'sectionThree') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInLeft');
        }

        if (entry.target.id == 'header') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInRight');
        }
    
      }
    });
  });

  observer.observe(document.querySelector('.servicePageCard'));
  observer.observe(document.getElementById('imageOne'));
  observer.observe(document.getElementById('imageTwo'));
  observer.observe(document.getElementById('imageThree'));
  observer.observe(document.getElementById('sectionOne'));
  observer.observe(document.getElementById('sectionTwo'));
  observer.observe(document.getElementById('sectionThree'));
  observer.observe(document.getElementById('header'));