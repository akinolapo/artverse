import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <video id="background-video" autoplay loop muted >
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">
      </video>
      <Header />
    </div>
  );
}

export default App;
