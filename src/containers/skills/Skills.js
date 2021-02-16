import React, { useContext } from 'react';
import './Skills.css';
import { Fade } from 'react-reveal';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { illustration, skillsSection } from '../../portfolio';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import StyleContext from '../../contexts/StyleContext';
import developerActivity from '../../assets/images/developerActivity.svg';
import software from '../../assets/lottie/software-development.json';

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? 'dark-mode main' : 'main'} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={software} />
            ) : (
              <img
                alt="Man Working"
                src={developerActivity}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? 'dark-mode skills-heading' : 'skills-heading'}
            >
              {skillsSection.title}
              {' '}
            </h1>
            <p
              className={
                    isDark
                      ? 'dark-mode subTitle skills-text-subtitle'
                      : 'subTitle skills-text-subtitle'
                  }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => (
                <p
                  key={i}
                  className={
                            isDark
                              ? 'dark-mode subTitle skills-text'
                              : 'subTitle skills-text'
                          }
                >
                  {skills}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}