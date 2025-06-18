import React, { useState } from 'react';
import './central_gov.css';

const schemesData = [
  { id: 1, name: 'PM-KISAN Yojana' },
  { id: 2, name: 'Soil Health Card Scheme' },
  { id: 3, name: 'Kisan Credit Card (KCC)' },
  { id: 4, name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)' },
  { id: 5, name: 'National Agriculture Market (e-NAM)' }
];

function CentralGov() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [schemes, setSchemes] = useState(schemesData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleApply = (id) => {
    alert(`Applied for: ${schemes.find(s => s.id === id).name}`);
  };

  const handleRemove = (id) => {
    setSchemes(schemes.filter(scheme => scheme.id !== id));
  };

  return (
    <>

            <video autoPlay muted loop id="background-video">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>




      {!isSubmitted ? (
        <div className="country_container" id="country_details">
          <div className="country_card">
            <h1>Country details</h1>
            <form onSubmit={handleSubmit}>

              <label>Country name</label>
              <input type="text" placeholder="Enter the name of Your Country" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="database_container">
          <div className="database_card">
            <h1>Government Schemes Database</h1>
            {schemes.length > 0 ? (
              schemes.map((scheme) => (
                <div className="scheme_card" key={scheme.id}>
                  <span>{scheme.name}</span>
                  <div className="btns">
                    <button onClick={() => handleApply(scheme.id)}>Apply</button>
                    <button onClick={() => handleRemove(scheme.id)}>Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No schemes available now.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CentralGov;










