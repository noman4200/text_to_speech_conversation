/////////////////////////////////////////variables/////////////////////////////////////////////////////////



// let x="Noman";
// let age=34;
// // console.log(x);4
// console.log(typeof age);
// console.log(`you are ${age} year old`);
// console.log(`your name is ${x} Ali`);

// let x=true;
// console.log(`Bro is online:${x}`)
// let fullName="Noman";
// let age=25;
// let x=true;

// document.getElementById("para1").textContent=`Your name is ${fullName}`;
// document.getElementById("para2").textContent=`Your age is ${age}`;
// document.getElementById("para3").textContent=`${fullName} is online : ${x}`;


//////////////////////////////////////////////////operators/////////////////////////////////////////////
// let x=30;
// // x=x*4;
// // x=x**4;

// x+=1;//its first add than display answer
// x*=3;//its first multiply  than display answer
// console.log(x);


//////////////////////////////////////////////how to accept user input///////////////////////////////////


////Easyway window.prompt
////advance way===html textbox


// let x;
// //  x=window.prompt("what's your username :");
// //  console.log(`your's name is: ${x}`);


// document.getElementById("button").onclick=function(){
    
//         x=document.getElementById("text1").value;
//         document.getElementById("h1").textContent=`Hello ${x}`;
//         console.log(`Username is :${x}`);
//         // document.write(`Username is :${x}`);
    
// }
///////////////////////////////////////////datatype conversion/////////////


// let x=window.prompt("how old you are?");if i put 23 
// x+=1;
// document.write(x ,  typeof x); its answer is 231 string data type so we need to convert it.

// let x=window.prompt("how old you are?");
// x=Number(x)
// x+=1;
// document.write(x ,typeof x); //now it give answer24


////////////////////////////////////////////////constant////////////////


// let radius;
// const PI=3.14;
// document.getElementById("btn1").onclick=function(){
//     radius=document.getElementById("inp").value;
//     radius=Number(radius);

//     circum=2*PI*radius;
//     document.getElementById("h3").textContent=circum+"cm";
// }


///////////////////////////////////////// counter /////////////////////////////////////////////

// let x=0;
// document.getElementById("Increase").onclick=function(){
//     x++;
//     document.getElementById("lab").textContent=x;
    
// }
// document.getElementById("Decrease").onclick=function(){
//     x--;
//     document.getElementById("lab").textContent=x;
    
// }
// document.getElementById("Reset").onclick=function(){
//     x=0;
//     document.getElementById("lab").textContent=x;
    
// }


// ////////////////////////////////////////Math function///////////////////////////

// x=3.5;
// z=Math.floor(x);
// z1=Math.round(x);
// z2=Math.ceil(x);
// console.log(z,z1,z2)
// let numgen=Math.random();
// console.log(numgen);
// x1=Math.floor(Math.random()*6)+1;
// console.log(x1);


////////////////random number generator///////////

// const min=1;
// const max=6;
// document.getElementById("btn").onclick=function(){
//     number=Math.floor(Math.random()*max)+min;
//     document.getElementById("lab").textContent=number;
// }




//////////////////////////////////////////////tranary operator////////////////////////////////////////////

// let num=16;
// message=num<18?"your are adult":"you are minor";
// console.log(message);
// document.write(message);

//////////////////////////////////////////////////////sting slicing /////////////////////////////////////////

// let num="Noman Ali";
// // console.log(num.charAt(0));
// first_name =num.slice(0,num.indexOf(" "));
// last_name=num.slice(num.indexOf(" ")+1);
// console.log(first_name ,last_name);

// ///////////////////////////////////////////////////method chaining////////////////////////////////////////

//////no method chaning ////
//let username=window.prompt("Enter Your's Name");
// username=username.trim();

// let letter=username.charAt(0);
// letter=letter.toUpperCase();
// // console.log(letter);

// let extchar=username.slice(1);
// extchar=extchar.toLowerCase();
// username=letter+extchar;
// console.log(username);

/////method chaning
// let username=window.prompt("Enter Your's Name");

//  username=username.trim().charAt(0).toUpperCase+ username.trim().slice(1).toLowerCase();


////////////////////////temperature conversion/////////////////////

// const textBox=document.getElementById("textbox");
// const toFahrehit=document.getElementById("tofahrehit");
// const toCelcius=document.getElementById("tocelcius");

// const result=document.getElementById("result");


// let temp;

// function convert(){
//     if(toFahrehit.checked){
//         temp=Number(textBox.value);
//         temp=temp * 9 / 5 + 32;
//         result.textContent=temp + " F";
//         console.log("hello")
//     }
//     else if(toCelcius.checked){
//         temp=Number(textBox.value);
//         temp=(temp - 32 ) *( 5/9);
//         result.textContent=temp + "C";
//         console.log("hello1")
//     }
//     else{
//         result.textContent="Select a Unit";
//     }

// }

/////////////////////////spech convertor//////////////////////////

function speak(){
    var input=document.getElementById("input").value;
    var Utterance=new SpeechSynthesisUtterance(input);
    speechSynthesis.speak(Utterance);
}
