const container = document.querySelector('.container');
const container_2 = document.querySelector('.container-2');
const main = document.querySelector('.bg');
const giftbox = document.querySelector('#giftbox');
const circleTransition = document.querySelector('#circleTransition');
var audio = document.querySelector('.bgm')
var logo2 = document.querySelector('.logo2');
var thiep = document.querySelector('.thiep');

giftbox.addEventListener('click', giftboxHandle);

function giftboxHandle() {
    giftbox.removeEventListener("click", giftboxHandle);

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff"];

    // Confetti animation
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        startVelocity: 80,
        ticks: 250,
        origin: { x: 0, y: 0.8 },
        colors: colors,
    });

    confetti({
        particleCount: 200,
        angle: 120,
        ticks: 250,
        startVelocity: 80,
        spread: 100,
        origin: { x: 1, y: 0.8 },
        colors: colors,
    });


    setTimeout(() => {
        circleTransition.classList.add('circle-expand');
        setTimeout( () => {
            main.style.backgroundImage = 'url("./img/Nen2.jpg")';
            container.getElementsByClassName('container-1')[0].remove();    
            transition();
        }, 1500)

    }, 2000)
}


function appear() {
    container_2.style.display = "block";
    logo2.classList = 'logo2 animate__animated animate__fadeInDown animate__delay-1s';
    audio.autoplay = true;
    setTimeout( () => {
        thiep.style.display = 'flex';
        thiep.className += ' animate__animated animate__fadeInDown animate__delay-1s';
    }, 500)
}

function transition() {
    circleTransition.classList.remove('animate__fadeIn');
    circleTransition.classList.remove('circle-expand');
    audio.play();
    setTimeout(() => {
        appear();
    }, 500)
}
