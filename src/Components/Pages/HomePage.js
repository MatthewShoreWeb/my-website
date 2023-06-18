import React, { useState, useRef, useEffect } from 'react';
import './pages.scss';




export default function HomePage() {



    const skillDescs = {
        testing: (<><div className='paragraph'>I have got experience of both the <span className='bold'>JEST and Mocha </span>
            testing libraries. In my role at iCode I have implemented
            automated JEST tests to verify API data. These tests were integrated with Jenkins running on an AWS server.
            This allowed for the tests to automatically run every time a new build was created. At university I mostly used Mocha for use in my courseworks.</div>
        </>),
        bug: <><div className='paragraph'>I have experience using and managing bug management software as part of a large team and for my own projects. Whilst on placement, I used <span className='bold'>Fogbugz</span> to recieve cases raised
            by the companies support team. Sometimes I would send these cases back with my own feedback or raise my own cases when a new bug was identified. More recently, at my role at iCode,
            I am using <span className='bold'>Jira</span> to manage tasks and bugs alongside the backend developer. This has been an essential part of the softwares development as it allows for a much more efficient delivery.</div></>,
        styling: <><div className='paragraph'>I have extensive experience using CSS for styling. I have used it for all front end development projects I have done. More recently, however, I like to use CSS preprocessors such as LESS and SASS
            as I prefer the added functionality and usability that they provide. I have used <span className='bold'>SASS</span> at my current job as well as on personal projects such as this website.</div></>,
        git: `I have extensive experience using GIT both as part of a large team and for independent projects. Whilst I was on placement,
        the company used GIT for all of its version control. I had to ensure that my pull requests conformed to the companies standards. 
        I also got the oppertunity towards the end of my placement to mentor the new interns. This was a great oppertunity for me to pass on
        what I had learnt over the past year. To review their code, I used git. Currently, I am managing the Github repository at iCode for the system I am developing.`,
        html: `I started working with HTML when I was 13. It is where I initially started in web development. Since then I have been improving my skills at HTML consistently - always trying to keep on top of the latest versions. 
        I always ensure that all of the HTML that I produce conforms to the W3C standard.`,
        js: '',
        linux: '',
        node: '',
        python: '',
        react: '',
        api: '',
        sql: '',
        ui: ''
    };

    const [skillDescription, setSkill] = useState(skillDescs.testing);


    function setCurrentSkill(target) {
        document.querySelector('.selected').classList.remove('selected');
        target.classList.add('selected');
    };

    return (
        <div id='pageContent'>

            <div id='pageAbout'>
                <div id='pageName' className='orangeText'>Matthew Shore - Developer</div>
                I am a motivated front end web developer with <span className='bold'>3 years of professional experience</span> mostly focused around <span className='bold'>Javascript and React</span>.
                I am looking to find a role, either remote or located around Brighton, that will challenge me and enable me to develop the skills that I have gained
                and potentially allow me to gain experience in areas I have less experience in.
            </div>

            <div id='pageContent'>
                <div id='pageSkills'>
                    <div className='bold'>Technical Skills</div>
                    <div id='skillContainer'>
                        <div id='skillList'>
                            <div onClick={(e) => { setSkill(skillDescs.testing); setCurrentSkill(e.target); }} className='selected'>Automated testing</div>
                            <div onClick={(e) => { setSkill(skillDescs.bug); setCurrentSkill(e.target); }}>Bug management</div>
                            <div onClick={(e) => { setSkill(skillDescs.styling); setCurrentSkill(e.target); }}>CSS / LESS / SCSS</div>
                            <div onClick={(e) => { setSkill(skillDescs.git); setCurrentSkill(e.target); }}>Git / Version control</div>
                            <div onClick={(e) => { setSkill(skillDescs.html); setCurrentSkill(e.target); }}>HTML5</div>
                            <div onClick={(e) => { setSkill(skillDescs.js); setCurrentSkill(e.target); }}>JavaScript / Typescript</div>
                            <div onClick={(e) => { setSkill(skillDescs.bug); setCurrentSkill(e.target); }}>Linux / Command Line</div>
                            <div onClick={(e) => { setSkill(skillDescs.node); setCurrentSkill(e.target); }}>Node.js</div>
                            <div onClick={(e) => { setSkill(skillDescs.python); setCurrentSkill(e.target); }}>Python</div>
                            <div onClick={(e) => { setSkill(skillDescs.react); setCurrentSkill(e.target); }}>React JS</div>
                            <div onClick={(e) => { setSkill(skillDescs.api); setCurrentSkill(e.target); }}>RESTful API</div>
                            <div onClick={(e) => { setSkill(skillDescs.sql); setCurrentSkill(e.target); }}>SQL / MySQL</div>
                            <div onClick={(e) => { setSkill(skillDescs.ui); setCurrentSkill(e.target); }}>UI design</div>
                        </div>
                        <div id='skillInfo'>
                            <div id='skillDescription'>{skillDescription}</div>
                        </div>
                    </div>
                </div>
                <div id='pageCurrent'>
                    <div className='bold' >Ongoing Projects</div>
                    <div id='currentProjects'>
                        <div className='currentProject'>
                            <div className='projectTitle'>Commercial Mobile App</div>
                            <div className='projectDesc'>I am currently working on expanding the mobile app I did for my dissertation. The goal is to add more usability features and eventually take it to market.</div>
                            <div className='projectTech'>Tech Stack: React Native, Expo, Android Studio, MySQL</div>
                        </div>
                        <div className='currentProject'>
                            <div className='projectTitle'>Discord Bot</div>
                            <div className='projectDesc'>Currently I am working on integrating some existing APIs for a video game into a React front-end which is compatible with discord commands.</div>
                            <div className='projectTech'>Tech Stack: React, Node JS, MySQL, Discord APIs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};