import { cars } from "./carsDB.js";
import { accessories } from "./accessoriesDB.js";

const $buyBtn = document.querySelector("#buyBtn");
const $fullNameInput = document.querySelector("#fullNameInput");
const $fullNameValid = document.querySelector(`.fullNameValid`);
const $phoneNumberInput = document.querySelector(`#phoneNumberInput`);
const $phoneNumberValid = document.querySelector(`.phoneNumberValid`);
const $addressInput = document.querySelector(`#addressInput`);
const $addressValid = document.querySelector(`.addressValid`);
const $cityInput = document.querySelector(`#cityInput`);
const $cityValid = document.querySelector(`.cityValid`);
const $zipInput = document.querySelector(`#zipInput`);
const $zipValid = document.querySelector(`.zipValid`);
const $accessories = document.querySelector(`.carAccessories`);
const $totalPrice = document.querySelector(`#totalPrice`);
const $dateSelector = document.querySelector(`#dateSelector`);
const $choosenCar = document.querySelector(`#choosenCar`);
const $formLeasing = document.querySelector(`#formLeasing`);
const $formCash = document.querySelector(`#formCash`);

function carGenHTML(car) {
  return `<section>
  <h3>${car.make} ${car.model} ${car.engine} year ${car.year}</h3>
  <div class="row descriptionInfo">
  <img class="configPhoto col" src="${car.img}"/>
  <p class="col  description">${car.description}</p>
  </div>
 
  </section>`;
}

function isAccessorySelected(id) {
  return localStorage.getItem(`selectedAccessoryID${id}`) == `true`;
}

function carAccessoryGenHTML(accessory, id) {
  return `<section class=" col-12 col-md-6 col-lg-3">
  <div id="accessory${id}" class="accessoryBox border ${
    isAccessorySelected(id) ? `selectedBox` : ""
  }">
  <p>${accessory.name}</p>
  <p>Quantity: ${accessory.quantity}</p>
  <p>Price: ${accessory.price} USD</p>
  <p>Id: ${accessory.id}</p>
  </div>
  </section>`;
}

function accessoriesGenHTML(accessories) {
  let accessoryHTML = ``;
  for (let i = 0; i < accessories.length; i++) {
    accessoryHTML += carAccessoryGenHTML(accessories[i], i);
  }
  return `<section class="row space-around"><h4>Configurator</h4> ${accessoryHTML}</section>`;
}

function updatePrice() {
  let totalPrice = cars[localStorage.getItem("selectedCarId")].price;
  for (let i = 0; i < accessories.length; i++) {
    if (isAccessorySelected(i)) {
      totalPrice += accessories[i].price;
    }
  }
  if (localStorage.getItem(`leasing`) == `true`) {
    $totalPrice.innerHTML = `Price ${Math.round(
      totalPrice / 36
    )} USD monthly for 3 years`;
  } else {
    $totalPrice.innerHTML = `Price: ${totalPrice} USD`;
  }
  localStorage.setItem(`totalPrice`, totalPrice);
}

function carAccessoryAddListeners(accessories) {
  for (let i = 0; i < accessories.length; i++) {
    let $carAccessory = document.querySelector(`
    #accessory${i}`);
    $carAccessory.addEventListener("click", () => {
      if (isAccessorySelected(i)) {
        localStorage.setItem(`selectedAccessoryID${i}`, false);
        $carAccessory.classList.remove(`selectedBox`);
      } else {
        localStorage.setItem(`selectedAccessoryID${i}`, true);
        $carAccessory.classList.add(`selectedBox`);
      }
      updatePrice();
    });
  }
}

if (!localStorage.getItem("selectedCarId")) {
  localStorage.setItem("selectedCarId", 0);
}

$choosenCar.innerHTML = carGenHTML(cars[localStorage.getItem("selectedCarId")]);
$accessories.innerHTML = accessoriesGenHTML(accessories);
carAccessoryAddListeners(accessories);

$fullNameInput.addEventListener("change", () => {
  let re = /^[A-Z][a-z]*\s[A-Z][a-z]*$/m;
  if (re.test($fullNameInput.value)) {
    $fullNameValid.innerHTML = "";
    $fullNameInput.classList.remove(`incorrect`);
    $fullNameInput.classList.add(`correct`);
    localStorage.setItem(`fullName`, $fullNameInput.value);
  } else {
    $fullNameValid.innerHTML = "Please enter full name";
    $fullNameInput.classList.remove(`correct`);
    $fullNameInput.classList.add(`incorrect`);
    localStorage.removeItem(`fullName`);
  }
});
$fullNameInput.value = localStorage.getItem(`fullName`);

$phoneNumberInput.addEventListener("change", () => {
  let re = /^(\d{9})|(\d{3}\s\d{3}\s\d{3})$/m;
  if (re.test($phoneNumberInput.value)) {
    $phoneNumberValid.innerHTML = "";
    $phoneNumberInput.classList.remove(`incorrect`);
    $phoneNumberInput.classList.add(`correct`);
    localStorage.setItem(`phoneNumber`, $phoneNumberInput.value);
  } else {
    $phoneNumberValid.innerHTML = "Please enter phone number eg. 777 777 777";
    $phoneNumberInput.classList.remove(`correct`);
    $phoneNumberInput.classList.add(`incorrect`);
    localStorage.removeItem(`phoneNumber`);
  }
});
$phoneNumberInput.value = localStorage.getItem(`phoneNumber`);

$addressInput.addEventListener("change", () => {
  let re = /^[A-Z][a-z]*\s\d+[a-zA-Z]{0,1}(\/\d+){0,1}$/m;
  if (re.test($addressInput.value)) {
    $addressValid.innerHTML = "";
    $addressInput.classList.remove(`incorrect`);
    $addressInput.classList.add(`correct`);
    localStorage.setItem(`address`, $addressInput.value);
  } else {
    $addressValid.innerHTML = "Enter street house number opt./flat number ";
    $addressInput.classList.remove(`correct`);
    $addressInput.classList.add(`incorrect`);
    localStorage.removeItem(`address`);
  }
});
$addressInput.value = localStorage.getItem(`address`);

$cityInput.addEventListener("change", () => {
  let re = /^([A-Z][a-z]*[ \-])*[A-Z][a-z]*$/m;
  if (re.test($cityInput.value)) {
    $cityValid.innerHTML = "";
    $cityInput.classList.remove(`incorrect`);
    $cityInput.classList.add(`correct`);
    localStorage.setItem(`city`, $cityInput.value);
  } else {
    $cityValid.innerHTML = "Enter city name";
    $cityInput.classList.remove(`correct`);
    $cityInput.classList.add(`incorrect`);
    localStorage.removeItem(`city`);
  }
});
$cityInput.value = localStorage.getItem(`city`);

$zipInput.addEventListener("change", () => {
  let re = /^\d{2}\-\d{3}$/m;
  if (re.test($zipInput.value)) {
    $zipValid.innerHTML = "";
    $zipInput.classList.remove(`incorrect`);
    $zipInput.classList.add(`correct`);
    localStorage.setItem(`zip`, $zipInput.value);
  } else {
    $zipValid.innerHTML = "Enter valid zip code eg. 00-000";
    $zipInput.classList.remove(`correct`);
    $zipInput.classList.add(`incorrect`);
    localStorage.removeItem(`zip`);
  }
});
$zipInput.value = localStorage.getItem(`zip`);
updatePrice();

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function isDateEqual(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function dataPickerGenHTML(date) {
  let inner = ``;
  for (let i = 0; i < 14; i++) {
    let d = addDays(date, i);
    inner += `<option ${
      isDateEqual(new Date(localStorage.getItem(`dayOfDelivery`)), d)
        ? `selected="selected"`
        : ``
    } value="${d}">${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()}</option>`;
  }
  return inner;
}
$dateSelector.innerHTML = dataPickerGenHTML(new Date());
$dateSelector.addEventListener("change", () => {
  localStorage.setItem(`dayOfDelivery`, $dateSelector.value);
});

$formLeasing.addEventListener("change", () => {
  localStorage.setItem(`leasing`, true);
  updatePrice();
});

$formCash.addEventListener("change", () => {
  localStorage.setItem(`leasing`, false);
  updatePrice();
});

if (!localStorage.getItem(`leasing`)) {
  localStorage.setItem(`leasing`, true);
}

$formCash.checked = localStorage.getItem(`leasing`) != `true`;
$formLeasing.checked = localStorage.getItem(`leasing`) == `true`;

$buyBtn.addEventListener("click", () => {
  if (
    localStorage.getItem(`fullName`) != null &&
    localStorage.getItem(`phoneNumber`) != null &&
    localStorage.getItem(`address`) != null &&
    localStorage.getItem(`city`) != null &&
    localStorage.getItem(`zip`) != null &&
    localStorage.getItem(`dayOfDelivery`) != null &&
    localStorage.getItem(`leasing`) != null
  ) {
    window.location.href = "summary.html";
  } else {
    alert(`You missed some information`);
  }
});
