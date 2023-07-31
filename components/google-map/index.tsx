
import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Ariadne+Maps+GmbH,+Second+Floor,+Brecherspitzstraße,+Munich,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="100%"
        height="450"
        loading="lazy">
      </iframe>
    </div>
  );
};

export default GoogleMap;
