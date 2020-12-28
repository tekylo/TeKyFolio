import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';
import './Greeting.css';
import landingPerson from '../../assets/lottie/landingPerson';
import developer from '../../assets/lottie/developer-at-work.json';
import software from '../../assets/lottie/software-development.json';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import ManOnTable from '../../assets/images/manOnTable.svg'
import programmer  from '../../assets/images/programmer.svg'
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { illustration, greeting } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  return (
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1
                    className={isDark ? 'dark-mode greeting-text' : 'greeting-text'}
                >
                  {' '}
                  {greeting.title}{' '}
                  <span className="wave-emoji">{emoji('👋')}</span>
                </h1>
                <p
                    className={
                      isDark
                          ? 'dark-mode greeting-text-p'
                          : 'greeting-text-p subTitle'
                    }
                >
                  {greeting.subTitle}
                </p>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contacto" href="#contact" />
                  <Button
                      text="Descargar CV"
                      newTab={true}
                      href={greeting.resumeLink}
                  />
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              {/*{illustration.animated ? (*/}
              {/*    <DisplayLottie animationData={software} />*/}
              {/*) : (*/}
                  <img
                      alt="man sitting on table"
                      src={programmer}
                  ></img>
              {/*)}*/}
            </div>
          </div>
        </div>
      </Fade>
  );
}
