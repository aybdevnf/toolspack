import classes from './styles/Home.module.css';
import Header from './components/Header';
import Tools from './components/Tools';
import Footer from './components/Footer';
import {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router';
function Home(){
  const toolsRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpened, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isVisible, setVisible] = useState(false);
  function scrollDown(){
    const toolsElm = toolsRef.current;
    toolsElm.scrollIntoView({top:0, behavior:'smooth'});
  }
  function toggleMenu(){
    const menuElm = menuRef.current;
    setMenu(!isMenuOpened);
  }
  function backTop(){
    window.scrollTo({top:0, behavior:'smooth'});
  }
  window.addEventListener('scroll',()=>{
    setScrollY(window.scrollY);
    if(scrollY >= window.innerHeight){
      setVisible(true);
    } else{
      setVisible(false);
    }
  })
  return(
    <>
  <Header toggleMenu={toggleMenu}/>
  <div className={`${classes.typewriter}`}>
    <h1 className={`${classes.title}`}>Welcome To ToolsPack</h1>
    <p className={`${classes.description}`}>A website contains many tools can help you while using your Device</p>
  <button
  className={`${classes.scroll_down_btn}`}
  onClick={scrollDown}
  >&lt;</button>
  </div>
  <div className={isMenuOpened ? "menu opened" : "menu"}>
    <span className={classes.close_btn}
    onClick={toggleMenu}
    >&times;</span>
    <Link className={classes.nav_link}>Home</Link>
    <Link className={classes.nav_link}>About</Link>
    <Link className={classes.nav_link}>Contact</Link>
  </div>
  <button 
  className={`${!isVisible ? 'hide' : 'show'} ${classes.back_top}`}
  onClick={backTop}
  >&lt;</button>
  <Tools ref={toolsRef} />
  <Footer />
  </>
 )
}
export default Home;
