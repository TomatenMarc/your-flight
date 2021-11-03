/*global chrome */

console.log("Content Script for Your Flight Injected");

function sendAirportTags(airportTag){
    chrome.runtime.sendMessage({message: "airportTags", airportTag: airportTag});
}

chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message === 'get_airports') {
            console.log("get_airports");
            document.addEventListener("click", (event) => {
                let stopText = event.target.innerText;
                let airportTag = stopText.split("[")[1].split("]")[0];
                console.log(airportTag);
                sendAirportTags(airportTag);
            });
        }
    }
);