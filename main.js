canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
car_x=10;
car_y=120;
background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
rover_img="https://i.postimg.cc/YqdnnNX1/car1.png";
car_image="https://st4.depositphotos.com/1782409/19765/v/1600/depositphotos_197658618-stock-illustration-sticker-retro-race-car-side.jpg";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upbackground;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
     rover_imgtag.onload=uprover;
    rover_imgtag.src=rover_img;
    car_imgtag=new Image();
     car_imgtag.onload=uprover;
    car_imgtag.src=car_image;
}

function upbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uprover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

    ctx.drawImage(car_imgtag,car_x,car_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
        up();
    }
    if(keypress=='40'){
        down();
    }
    if(keypress=='37'){
        left();
    }
    if(keypress=='39'){
        right();
    }
    if(keypress=='87'){
        up1();
    }
    if(keypress=='83'){
        down1();
    }
    if(keypress=='65'){
        left1();
    }
    if(keypress=='68'){
        right1();
    }

}
function up(){
    if(rover_y>=0){
        rover_y-=10;
        upbackground();
        uprover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y+=10;
        upbackground();
        uprover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x-=10;
        upbackground();
        uprover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x+=10;
        upbackground();
        uprover();
    }
}
function up1(){
    if(car_y>=0){
        car_y-=10;
        upbackground();
        uprover();
    }
}
function down1(){
    if(car_y<=500){
        car_y+=10;
        upbackground();
        uprover();
    }
}
function left1(){
    if(car_x>=0){
        car_x-=10;
        upbackground();
        uprover();
    }
}
function right1(){
    if(car_x<=700){
        car_x+=10;
        upbackground();
        uprover();
    }
}