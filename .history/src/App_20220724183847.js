import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <video id="background-video" autoplay loop muted>
        <source src="./assets/artverse moving background.mp4" type="video/mp4"/>
      </video>
      <Header />
    </div>
  );
}

export default App;
