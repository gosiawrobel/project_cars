$carSelection = document.querySelector("#car-selection");

const cars = [
  {
    price: 27500,
    img: "media/images/audiNew.jpeg",
    make: "Audi",
    model: "A4",
    year: 2012,
    engine: 3.0,
    power: 220,
    mileage: 220000,
  },
  {
    price: 40000,
    img: "media/images/daciaNew.jpeg",
    make: "Dacia",
    model: "Sandero",
    year: 2021,
    engine: 3.0,
    power: 95,
    mileage: 23000,
  },
  {
    price: 30000,
    img: "media/images/skodaNew.png",
    make: "Skoda",
    model: "Octavia",
    year: 2019,
    engine: 1.4,
    power: 156,
    mileage: 45000,
  },
  {
    price: 27500,
    img: "media/images/audiNew.jpeg",
    make: "Audi",
    model: "A4",
    year: 2012,
    engine: 3.0,
    power: 220,
    mileage: 220000,
  },
  {
    price: 40000,
    img: "media/images/daciaNew.jpeg",
    make: "Dacia",
    model: "Sandero",
    year: 2021,
    engine: 3.0,
    power: 95,
    mileage: 23000,
  },
  {
    price: 30000,
    img: "media/images/skodaNew.png",
    make: "Skoda",
    model: "Octavia",
    year: 2019,
    engine: 1.4,
    power: 156,
    mileage: 45000,
  },
  {
    price: 27500,
    img: "media/images/audiNew.jpeg",
    make: "Audi",
    model: "A4",
    year: 2012,
    engine: 3.0,
    power: 220,
    mileage: 220000,
  },
  {
    price: 40000,
    img: "media/images/daciaNew.jpeg",
    make: "Dacia",
    model: "Sandero",
    year: 2021,
    engine: 3.0,
    power: 95,
    mileage: 23000,
  },
  {
    price: 30000,
    img: "media/images/skodaNew.png",
    make: "Skoda",
    model: "Octavia",
    year: 2019,
    engine: 1.4,
    power: 156,
    mileage: 45000,
  },
];

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
