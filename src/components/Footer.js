import React from 'react'
// import  InstagramIcon  from '@material-ui/icons/Instagram'
// import  TwitterIcon  from '@material-ui/icons/Twitter'
// import  FaceookIcon  from '@material-ui/icons/Facebook'
// import  LinkedInIcon  from '@material-ui/icons/LinkedIn'
import "../styles/Footer.css"


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <img className='logo' src="/LOGO.jpg" alt="LOGO" />

        </div>
        <p> PHINMA University of Pangasinan</p>
        <p>Colllege of Information Technology</p>

    </div>
  )
}

export default Footer