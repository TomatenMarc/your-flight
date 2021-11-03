import React from 'react'
import { List } from 'semantic-ui-react'

function airportListItem(airportTag) {
    return(
        <List.Item style={{padding: "1em"}}>
            <List.Description as='a'>{airportTag}</List.Description>
        </List.Item>
    )
}

function renderListItems(airportTags){
    return airportTags.map((airportTag) => airportListItem(airportTag))
}

function AirportList(props){
    return(
        <div id="airport-list">
            <List divided relaxed>
                {renderListItems(props.airportTags)}
            </List>
        </div>
    )
}

export default AirportList;