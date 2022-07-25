import About from './components/About/About';
import Header from './components/Header/Header';
import Team from './components/Team/Team';

function App() {
  return (
    <div className='w-full h-screen'>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/artverse moving background.mp4`} type="video/mp4"/>
      </video>
      <Header />
      <About/>
      <Team
    </div>
  );
}

export default App;
