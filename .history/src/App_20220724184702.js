import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <video loop autoPlay muted id="background-video">
        <source src=artverse moving background.mp4" type="video/mp4"/>
      </video>
      <Header />
    </div>
  );
}

export default App;
