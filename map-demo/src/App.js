import './App.css';
import Map from "./components/Map"

function App() {
  const key = 'AIzaSyC6NgKhr_FZ0GSXhic92ozn0Qee5Ce6ZJU'

  return (
    <div className="App">
      <header>
        Map Demo
      </header>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
