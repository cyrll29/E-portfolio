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
    console.log(scrollData)

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

      <div className="widget">
        <div className="widget-tabs">
          <input type="radio" name="tabs" id="overview" checked={checked} onClick={() => setChecked(true)}/>
          <label htmlFor="overview">Overview</label>

          <input type="radio" name="tabs" id="experience" onClick={() => setChecked(false)}/>
          <label htmlFor="experience">Experience</label>

          <input type="radio" name="tabs" id="awards" onClick={() => setChecked(false)}/>
          <label htmlFor="awards">Awards</label>
        </div>

        <div className="widget-tabs-content">
          <div className="widget-tabs-content-1">
            <h1>Overview</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis consequat eros fames ligula dictumst imperdiet. 
              Enim luctus a massa euismod netus. Congue mattis in maecenas curabitur cursus neque aptent augue duis. Nisl feugiat 
              eleifend sem in metus consectetur suspendisse. In per aptent efficitur volutpat vulputate.
            </p>
          </div>

          <div className="widget-tabs-content-2">
            <h1>Experience</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis consequat eros fames ligula dictumst imperdiet. 
              Enim luctus a massa euismod netus. Congue mattis in maecenas curabitur cursus neque aptent augue duis. Nisl feugiat 
              eleifend sem in metus consectetur suspendisse. In per aptent efficitur volutpat vulputate.
            </p>
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
