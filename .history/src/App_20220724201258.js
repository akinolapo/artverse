import Header from './components/Header/Header';

function App() {
  return (
    <div className='px-8 mt-8'>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/artverse moving background.mp4`} type="video/mp4"/>
      </video>
      <div >
      <Header />
      
    </div>
  );
}

export default App;
