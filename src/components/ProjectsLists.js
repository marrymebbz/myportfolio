import '../App.css';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NoCodeProjects from '../components/NoCodeProjects';
import DesignProjects from '../components/DesignProjects';
import FrontendProjects from '../components/FrontendProjects';
import OtherProjects from '../components/OtherProjects';

function ProjectsLists() {
  return (
    <Tabs
      defaultActiveKey="project1"
      id="justify-tab-example"
      className="bg-blue-opacity mb-0 d-flex justify-content-center align-items-center"
      justify
    >
      <Tab eventKey="project1" title="🧩 Content Management System" className="bg-blue-opacity-lighter text-white p-3 projects-border">
        <NoCodeProjects />
      </Tab>
      <Tab eventKey="project2" title="🎨 Creative Design" className="bg-blue-opacity-lighter text-white p-3 projects-border">
        <DesignProjects />
      </Tab>
      <Tab eventKey="project3" title="💻 Front-end Web Development" className="bg-blue-opacity-lighter text-white p-3 projects-border">
        <FrontendProjects />
      </Tab>
    </Tabs>
  );
}

export default ProjectsLists;