import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <video loop muted id="background-video">
        <source src="./assets/artverse moving background.mp4" type="video/mp4"/>
      </video>
      <Header />
    </div>
  );
}

export default App;
