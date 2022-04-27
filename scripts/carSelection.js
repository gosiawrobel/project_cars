import { cars } from "./carsDB.js";

let $carSelection = document.querySelector("#car-selection");

function carContainerGenHTML(car) {
  return ` <div class="col-12 col-md-6 col-lg-4 car-container border"><a class="car-hyperlink" href="car_configurator.html?make=${car.make}&model=${car.model}&img=${car.img}&year=${car.year}&engine=${car.engine}&power=${car.power}&mileage=${car.mileage}">
  <img
    class="foto-car"
    src=${car.img}
    alt=${car.make} ${car.model}
  />
  <p class="price">Price: ${car.price} USD</p>
  <p>Model: ${car.model} ${car.make}</p>
  <p>Year of production: ${car.year}</p>
  <p>Engine: ${car.engine}</p>
  <p>Power: ${car.power} KM</p>
  <p>Mileage: ${car.mileage} km</p>
  </a>
</div>`;
}

function carsGenHTML(cars) {
  let carsHTML = ``;
  for (let car of cars) {
    carsHTML += carContainerGenHTML(car);
  }

  return `<div class="row justify-content-center">${carsHTML}</div>`;
}

$carSelection.innerHTML = carsGenHTML(cars);
