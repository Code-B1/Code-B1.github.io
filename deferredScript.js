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

        if (entry.target.className == 'counterAdd') {
            entry.target.classList.add('counter');
        }

        if (entry.target.className == 'counterAddTwo') {
            entry.target.classList.add('counterTwo');
        }

        if (entry.target.className == 'counterAddThree') {
            entry.target.classList.add('counterThree');
        }
        
        if (entry.target.className == 'chooseUsCard') {       
          if(entry.target.id == 'chooseUsCardOne'){
            entry.target.classList.add('dissolveInLeft');
          }

          if(entry.target.id == 'chooseUsCardTwo'){
            entry.target.classList.add('dissolveInRight');
          }         
        }

        if (entry.target.className == 'chooseUsCardTwo') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__jackInTheBox');
        }

        if (entry.target.id == 'aboutUsImage') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__backInLeft');
        }

        if (entry.target.id == 'homeH') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInRight');
        }

        if (entry.target.id == 'homeP') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInRight');
          entry.target.classList.add('delayAnimation');
        }

        if (entry.target.id == 'serviceCardOne') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'serviceCardTwo') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'serviceCardThree') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'serviceCardFour') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'serviceCardFive') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'serviceCardSix') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.id == 'reviewOne') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__jackInTheBox');
        }

        if (entry.target.id == 'reviewTwo') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__jackInTheBox');
        }

        if (entry.target.id == 'reviewThree') {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__jackInTheBox');
        }   
      }
    });
  });

  observer.observe(document.querySelector('.counterAdd'));
  observer.observe(document.querySelector('.counterAddTwo'));
  observer.observe(document.querySelector('.counterAddThree'));
  observer.observe(document.querySelector('.chooseUsCard'));
  observer.observe(document.querySelector('.chooseUsCardTwo'));
  observer.observe(document.getElementById('chooseUsCardTwo'));
  observer.observe(document.getElementById('aboutUsImage'));
  observer.observe(document.getElementById('homeH'));
  observer.observe(document.getElementById('homeP'));
  observer.observe(document.getElementById('serviceCardOne'));
  observer.observe(document.getElementById('serviceCardTwo'));
  observer.observe(document.getElementById('serviceCardThree'));
  observer.observe(document.getElementById('serviceCardFour'));
  observer.observe(document.getElementById('serviceCardFive'));
  observer.observe(document.getElementById('serviceCardSix'));
  observer.observe(document.getElementById('reviewOne'));
  observer.observe(document.getElementById('reviewTwo'));
  observer.observe(document.getElementById('reviewThree'));