function updateJakartaTime () {
//Jakarta
let jakartaElement = document.querySelector("#jakarta");
let jakartaDateElement = jakartaElement.querySelector(".date");
let jakartaTimeElement = jakartaElement.querySelector(".time");
let jakartaTime=moment().tz("Asia/Jakarta");

jakartaDateElement.innerHTML=jakartaTime.format("MMMM Do, YYYY");
jakartaTimeElement.innerHTML=jakartaTime.format("h:mm:ss [<small>]A[<small>]");
}

setInterval(updateJakartaTime,1000);


function updateSydneyTime (){
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

setInterval(updateSydneyTime,1000);
