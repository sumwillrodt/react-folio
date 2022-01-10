import React from "react";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div id="social-container" className="">
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`GitHub`}
        href={`https://github.com/sumwillrodt`}><GitHubIcon />
      </IconButton>
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`LinkedIn`}
        href={`https://www.linkedin.com/in/sumnerwillrodt/`}><LinkedInIcon />
      </IconButton>
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`Instagram`}
        href={`https://www.instagram.com/sumwillrodt/`}><InstagramIcon />
      </IconButton> 
    </div>
  )
}

export default Footer();