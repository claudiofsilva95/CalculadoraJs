let display = document.querySelector('.display input');

const button = document.querySelectorAll('.buttons button');

let calculator = 0;


for (const btn of button) {
    btn.addEventListener('click', () => {
        if (btn.innerHTML == '='){
            display.value = eval(calculator);
            calculator = eval(calculator);
            let resultado = eval(calculator);
            if (isNaN(Number(resultado)) || calculator == Infinity){
                display.value = 'Incalculável';
                calculator = 0;
                display.style.color = 'red';
                var apagaMsg =  setInterval(() => {
                    display.value = '';
                    calculator = 0;
                    display.style.color = 'black';
                }, 3000)            
                
            }
        } else {
            if (btn.innerHTML == 'C'){
                display.value = '';
                calculator = 0;
                console.log(calculator)
            }else if(display.value == 'Incalculável') {
                display.value = btn.innerHTML;
                calculator = btn.innerHTML;
            }else if(display.value == '' && btn.innerHTML == '/' || display.value == '' && btn.innerHTML == '*'){
                display.value = "";
                calculator = 0;
            }else{
                display.value += btn.innerHTML;
                calculator += btn.innerHTML;
            }
        }
    });
}


