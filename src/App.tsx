import { useState, useEffect } from 'react';
import './App.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaPhp, FaJava, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";

function App() {
  const [scrollData, setScrollData] = useState({
    y:0,
    lastY: 0
  })

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
          <a href='https://www.linkedin.com/in/christiancyrilleyvillasenor/' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/cyrll29' target='_blank'>
            <FaGithubSquare />
          </a>
        </div>
      </nav>

      <header>
        <div className="header-photo"></div>
        <div className="header-texts">
          <div className="name">
            My name is <span>Christian</span>
          </div>
          <div className="description">
            I am a passionate web developer with a keen eye for detail and a commitment to creating seamless user experiences. My journey in web development began with a curiosity about how websites work and has since evolved into a full-fledged career where I design, build, and optimize responsive websites and applications.
          </div>
          <button>Download CV</button>
        </div>
      </header>

      <div className="widget">
        <div className="widget-tabs">
          <input type="radio" name="tabs" id="overview" checked={checked} onClick={() => setChecked(true)}/>
          <label htmlFor="overview">Education</label>

          <input type="radio" name="tabs" id="experience" onClick={() => setChecked(false)}/>
          <label htmlFor="experience">Experience</label>

          <input type="radio" name="tabs" id="awards" onClick={() => setChecked(false)}/>
          <label htmlFor="awards">Awards</label>
        </div>

        <div className="widget-tabs-content">
          <div className="widget-tabs-content-1">
            <div className="university-modal">
              <div className="per-school">
                <div className="school-logo ue"></div>
                <div className="school-details">
                  <div className="school-name">University of the East - Caloocan</div>
                  <div className="school-location">Sangandaan, Caloocan</div>
                </div>
                <div className="school-program">Science, Technology, Engineering, Mathematics</div>
                <div className="school-years">2018 - 2020</div>
              </div>

              <div className="per-school">
                <div className="school-logo pup"></div>
                <div className="school-details">
                  <div className="school-name">Polytechnic University of the Philippines - Manila</div>
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

          <div className="widget-tabs-content-3">
            <h1>Awards</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis consequat eros fames ligula dictumst imperdiet. 
              Enim luctus a massa euismod netus. Congue mattis in maecenas curabitur cursus neque aptent augue duis. Nisl feugiat 
              eleifend sem in metus consectetur suspendisse. In per aptent efficitur volutpat vulputate.
            </p>
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
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="auto-blur" style={{ marginLeft: '250px' }}>
          <h1>Lorem Ipsum</h1>
        </div>
      </div>

      <div className='wrapper'>
        <div className="item item-1">
          <FaHtml5 color='#e34c26' size={80}/>
        </div>

        <div className="item item-2">
          <FaCss3Alt color='#264de4' size={80}/>
        </div>

        <div className="item item-3">
          <IoLogoJavascript color='#f0db4f' size={80}/>
        </div>

        <div className="item item-4">
          <IoLogoVue color='#42b883' size={80}/>
        </div>

        <div className="item item-5">
          <FaReact color='#88dded' size={80}/>
        </div>

        <div className="item item-6">
          <FaNode color='#215732' size={80}/>
        </div>

        <div className="item item-7">
          <FaPhp color='#8993be' size={80}/>
        </div>

        <div className="item item-8">
          <FaJava color='#5382a1' size={80}/>
        </div>
      </div>
    </>
  )
}

export default App
