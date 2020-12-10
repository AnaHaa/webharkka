import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";
// Import google map, axios and usefull react functions

// Import map theme for the Google Maps
import theme from './mapStyles';

const Map = () => {
    // @ Hong Ly data and useEffect for map markers
    const [newData, setData] = useState([]);
    useEffect(() => {
        axios
          .all([
            axios.get("https://corona.lmao.ninja/v2/countries"),
          ])
          .then((responseArr) => {
            setData(responseArr[0].data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    // Make the markers using the data and map the array
    // So in short: Makes for every country its own marker which contains that countrys covid statistics
    const countries = newData.map((item, i) => {
        return ( <div
            // Get the country coordinates from the data, set the style and value for the marker for each country
            lat={item.countryInfo.lat}
            lng={item.countryInfo.long}
            style={{
                backgroundColor: "#181818",
                padding: "2px",
                textAlign: "center",
                border: "solid 1px",
                width: "100px",
                color: "white",
            }}>
            {item.country}
            <br />
            {"Cases: " + item.cases}
            <br />
            {"Recovered: " + item.recovered}
            <br />
            {"Currently: " + item.active}
            <br />
            {"Deaths: " + item.deaths}
        </div>
        );
    });
    // Return google map with markers array. Use the imported theme ( THEME DOES NOT WORK, BECAUSE I HAVENT ATTACHED BILLING INFORMATION BUT YOU CAN SEE THE THEME FOR SPLIT SECOND )
    return (
        <div style={{ height: '88vh', width: '100%', marginTop: '20px', border: 'solid white 2px' }}>
        <GoogleMapReact
            options={{
              styles: theme,
            }}
            bootstrapURLKeys={{ key: 'AIzaSyCnvcPoml4e1kPIP1h-eYMatMAwHd04Nog' }}
            defaultCenter={{ lat: 61.50, lng: 23.79 }}
            defaultZoom={5}>
            {countries}
        </GoogleMapReact>
        </div>
    );
}

export default Map;