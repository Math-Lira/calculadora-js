//===Utilizando Factory Function===\\

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia(){
      this.clickBotoes();
      this.pressionaEnter();
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
          this.realizaConta();
        }
      })
    },
    
    clearDisplay() {
      this.display.value = '';
    },

    apagaUM(){
       this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(){
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta){
          alert('Conta invalida!')
          return;
        }
        this.display.value = String(conta);
      } catch (error) {
        alert('Conta invalida!')
        return;
      }
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
     },

    clickBotoes() {
      // this -> calculadora
      // Podendo utilizar uma Arroy Function sem precisar ter que muda o this
      document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }
        if(el.classList.contains('btn-del')){
          this.apagaUM();
        }
        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      }.bind(this));
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();