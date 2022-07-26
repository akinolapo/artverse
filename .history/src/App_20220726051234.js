import About from './components/About/About';
import Faqs from './components/Faqs/Faqs';
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
      <Team/>
      <Faqs/>
    </div>
  );
}

export default App;
