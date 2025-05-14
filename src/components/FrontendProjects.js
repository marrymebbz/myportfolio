import React from 'react';
import html5 from '../images/tools/frontend/html5.png';
import css from '../images/tools/frontend/css3.png';
import js from '../images/tools/frontend/js.png';
import bootstrap from '../images/tools/frontend/bs.png';
import tailwind from '../images/tools/frontend/tailwind.png';
import reactjs from '../images/tools/frontend/reactjs.png';
import nextjs from '../images/tools/frontend/nextjs.png';

function FrontendProjects() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <img src={html5} alt="Frontend HTML5 Tool" style={{ height: '45px' }} />
      <img src={css} alt="Frontend CSS Tool" style={{ height: '45px' }} />
      <img src={js} alt="Frontend JavaScript Tool" style={{ height: '45px' }} />
      <img src={bootstrap} alt="Frontend Bootstrap CSS Tool" style={{ height: '45px' }} />
      <img src={tailwind} alt="Frontend Tailwind CSS Tool" style={{ height: '45px' }} />
      <img src={reactjs} alt="Frontend React JavaScript Tool" style={{ height: '45px' }} />
      <img src={nextjs} alt="Frontend Next Javascript Tool" style={{ height: '45px' }} />
    </div>
  );
}

export default FrontendProjects;
