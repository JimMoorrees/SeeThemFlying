window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

var Xafstand = 39;
var Yafstand = 46;

var Spoddermon = document.getElementById("spoddermon");
var webRight = document.getElementById("webRight");
var webLeft = document.getElementById("webLeft");
var webUp = document.getElementById("webUp");
var webDown = document.getElementById("webDown");

var movementSpeed = 2;


function onKeyDown(event) 
{
    var keyCode = event.keyCode;

  switch (keyCode) 
  {
    case 68: //d
      keyD = true;
      console.log(keyD);
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }

  if (keyW == true) 
  {
    Spoddermon.classList.add("spoddermonShootRight");
    Xafstand -= movementSpeed;
    Spoddermon.style.top = Xafstand + "%";
    webUp.style.display = "block";

  }
  if (keyA == true) 
  {
    Spoddermon.classList.add("spoddermonShootLeft");
    Yafstand -= movementSpeed;
    Spoddermon.style.left = Yafstand + "%";

    webLeft.style.display = "block";
  }
  if (keyS == true) 
  {
    Spoddermon.classList.add("spoddermonShootLeft");
    Xafstand += movementSpeed;
    Spoddermon.style.top = Xafstand + "%";

    webDown.style.display = "block";
  }
  if (keyD == true) 
  {
    Spoddermon.classList.add("spoddermonShootRight");
    Yafstand += movementSpeed;
    Spoddermon.style.left = Yafstand + "%";
    
    webRight.style.display = "block";

  }
}

function onKeyUp(event) 
{
  playAudio();
  
    var keyCode = event.keyCode;
  
    switch (keyCode) 
    {
      case 68: //d
        keyD = false;
        break;
      case 83: //s
        keyS = false;
        break;
      case 65: //a
        keyA = false;
        break;
      case 87: //w
        keyW = false;
        break;
    }

    if (keyW == false) 
    {
        Spoddermon.classList.remove("spoddermonShootRight");
        webUp.style.display = "none";
    }
    if (keyA == false) 
    {
        Spoddermon.classList.remove("spoddermonShootLeft");
        webLeft.style.display = "none";
    }
    if (keyS == false) 
    {
        Spoddermon.classList.remove("spoddermonShootLeft");

        webDown.style.display = "none";
    }
    if (keyD == false) 
    {
        Spoddermon.classList.remove("spoddermonShootRight");
        webRight.style.display = "none";
    }
  }

  function playAudio() 
{
        var audio = new Audio('webshoot.mp3');
        audio.volume = 0.05;
        audio.play();
}

