import { useState, useRef, useEffect } from 'react';
import Particlesbg from './components/Particles';
import { motion } from 'motion/react';
import ID from './pictures/ID-pic.jpg';
import store from './pictures/Postgrestore.jpg';
import curr from './pictures/Currency Converter.jpg';
import blog from './pictures/Blog App.jpg';
import tabs from './pictures/Profiled tabs 2.jpg';
import capstone from './pictures/Capstone Project.jpg';
import rock from './pictures/Asteroids Game.jpg';
import cert1 from './pictures/certificates/CompPy.jpg';
import cert2 from './pictures/certificates/DataPrep.jpg';
import cert3 from './pictures/certificates/CloudEssentials.jpg';
import cert4 from './pictures/certificates/CloudPractitioner.jpg';
import cert5 from './pictures/certificates/VPAA.jpg';
import cert6 from './pictures/certificates/Deans.jpg';
// import { showDiv2, showDiv3 } from './components/functions';
import { FaGithub, FaLinkedin, FaFacebook, FaViber } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { Mail, Facebook, Phone, Linkedin } from 'lucide-react';

function App() {
const [isVisible, setIsVisible] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);
const [isVisible3, setIsVisible3] = useState(false);
const div = useRef(null);
const div2 = useRef(null);
const div3 = useRef(null);
const scrollRef = useRef(null);
const images = [cert1, cert2, cert3, cert4, cert5, cert6];

const toggleVisibility = () => {
  if(div.current){
    div.current.style.display = isVisible ? 'none' : 'grid';
    setIsVisible(!isVisible);
  } 
}
const toggleVisibility2 = () => {
  if(div2.current){
    div2.current.style.display = isVisible2 ? 'none' : 'grid';
    setIsVisible2(!isVisible2);
  } 
}
const toggleVisibility3 = () => {
  if(div3.current){
    div3.current.style.display = isVisible3 ? 'none' : 'inline-flex';
    setIsVisible3(!isVisible3);
  } 
}

useEffect(() => {
  const scrollContainer = scrollRef.current;
  let scrollAmount = 0;
  let requestId;

  const scroll = () => {
    scrollAmount += 1;
    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
      scrollAmount = 0;
    }
    scrollContainer.scrollLeft = scrollAmount;
    requestId = requestAnimationFrame(scroll);
  };

  requestId = requestAnimationFrame(scroll);
  return () => cancelAnimationFrame(requestId);
}, []);

  return (
    <>
    {/* HEADER */}
      <div className='flex flex-col font-mono border-solid border-red-500 border-1 rounded-sm text-3xl text-sky-500 relative bg-white/5 mt-15 w-fit mx-15 px-10 py-2 backdrop-blur-xs z-1'>
      <span className='text-yellow-500 m-0 p-0'>GIAN LABAN</span>
      <span className='text-xs font-bold m-0 p-0'>Problem-solving enthusiast and a puzzle lover. Aspiring software engineer.<br/>
      </span>
      </div>
      {/* NAVBAR */}
      <div className='flex flex-row space-between font-mono border-solid border-red-500/0 border-1 rounded-sm z-10 mt-0 mx-15 px-0 py-0 w-fit sticky'>
      <a href='#about'><button type='button' onClick={toggleVisibility} id='b1' className={`${isVisible ? 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-yellow-500 border-1 rounded-sm px-9.5 py-5 text-sky-500 bg-white/5 backdrop-blur-xs' : 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-red-500 border-1 rounded-sm px-9.5 py-5 text-red-500 bg-white/5 backdrop-blur-xs'}`}>SKILLS</button></a>
        <a href='#projects'><button type='button' onClick={toggleVisibility2} className={`${isVisible2 ? 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-yellow-500 border-1 rounded-sm px-9.5 py-5 text-sky-500 bg-white/5 backdrop-blur-xs' : 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-red-500 border-1 rounded-sm px-9.5 py-5 text-red-500 bg-white/5 backdrop-blur-xs'}`}>PROJECTS</button></a>
        <a href='#contact'><button type='button' onClick={toggleVisibility3} className={`${isVisible3 ? 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-yellow-500 border-1 rounded-sm px-9.5 py-5 text-sky-500 bg-white/5 backdrop-blur-xs' : 'hover:bg-white/10 hover:text-yellow-500 hover:border-yellow-500 flex font-mono border-solid border-red-500 border-1 rounded-sm px-9.5 py-5 text-red-500 bg-white/5 backdrop-blur-xs'}`}>CONTACT</button></a>
      </div>
      {/* BODY */}
      <div className='body flex flex-row font-mono border-solid border-red-500/0 border-1 rounded-sm text-xs text-red-500 relative bg-white/0 w-fit mt-15 ml-15 mr-15 z-1'>   
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} id='about' ref={div} style={{display: 'none'}} className='hidden text-xl flex-row font-mono border-solid border-red-500 border-1 rounded-sm text-red-500 bg-white/5 backdrop-blur-xs w-100 h-100 ml-2 mr-2 mt-2'>
          {/* Skills */}
          <div className='w-100 text-xl flex-col font-mono border-solid border-red-500/0 border-1 rounded-sm px-2 py-2 text-yellow-500 backdrop-blur-xs'>PROFICIENCIES</div>
          <div className='m-0 text-xl flex font-mono border-solid border-red-500/0 border-1 rounded-sm text-red-500 backdrop-blur-xs w-100'>
            <div className='m-0 items-center text-xs font-bold flex flex-col font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 text-sky-500 backdrop-blur-xs w-50'>
            <span className='text-sm text-yellow-500 p-0 m-0'>Frontend: </span><br/>
            HTML <br/>
            Javascript <br/>
            CSS <br/>
            ReactJs <br/>
            Tailwind<br/>
            Framer<br/>
            </div>
            <div className='items-center text-xs font-bold flex flex-col font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 text-sky-500 backdrop-blur-xs w-50'>
            <span className='text-sm text-yellow-500 p-0 m-0'>Backend: </span><br/>
            PostgreSQL <br/>
            ExpressJs <br/>
            NodeJs <br/>
            AWS <br/>
            Supabase <br/>
            Neon db <br/>
            </div>
          </div>
            <div className='text-sm text-yellow-500 bg-red-500/5 backdrop-blur-xs font-mono font-bold object-contain border-solid border-red-500 border-1 rounded-sm overflow-y-auto p-2'>
              Certificates  
            </div>
            <div className='scrollDiv w-fit flex flex-row border-solid border-red-500 border-1 rounded-sm overflow-hidden'>
              <div ref={scrollRef} className='certDiv w-fit inline-flex flex-row border-solid border-red-500 border-1 rounded-sm overflow-hidden'>
              {[...images, ...images].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`cert${idx}`}
                  className='w-fit opacity-75 object-contain'
                />
              ))}
              </div>
            </div>
              
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} id='projects' ref={div2} style={{display: 'none'}} className='text-xl flex-col font-mono border-solid border-red-500 border-1 rounded-sm text-red-500 bg-white/5 backdrop-blur-xs w-fit h-100 ml-2 mt-2 pr-0 overflow-auto'>
            {/* Projects */}
            <div className='text-xl flex flex-col font-mono rounded-sm p-2 m-0 text-yellow-500 backdrop-blur-xs'>PROJECTS</div>
            {/* Postgrestore */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Postgrestore:</div>
              <span className='text-sky-500 text-sm font-bold flex m-2'>
              A fullstack CRUD app made using the PERN stack (PostgreSQL, ExpressJs, ReactJs, NodeJs) while utilizing the best coding and security practices 
              (organized folders, bot detection, rate limiting, SQL injection protection, xss and csrf protection).
              Deployed using Render.<br/>
              </span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/pern-stack-app' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              <a href='https://pern-stack-app-bf4j.onrender.com/' target='_blank'><CgWebsite className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={store} alt='fullstack app' width='500' height='200' className='flex flex-col opacity-75 rounded-sm w-fit m-0'/>
              </div>   
            </motion.div>
            {/* Currency Converter */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit mt-2'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Currency Converter:</div>
              <span className='text-sky-500 text-sm font-bold flex m-2'>
              Made using javascript, react and tailwind. Fetches a list of currencies from an external open source API. <br/>
              Deployed using Github pages. 
              </span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/currency-converter' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              <a href='https://lestrae.github.io/currency-converter/' target='_blank'><CgWebsite className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={curr} alt='currency app' width='500' height='200' className='flex flex-col font-mono opacity-75 rounded-sm w-fit m-0'/>
              </div>
            </motion.div>
            {/* Blog App */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit mt-2'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Blog App:</div>
              <span className='text-sky-500 text-sm font-bold flex m-2'>
              A C.R.U.D (Create, Read, Update, Delete) app using javascript, react, tailwind and supabase postgres database. Utilizes a functional Google sign in and Row Level Security (RLS).<br/></span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/blog-proto' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={blog} alt='blog app' width='500' height='200' className='flex flex-col font-mono opacity-75 rounded-sm w-fit m-0'/>
              </div>  
            </motion.div>
            {/* Profiled tabs */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit mt-2'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Profiled tabs:</div>
              <span className='whitespace-pre-line text-sky-500 text-sm font-bold flex m-2'>
              Created using javascript, html and css. The site contains two buttons that enables the end user to save and open multiple sites simultaenously in one click.
              The websites of choice are stored in local storage so it can persists through sessions provided that some cookies are not cleared. <br/></span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/Profiled-tabs' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={tabs} alt='Profiled tabs' width='500' height='200' className='flex flex-col font-mono opacity-75 rounded-sm w-fit m-0'/>
              </div>   
            </motion.div>
            {/* Asteroids Game */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit mt-2'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Asteroids Game:</div>
              <span className='whitespace-pre-line text-sky-500 text-sm font-bold flex m-2'>
              A web game made of purely Javascript and Html Canvas to reinforce my understanding of core Javascript. The game spawns random meteorites that the player must avoid or shoot. <br/></span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/Asteroids-game' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={rock} alt='asteroids game' width='500' height='200' className='flex flex-col font-mono opacity-75 rounded-sm w-fit m-0'/>
              </div>  
            </motion.div>
            {/* Capstone Project */}
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} className='projDiv m-0 text-xl flex font-mono rounded-sm text-red-500 backdrop-blur-xs w-fit mt-2'>
              <div className='projDiv2 text-sm flex flex-col font-bold font-mono border-solid border-red-500 border-1 rounded-sm px-5 py-5 m-0 text-red-500 bg-red-500/5 backdrop-blur-xs w-1/2'>
              <div className='text-yellow-500 text-lg font-bold flex align-middle p-2 m-0'>Capstone Project:</div>
              <span className='text-sky-500 text-sm font-bold flex m-2'>
              My senior capstone project. The non-invasive egg-sexing device utilizes computer vison using python and machine learning to detect
              the sex of itik Pateros eggs through a camera attached to a Raspberry Pi 4B. The device can predict male or female eggs in batches of four with a 93% accuracy, prior to the last day of the incubation period for them to be sold as balut. <br/></span>
              <div className='flex flex-row mt-5'>
              <a href='https://github.com/Lestrae/Capstone-project' target='_blank'><FaGithub className='hoverIcon m-2' size={25}/></a>
              </div>
              </div>
              <div className='projDiv2 hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-0 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2'>
              <img src={capstone} alt='capstone project' width='500' height='200' className='flex flex-col font-mono opacity-75 rounded-sm w-fit m-0'/>
              </div>  
            </motion.div>
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: '-200px'}} id='contact' ref={div3} style={{display: 'none'}} className='text-xl flex font-mono border-solid border-red-500 border-1 rounded-sm ml-2 mt-2 text-red-500 bg-white/5 backdrop-blur-xs w-fit h-65'>
        {/* Contact */}
        <div className='text-xl flex flex-col font-mono border-solid border-red-500 border-1 rounded-sm px-2 py-2 m-0 text-yellow-500 bg-red-500/2 backdrop-blur-xs'>
        CONTACT:<br/>
        <span className='text-sky-500 text-sm font-bold flex flex-row align-middle m-1'> For inquiries, please contact on one of the following platforms:</span>
        <span className='font-bold text-red-500 text-sm flex flex-row align-middle m-1'><SiGmail color='yellow' size={22} className='hoverIcon2 flex flex-row relative mx-0.5'/>&nbsp;muellivan@gmail.com</span>
        <span className='font-bold text-red-500 text-sm flex flex-row align-middle m-1'><FaViber color='#ff8800' size={25} className='hoverIcon2 flex flex-row relative'/>&nbsp;09762512831</span>
        <a href='https://www.linkedin.com/in/gian-laban-a14940241/' target='_blank' className='m-1'><FaLinkedin color='#0091ff' size={25} className='hoverIcon2'/> </a>
        <a href='https://www.facebook.com/muellivan/' target='_blank' className='m-1 '><FaFacebook color='#0055ff' size={25} className='hoverIcon2'/> </a>
        </div>
        <div className='hover:bg-white/10 text-xs flex font-bold font-mono border-solid border-red-500 border-1 rounded-sm p-2 m-0 text-red-500 bg-white/5 backdrop-blur-xs w-1/2 justify-center'>
        <img src={ID} alt='ID pic' className='flex flex-col font-mono opacity-50 rounded-sm w-50 m-0 object-contain'/>
        </div>
        </motion.div>
      </div>
      <Particlesbg />
    </>
  )
}

export default App
