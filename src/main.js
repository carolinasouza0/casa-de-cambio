import Swal from 'sweetalert2';
import { fetchAPI } from '../helpers/helpers';
import './style.css';
import { createLi, createTitle } from '../components/components';

const input = document.querySelector('#inputCoin');
const btn = document.querySelector('#btnSearch');
const listOfExchange = document.querySelector('#lista');

const display = (event) => {
  event.preventDefault();
  const searchedCoin = (input.value).toUpperCase();
  listOfExchange.innerHTML = '';

  fetchAPI(searchedCoin).then((data) => {
    const arrayCoins = Object.entries(data.rates);
    arrayCoins.forEach((coin) => {
      const [nameCoin, value] = coin;
      createLi(nameCoin, value);
      createTitle(searchedCoin);
    });
  }).catch((erro) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: erro.message,
      confirmButtonText: 'OK',
    });
  });
};

btn.addEventListener('click', display);
