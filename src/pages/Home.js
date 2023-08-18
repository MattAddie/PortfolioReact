import React from 'react'
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from '@material-ui/icons/Instagram'
import "../styles/Home.css"



function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src="/profile.png" alt="profile" />
        <h2>Hi, I am Matt</h2>
        <div className='promt'>
          <p>
            A Web Developer Student with a passion for learning and creating
          </p>
          <a href='https://www.facebook.com/mattsu.marcial' style={{color: "#0761f2"}}><FacebookIcon /></a>
          <a href='https://github.com/MattAddie' style={{color: "#0761f2"}}><GithubIcon /></a>
          <a href='https://www.instagram.com/mattsuu_/' style={{color: "#0761f2"}}><InstagramIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1> SKILLS</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, Yarn</span>
          </li>
          <li className='item'>
            <h2> Back End</h2>
            <span>NodeJS,.NET, ExpressJS,
              MySQL, MongoDB,MS SQL</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home