const listOfExchange = document.querySelector('#lista');
const title = document.querySelector('#title');

export function createLi(coinName, coinValue) {
  const li = document.createElement('li');
  const icon = document.createElement('img');
  icon.src = './assets/coin.png';

  li.classList = 'list-coin';
  const tofixedValue = 3;
  li.innerHTML = `${icon.outerHTML} 
  ${coinName} <span>${coinValue.toFixed(tofixedValue)}<span>`;
  listOfExchange.appendChild(li);
  return li;
}

export function createTitle(searched) {
  title.classList = 'title-coin';
  title.innerHTML = `Valores referentes a 1 ${searched}`;
  return title;
}
