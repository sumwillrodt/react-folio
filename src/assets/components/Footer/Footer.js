import React from "react";
import IconButton from '@mui/material/IconButton';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@mui/icons-material';

function Footer() {
  return (
    <div id="social-container" className="">
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`deployed application of ${item.title}`}
        href={`https://github.com/sumwillrodt`}><GitHubIcon />
      </IconButton>
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`deployed application of ${item.title}`}
        href={`https://www.linkedin.com/in/sumnerwillrodt/`}><LinkedInIcon />
      </IconButton>
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        aria-label={`deployed application of ${item.title}`}
        href={`https://www.instagram.com/sumwillrodt/`}><InstagramIcon />
      </IconButton>
      
    </div>
  )

}

export default Footer();
