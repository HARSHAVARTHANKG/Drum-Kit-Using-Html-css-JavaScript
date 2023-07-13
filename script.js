
// Event Listener  


let button_over = document.querySelectorAll(".drum");


for(let drums of button_over)
{
    drums.addEventListener("click",function()
    {
        switch(this.textContent)   
        {
            case "w" :
            {
                let audio1= new Audio("./sounds/crash.mp3");
                audio1.play();
                break;
            }

            case "a":
            {
                let audio2 = new Audio("./sounds/kick-bass.mp3");
                audio2.play();
                break;
            }
            case "s":
            {
                let audio3 = new Audio("./sounds/snare.mp3");
                audio3.play();
                break;
            }

            case "d":
            {
                let audio4 = new Audio("./sounds/tom-1.mp3");
                audio4.play();
                break;
            }
            case "j":
            {
                let audio5 = new Audio("./sounds/tom-2.mp3");
                audio5.play();
                break;
            }
            case "k":
            {
                let audio6 = new Audio("./sounds/tom-3.mp3");
                audio6.play();   
                break;
            }
            case "l":
            {
                let audio7 = new Audio("./sounds/tom-4.mp3");
                audio7.play();

            }
            default: console.log("wrong button");
            break;
        }

        Button_clicked(this.textContent);
    });
}
  
document.addEventListener('keydown',(e)=>{

    console.log(e.code);
    switch(e.code)   
    {
        case "KeyW" :
        {
            let audio1= new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        }

        case "KeyA":
        {
            let audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
        }
        case "KeyS":
        {
            let audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
        }

        case "KeyD":
        {
            let audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        }
        case "KeyJ":
        {
            let audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        }
        case "KeyK":
        {
            let audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();   
            break;
        }
        case "KeyL":
        {
            let audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();

        }
        default: console.log("wrong button");
        break;
    }

    Button_clicked(e.key);
})


function Button_clicked(key_pressed)
{
    let clicked_button = document.querySelector("."+ key_pressed);

    clicked_button.classList.add("pressed");

    setTimeout(()=>{clicked_button.classList.remove("pressed")},100)
}




