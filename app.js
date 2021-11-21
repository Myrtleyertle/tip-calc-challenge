const bill = document.querySelector('[data-bill-input]');
const tipPercent = document.querySelectorAll('[data-tip-button]');
const numPeople = document.querySelector('[data-num-people-input]');
const billTotal = document.querySelector('#bill-total');
const tipTotal = document.querySelector('#tip-total');
let tip = [];
//find out which button is selected
function setBillValue(e) {
    e.preventDefault();
    tipPercent.forEach(function(button) {
        button.addEventListener('click', function() {
            let selectedTip = button.innerText;
            //convert the string to a number
            selectedTip = parseFloat(selectedTip);
            //get number of people
            if (numPeople.value === '') {
                numPeople.value = 1;
            }
            let people = Number(numPeople.value);
            //convert bill value to number
            let billValue = Number(bill.value);
            //calculations
            let tipValue = selectedTip / 100;
            let tipCalc = billValue * tipValue / people;
            let total = billValue / people + tipCalc;
            //display the results with 2 decimal places
            billTotal.innerHTML = total.toFixed(2);
            tipTotal.innerHTML = tipCalc.toFixed(2);
        });
    });


}

bill.addEventListener('input', setBillValue);

function reset() {
    bill.value = '';
    numPeople.value = '';
    billTotal.innerHTML = '0.00';
    tipTotal.innerHTML = '0.00';
}