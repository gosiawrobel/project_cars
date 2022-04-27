import { cars } from "./carsDB.js";

let $carSelection = document.querySelector("#car-selection");

function carContainerGenHTML(car, id) {
  return ` <div id="car${id}" class="col-12 col-md-6 col-lg-4 car-container border car-hyperlink">
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
</div>`;
}

function carsGenHTML(cars) {
  let carsHTML = ``;
  for (let i = 0; i < cars.length; i++) {
    carsHTML += carContainerGenHTML(cars[i], i);
  }

  return `<div class="row justify-content-center">${carsHTML}</div>`;
}

function carsAddListeners(cars) {
  for (let i = 0; i < cars.length; i++) {
    let $car = document.querySelector(`#car${i}`);
    $car.addEventListener("click", () => {
      localStorage.setItem("selectedCarId", i);
      document.location.href = "car_configurator.html";
    });
  }
}

$carSelection.innerHTML = carsGenHTML(cars);

carsAddListeners(cars);
