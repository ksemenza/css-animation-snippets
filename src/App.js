import logo from './logo.svg';
import './App.css';
import './skills.css'


import postGres from "./assets/logos/postgres.png";
import apollo from "./assets/logos/apollo.jpg";
import docker from "./assets/logos/docker.png";
import graphql from "./assets/logos/graphql.png";
import html from "./assets/logos/html.png";
import jslogo from "./assets/logos/jslogo.png";
import knex from "./assets/logos/knex.png";
import nodeJS from "./assets/logos/nodeJS.png";
import npm from "./assets/logos/npm.png";
import prisma from "./assets/logos/prisma.png";
import react from "./assets/logos/reactlogo.png";
import redux from "./assets/logos/redux-logo.png";
import sqlite from "./assets/logos/sqlite_logo.png";
import heroku from "./assets/logos/heroku-logo.png";
import vercel from "./assets/logos/vercel-logo.png";
import netify from "./assets/logos/netify-logo.png";

function App() {
  return (
    <div className="App">
      
        
  <h2 className='side-menu'>Projects</h2>
      <div className='envelope' data-tooltip='Project Title' >

        <div className='hidden-content'>
             <a
                  className="project-name-a"
                  href="https://conway-life-game-js-git-master.ksemenza.vercel.app/"
                  target="blank"
                >project</a>
          <div className='about-ctr'>
               <div className="tech-img-wrap">

   
          <div className="logo-row">
            {" "}
            <h3 className="tech-title">
              Front-End
              <span />
            </h3>

            <div className='logo-img-name-ctr'>
            <div className="logo-img-ctr">
              <img className="tech-logo-img" src={html} />
              <img className="tech-logo-img" src={jslogo} />
              <img className="tech-logo-img" src={nodeJS} />
              <img className="tech-logo-img" src={npm} />
              <img className="tech-logo-img" src={react} />
              <img className="tech-logo-img" src={redux} />
              <img className="tech-logo-img" src={apollo} />
            </div>
            <h4 className="tech-stack-list">
              HTML ~ CSS ~ JavaScript ~ Node.js ~ Npm ~ React.js ~ Redux ~ Apollo GraphQL 
            </h4>
            </div>
          </div>

          <div className="logo-row">
            <h3 className="tech-title">
              Back-End <span />
            </h3>

            <div className='logo-img-name-ctr'>
            <div className="logo-img-ctr">
              <img className="tech-logo-img" src={sqlite} />
              <img className="tech-logo-img" src={postGres} />
              <img className="tech-logo-img" src={knex} />

              <img className="tech-logo-img" src={prisma} />
          
              <img className="tech-logo-img" src={docker} />
              <img className="tech-logo-img" src={graphql} />
            </div>
            <h4 className="tech-stack-list">
              Sqlite ~ PostGres ~ Knex ~ Prisma ~ Docker ~ GraphQL
            </h4>
          </div>
          </div>

          <div className="deploy-ctr">
            <h3 className="tech-title">
              Deployment <span />
            </h3>
            <div className= 'deploy-logo-img-name-ctr'>
            <div className="logo-img-ctr">
              <img className="tech-logo-img" src={heroku} />
              <img className="tech-logo-img" src={vercel} />
              <img className="tech-logo-img" src={netify} />
            </div>
            <h4 className="tech-stack-list">
              Heroku ~ Vercel (Zeit) ~ Netify ~ Cpanel ~ FTP{" "}
            </h4>
          </div>
          </div>
</div>

        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
