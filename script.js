let relogio = document.querySelector('.relogio');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');
let zerozero = (a) => {
   return  a < 10 ? '0' + a : a;
}
setTimeout(() => {
    relogio.style.display = 'flex'
    relogio.style.animationName = 'slidein'
}, 1000)
setInterval(() => {
    horas.innerText = zerozero(new Date().getHours());
    minutos.innerText = zerozero(new Date().getMinutes());
    segundos.innerText = zerozero(new Date().getSeconds());
}, 1000)











