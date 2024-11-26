const dragItems = document.querySelectorAll('[draggable="true"]');
const dropBasket = document.getElementById('dropBasket');
const payButton = document.getElementById('payButton');
let itemsInBasket = 0;
let selected = null;

dragItems.forEach(item => {
  item.addEventListener('dragstart', (e) => {
    let selected = e.target;

    setTimeout(() => {
      selected.classList.add('hidden');
    }, 0);

    dropBasket.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    dropBasket.addEventListener('drop', (e) => {
      e.preventDefault();
      dropBasket.appendChild(selected);
      selected.classList.add('no_position');
      selected.classList.remove('hidden');


      if (!item.classList.contains('in-basket')) {
        item.classList.add('in-basket');
        itemsInBasket++;

        if (itemsInBasket >= 3) {
          payButton.style.display = 'inline-block';

        }
      }
    });
  })
  item.addEventListener('dragend', () => {
    if (selected) {
      selected.classList.remove('hidden');
    }
  });
});