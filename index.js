const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=> {
item.onclick = ()=>{
    if(item.id == 'clear') { /* focus 1*/

        display.innerText = '';
    }
    else if (item.id == 'backspace'){
        let string = display.innerText.toString(); /* focus 2*/
display.innerText= string.substr(0, string.length - 1);
        
    }
    else if (display.innerText != '' && item.id == 'equal'){ /* focus 3  eval*/

        display.innerText = eval(display.innerText);
    }
    else if ( display.innerText == '' && item.id == 'equal'){
        display.innerText = 'Empty !';
        setTimeout(() => (display.innerText = ''),2000);
    }
    else{
        display.innerText += item.id;
    }
}
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark ;
} 
