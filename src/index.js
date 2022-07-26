console.log("connected");

const colors=["RED", "YELLOW", "GREEN", "BLUE", "BLACK"]
const RED="text-red-500";
const YELLOW="text-yellow-500";
const GREEN="text-green-500";
const BLUE="text-blue-500";
const BLACK="text-black";
const changeColors=[RED, YELLOW, GREEN, BLUE, BLACK];
const redEmoji=["🍓","🎸", "🍒", "🌹", "📌"];
const yellowEmoji=["😎","🍌","🔔","🐥","🧀"];
const greenEmoji=["🧶","🌿", "🍀","🍃","🐸"];
const blueEmoji=["🌊","💎", "❄️", "🌀", "🌌"];
const blackEmoji=["💣", "🦡", "🖤", "🧛‍♀️", "🧥"];
let correctList=[];
let prevIdx=(Math.floor(Math.random()*10))%5;


function disappear(e){
    e.className="hidden";
}

function startTimer(e){
    disappear(e);
    console.log("start");
    const innerTimebar = document.getElementById('innerTimebar');
    innerTimebar.className="w-0 h-full bg-red-500 rounded-xl transition-[width] ease-linear duration-[30000ms]";

    show.innerText=colors[prevIdx];
    show.className=`text-6xl mt-24 md:text-9xl md:mt-0 ${changeColors[(prevIdx*2)%5]}`;

    setTimeout(showScore,30000);

}

function showColorName(e){
    checkAnswer(e, prevIdx);
    const show = document.getElementById('show');
    let nextIdx=(Math.floor(Math.random()*10))%5;
    let colorIdx=(Math.floor(Math.random()*10))%5;
    prevIdx=nextIdx;
    if (colors[prevIdx]===colors[colorIdx]) colorIdx=(Math.floor(Math.random()*10))%5;
    show.innerText=colors[prevIdx];
    show.className=`text-6xl mt-24 md:text-9xl md:mt-0 ${changeColors[colorIdx]}`;
}

function checkAnswer(e, idx){
    const showCorrectList=document.getElementById('answerbar');
    //console.log(e.id.toUpperCase());
    //console.log(colors[idx]);
    let emojiIdx=(Math.floor(Math.random()*10))%5;
    if (colors[idx]===e.id.toUpperCase()){
        switch(e.id.toUpperCase()){
            case ("RED"):
                correctList.push(redEmoji[emojiIdx]);
            break;
            case ("YELLOW"):
                correctList.push(yellowEmoji[emojiIdx]);
            break;            
            case ("GREEN"):
                correctList.push(greenEmoji[emojiIdx]);
            break;
            case ("BLUE"):
                correctList.push(blueEmoji[emojiIdx]);
            break;
            case ("BLACK"):
                correctList.push(blackEmoji[emojiIdx]);
            break;
        }
    }
    else{
        correctList=[];
    }
    showCorrectList.innerText=correctList.join("");
}

function showScore(){
    const scorepage = document.getElementById('scorepage');
    const score = document.getElementById('score');
    const scoreshow = document.getElementById('scoreshow');
    const emojishow = document.getElementById('emojishow');
    const copyBtn = document.getElementById('copyBtn');

    scorepage.className="z-30 absolute w-full h-full pt-[50%] md:pt-48 md:text-xl text-center bg-[#00000080] transition-colors duration-3"
    score.className="z-40 h-[300px] text-md md:text-xl bg-white p-12 drop-shadow-xl transition-colors duration-3"    
    copyBtn.className="h-[30px] w-[180px] mt-5 rounded-xl text-center bg-blue-500 text-white hover:bg-blue-300"
    scoreshow.className="md:text-4xl font-bold m-8"
    emojishow.className="text-sm md:text-lg"
    scoreshow.innerText=`${(correctList.length)}개의 이모지를 모았네요!`
    emojishow.innerText=`당신이 모은 이모지: ${correctList.join("")}`;
}

function copyEmoji(e){
    const copyBtn=document.getElementById('copyBtn');
    const emoji=correctList.join("");
    navigator.clipboard.writeText
    (`[🧠EMOJI STACKER🧠] 내가 모은 이모지:\n
${emoji}\n
여기에서 당신의 이모지를 모아 보세요!\n
https://bit.ly/3zw2C0u`);
    copyBtn.innerText="복사되었습니다!";
}