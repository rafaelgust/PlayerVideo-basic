const container = document.querySelector('main div.container');
const controllers = document.querySelector('main div.container div.controllers');
const playP = document.getElementById('play');
const stopP = document.getElementById('stop');
const goP = document.getElementById('go');
const backP = document.getElementById('back');
const video = document.querySelector('video');

container.addEventListener('mouseover', function(){
    controllers.style.visibility = 'visible';
    controllers.style.opacity = '1';
});

container.addEventListener('mouseout', function(){
    controllers.style.visibility = 'hidden';
    controllers.style.opacity = '0';
});

playP.onclick = function(){
    video.paused ? //verificar se está pausado
        video.play()
    :
        video.pause();
};
stopP.onclick = function(){
    video.pause();
    video.currentTime = 0; //retornar para o começo
};
goP.onclick = function(){
    video.currentTime += 15; //tempo atual + 15 seg
};
backP.onclick = function(){
    video.currentTime -= 15; //tempo atual - 15 seg
};

//more

const maisvolume = document.querySelector('input[value="Aumentar Volume"]');
const menosvolume = document.querySelector('input[value="Reduzir Volume"]');
const mutar = document.querySelector('input[value="Mutar"]');
const desmutar = document.querySelector('input[value="Desmutar"]');

maisvolume.addEventListener('click', function(){
    video.volume += 0.1;
});

menosvolume.addEventListener('click', function(){
    video.volume -= 0.1;
});

mutar.addEventListener('click', function(){
    video.volume = 0.0;
});

desmutar.addEventListener('click', function(){
    video.volume = 0.5;
});

//more

const maisVelocidade = document.querySelector('input[value="Aumentar Velocidade"]');
const menosVelocidade = document.querySelector('input[value="Reduzir Velocidade"]');
const resturarVelocidade = document.querySelector('input[value="Restaurar Velocidade"]');

maisVelocidade.addEventListener('click', function(){
    video.playbackRate += 0.1;
});

menosVelocidade.addEventListener('click', function(){
    video.playbackRate -= 0.1;
});

resturarVelocidade.addEventListener('click', function(){
    video.playbackRate = 1.0;
});
