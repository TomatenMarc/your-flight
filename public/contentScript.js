/*global chrome */

console.log("Content Script for Your Flight Injected");

function sendAirportTags(airportTag) {
    chrome.runtime.sendMessage({message: "airportTags", airportTag: airportTag});
}


function getAirportTags (event) {
    let element = document.getElementsByClassName("jb-js-checked")[0].parentNode.getElementsByClassName("jb-searchresult-connection-detail")[0].innerText
    console.log(element);
}

window.onchange = getAirportTags();

