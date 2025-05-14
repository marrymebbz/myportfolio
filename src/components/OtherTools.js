import React from 'react';
import github from '../images/tools/othertools/github.png';
import gitlab from '../images/tools/othertools/gitlab.png';
import jira from '../images/tools/othertools/jira.png';
import trello from '../images/tools/othertools/trello.png';

function OtherTools() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <img src={github} alt="Other Tools Github Tool" style={{ height: '45px' }} />
      <img src={gitlab} alt="Other Tools Gitlab Tooll" style={{ height: '45px' }} />
      <img src={jira} alt="Other Tools Jira Tool" style={{ height: '45px' }} />
      <img src={trello} alt="Other Tools Trello Tool" style={{ height: '45px' }} />
    </div>
  );
}

export default OtherTools;
