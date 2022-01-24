

var money1 = document.querySelector("#counter1");
var money2 = document.querySelector("#counter2");
var money3 = document.querySelector("#counter3");


function count() {
    currentMoney1 = Number(money1.textContent);
    currentMoney2 = Number(money2.textContent);
    currentMoney3 = Number(money3.textContent);

    setInterval(function() {
        currentMoney1 += 1;
        currentMoney2 += 1;
        currentMoney3 += 1;
        money3.innerHTML = currentMoney1;
        money2.innerHTML = currentMoney2;
        money1.innerHTML = currentMoney3;
    }, 100)
    
}
