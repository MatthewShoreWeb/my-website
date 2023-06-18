import React from 'react';
import './header.scss';
import CV from '../Pages/CV';
import HomePage from '../Pages/HomePage';
import Projects from '../Pages/Projects';

export default function Header({ setPage }) {

    function navClicked(target) {
        document.querySelector('.selectedNav').classList.remove('selectedNav');
        target.classList.add('selectedNav');
    };

    return (
        <div id='websiteHeader'>
            <div id='headerContentLinks'>
                <div className='navItem selectedNav' onClick={(e) => { setPage(<HomePage />); navClicked(e.target); }}>Home</div>
                <div className='navItem' onClick={(e) => { setPage(<CV />); navClicked(e.target); }}>CV</div>
                <div className='navItem' onClick={(e) => { setPage(<Projects />); navClicked(e.target); }}>Projects</div>
            </div>

            <div id='headerSocialLinks'>
                <div className='navItem'><a target='_blank' href='https://github.com/MatthewShoreWeb'>Github</a></div>
                <div className='navItem'><a target='_blank' href='https://www.linkedin.com/in/matthew-shore-63322a179/'>Linkedin</a></div>
            </div>

        </div>
    );
};
