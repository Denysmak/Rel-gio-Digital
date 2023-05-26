let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');
let zerozero = (a) => {
   return  a < 10 ? '0' + a : a;
}
setInterval(() => {
    horas.innerText = zerozero(new Date().getHours());
    minutos.innerText = zerozero(new Date().getMinutes());
    segundos.innerText = zerozero(new Date().getSeconds());
}, 1000)


