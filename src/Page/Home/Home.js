import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Projects from './Projects';
import SendEmail from './SendEmail';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>

      <SendEmail></SendEmail>
    </div>
  );
};

export default Home;