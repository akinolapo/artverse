import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='w-full h-screen px-8'>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/artverse moving background.mp4`} type="video/mp4"/>
      </video>
      <Header />
      <About/>
    </div>
  );
}

export default App;
