import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/me-about.JPG`} type="video/mp4"/>
      </video>
      <Header />
    </div>
  );
}

export default App;
