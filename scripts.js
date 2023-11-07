function navBarClick() {
  
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else 
  {
      x.className = "topnav";
  }

  var dropBtn = document.getElementById("dropBtn");

  if (dropBtn.className === "dropbtn") {
    dropBtn.className += " responsive";
  } 
  else 
  {
    dropBtn.className = "dropbtn";
  }

  var dropBtn = document.getElementById("dropContent");

  if (dropBtn.className === "dropdown-content") {
    dropBtn.className += " responsive";
  } 
  else 
  {
    dropBtn.className = "dropdown-content";
  }
}