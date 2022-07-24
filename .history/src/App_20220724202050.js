import Header from './components/Header/Header';

function App() {
  return (
    <div className='w-full h-screen'>
      <video loop autoPlay muted id="background-video">
        <source src={process.env.PUBLIC_URL+`assets/artverse moving background.mp4`} type="video/mp4"/>
      </video>
      <div className='px-8 pt-8'
      <Header />
    </div>
  );
}

export default App;
