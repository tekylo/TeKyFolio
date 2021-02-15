import React, { Suspense, useContext } from 'react';
import './twitter.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Loading from '../loading/Loading';
import { twitterDetails } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

const renderLoader = () => <Loading />;
const cantDisplayError = "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(() => {
    if (!document.getElementById('twitter').innerHTML.includes('iframe')) {
      document.getElementById('twitter').innerHTML = cantDisplayError;
    }
  }, 10000);
}
const widthScreen = window.screen.width;

export default function Twitter() {
  const { isDark } = useContext(StyleContext);

  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? '1' : '2'}
              theme={isDark ? 'dark' : 'light'}
              noFooter
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  }
  return null;
}