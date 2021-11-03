console.log("Content Script for Your Flight Injected");

document.addEventListener("click", (event) => {
    let stopText = event.target.innerText;
    let airportTag = stopText.split("[")[1].split("]")[0];
    console.log(airportTag);
});