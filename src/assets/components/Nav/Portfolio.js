import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import WeatherDash from '../../images/WeatherDash_SW.png';
import RunBuddy from '../../images/RunBuddy_SW.png';
import BudgetTracker from '../../images/PWA_Budget_Tracker_SW.png';
import PasswordGenerator from '../../images/Password-Generator_SW.png';

const projects = [
  {
    img: WeatherDash,
    title: 'Weather Dashboard',
    url: 'https://sumwillrodt.github.io/weather-dashboard/',
    github: 'https://github.com/sumwillrodt/weather-dashboard.git',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: RunBuddy,
    title: 'Run Buddy',
    url: 'https://sumwillrodt.github.io/run-buddy/',
    github: 'https://github.com/sumwillrodt/run-buddy'
  },
  {
    img: BudgetTracker,
    title: 'Do Not Budge',
    url: 'https://salty-waters-73908.herokuapp.com/',
    github: 'https://github.com/sumwillrodt/dont-budge'
  },
  {
    img: PasswordGenerator,
    title: 'Password Generator',
    url: 'https://sumwillrodt.github.io/password-generator/',
    github: 'https://github.com/sumwillrodt/password-generator.git',
    cols: 2,
  },
  {
    img: '../images/heroImage.png',
    title: 'Minigram',
    url: 'https://github.com/FatherDkay/minigram2',
    github: '',
    cols: 2,
  },
  {
    img: '../images/heroImage.png',
    title: 'Project 3',
    url: '',
    github: '',
    rows: 2,
    cols: 2,
  }
];

function Portfolio() {
  return (
    <ImageList id='gallery' sx={{ width: 800, height: 600, display: 'flex-box' }} col={2} rowHeight={264} gap={40}>
      {projects.map((project) => (
        <ImageListItem key={project.img}>
          <img
            src={`${project.img}?w=264&h=264&fit=crop&auto=format`}
            srcSet={`${project.img}?w=264&h=264&fit=crop&auto=format&dpr=2 2x`}
            href={`${project.url}`}
            alt={project.title}
            loading="lazy"
          />
          <ImageListItemBar className='mx-5'
            title={project.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                aria-label={`deployed application of ${project.title}`}
                href={`${project.github}`}
                onClick={`${project.github}`}
              >
                <GitHubIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Portfolio;