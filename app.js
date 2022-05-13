const Buttons = document.querySelectorAll(".tab-item");
const Tabs = document.querySelectorAll(".tab");

const meaning = document.querySelectorAll(".tabs-meaning");
meaning.addEventListener("click", function(event) {
    if (event.target.closest('.tab')) {
        classList.add('active')
    };

});

let button = document.createElement('button');
button.textContent = 'tab 4';
tabs - items.appendChild(button);



Buttons.forEach(function(item) {
    item.addEventListener("click", function(event) {
        const id = event.target.dataset.tab
        const tab = document.getElementById(id);


        Buttons.forEach(function(item) {
            item.classList.remove('active');
        });
        Tabs.forEach(function(item) {
            item.classList.remove('active');

        });
        event.target.classList.add('active');
        Tabs.classList.add('active');
    });

});