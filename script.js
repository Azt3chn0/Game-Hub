console.log("Testing");

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");
const letter4 = document.getElementById("letter4");
const letter5 = document.getElementById("letter5");
const letter6 = document.getElementById("letter6");
const letter7 = document.getElementById("letter7");
const letter8 = document.getElementById("letter8");
const title = document.getElementById("title");
const hr1 = document.getElementById("hr1");
const hr2 = document.getElementById("hr2");
const surveyTitle = document.getElementById("surveyTitle");
const firstQuestion = document.getElementById("firstQuestion");
const optionOne1 = document.getElementById("optionOne1");
const optionTwo1 = document.getElementById("optionTwo1");
const optionThree1 = document.getElementById("optionThree1");
const optionFour1 = document.getElementById("optionFour1");
const optionFive1 = document.getElementById("optionFive1");
const optionSix1 = document.getElementById("optionSix1");
const sneaky = document.getElementById("sneaky");
let enter;

const success = localStorage.getItem("success");

document.addEventListener("DOMContentLoaded", async function(){ 
    if(success === null){
    await delay(1000);
    letter1.style.color = "white";
    letter1.style.textShadow = "0 0 10px white";
    await delay(100); 
    letter2.style.color = "white";
    letter2.style.textShadow = "0 0 10px white";
    await delay(100);
    letter3.style.color = "white";
    letter3.style.textShadow = "0 0 10px white";
    await delay(100);
    letter4.style.color = "white";
    letter4.style.textShadow = "0 0 10px white";
    letter1.style.color = "transparent";
    letter1.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter5.style.color = "white";
    letter5.style.textShadow = "0 0 10px white";
    letter2.style.color = "transparent";
    letter2.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter6.style.color = "white";
    letter6.style.textShadow = "0 0 10px white";
    letter3.style.color = "transparent";
    letter3.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter7.style.color = "white";
    letter7.style.textShadow = "0 0 10px white";
    letter4.style.color = "transparent";
    letter4.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter8.style.color = "white";
    letter8.style.textShadow = "0 0 10px white";
    letter5.style.color = "transparent";
    letter5.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter6.style.color = "transparent";
    letter6.style.textShadow = "0 0 0 transparent";
    await delay(100);
    letter7.style.color = "transparent";
    letter7.style.textShadow = "0 0 0 transparent";
    await delay (100);
    letter8.style.color = "transparent";
    letter8.style.textShadow = "0 0 0 transparent";
    await delay(100);
    document.body.style.transition = "all 1s ease";
    document.body.style.backgroundColor = "rgb(39, 39, 39)";
    await delay(100);
    title.style.opacity = "1";
    title.style.top = "0px"; 
    hr1.style.opacity = "1";
    hr1.style.boxShadow = "0 0 10px white";
    await delay(1000);
    surveyTitle.style.top = "200px";
    surveyTitle.style.opacity = "1";
    hr2.style.opacity = "1";
    hr2.style.boxShadow = "0 0 10px white";
    await delay(1000);
    firstQuestion.style.opacity = "1";
    firstQuestion.style.top = "300px";
    await delay(1000);
    optionOne1.style.opacity = "1";
    optionOne1.style.top = "450px";
    await delay(500);
    optionTwo1.style.opacity = "1";
    optionTwo1.style.top = "650px";
    await delay(500);
    optionThree1.style.opacity = "1";
    optionThree1.style.top = "450px";
    await delay(500);
    optionFour1.style.opacity = "1";
    optionFour1.style.top = "650px";
    await delay(500);
    optionFive1.style.opacity = "1";
    optionFive1.style.top = "450px";
    await delay(500);
    optionSix1.style.opacity = "1";
    optionSix1.style.top = "650px";
}});
check();
async function check(){
    if(success === "false"){
        sneaky.style.opacity = "1";
        sneaky.style.top = "350px";
        sneaky.style.textShadow = "0 0 10px white";
    }
    if(success === "true"){
        title.style.transition = "all 1s ease";
        await delay(100);
        title.style.fontFamily = "Orbitron";
        title.style.opacity = "1";
        title.style.top = "0px";
        await delay(100);
        hr1.style.opacity = "1";
        hr1.style.boxShadow = "0 0 10px white";
    }
}
async function minecraft(){
    enter = true;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function roblox(){
    enter = true;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function GD(){
    enter = true;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function fortnite(){
    enter = true;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function marvel(){
    enter = true;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function other(){
    enter = false;
    title.style.opacity = "0";
    await delay(100);
    hr1.style.opacity = "0";
    await delay(100);
    surveyTitle.style.opacity = "0";
    await delay(100);
    hr2.style.opacity = "0";
    await delay(100);
    firstQuestion.style.opacity = "0";
    await delay(100);
    optionOne1.style.opacity = "0";
    await delay(100);
    optionTwo1.style.opacity = "0";
    await delay(100);
    optionThree1.style.opacity = "0";
    await delay(100);
    optionFour1.style.opacity = "0";
    await delay(100);
    optionFive1.style.opacity = "0";
    await delay(100);
    optionSix1.style.opacity = "0";
    checkEnter();
}
async function checkEnter(){
    if(enter === false){
        document.body.style.backgroundColor = "black";
        title.textContent = "You are not allowed to enter";
        title.style.opacity = "1";
        title.style.top = "0px";
        localStorage.setItem("success", "false");
    }
    else{
        document.body.style.backgroundColor = "black";
        title.style.opacity = "1";
        title.textContent = "https://discord.gg/Mfsaj7WX";
        await delay(1000);
        title.style.transition = "all 1s ease";
        title.style.opacity = "1";
        localStorage.setItem("success", "true");
    }
}

