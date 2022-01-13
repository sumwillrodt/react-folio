import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    img: '../images/WeatherDash_SW.png',
    title: 'Weather Dashboard',
    url: 'https://sumwillrodt.github.io/weather-dashboard/',
    github: 'https://github.com/sumwillrodt/weather-dashboard.git',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '../images/RunBuddy_SW.png',
    title: 'Run Buddy',
    url: 'https://sumwillrodt.github.io/run-buddy/',
    github: 'https://github.com/sumwillrodt/run-buddy'
  },
  {
    img: '../images/PWA_Budget_Tracker_SW.png',
    title: 'Do Not Budge',
    url: 'https://salty-waters-73908.herokuapp.com/',
    github: 'https://github.com/sumwillrodt/dont-budge'
  },
  {
    img: '../images/Password-Generator_SW.png',
    title: 'Password Generator',
    url: 'https://sumwillrodt.github.io/password-generator/',
    github: 'https://github.com/sumwillrodt/password-generator.git',
    cols: 2,
  },
  {
    img: '../images/heroImage.png',
    title: 'Title',
    url: '',
    github: '',
    cols: 2,
  },
  {
    img: '../images/heroImage.png',
    title: 'Title',
    url: '',
    github: '',
    rows: 2,
    cols: 2,
    featured: true,
  }
];

function Portfolio() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {projects.map((project) => (
        <ImageListItem key={project.img}>
          <img
            src={`${project.img}?w=248&fit=crop&auto=format`}
            srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            href={`${project.url}`}
            alt={project.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={project.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                aria-label={`deployed application of ${project.title}`}
                href={`${project.github}`}
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

export default Portfolio();