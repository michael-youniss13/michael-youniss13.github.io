import React from 'react';

import ProjectTileRow from './ProjectTileRow';

import  { Colors } from '../../Constants'
import { FaGithubSquare, FaPhoneSquare, FaSpotify, FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';

export class ProjectView extends React.Component {
  render() {
    const projectList = [
      {
        tileName:'Bit Coin Paper',
        imageURL: 'BitCoinLogo.png',
        description: 'For Math 341: A Mathematical Introduction to Cryptography, I wrote a paper on the mathematics underlying Bitcoin technology.',
        link: [{
          type: 'download',
          href: './src/img/pdf/bitcoin-final-paper-math-341.pdf',
          content: 'Read Paper'
        }]
      },
      {
        tileName:'Tetris Project',
        imageURL: 'TetrisLogo.png',
        description: 'As a final project for CIS 120: Programming Langugaes and Techniques, I coded Tetris in Java.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/Tetris',
          content: 'View Git repository'
        },
        {
          type: 'download',
          href: 'src/img/jar/Tetris.jar',
          content: 'Download game'
        }]
      },
      {
        tileName:'Rocket Software Internship',
        imageURL: 'RocketSoftwareLogo.png',
        description: 'During the summers of 2013 and 2014, my internship responsibilities at Rocket Software included programming iOS applications, researching big data, and programming network applications in Java.',
        link: []

      },
      {
        tileName:'Pluralsight Internship',
        imageURL: 'PluralsightLogo.png',
        description: 'During the summer of 2015 I built a UI component for the Pluralsight web application. The component was a menu for navigating the application. I used the React.js Javascript framework to build the component.',
        link: []
      },
      {
        tileName:'IBM Internship',
        imageURL: 'IBMLogo.png',
        description: 'For the duration of the summer of 2016, I built a UI component in Javascript using the React.js framework. The UI component gathered user feedback and sent it to a database.',
        link: []
      },
      {
        tileName: 'Game of War',
        imageURL: 'DeckOfCards.png',
        description: 'In my free time I built a deck of playing cards in Java. I incorporated shuffling and dealing into the deck of cards. Lastly, I used the deck of cards to build a simple game of war on the terminal.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/Cards',
          content: 'View Git repository'
        }]
      },
      {
        tileName: 'Website',
        imageURL: 'Background.png',
        description: 'Using Javascript, React.js, Webpack, Babel, and Scss I built this website.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/michael-youniss13.github.io',
          content: 'View Git repository'
        }]
      }
    ]

    return(
      <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: '30px' }}>
        <ProjectTileRow projectList={projectList} />
      </div>
    )
  }
}


export class AboutView extends React.Component {
  render() {
    var ageDiffInMs = Date.now() - (new Date('2/13/1995').getTime());
    var diff = new Date(ageDiffInMs);
    var years = (diff.getUTCFullYear() - 1970);
    return(
      <div className='about-me'>
        <div className='about-me__writeup'>
          <p style={{ marginTop: 0 }}>Welcome to my website. My name is Michael Youniss and I am {years} years old.
          I am a senior at the University of Pennsylvania and pursuing a Bachelors degree in Logic, Information and Computation.
          The courses I completed for this degree focus on Math, Computer Science and Philosophy. Outside of the classroom I
          enjoy trainging for marathons, cooking meals, playing music or coding. When I am not a school I like to travel around the world as well as
          explore various national parks.</p>

          <p>I coded this website using the following technologies: Javascript, React.js, Webpack, Babel, and Scss.</p>

          <p style={{ marginBottom: 0 }}>Feel free to look around and reach out to me  with any inquiries.</p>
        </div>
        <div>
          <img className='about-me__photo' src='src/img/photos/me.JPG' />
        </div>
      </div>
    )
  }
}


export class FindMeView extends React.Component {
  render() {
    let findMeViewStyle = {
      color: Colors.PRIMARY_COLOR,
      fontSize: '40px',
      textAlign: 'center',
      paddingTop: '100px'
    }

    return(
      <div style={findMeViewStyle}>
        <a className='find-me-box' href="mailto:michael.youniss13@gmail.com" ><MdEmail className='find-me-icon'/><div className='find-me-content'>michael.youniss13@gmail.com</div></a>
        <div className='find-me-box'><FaPhoneSquare className='find-me-icon'/><div className='find-me-content'>(781) 801-5163</div></div>
        <a href='https://github.com/michael-youniss13' target='_blank' className='find-me-box'><FaGithubSquare className='find-me-icon'/><div className='find-me-content'>Michael-Youniss13</div></a>
        <a className='find-me-box' target='_blank' href='https://www.linkedin.com/in/michael-youniss-8639909a?trk=hp-identity-name'><FaLinkedinSquare className='find-me-icon'/><div className='find-me-content'>Michael Youniss</div></a>
      </div>
    )
  }
}

export class ResumeView extends React.Component {
  render() {
    return(
      <div className='resume'>
        <img src='src/img/photos/Resume.jpg' className='resume__pic' />
        <a className='resume-download' href='src/img/pdf/Resume.pdf' download target='_0'> Download My Resume </a>
      </div>
    )
  }
}
