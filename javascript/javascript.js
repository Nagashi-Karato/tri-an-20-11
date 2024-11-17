const container = document.querySelector('.container');
        const main = document.querySelector('.bg');
        const giftbox = document.querySelector('#giftbox');
        const circleTransition = document.querySelector('#circleTransition');

        giftbox.addEventListener('click', () => {

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

                setTimeout(() => {
                    container.innerHTML = '';
                    setTimeout(() => {
                        transition();
                    }, 500)
                }, 500); 
            }, 2000)
        });
        
        function appear(){
            const audio = document.createElement('audio');
            audio.src = './audio/candyland.mp3'
            audio.autoplay = true
            document.body.append(audio);

            const img = document.createElement('img');
            img.src = './img/logo2.png';
            container.appendChild(img);
            img.classList = 'logo2 animate__animated animate__fadeInDown animate__delay-1s';

            
        }

        function transition(){
            main.style.backgroundImage = 'url("./img/Nen2.jpg")';
            circleTransition.classList.remove('animate__fadeIn');            circleTransition.classList.remove('animate__fadeIn');
            circleTransition.classList.remove('circle-expand');
            setTimeout(() => {
                appear();
            }, 500)
        }
        