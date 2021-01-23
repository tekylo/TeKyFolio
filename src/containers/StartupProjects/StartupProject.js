import React, { useContext } from 'react';
import './StartupProjects.css';
import { Fade } from 'react-reveal';
import { bigProjects } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? 'dark-mode project-subtitle'
                : 'subTitle project-subtitle'
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project, i) => (
                <div
                  key={i}
                  className="saaya-health-div"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt="Saad Working" src={project.image.default} />
                </div>
              ))}
            </div>
            <div className="startup-project-image" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
