const input = document.querySelector('#inputCoin');
const listOfExchange = document.querySelector('#lista');

export const fetchAPI = (coin) => fetch(`https://api.exchangerate.host/latest?base=${coin}`)
  .then((response) => response.json())
  .then((data) => {
    if (input.value === '') {
      listOfExchange.innerHTML = '';
      throw new Error('Você precisa passar uma moeda!');
    }
    if (data.base !== input.value.toUpperCase()) {
      listOfExchange.innerHTML = '';
      throw new Error('Moeda não existente');
    }
    return data;
  });
