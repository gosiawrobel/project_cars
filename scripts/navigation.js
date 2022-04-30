$mainNav = document.querySelector(`#mainNav`);
$clickedLogo = document.querySelector(`.clickedLogo`);

$mainNav.innerHTML = `<logo>
 <img class="logo clickedLogo" src="media/images/autocar.png" alt="logo" />
</logo>

 <nav class="navigation">
 <ul class="navLinks">
   <li><a id="homeNav" class="links" href="index.html">Home</a></li>
   <li><a id="carsNav" class="links" href="car_selection.html">Cars</a></li>
  <li><a id="aboutNav" class="links" href="about.html">About</a></li>
 </ul>
 </nav>
<a href="account.html"><button id="accBtn" class="accBtn">Account</button><a/>
 `;

$clickedLogo.addEventListener("click", () => {
  document.location.href = "car_selection.html";
});
//  `<logo>
// <img class="logo" src="media/images/autocar.png" alt="logo" />
// </logo>

// <nav class="collapse navbar-collapse">
// <ul class="navbar-nav">
//   <li class="nav-item"><a id="homeNav" class="nav-link" href="index.html">Home</a></li>
//   <li class="nav-item"><a id="carsNav" class="nav-link" href="car_selection.html">Cars</a></li>
//   <li class="nav-item"><a id="aboutNav" class="nav-link" href="about.html">About</a></li>
// </ul>
// </nav>
// <a href="account.html"><button id="accBtn" class="accBtn">Account</button><a/>
// `;

// `<logo>
// <img class="logo" src="media/images/autocar.png" alt="logo" />
// </logo>

// <nav class="navigation">
// <ul class="navLinks">
//   <li><a id="homeNav" class="links" href="index.html">Home</a></li>
//   <li><a id="carsNav" class="links" href="car_selection.html">Cars</a></li>
//   <li><a id="aboutNav" class="links" href="about.html">About</a></li>
// </ul>
// </nav>
// <a href="account.html"><button id="accBtn" class="accBtn">Account</button><a/>
// `;
