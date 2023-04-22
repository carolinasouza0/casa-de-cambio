const listOfExchange = document.querySelector('#lista');
const title = document.querySelector('#title');

export function createLi(coinName, coinValue) {
  const li = document.createElement('li');
  li.classList = 'list-coin';
  li.innerHTML = `${coinName} <span>${coinValue}<span>`;
  listOfExchange.appendChild(li);
  return li;
}

export function createTitle(searched) {
  title.classList = 'title-coin';
  title.innerHTML = `Valores referentes a 1 ${searched}`;
  return title;
}
