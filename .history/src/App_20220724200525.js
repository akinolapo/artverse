import Header from './components/Header/Header';

function App() {
  return (
    <div className='p-0'>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/artverse moving background.mp4`} type="video/mp4"/>
      </video>
      <div className='px-8 mt-8'>
      <Header />
      </div>
    </div>
  );
}

export default App;
