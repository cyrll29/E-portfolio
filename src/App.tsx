import { useState, useEffect } from 'react';
import './App.css'
import { FaRegCopyright, FaHtml5, FaCss3Alt, FaReact, FaNode, FaPhp, FaJava, FaLinkedin, FaGithubSquare, FaFacebookSquare, FaChevronUp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue, IoShareOutline } from "react-icons/io5";
import kyusitrip_logo from "./assets/LOGO2.png";
import kyusitrip_logo_2 from "./assets/kt_logo.png";
import resume from "./assets/resume.pdf";
import google_drive_logo from "./assets/Google_Drive_logo.png";

function App() {
  const [scrollData, setScrollData] = useState({
    y:0,
    lastY: 0
  })
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [showNav, setShowNav] = useState('')

  const [checked, setChecked] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
        }
      })
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if(scrollData.y > scrollData.lastY && scrollData.y > 99) {
      setShowNav('nav-bar hide-nav-bar');
    } 
    else if(scrollData.lastY > scrollData.y) {
      setShowNav('nav-bar');
    }
    else {
      setShowNav('nav-bar');
    }
  }, [scrollData])

  return (
    <>
      <nav className={showNav}>
        <div className='title'>
          <h1>cyrll</h1>
        </div>

        <div className='nav-bar-logos'>
          <a href='https://www.facebook.com/christian.cyrille.y' target='_blank'>
            <FaFacebookSquare />
          </a>
          <a href='https://www.linkedin.com/in/christiancyrilleyvillasenor/' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/cyrll29' target='_blank'>
            <FaGithubSquare />
          </a>
        </div>
      </nav>

      <div className="landing-section">
        <div className="developer-name">Christian Cyrille Y. Villaseñor</div>
        <div className="developer-slogan">Cyrll &#8211; Crafting Code, Shaping the Web.</div>
      </div>

      <div className="header-title">
        <h1>ABOUT ME</h1>
      </div>

      <header>
        <div className="header-photo"></div>
        <div className="header-texts">
          <div className="name">
            My name is <span>Christian</span>
          </div>
          <div className="description">
            I am a passionate web developer with a keen eye for detail and a commitment to creating seamless user experiences. My journey in web development began with a curiosity about how websites work and has since evolved into a full-fledged career where I design, build, and optimize responsive websites and applications.
          </div>
          <a href={resume} download="Resume - Villaseñor">
            <button>Download CV</button>
          </a>
        </div>
      </header>

      <div className="widget">
        <div className="widget-tabs">
          <input type="radio" name="tabs" id="overview" checked={checked} onClick={() => setChecked(true)}/>
          <label htmlFor="overview">Education</label>

          <input type="radio" name="tabs" id="experience" onClick={() => setChecked(false)}/>
          <label htmlFor="experience">Experience</label>
        </div>

        <div className="widget-tabs-content">
          <div className="widget-tabs-content-1">
            <div className="university-modal">
              <div className="per-school">
                <div className="school-logo ue"></div>
                <div className="school-details">
                  <div className="school-name">University of the East  &#8211; Caloocan</div>
                  <div className="school-location">Sangandaan, Caloocan</div>
                </div>
                <div className="school-program">Science, Technology, Engineering, Mathematics</div>
                <div className="school-years">2018 - 2020</div>
              </div>

              <div className="per-school">
                <div className="school-logo pup"></div>
                <div className="school-details">
                  <div className="school-name">Polytechnic University of the Philippines  &#8211; Manila</div>
                  <div className="school-location">Sta. Mesa, Manila</div>
                </div>
                <div className="school-program">BS in Computer Engineering, Major in System Development</div>
                <div className="school-years">2020 - 2024</div>
              </div>
            </div>
          </div>

          <div className="widget-tabs-content-2">
            <div className="per-experience">
              <div className="job-year">
                AUG - OCT 2022
              </div>
              <div className="job-details">
                <div className="job-title">
                  WSAP&nbsp;&nbsp;&nbsp;&nbsp; | <span>&nbsp;&nbsp;&nbsp;&nbsp;Web Developer Intern</span>
                </div>

                <div className="job-description">
                  Accompanied and piloted the Web Development Team in creating the company's website, from front-end to back-end. In charge of ensuring websites look good and function properly.
                  Assisted the technical support head in managing events and webinars hosted by the company.
                </div>

                <div className="job-skills">
                  <div className="per-skills">
                    PHP
                  </div>

                  <div className="per-skills">
                    HTML5
                  </div>

                  <div className="per-skills">
                    CSS3
                  </div>

                  <div className="per-skills">
                    Javascript
                  </div>

                  <div className="per-skills">
                    MySQL
                  </div>

                  <div className="per-skills">
                    WordPress
                  </div>
                </div>
              </div>
            </div>

            <div className="per-experience">
              <div className="job-year">
                AUG - NOV 2023
              </div>
              <div className="job-details">
                <div className="job-title">
                  LHK SOLUTIONS INC.&nbsp;&nbsp;&nbsp;&nbsp; | <span>&nbsp;&nbsp;&nbsp;&nbsp;Web Developer Intern</span>
                </div>

                <div className="job-description">
                  Assisted and contributed to the production of the front-end side of a Warehouse Management System using VueJS. Started and developed the landing page of the company's 
                  administration management system using ReactJS. Studied back-end programming such as NodeJS, Java, and its framework, Spring. Migrated an existing database to a new 
                  database for the In-house project.
                </div>

                <div className="job-skills">
                  <div className="per-skills">
                    HTML5
                  </div>

                  <div className="per-skills">
                    CSS3
                  </div>

                  <div className="per-skills">
                    Javascript
                  </div>

                  <div className="per-skills">
                    VueJS
                  </div>

                  <div className="per-skills">
                    ReactJS
                  </div>

                  <div className="per-skills">
                    NodeJS
                  </div>

                  <div className="per-skills">
                    PostgreSQL
                  </div>

                  <div className="per-skills">
                    Java
                  </div>

                  <div className="per-skills">
                    Spring
                  </div>
                </div>
              </div>
            </div>

            <div className="per-experience">
              <div className="job-year">
                NOV 2023 - JUN 2024
              </div>
              <div className="job-details">
                <div className="job-title">
                  ECE CONTACT CENTERS&nbsp;&nbsp;&nbsp;&nbsp; | <span>&nbsp;&nbsp;&nbsp;&nbsp;Customer Service Representative</span>
                </div>
                <div className="job-description">
                  Handle customer accounts related to banking and financial applications. Identify customer concerns and provide necessary troubleshooting steps based on regulated response.
                </div>
                <div className="job-skills">
                  <div className="per-skills">
                    Zendesk
                  </div>
                  
                  <div className="per-skills">
                    Zoho
                  </div>

                  <div className="per-skills">
                    Slack
                  </div>

                  <div className="per-skills">
                    Communication Skills
                  </div>

                  <div className="per-skills">
                    Time Management
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="characteristics">
        <div className="auto-blur" style={{ marginLeft: '270px' }}>
          <h1>GOAL-ORIENTED</h1>
        </div>
        <div className="auto-blur" style={{ marginLeft: '450px' }}>
          <h1>EFFICIENT</h1>
        </div>
        <div className="auto-blur" style={{ marginLeft: '350px' }}>
          <h1>HARD WORKER</h1>
        </div>
        <div className="auto-blur" style={{ marginLeft: '550px' }}>
          <h1>LOGICAL THINKER</h1>
        </div>
        <div className="auto-blur" style={{ marginLeft: '750px' }}>
          <h1>PRECISE</h1>
        </div>
      </div>

      <div className="header-title">
        <h1>TECH STACK</h1>
      </div>

      <div className='wrapper'>
        <div className="item item-1">
          <FaHtml5 color='#e34c26' size={100}/>
        </div>

        <div className="item item-2">
          <FaCss3Alt color='#264de4' size={100}/>
        </div>

        <div className="item item-3">
          <IoLogoJavascript color='#f0db4f' size={100}/>
        </div>

        <div className="item item-4">
          <IoLogoVue color='#42b883' size={100}/>
        </div>

        <div className="item item-5">
          <FaReact color='#88dded' size={100}/>
        </div>

        <div className="item item-6">
          <FaNode color='#215732' size={100}/>
        </div>

        <div className="item item-7">
          <FaPhp color='#8993be' size={100}/>
        </div>

        <div className="item item-8">
          <FaJava color='#5382a1' size={100}/>
        </div>
      </div>

      <div className="header-title">
        <h1>NOTABLE PROJECT</h1>
      </div>

      <div className="projects">
        <div className="kyusitrip">
          <div className="kyusitrip-item-1">

          </div>

          <div className="kyusitrip-item-2">
            <div className="kyusitrip-logo">
              <img src={kyusitrip_logo} alt="KyusiTrip Logo" />
            </div>
          </div>

          <div className="kyusitrip-item-3">
            <div className="kyusitrip-title">
              <h1><span>Kyusi</span>Trip</h1>
            </div>
          </div>

          <div className="kyusitrip-item-4">

          </div>

          <div className="kyusitrip-item-5">

          </div>

          <div className="kyusitrip-item-6">
            
          </div>

          <div className="kyusitrip-item-7">
            <div className="kt-logo-2">
              <img src={kyusitrip_logo_2} />
            </div>
            <div className="kyusitrip-title-7">
              <h1><span>Kyusi</span>Trip</h1>
            </div>
          </div>

          <div className="kyusitrip-item-8">
            <div>Thesis</div>
            <div>KyusiTrip</div>
            <div>A kiosk and a mobile application for public transportation information, planner, and navigation</div>
          </div>
        </div>
        <a href="https://drive.google.com/drive/folders/1wHBvjXeA0ShY-JrZN8Otq0Z5bj-NgBVr?usp=sharing" target='_blank'>
          <div className='kyusitrip-drive'>
            <img src={google_drive_logo} alt="" />
          </div>
        </a>
      </div>

      <div className="header-title">
        <h1>OTHER PROJECTS</h1>
      </div>

      <div className="other-projects">
        <div className="main-container">
          <div className="other-project">
            <div className="project-1">
              <div className="other-project-links">
                <a href="https://drive.google.com/drive/folders/1GtKk7fKq5HFbaFue-9jP6aokhX1Tj9Aa?usp=drive_link" target='_blank'><IoShareOutline size={30} /></a>
                <a href="https://github.com/cyrll29/Game-Development-Project-CMPE40032" target='_blank'><FaGithubSquare size={30} /></a>
              </div>
              <div className="other-project-title">Honor's Curse</div>
              <div className="other-project-description">A top down role-playing game made from C# as a final project in our subject</div>
              <div className="other-project-stack">C# &nbsp;&nbsp; Unity &nbsp;&nbsp; Aseprite</div>
            </div>
          </div>

          <div className="other-project project-2">
            <div className="project-1">
              <div className="other-project-links">
                <a href="https://github.com/cyrll29/Web-Development-Project-CMPE40062" target='_blank'><FaGithubSquare size={30} /></a>
              </div>
              <div className="other-project-title">Sample E-commerce</div>
              <div className="other-project-description">A sample of e-commerce website as a requirement for our web development subject</div>
              <div className="other-project-stack">HTML5 &nbsp;&nbsp; CSS3 &nbsp;&nbsp; Javascript</div>
            </div>
          </div>

          <div className="other-project project-3">
            <div className="project-1">
              <div className="other-project-links">
                <a href="http://yusongroupofcompanies.com" target='_blank'><IoShareOutline size={30} /></a>
              </div>
              <div className="other-project-title">YGC</div>
              <div className="other-project-description">Maintained and improved the landing page for Yuson's Group of Companies</div>
              <div className="other-project-stack">HTML5 &nbsp;&nbsp; CSS3 &nbsp;&nbsp; Javascript &nbsp;&nbsp; PHP &nbsp;&nbsp; MySQL</div>
            </div>
          </div>

          <div className="other-project project-4">
            <div className="project-1">
              <div className="other-project-links">
                <a href="https://tjyuson.com" target='_blank'><IoShareOutline size={30} /></a>
              </div>
              <div className="other-project-title">TJ Yuson E-Portfolio</div>
              <div className="other-project-description">Maintained and improved the e-portfolio of TJ Yuson or the CEO of YGC</div>
              <div className="other-project-stack">HTML5 &nbsp;&nbsp; CSS3 &nbsp;&nbsp; Javascript &nbsp;&nbsp; PHP &nbsp;&nbsp; MySQL</div>
            </div>
          </div>

          <div className="other-project project-5">
            <div className="project-1">
              <div className="other-project-links">
               -
              </div>
              <div className="other-project-title">Seorin WMS</div>
              <div className="other-project-description">Developed a warehouse management system based from the clients needs. This includes functions such as calculating stocks.</div>
              <div className="other-project-stack">Javascript &nbsp;&nbsp; NodeJS &nbsp;&nbsp; VueJS &nbsp;&nbsp; Sourcetree</div>
            </div>
          </div>

          <div className="other-project project-6">
            <div className="project-1">
              <div className="other-project-links">
               -
              </div>
              <div className="other-project-title">LHK Admin Page</div>
              <div className="other-project-description">Created the admin page or dashboard for the company as in-house project.</div>
              <div className="other-project-stack">Javascript &nbsp;&nbsp; Java &nbsp;&nbsp; ReactJS &nbsp;&nbsp; PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper'>
        <div className="item item-1">
          Available for work
        </div>

        <div className="item item-2">
          Based in Quezon City
        </div>

        <div className="item item-3">
          Available for work
        </div>

        <div className="item item-4">
          Based in Quezon City
        </div>

        <div className="item item-5">
          Available for work
        </div>

        <div className="item item-6">
          Based in Quezon City
        </div>

        <div className="item item-7">
          Available for work
        </div>

        <div className="item item-8">
          Based in Quezon City
        </div>
      </div>

      <footer>
        <div className='footer-top'>
          <div className="copyright">
            <FaRegCopyright size={30} color='#faf9f6'/>
            <div>2024</div>
          </div>
          <div className='back-to-top'>
            BACK TO TOP
            <button onClick={scrollToTop}>
              <FaChevronUp/>
            </button>
          </div>
        </div>
        <div className='footer-middle'>
          <div className='footer-question'>INTERESTED TO WORK WITH ME?</div>
          <div className='footer-slogan'><p>EMAIL ME</p></div>
          <div className='footer-email'>cvillasenior@gmail.com</div>
        </div>
        <div className='footer-bottom'>
          <div className="footer-links">
            <a href='https://www.facebook.com/christian.cyrille.y' target='_blank'>
              <FaFacebookSquare size={70}/>
            </a>
            <a href='https://www.linkedin.com/in/christiancyrilleyvillasenor/' target='_blank'>
              <FaLinkedin size={70}/>
            </a>
            <a href='https://github.com/cyrll29' target='_blank'>
              <FaGithubSquare size={70}/>
            </a>
          </div>
          <div className="footer-creator">
            Designed and Developed by <span>&nbsp; Christian Cyrille Y. Villaseñor</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
