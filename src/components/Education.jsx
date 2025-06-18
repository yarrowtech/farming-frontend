
import React, { useEffect } from 'react';
import './Education.css'
import { Link } from 'react-router-dom';

function Education() {

  useEffect(() => {
    const track = document.getElementById('marquee-track_video');
    if (track) {
      track.innerHTML += track.innerHTML; // Duplicate for seamless scroll
    }
  }, []);

  // Remove unused Marquee component and its useEffect

  return (
    <>

        <video autoPlay muted loop id="background-video">
        <source src="/Education_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>


<div id="education">
      <div className='e_header' id="education_header">
        <h1>Welcome to Education hub in the world of Smart Farming</h1>
         <button
          className='header_btn'
          onClick={() => {
            document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Learn Smart Farming
        </button>
        </div>
</div>


      <div className="articles" id="articles">
        <h1>Articles</h1>
        <div className="articles_items">

          <div className="item1">
            <div className='item_img'>
              <img src="green1.jpg" alt="green1" id="img1" />
            </div>
            <div className='item_text'>
              <h2>Article Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              </p>
            </div>
          </div>


          <div className="item2">
            <div className='item_img'>
              <img src="green2.jpg" alt="green2" id="img2" />
            </div>
            <div className='item_text'>
              <h2>Article Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              </p>
            </div>
          </div>

          <div className="item3">
            <div className='item_img'>
              <img src="green3.jpg" alt="green3" id="img3" />
            </div>
            <div className='item_text'>
              <h2>Article Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              </p>
            </div>
          </div>
        </div>

      </div>







      <div className="tips" id="tips">
        <h1>Tips & Tricks about Smart Farming</h1>
        </div>
        <div className="tips_items">

          <div className="tips_item1">
            <div className='tips_item_text'>
              <h2>Tips Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>

          <div className="tips_item2">
            <div className='tips_item_text'>
              <h2>Tips Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>


          <div className="tips_item3">
            <div className='tips_item_text'>
              <h2>Tips Tittle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem deleniti. Reiciendis quibusdam vitae, magni dolorum minus dolor quam quia quod in placeat? Accusamus mollitia earum repellendus voluptates tempora.</p>
            </div>
          </div>
        </div>




<div className="services_video_heading" id="videos">
  <h1>Learning Videos</h1>
</div>

<div id="services_video" className="services_video">
  <div className="marquee-wrapper_video">
    <div className="marquee-track_video">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="item_video_card">
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID_1" target="_blank" rel="noreferrer" className="video_link">
              <video
                src="video1.mp4"
                className="video_item_video"
                autoPlay
                loop
                muted
              />
              <div className="video_label">GreenHarvest</div>
            </a>
          </div>

          <div className="item_video_card">
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID_2"
              target="_blank"
              rel="noreferrer"
              className="video_link"
            >
              <video
                src="video2.mp4"
                className="video_item_video"
                autoPlay
                loop
                muted
              />
              <div className="video_label">AquaFarm</div>
            </a>
          </div>

          <div className="item_video_card">
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID_3"
              target="_blank"
              rel="noreferrer"
              className="video_link"
            >
              <video
                src="video1.mp4"
                className="video_item_video"
                autoPlay
                loop
                muted
              />
              <div className="video_label">CropView360</div>
            </a>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>











<div className='gov_title' id="government_schemes">
        <h1>Government Schemes For Farmers</h1>
      </div>

      <div className="gov_schemes">
        <div className='state_gov'>
          <div className='image_frame'>
           <Link to='/state_gov'><img src="state.jpg" alt="State Scheme" className="image_zoom" /></Link> 
          </div>
          <div className='state_text'>
            <h3>State government scheme for farmers</h3>
          </div>
        </div>

        <div className='central_gov'>
          <div className='image_frame'>
            <Link to='/central_gov'><img src="central.jpg" alt="Central Scheme" className="image_zoom" /></Link> 
          </div>
          <div className='central_text'>
            <h3>Central government scheme for farmers</h3>
          </div>
        </div>
      </div>















    </>
  )
}

// Duplicate marquee items for seamless scroll using useEffect



export default Education













