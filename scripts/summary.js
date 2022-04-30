import { cars } from "./carsDB.js";
import { accessories } from "./accessoriesDB.js";

const $summaryInfo = document.querySelector(`.summaryInfo`);
const totalPrice = localStorage.getItem(`totalPrice`);
const dayOfDelivery = new Date(localStorage.getItem(`dayOfDelivery`));

$summaryInfo.innerHTML = `<img class="finallPhoto" src="${
  cars[localStorage.getItem(`selectedCarId`)].img
}">
<section class="finallInfo">
<p>
Price: ${totalPrice} USD (including accessories).${
  localStorage.getItem(`leasing`) == `true`
    ? `Leasing ${Math.round(totalPrice / 36)} USD paid monthly for 3 years`
    : `Paid in cash.`
}</p>
<p>Your car will be delivered on ${dayOfDelivery.getDate()}/${dayOfDelivery.getMonth()}/${dayOfDelivery.getFullYear()}</p>
</section>`;
