const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const Evento = "01 dec 2023"

function countDown() {
  const dataLanc = new Date(Evento);
  const hoje = new Date();
   // a resposta vem em ms ou seja tem que div poe 1000 para transformar em segundos 
  const segTotal = (dataLanc - hoje)/1000;
  const finalDias = Math.floor(segTotal /60 /60 /24);
  const finalHoras = Math.floor(segTotal /60 /60) % 24;
  const finalMinutos = Math.floor(segTotal /60) % 60; 
  const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = finalDias;
  hora.innerHTML = formatoTempo(finalHoras);
  minuto.innerHTML = formatoTempo(finalMinutos);
  segundo.innerHTML = formatoTempo(finalSegundos);
}

function formatoTempo(tempo) {
  return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)



function highlightCard(selector) {
  let element = document.querySelector(selector);
  element.classList.toggle("card-highlight");
}
function addKeyboardEventListener() {
  document.addEventListener("keydown", (event) => {
    let ingresso1 = document.getElementById("quinta");
    let ingresso2 = document.getElementById("sexta");
    let ingresso3 = document.getElementById("sabado");
    let ingresso4 = document.getElementById("domingo");

    let code = event.code;
    if (code == 'Digit1') {
      ingresso1.classList.toggle("card-highlight");
      ingresso2.classList.remove("card-highlight");
      ingresso3.classList.remove("card-highlight");
      ingresso4.classList.remove("card-highlight");
    }
    if (code == 'Digit2') {
      ingresso1.classList.remove("card-highlight");
      ingresso2.classList.toggle("card-highlight");
      ingresso3.classList.remove("card-highlight");
      ingresso4.classList.remove("card-highlight");
    }
    if (code == 'Digit3') {
      ingresso1.classList.remove("card-highlight");
      ingresso2.classList.remove("card-highlight");
      ingresso3.classList.toggle("card-highlight");
      ingresso4.classList.remove("card-highlight");}
      
      if (code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
      }}
  )
  }
  addKeyboardEventListener();

  let ingressos = [];

  showSelectedCards = () => {
    if(ingressos.length > 0) alert(`Ingressos selecionados:${ingressos}`);
  }

  selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelect");
    if(ingressos.includes(selector)) ingressos.pop(selector); else ingressos.push(selector);
  }
