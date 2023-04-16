import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/washiner.dev/' target='_blank' rel='noopener noreferrer'><InstagramIcon/></a>
        <a href='https://github.com/washiner' target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
        <a href='https://api.whatsapp.com/send?phone=5565981538004&text=Gostaria%20de%20fazer%20meu%20pedido!' target="_blank" rel="noopener noreferrer"><WhatsAppIcon/></a>
        <a href='https://www.linkedin.com/in/washiner-takeuchi/' target='_blank' rel='noopener noreferrer'><LinkedInIcon/></a>

        
      </div>
      <p>&copy; 2023 created by washiner@gmail.com</p>
    </div>
  )
}
export default Footer