import React from 'react';
import './pages.scss';

export default function CV() {
    return (
        <div id='cv'>
            <div className='cvSection'>
                <div className='cvHeader'>About</div>
                <div className='cvParagraph'>I am a motivated front end web developer with 3 years of professional experience
                    mostly focused around Javascript and the React library.
                    I am looking to find a role, either remote or located around Brighton, that will challenge me and enable me to develop the skills that I have gained
                    and potentially allow me to gain experience in areas I have less experience in.</div>
            </div>
            <div className='cvSection'>
                <div className='cvHeader'>Work Experience</div>
                <div className='cvSubHeader'>
                    2021 → 2023 - React Developer - iCode Systems
                </div>

                <div className='cvParagraph'>
                    My main responsibility has been to implement the front end for a web based commercial application, this involves:
                    <ul>
                        <li>Collaborating with the backend developer and project manager to understand and develop solutions to the customer’s requirements.</li>
                        <li>Implementing the UI using React, focusing on responsiveness and usability, and integrating it with the APIs.</li>
                        <li>Managing the project's dependencies using Node JS.</li>
                        <li>Managing the remote Git repository for the project.</li>
                        <li>Responsible for deploying the project to the AWS server and ensuring that it has SSL certification.</li>
                        <li>Creating automated tests using Jest, mainly used to verify APIs but also on the front end.</li>
                    </ul>
                    I have also had the opportunity to work on other coding projects mostly done in Python. These usually involved creating small programs to perform encryption on files.
                </div>

                <div className='cvSubHeader '>
                    2020 → 2021 - University Dissertation
                </div>

                <div className='cvParagraph'>
                    My dissertation project involved creating a React Native mobile app for a client, which required close collaboration with both the client and my academic supervisor.
                    Through this project, I gained valuable experience in React Native and mobile app development,
                    as well as a deeper understanding of the entire software development process - from requirements elicitation to design and implementation in a client-focused context.
                </div>

                <div className='cvSubHeader'>
                    2019 → 2020 - Web Developer - Fresh Relevance
                </div>
                <div className='cvParagraph'>
                    During my 13-month industrial placement at Fresh Relevance, I worked as a software developer with a primary focus on creating JavaScript scripts for use on clients' eCommerce websites,
                    including some of the UK's largest brands. This would often involve ensuring the script was compatible with the clients, Magento, Shopify or Vue site. In addition to this,
                    I was able to expand my skill set by working on other areas, including designing UI components using React and creating an API in Python to link them together.
                    This placement was instrumental in improving my technical skills and knowledge, as well as helping me to develop crucial soft skills such as communication and time management.
                    I frequently collaborated with the support team and other developers to ensure the scripts met customers' requirements.
                </div>
            </div>

            <div className='cvSection'>
                <div className='cvHeader'>Technical Skills</div>
                <ul>
                    <li>Automated testing (Jest, Mocha)</li>
                    <li>Bug management, Jira / Fogbugz</li>
                    <li>CSS & CSS Preprocessors such as LESS/SCSS</li>
                    <li>Git / version control</li>
                    <li>HTML5</li>
                    <li>JavaScript / Typescript</li>
                    <li>Linux / Command Line</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>React JS</li>
                    <li>RESTful API design and integration</li>
                    <li>SQL / MySQL</li>
                    <li>UI design</li>
                </ul>

            </div>
            <div className='cvSection'>
                <div className='cvHeader'>Education</div>
                <div className='cvSubHeader'>University of Portsmouth - (2017 → 2021)</div>
                <div className='cvSubHeader'>Bachelors of Science with Honors, Computer Science: First Class</div>
                <ul>
                    <li>Theoretical Computer Science - 86%</li>
                    <li>Computer Operating Systems and Intermediate Networking</li>
                    <li>Distributed Systems and Security - 76%</li>
                    <li>Advanced Networks - 72%</li>
                    <li>Dissertation - 70%</li>
                    <li>Internet of Things - 66%</li>
                </ul>

                <div className='cvSubHeader'>Norton Knatchbull School - (2010 → 2017)</div>
                <div className='cvSubHeader'>A-levels</div>
                <ul>
                    <li>Computer Science</li>
                    <li>Mathematics</li>
                    <li>History</li>
                </ul>
                <div className='cvSubHeader'>GCSE</div>
                <ul>
                    <li>11 at grades A - C, including Maths (A) and English (B)</li>
                </ul>
            </div>
            <div className='cvSection'>
                <div className='cvHeader'>Additional Experience</div>
                <div className='cvSubHeader'>IBM Subversive Project</div>
                <div className='cvParagraph'>In my first year of university, I participated in the IBM subversive project, where our team researched, designed,
                    and built a cybersecurity solution, which we presented to a group at IBM. Our team specifically focused on addressing cybersecurity concerns related to airports.
                    Within the team, my primary responsibility was conducting research and contributing to the development of the solution.</div>
                <div className='cvSubHeader'>Park Maintenance Volunteer at Staunton Country Park</div>
                <div className='cvParagraph'>During my free time, I volunteer for Hampshire County Council at Staunton Country Park,
                    where I assist with practical tasks such as habitat maintenance and gardening. </div>
                <div className='cvSubHeader'>Full clean driving license</div>
            </div>
        </div>
    );
};