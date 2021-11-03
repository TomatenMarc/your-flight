/*global chrome */
import {Button} from "semantic-ui-react";
import React from "react";

function sendMessage() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "get_airports"});
    });
}


function SelectTextButton() {
    return <Button id="start-button"  onClick={sendMessage}>Get Airports</Button>;
}

export default SelectTextButton;