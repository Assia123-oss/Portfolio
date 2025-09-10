import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.postimg.cc/mDjtCPLM/me.jpg" alt="Teta Assia" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Assia123-oss" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/teta-assia-286047369/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Teta Assia</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Assia123-oss" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/teta-assia-286047369/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;