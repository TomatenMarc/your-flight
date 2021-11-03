/*global chrome*/
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SearchButton from "./Components/SearchButton";
import AirportList from "./Components/AirportList";
import * as ReactDOM from "react-dom";

let airportTags = [];

chrome.runtime.onMessage.addListener(
    function (request){
        if(request.message === 'airportTags') {
            airportTags.push(request.airportTag);
            console.log(airportTags);
            ReactDOM.render(<AirportList airportTags ={airportTags} />, document.getElementById('root'));
        }
    }
);


function App() {
  return (
      <div>
        <SearchButton />
      </div>
  );
}

export default App;
