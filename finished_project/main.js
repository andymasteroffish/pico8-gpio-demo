const pin_start = 1
const pin_color = 2 
const pin_score = 3 

var pico8_gpio = new Array(128);

let cart_has_started = false;

let score_info = null;


function update(){
    //check if the pico 8 cart has started
    if(!cart_has_started && pico8_gpio[pin_start] == 1){
        console.log("CART STARTED");
        cart_has_started = true;

        //get the slider
        let color_slider = document.getElementById("color_slider");
        color_slider.oninput = function() {
            console.log("slider: "+this.value);
            //set the value so pico8 can grab it
            pico8_gpio[pin_color] = this.value;
        }

        //get the score text
        score_info = document.getElementById("score_info");
    }

    //updating the score text
    if(cart_has_started){
        let score = pico8_gpio[pin_score];
        score_info.innerHTML = "score: "+score;
    }
}

setInterval(update, 100);