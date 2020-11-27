'use strict';

let calcInput = document.querySelector('#calcInput'),
    monthlyPrice = document.querySelector('#monthlyPrice'),
    yearPrice = document.querySelector('#yearPrice'),
    modal = document.querySelector('#errModal');

let setValue = (clear, valueMonth, valueYear) => {
    if (clear) {
        calcInput.value = '';
        monthlyPrice.value = '$20';
        yearPrice.value = '$216';
    } else {
        monthlyPrice.value = valueMonth;
        yearPrice.value = valueYear;
        console.log(`Current values: ${valueMonth}, ${valueYear}`);
    }
}

let errModal = (hide, errMsg) => {
    if (hide) {
        modal.style.opacity = '0';
    } else {
        modal.style.opacity = '1';
        modal.innerHTML = errMsg;
    }
}

calcInput.addEventListener('input', function (e) {
    let data = e.target.value;
    if (isNaN(data)) {
        setValue(true);
        errModal(false, 'Please enter a number');
    } else {
        if (data > 0) {
            if (data <= 25) {
                if (data > 3) {
                    setValue(false, `$${data*10}`, `$${data*10*12*0.9}`);
                    errModal(true);
                } else {
                    setValue(false, '$20', '$216');
                    errModal(true);
                }
            } else {
                setValue(true);
                errModal(false, 'The maximum amount of allowed users is 25');
            }
        } else {
            setValue(true);
        }
    }
});