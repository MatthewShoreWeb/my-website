import React, { useState, useRef, useEffect } from 'react';
import './pages.scss';




export default function HomePage() {



    const skillDescs = {
        testing: <><div className='paragraph'>I have got experience of both the <span className='bold'>JEST and Mocha </span>
            testing libraries. In my role at iCode I have implemented
            automated <span className='bold'>JEST</span> tests to verify <span className='bold'>API</span> functionality. These tests were integrated with <span className='bold'>Jenkins</span> running on an <span className='bold'>AWS</span> server.
            This allowed for the tests to automatically run every time a new build was created. At university I mostly used <span className='bold'>Mocha</span> for use in my courseworks.</div></>,
        bug: <><div className='paragraph'>I have experience using and managing bug management software as part of a large team and for my own projects. Whilst on placement, I used <span className='bold'>Fogbugz</span> to recieve cases raised
            by the companies support team. Sometimes I would send these cases back with my own feedback or raise my own cases when a new bug was identified. More recently, at my role at iCode,
            I am using <span className='bold'>Jira</span> to manage tasks and bugs alongside the backend developer. This has been an essential part of the softwares development as it allows for a much more efficient delivery.</div></>,
        styling: <><div className='paragraph'>I have extensive experience using <span className='bold'>CSS</span> for styling. I have used it for all front end development projects I have done. More recently, however,
            I like to use <span className='bold'>CSS</span> preprocessors such as <span className='bold'>LESS</span> and <span className='bold'>SASS </span>
            as I prefer the added functionality and usability that they provide. I have used <span className='bold'>SASS</span> at my current job as well as on personal projects such as this website.</div></>,
        git: <><div className='paragraph'>I have extensive experience using <span className='bold'>GIT</span>  both as part of a large team and for independent projects. Whilst I was on placement,
            the company used <span className='bold'>GIT</span> for all of its version control. I had to ensure that my pull requests conformed to the companies standards.
            I also got the oppertunity towards the end of my placement to <span className='bold'>mentor the new interns</span>. This was a great oppertunity for me to pass on
            what I had learnt over the past year. To review their code, I used <span className='bold'>GIT</span>. Currently, <span className='bold'>I am managing the Github repository</span> at iCode for the system I am developing.</div></>,
        html: <>I started working with <span className='bold'>HTML</span> when I was 13. It is where I initially started in web development. Since then I have been improving my skills at <span className='bold'>HTML</span> consistently - always trying to keep on top of the latest versions.
            I always ensure that all of the <span className='bold'>HTML</span> that I produce conforms to the <span className='bold'>W3C</span> standard.<div className='paragraph'></div></>,
        js: <><div className='paragraph'><span className='bold'>Javascript</span> is currently the primary language that I use for development. I have experience using <span className='bold'>Vanilla Javascript</span> in
            a variety of different contexts. Whilst working as Fresh Relevance, I used <span className='bold'>Vanilla Javascript</span> alongside <span className='bold
        '>jQuery</span> to write scripts that were integrated into the websites of some of the biggest UK brands,
            such as Wilko and Thorntons. </div><div className='paragraph'>I am currently learning and using <span className='bold'>TypeScript</span> as part of my current job at iCode. Initially,
                the project I am working on did not have <span className='bold'>TypeScript</span>. However, I have found the library to be very useful and I am continuing to develop my knowledge of it. </div></>,
        linux: <><div className='paragraph'>I have several years experience using <span className='bold'>Linux</span>. Both my roles at Fresh Relevance and iCode required me to use <span className='bold'>Ubuntu</span>.
            At Fresh Relevance, the workspace that I used had a <span className='bold'>Linux</span> OS, allowing me to get a good introduction to the OS. Whilst at iCode the remote <span className='bold'>AWS</span> server runs <span className='bold'>Linux</span>.
            I used this <span className='bold'>Linux Server</span> to deploy
            the project to <span className='bold'>AWS</span>, and to setup a <span className='bold'>SSL certificate</span>.</div></>,
        node: <><div className='paragraph'><span className='bold'>Node.js</span> is a technology that I am pushing my knowledge of. I started working with <span className='bold'>Node.js</span> in 2019 during University,
            which allowed me to gain some back end experience.
            Notably at University I created an <span className='bold'>Express Node.js</span> server that I could use to simulate DDOS attacks. For this I recieved a <span className='bold'>First Class mark</span>.
            However, since then my work has mostly been front end focused. At iCode, I have used <span className='bold'>NPM</span> to manage the large amount of dependencies that the project has. My goal for the next few years
            is to become a <span className='bold'>Full-Stack Web Developer</span>, and to achieve this I am currently undertaking courses and doing personal projects to increase my <span className='bold'>Node.js</span> knowledge.</div></>,
        python: <><div className='paragraph'><span className='bold'>Python</span> is a language that I have used consistently over the past few years.
            Whilst at Fresh Relevance, I was responsible for integrating a <span className='bold'>Python</span> base <span className='bold'>API</span> that
            would take a <span className='bold'>GeoJSON</span> shape and simplify it. The purpose of this was to be able to simplfy the process of contacting customers within a certain geographical radius. I have also had the chance to
            use Python whilst at iCode where I used <span className='bold'>Python</span> to create an application that would encrypt the contents of large excel files. </div>
            <div className='paragraph'>In my spare time I have used <span className='bold'>Python</span> to create bots which would automatically run in games, as well as to create interactive UIs for games.</div></>,
        react: <><div className='paragraph'><span className='bold'>React</span> is the principle Javascript library that I have used for the past <span className='bold'>3 years</span>. I have used <span className='bold'>React</span> at iCode to implement the front-end for a large commercial system. This involved
            creating <span className='bold'>complex UI components that were both easy to use and had good performance</span>. These components would then be integrated with the APIs.</div>
            <div className='paragraph'>I have also used <span className='bold'>React</span> for several of my personal projects. This site, for example, has been developed using <span className='bold'>React</span>. I have also used <span className='bold'>React</span> to create a front end which
                displays data from a <span className='bold '>SQL</span> server, allowing players to view data from a game in a clear and easy to use way.</div>
            <div className='paragraph'>I am always trying to improve my skills and knowledge of <span className='bold'>React</span> so currently I am undertaking several courses to achieve this.</div></>,
        api: <><div className='paragraph'>At iCode I played an important role in the design and integration of the <span className='bold'>APIs</span>. I would collaborate with the backend developer to understand and
            design <span className='bold'>APIs</span> around the client's requirements. For this we have ended up with over 100 APIs currently in use. This has given me a good understanding of <span className='bold'>API design and integration</span>.
            Currently, I am working on developing my own <span className='bold'>APIs</span> using <span className='bold'>Node</span>.</div></>,
        sql: <><div className='paragraph'>I first started using <span className='bold '>SQL</span> in 2017, since then I have steadily been increasing my knowledge of it.
            Most of my <span className='bold '>SQL</span> work is in personal projects, such as storing data for a mobile app, or <span className='bold'>API</span> data from games. Currently, I am using <span className='bold '>MySQL</span> to manage my databases. I have a good understanding of
            <span className='bold'>relational database</span> design principles but I am taking several courses to push my knowledge further.</div></>,
        ui: <><div className='paragraph'>Good <span className='bold'>UI design</span> has always been one of the most important parts of my front end development, as without it an app is not usable. At iCode, I have
            ensured that all of my UI components are <span className='bold'>clear, consistent and accessible</span>. Customer feedback has supported this.
        </div>
            <div className='paragraph'> I have a good understanding of what makes a UI accessible. Such as font size, consistency, and the app's colour scheme. I also have
                experience in creating UIs which can accomodate visually impaired and deaf users.</div></>
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
                            <div onClick={(e) => { setSkill(skillDescs.linux); setCurrentSkill(e.target); }}>Linux / Command Line</div>
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