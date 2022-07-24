import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="/" type="video/mp4"/>
      </video>
      <Header />
    </div>
  );
}

export default App;
