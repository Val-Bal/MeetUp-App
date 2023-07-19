import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  const updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all") ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  
 return (
   <div className="App">
     <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
     <NumberOfEvents updateEvents={updateEvents} />
     <EventList events={events} />
   </div>
 );
}

export default App;
    