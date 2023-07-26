var noOfButtons = document.querySelectorAll(".drum").length;

//applying eventListener on all the buttons for listening to clicks: 
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var button_name = this.innerHTML;

    switch (button_name) {
      case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();

        break;

      case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "k":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
       
      case "l":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

      default:console.log(button_name);
        break;
    }

    
  }
}

// adding event listener for keyboard keys press : 
document.addEventListener("keydown",function(){
  alert("A keyboard key was pressed")
})
