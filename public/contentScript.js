/*global chrome */

console.log("Content Script for Your Flight Injected");

function sendAirportTags(airportTag) {
    chrome.runtime.sendMessage({message: "airportTags", airportTag: airportTag});
}


window.onchange = function (event) {
    /**
     * This function is called if the content of the page has changed.
     * Todo: Change this method and let it collect and send all data to the extension.
     * @type {string}
     */
    let element = document.getElementsByClassName("jb-js-checked")[0].parentNode.getElementsByClassName("jb-searchresult-connection-detail")[0].innerText
    console.log(element);
}

