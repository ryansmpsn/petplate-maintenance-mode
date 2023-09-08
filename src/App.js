import logo from './images/logo.png';
import './App.css';
import DesktopDogIllustration from './images/DesktopDogIllustration.png';
import MobileDogIllustration from './images/MobileDogIllustration.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="petplate-logo" alt="petplate logo" />
      </header>

      <main className="main">
        <div className="content">
          <h1 className="title">We’ll be right back</h1>
          <p className="text">
            We are busy updating PetPlate for you. Please check back soon.
          </p>
        </div>

        <div className="image-container">
          <img
            src={MobileDogIllustration}
            className="mobile-illustration"
            alt="Illustration of a dog jumping"
          />
          <img
            src={DesktopDogIllustration}
            className="desktop-illustration"
            alt="Illustration of a dog jumping"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
