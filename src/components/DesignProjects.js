import React from 'react';
import photoshop from '../images/tools/design/psd.png';
import illustrator from '../images/tools/design/illustrator.png';

function DesignProjects() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <img src={photoshop} alt="Design Photoshop Tool" style={{ height: '45px' }} />
      <img src={illustrator} alt="Design Illustrator Tool" style={{ height: '45px' }} />
    </div>
  );
}

export default DesignProjects;
