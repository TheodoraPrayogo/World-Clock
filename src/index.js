function updateJakartaTime() {
  //Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Asia/Jakarta");

  jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do, YYYY");
  jakartaTimeElement.innerHTML = jakartaTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

setInterval(updateJakartaTime, 1000);

function updateSydneyTime() {
  //Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

setInterval(updateSydneyTime, 1000);

function updateHoustonTime() {
  //Houston

  let houstonElement = document.querySelector("#houston");
  let houstonDateElement = houstonElement.querySelector(".date");
  let houstonTimeElement = houstonElement.querySelector(".time");
  let houstonTime = moment().tz("US/Pacific-New");

  houstonDateElement.innerHTML = houstonTime.format("MMMM Do, YYYY");
  houstonTimeElement.innerHTML = houstonTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

setInterval(updateHoustonTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone==="current") {
    cityTimeZone=moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("US/Pacific", "Houston").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small>
        </div>
      </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
