let checkoutInfo = {
  hours: 2,
  professionals: 1,
  cleaningMaterails: "No, i have them",
  specialRequest: "",
  frequency: "Weekly",
  serviceDay: "",
  serviceTime: "8:00 - 10:00",
};

// Select Hour
function selectHour(buttonId) {
  var buttons = document.getElementsByClassName("hourBtn");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.id === buttonId) {
      button.classList.add("seletedBtn");
      checkoutInfo.hours = button.innerHTML;
      console.log(checkoutInfo);
    } else {
      button.classList.remove("seletedBtn");
    }
  }
}

// Select Professionals
function selectProfessionals(buttonId) {
  var buttons = document.getElementsByClassName("professionBtn");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.id === buttonId) {
      button.classList.add("seletedBtn");
      checkoutInfo.professionals = button.innerHTML;
      console.log(checkoutInfo);
    } else {
      button.classList.remove("seletedBtn");
    }
  }
}

// Select cleaningMaterials
function selectCleaningMaterials(buttonId) {
  var buttons = document.getElementsByClassName("cleaningBtn");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.id === buttonId) {
      button.classList.add("seletedBtn");
      checkoutInfo.cleaningMaterails = button.innerHTML;
      console.log(checkoutInfo);
    } else {
      button.classList.remove("seletedBtn");
    }
  }
}

// Select cleaningMaterials
function getSpecialRequest() {
  var textarea = document.getElementById("specialRequest");
  checkoutInfo.specialRequest = textarea.value;

  console.log(checkoutInfo);
}

// Select selectFrequency
function selectFrequency(frequencyId) {
  console.log("Selected hour: " + frequencyId);
  var buttons = document.getElementsByClassName("checkoutfrequency");
  var frequencyHeading = document.getElementById("frequencyCheckoutHeading");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    // getting innner div value
    if (button.id === frequencyId) {
      button.classList.add("offer-box-selected");
      checkoutInfo.frequency =
        button.childNodes[1].childNodes[1].firstElementChild.innerText;
      frequencyHeading.innerText =
        button.childNodes[1].childNodes[1].firstElementChild.innerText;
      console.log(checkoutInfo);
    } else {
      button.classList.remove("offer-box-selected");
    }
  }

  console.log(checkoutInfo);
}

// Select selectServiceDay
function selectServiceDay(buttonId) {
  var buttons = document.getElementsByClassName("serviceDayBtns");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.id === buttonId) {
      button.childNodes[1].classList.add("seletedBtn");
      checkoutInfo.serviceDay = button.childNodes[1].innerText;
      console.log(checkoutInfo);
    } else {
      button.childNodes[1].classList.remove("seletedBtn");
    }
  }
}

// Select selectServiceDay
function selectServiceTime(buttonId) {
  var buttons = document.getElementsByClassName("serviceTimebtn");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.id === buttonId) {
      button.classList.add("seletedBtn");
      checkoutInfo.serviceTime = button.innerHTML;
      console.log(checkoutInfo);
    } else {
      button.classList.remove("seletedBtn");
    }
  }
}

// Navbar Country selection
function ShowCountry() {
  var x = document.getElementById("CountrySelectionBox");
  var y = document.getElementById("menuSelectionLogin-box");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// Navbar login-signup tab

function showLogin() {
  var x = document.getElementById("menuSelectionLogin-box");
  var y = document.getElementById("CountrySelectionBox");
  //   console.log(x, "ShowCountry");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// hide when clicked outside
// document.addEventListener("mouseup", function (e) {
//     var x = document.getElementById("CountrySelectionBox");
//   var y = document.getElementById("menuSelectionLogin-box");
//     if (!x.contains(e.target)) {
//       x.style.display = "none";
//     }

//   console.log(!y.contains(e.target));
//   if (!y.contains(e.target)) {
//     y.style.display = "none";
//   }
// });

function showLoginModal() {
  var modal = document.getElementById("loginModal");
  modal.style.display = "block";
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    separateDialCode: true,
    preferredCountries: ["ae", "sa"],
  });
}

function hideLoginModal() {
  var modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

function showLocationModal() {
  var modal = document.getElementById("locationModal");
  modal.style.display = "block";
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -33, lng: 151 },
      disableDefaultUI: true,
    });
  }

  window.initMap = initMap;
}

function hideLocationModal() {
  var modal = document.getElementById("locationModal");
  modal.style.display = "none";
}

function showChatModal() {
  var modal = document.getElementById("chatModal");
  modal.style.display = "block";
  var input = document.querySelector("#chatPhone");
  window.intlTelInput(input, {
    separateDialCode: true,
    // excludeCountries: ["in", "il"],
    preferredCountries: ["ae", "sa"],
  });
}

function hideChatModal() {
  var modal = document.getElementById("chatModal");
  modal.style.display = "none";
}

function showSeeMore() {
  var seeMoreBox = document.getElementById("seeMoreBox");
  var serviceBtnBox = document.getElementById("serviceBtnBox");
  seeMoreBox.style.display = "block";
  serviceBtnBox.style.display = "none";
}

function hideSeeMore() {
  var seeMoreBox = document.getElementById("seeMoreBox");
  seeMoreBox.style.display = "none";
}

//Checkout
function changeCheckoutScreen(num) {
  var Step1 = document.getElementById("Step1");
  var Step2 = document.getElementById("Step2");
  var Step3 = document.getElementById("Step3");
  var modal = document.getElementById("frequencyModal");

  if (num == 1) {
    Step1.style.display = "block";
    Step2.style.display = "none";
    Step3.style.display = "none";
  }
  if (num == 2) {
    Step1.style.display = "none";
    Step2.style.display = "block";
    Step3.style.display = "none";
    modal.style.display = "none";

    // Add dates to checkout
    const currentDate = new Date(); // Get current date
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dateObject = {
      currentDate: {
        date: currentDate.getDate(),
        day: daysOfWeek[currentDate.getDay()],
      },
      next13Days: [],
    };

    for (let i = 1; i <= 13; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);

      const date = nextDate.getDate();
      const day = daysOfWeek[nextDate.getDay()];

      dateObject.next13Days.push({
        date: date,
        day: day,
      });
    }

    const ServiceDaysBox = document.getElementById("checkoutServiceDaysBox");

    // add class

    dateObject.next13Days.forEach((day, index) => {
      var div = document.createElement("div");
      div.className = "checkoutRoundedBtnServieBox";
      div.classList.add("serviceDayBtns");

      //  add id to div
      div.id = index + "serviceDay";

      // add function to div
      div.addEventListener("click", () =>
        selectServiceDay(index + "serviceDay")
      );

      // Create the <p> element
      var p = document.createElement("p");
      p.innerText = day.day;

      // Create the button element
      var button = document.createElement("button");
      button.className = "checkoutRoundedBtn";
      button.innerText = day.date;

      // Append the <p> element and button element to the container div
      div.appendChild(p);
      div.appendChild(button);

      // Append the container div to the ServiceDaysBox
      ServiceDaysBox.appendChild(div);
    });
  }
  if (num == 3) {
    Step1.style.display = "none";
    Step2.style.display = "none";
    Step3.style.display = "block";
  }
}

// Initialize and display the map
function initMap() {
  // Create a map object centered at the current location
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    disableDefaultUI: true, // Disable map controls
  });

  // Get the current location
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    // Create a marker at the current location
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
    });

    // Center the map on the current location
    map.setCenter(pos);
  });
}
