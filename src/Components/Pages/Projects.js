import React from 'react';
import iotProject from '../../Files/UP879148_IOT.pdf';
import dsCoursework from '../../Files/Distributed_Systems_CW.pdf';
import ibmProject from '../../Files/TeamYellowFinalReport.pdf';
import dissertation from '../../Files/FYP_879148.pdf';
import mitigating from '../../Files/Mitigatingcorporate.pdf';
import adnet from '../../Files/ADNET.pdf';

export default function Projects() {
    return (<div id='projects'>
        <div id='projectsIntro'>
            <div>
                Here are some of the projects that I have completed either at university or after. They cover a wide range of computing topics. Click on one to find out more.
            </div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/TeamYellowFinalReport.pdf`); }}>
            <div className='projectHead'>IBM Subversive</div>
            <div className='projectDesc'>
                A group cyber security project completed as part of a competition run by IBM.
            </div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/UP879148_IOT.pdf`); }}>
            <div className='projectHead'>IoT Plant Environment Sensor</div>
            <div className='projectDesc'>IoT device I created for monitoring Air Humidity, Temperature and Soil Moisture to aid in the care of indoor plants.</div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/FYP_879148.pdf`); }}>
            <div className='projectHead'>Mobile App - React Native (dissertation)</div>
            <div className='projectDesc'>My University dissertation, shows the full software development process behind a React Native mobile app created for a small business.</div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/Mitigatingcorporate.pdf`); }}>
            <div className='projectHead'>Mitigating Corporate Information Exposure</div>
            <div className='projectDesc'>A literature review discussing the risks that corporations face to their data and information and how they can best mitigate these risks.</div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/ADNET.pdf`); }}>
            <div className='projectHead'>Security in Video Surveillance Systems</div>
            <div className='projectDesc'>A literature review discussing various methods for security in video cameras.</div>
        </div>
        <div className='projectItem' onClick={() => { window.open(`http://www.matthewshore.co.uk/Distributed_Systems_CW.pdf`); }}>
            <div className='projectHead'>Preventing DDOS attacks</div>
            <div className='projectDesc'>A literature review + experiment discussing the risks of DDOS attacks and proposing possible counter measures.</div>
        </div>
    </div>);
};