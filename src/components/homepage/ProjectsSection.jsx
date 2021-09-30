import React from 'react';
import ProjectsSection from './ProjectsSection.css';

//pictures 
import bookbookhp from '../../assets/bookbook-homepage.png'
// import bookbookps from '../../assets/bookbook-photostrip.png'
import curbeehp from '../../assets/curbee-homepage.png'
// import curbeeps from '../../assets/curbee-photostrip.png'
import indexhp from '../../assets/index-homepage.png'
// import indexps from '../../assets/index-photostrip.png'
import github from '../../assets/github.png'

const Projects = () => {

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        <label>
          <li>
            <div>
              <h4>
                <a href="https://acp-index.netlify.app/">ACP-Index</a>
                <a href="https://github.com/index-alchemy">
                  <img src={github} alt="github icon"/>
                </a>
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae temporibus qui distinctio fugit laudantium, sapiente est dolore earum, ea pariatur provident dolorum aliquam. Magnam libero eveniet dignissimos, eaque dolores dolor.
              </p>
              <img src={indexhp} alt="acp index homepage" />
            </div>
          </li>
        </label>

        <label>
          <li>
            <div>
              <h4>
                  <a href="www.curbee.app/">curbee</a>
                  <a href="https://github.com/curbee-by-curbees/">
                    <img src={github} alt="github icon"/>
                  </a>
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae temporibus qui distinctio fugit laudantium, sapiente est dolore earum, ea pariatur provident dolorum aliquam. Magnam libero eveniet dignissimos, eaque dolores dolor.
              </p>
              <img src={curbeehp} alt="curbee homepage" />
            </div>
          </li>
        </label>

        <label>
            <li>
              <div>
                <h4>
                  <a href="bookbookbook.netlify.app">bookbook</a>
                  <a href="https://github.com/openbookbook/">
                    <img src={github} alt="github icon"/>
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veritatis officia est nostrum minus, nam ratione sapiente autem repellendus quam, officiis ex impedit sit quia vitae consequuntur at nesciunt aperiam.
                </p>
              </div>
              <img src={bookbookhp} alt="bookbook site"/>
            </li>
          </label>

        
      </ul>
    </div>
  )

}

export default Projects;