import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { InfoAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities"
      ? allEvents
      : allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  const updateEvents = (location, number) => {
    getEvents().then((events) => {
      const locationEvents = (location === "See all cities")
        ? events
        : events.filter((event) => event.location === location);
      setEvents(locationEvents.slice(0, number));
      setCurrentNOE(number);
    });
  }
  
 return (
   <div className="App">
    <h1>Meet App</h1>
    <h3>Choose your nearest city</h3>
    <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
    </div>
    <CitySearch 
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity}
      setInfoAlert={setInfoAlert} />
    <NumberOfEvents updateEvents={updateEvents} currentCity={currentCity} />
    {/* <NumberOfEvents setCurrentNOE={setCurrentNOE} /> */}
    <EventList events={events} />
   </div>
 );
}

export default App;

    