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

        if (entry.target.className == 'contactUsForm') {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInUp');
          }   
      }
    });
  });

  observer.observe(document.querySelector('.contactUsForm'));

  function sendEmail(){

    let name = document.getElementById("contactName");
    let email = document.getElementById("contactEmail");
    let number = document.getElementById("contactNumber");
    let message = document.getElementById("contactUsMessage");
 
    $.ajax({
    type : "POST",
    url  : "ContactStorm.php",
    data : { 
                name : name.value, email : email.value, 
                number : number.value, message : message.value 
            },
                success: function(res){             
                
                clearFields();

                let success = document.getElementById("validationSuccess");
                let warning = document.getElementById("validationError");

                if (warning.classList.contains('visibleFlex')){
                    warning.classList.remove('visibleFlex');
                }
                
                success.classList.add('visibleFlex');

                isRecaptchaValidated = false;
            }
    });
}

let isRecaptchaValidated = false;

function onRecaptchaSuccess() {
  isRecaptchaValidated = true;
}

function checkRecaptcha(){
    if (isRecaptchaValidated == true){
        console.log("Validated")

        sendEmail();

    } else {
        console.log("Not Validated")

        let warning = document.getElementById("validationError");
        let success = document.getElementById("validationSuccess");

        if (success.classList.contains('visibleFlex')){
            success.classList.remove('visibleFlex');
        }

        warning.classList.add('visibleFlex');
    }
}

function clearFields(){
    let name = document.getElementById("contactName");
    let email = document.getElementById("contactEmail");
    let number = document.getElementById("contactNumber");
    let message = document.getElementById("contactUsMessage");

    name.value = "";
    email.value = "";
    number.value = "";
    message.value = "";  
}

  