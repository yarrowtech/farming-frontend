
import React, { useEffect, useState } from 'react';
import './Home.css';
import aboutVideo from '../assets/About3.mp4';


function Home() {

  const images = ['/green1.jpg', '/green2.jpg', '/green3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {    
    const changeImage = () => {
      setOpacity(0); // fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // change image
        setOpacity(1); // fade-in
      }, 1000); // match the transition duration
    };

    const interval = setInterval(changeImage, 3000); // change image every 3s
    return () => clearInterval(interval); // cleanup
  }, []);


  return (
    <>
    <video autoPlay muted loop id="background-video">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      <div className='header' id="header">
        <h1>Welcome to the world of Smart Farming</h1>
        <button
          className='header_btn'
          onClick={() => {
            document.getElementById('login/registration')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Started
        </button>

      </div>

      <div className="introduction" id="introduction">
        <div className="intro_title">
          <h1>Introduction</h1>
        </div>
        <div className="into_items">
          <div className="intro_img">
            <img
              src={images[currentIndex]}
              alt="Smart Farming"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                opacity: opacity,
                transition: 'opacity 1s'
              }}
            />
          </div>

          <div className="intro_para">
            <h4>Smart Farming</h4>
            <p>
              Smart farming integrates advanced technologies like IoT, AI, and sensors into agriculture to optimize productivity and reduce waste. With real-time monitoring of crops, weather, and soil conditions, farmers can make data-driven decisions. This not only increases efficiency but also contributes to sustainable agricultural practices.
              Smart farming enhances food security, reduces environmental impact, and improves the livelihoods of farmers. By leveraging technology, we can create a more resilient and productive agricultural sector that meets the challenges of a growing global population.
            </p>
          </div>
        </div>
      </div>






      <div className="wp_container" id='weather/pest'>
        <video autoPlay muted loop className="background_video">
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="wp_overlay_content">
          <div className="wp_title">
            <h1>Weather & Pest Info</h1>
          </div>

          <div className="wp_box">
            <div className="weather_box">
              <h2>Weather Forecast</h2>
              <p>Stay updated with real-time weather conditions.</p>
              <button className="wp_btn">Check Weather</button>
            </div>

            <div className="pest_box">
              <h2>Pest Alerts</h2>
              <p>Get alerts about potential pest threats near you.</p>
              <button className="wp_btn">Check Pest Info</button>
            </div>
          </div>
        </div>
      </div>





      <div className="About" id='about'>

        <div className='about_info'>
          <h1>About US</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis fuga repellendus, quia hic adipisci laboriosam perferendis mollitia repudiandae consequuntur
            dolore ab reiciendis quos aut ipsa dolores unde velit, odit error.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis fuga repellendus, quia hic adipisci laboriosam perferendis mollitia repudiandae consequuntur
            dolore ab reiciendis quos aut ipsa dolores unde velit, odit error.
          </p>
        </div>

        <div className='about_img'>
          <video autoPlay muted loop playsInline className="background_video">
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>

      </div>









      <div className='LoginRegistration' id="login/registration">
        <div className='login_form'>
          <h2>Login</h2>
          <form>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
        </div>

        <div className='registration_form'>
          <h2>Register</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Address</label>
            <input type="text" placeholder="Enter your address" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Create a password" required />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>






<div className="contact_container" id="contact">
      <div className="contact_card">
        <h1>Contact Us</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Country</label>
          <input type="text" placeholder="Enter your country" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>














    </>

  )
}

export default Home;
