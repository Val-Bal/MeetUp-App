import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningalert, setWarningAlert] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are currently offline. Event data may not be up to date.");
    }
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
    {warningalert.length ? <WarningAlert text={warningalert} /> : null}
    <h1>Meet App</h1>
    <h3>Choose your nearest city</h3>
    <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
    </div>
    <CitySearch 
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity}
      setInfoAlert={setInfoAlert} />
    <NumberOfEvents updateEvents={updateEvents} currentCity={currentCity} setErrorAlert={setErrorAlert} />
    {/* <NumberOfEvents setCurrentNOE={setCurrentNOE} /> */}
    <div className="charts-container">
        <EventGenresChart events={events} /> 
        <CityEventsChart allLocations={allLocations} events={events} /> 
    </div>
    <EventList events={events} />
   </div>
 );
}

export default App;

    