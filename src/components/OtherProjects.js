import React from 'react';
import github from '../images/tools/othertools/github.png';
import gitlab from '../images/tools/othertools/gitlab.png';
import jira from '../images/tools/othertools/jira.png';
import trello from '../images/tools/othertools/trello.png';

function OtherProjects() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <img src={github} alt="Frontend HTML5 Tool" style={{ height: '45px' }} />
      <img src={gitlab} alt="Frontend CSS Tool" style={{ height: '45px' }} />
      <img src={jira} alt="Frontend JavaScript Tool" style={{ height: '45px' }} />
      <img src={trello} alt="Frontend Bootstrap CSS Tool" style={{ height: '45px' }} />
    </div>
  );
}

export default OtherProjects;
