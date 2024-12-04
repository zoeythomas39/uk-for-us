let suit = document.querySelector('#suit');
let guard = document.querySelector('#guard');
let redDress = document.querySelector('#redDress');
let umbrella = document.querySelector('#umbrella');
let teaGirl = document.querySelector('#teaGirl');
let people = document.querySelectorAll('.people');
let speechBubble = document.querySelectorAll('.speechBubble')
let suitBubble = document.querySelector('#suitBubble');
let guardBubble = document.querySelector('#guardBubble');
let redDressBubble = document.querySelector('#redDressBubble');
let umbrellaBubble = document.querySelector('#umbrellaBubble');
let teaGirlBubble = document.querySelector('#teaGirlBubble');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let suitParagraph = document.querySelector('#suitParagraph');
let guardParagraph = document.querySelector('#guardParagraph');
let redDressParagraph = document.querySelector('#redDressParagraph');
let umbrellaParagraph = document.querySelector('#umbrellaParagraph');
let teaGirlParagraph = document.querySelector('#teaGirlParagraph');



suit.onclick = () => {
    if(suit.getAttribute('src') === 'images/suit.svg')
    {
        suit.setAttribute('src', 'images/background1.svg');
        suitBubble.style.display="none";
        button1.style.display="flex";
        suitParagraph.style.display = "block"; // Show the paragraph

    } else {
        suit.setAttribute('src','images/suit.svg');
        suitBubble.style.display="flex";
        button1.style.display="none";
        suitParagraph.style.display = "none"; // Hide the paragraph
    }
};

guard.onclick = () => {
    if(guard.getAttribute('src') === 'images/guard.svg')
    {
        guard.setAttribute('src', 'images/background2.svg');
        guardBubble.style.display="none";
        button2.style.display="flex";
        guardParagraph.style.display = "block";
    } else {
        guard.setAttribute('src','images/guard.svg');
        guardBubble.style.display="flex";
        button2.style.display="none";
        guardParagraph.style.display = "none";
    }
};

redDress.onclick = () => {
    if(redDress.getAttribute('src') === 'images/reddress.svg')
    {
        redDress.setAttribute('src', 'images/background3.svg');
        redDressBubble.style.display="none";
        button3.style.display="flex";
        redDressParagraph.style.display = "block";
    } else {
        redDress.setAttribute('src','images/reddress.svg');
        redDressBubble.style.display="flex";
        button3.style.display="none";
        redDressParagraph.style.display = "none";
    }
};

umbrella.onclick = () => {
    if(umbrella.getAttribute('src') === 'images/umbrella.svg')
    {
        umbrella.setAttribute('src', 'images/background4.svg');
        umbrellaBubble.style.display="none";
        button4.style.display="flex";
        umbrellaParagraph.style.display = "block";
    } else {
        umbrella.setAttribute('src','images/umbrella.svg');
        umbrellaBubble.style.display="flex";
        button4.style.display="none";
        umbrellaParagraph.style.display = "none";
    }
};

teaGirl.onclick = () => {
    if(teaGirl.getAttribute('src') === 'images/teagirl.svg')
    {
        teaGirl.setAttribute('src', 'images/background5.svg');
        teaGirlBubble.style.display="none";
        button5.style.display="flex";
        teaGirlParagraph.style.display = "block";
    } else {
        teaGirl.setAttribute('src','images/teagirl.svg');
        teaGirlBubble.style.display="flex";
        button5.style.display="none";
        teaGirlParagraph.style.display = "none";
    }
};