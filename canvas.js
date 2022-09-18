// ======================================================================== Selector All Element

let c = document.querySelector("#canvas");


let ctx = c.getContext("2d");
let btn = document.querySelector(".btn");

let array = [];

let counter = 0;


// ======================================================================== Add Size To Canvas Element

c.width = this.innerWidth;

c.height = this.innerHeight;


//======================================================================== Add Size When Window Resize

this.addEventListener("resize",function() {

    c.width = this.innerWidth;

    c.height = this.innerHeight;

});

//======================================================================== Create Mouse event 

let mouse = {

    x: undefined,

    y: undefined,

}

//======================================================================== Create Main Class To Take info From It


class Particle {
    
    //============================================== Main Constructor To get some info from it's
    
    constructor() {

        // this.x = Math.random() * c.width;

        // this.y = Math.random() * c.height;


        // Change What do you wanna to get a custmo Shape

        this.x = mouse.x;

        this.y = mouse.y;

        this.size = Math.random() * 25;

        this.color = 'hsl(' + counter + ', 100% , 50% )';

        this.speedX = Math.random() * 3 - 1.5;

        this.speedY = Math.random() * 3 - 1.5;

    }


    // ======================================================================== Functions to update And darw shpas
   
    // ======================================================================== Function To update
   
    update() {

        this.x += this.speedX;

        this.y += this.speedY;

        if(this.size > 0.3) this.size -= 0.1;

    };


    //========================================================================  Function To Darw
    

    darw() {
        ctx.beginPath();

        ctx.save();

        ctx.fillStyle = this.color;

        ctx.arc(this.x , this.y , this.size , 0 , Math.PI * 2);

        ctx.fill();

        ctx.restore();

    };
};

// ======================================================================== Create Funtion To Looping class to array

function addToArray() {

    for (let i = 0; i < 100; i++) {

        array.push(new Particle());

    };
};

addToArray();

// ======================================================================== Create Function to make update And darw

function finalDarw() {

    for (let i = 0; i < array.length; i++) {
        
        array[i].update();

        array[i].darw();

        //======================================================================== This Condation To clear Shape If it Size less than 0.2;
        
        if(array[i].size <= 0.3) {

            array.splice(i , 1);

            i--;

        };
    };
};

// ======================================================================== Create Function To Animiat Shape if You Wanna it 

function animait() {


    // ======================================================================== If You want to Clear Rect don't comment the second code


    // ======================================================================== ctx.clearRect(0 , 0 , c.width , c.height);


    // ======================================================================== This Code To make opicty at cricles


    ctx.fillStyle = "rgba(0,0,0,0.09)";

    ctx.fillRect(0 , 0 ,c.width , c.height);

    //======================================================================== End Code To make opicty at cricles
    
    counter += 5;

    finalDarw();

    requestAnimationFrame(animait);

};
animait();

//======================================================================== Hello If You Wanna make Mouse event Like mouseMove or mouse click 


//======================================================================== Mouse move Event


c.addEventListener("click",function() {
    for (let i = 0; i < 15; i++) {

        array.push(new Particle());

    };
});


//======================================================================== Mouse Click Event 


c.addEventListener("mousemove",function(e) {
    mouse.x = e.x;

    mouse.y = e.y;

    // If You Wanna Change It To Create Custom Shape You Should To Change Mouse x and mouse y from Class Particle
    
    for (let i = 0; i < 5; i++) {

        array.push(new Particle());

    };
});