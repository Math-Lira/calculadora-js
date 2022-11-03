//===Utilizando Constructor Function===\\ 

const calculadora = new Calculadora();
calculadora.inicia();

function Calculadora() {
    this.display.document.quarySelector('.display');

    this.inicia = () => {
        this.caputaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => document.addEventListener('keyup'), e => {
        if(e.keyCode !== 13) return;
        this.realizaConta;
    }

    this.caputaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('bts-num')) this.addNumDisplay(el);
            if (el.classList.contains('bts-clear')) this.clear();
            if (el.classList.contains('bts-del')) this.del();
            if (el.classList.contains('bts-eq')) this.realizaConta(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = el => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)
            if(!conta){
                alert('Conta invalida!');
                return;
            }
            this.display.value = conta;
        } catch (error) {
            alert('Conta invalida!')
            return;   
        }
    };

};