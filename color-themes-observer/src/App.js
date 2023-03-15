
import './App.css';
import styled from 'styled-components';
import { useState, useNavigate, useEffect } from 'react';
import Modal from './components/Modal';
import Template from './components/Template';
import Header from './components/Header';
import ThemeButton from './components/ThemeButton';


function App() {
  // ============== TO DO ===============
  // * include in render differnet components that will persist at all
  //pages
  // header, footer, layout, navbar?
  // include router here 
  //   const DefaultColors = createGlobalStyle`
  //   html {
  //     --brightest: hsla(50, 100%, 50%, 1);
  //     --darkest: hsla(50, 100%, 20%, 1);
  //     --middle: hsla(50, 100%, 70%, 1);
  //     --middlet: hsla(50, 100%, 70%, 0.3);
  //     --lightest: hsla(50, 100%, 90%, 1);
  //     --transparent: hsla(50, 100%, 65%, 0.1);
  //   }
  // `;
  //DefaultColors
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState();
  const [cite, setCite] = useState();

  const [isShow, setIsShow] = useState(true);

  const URL_micro = "http://localhost:8080/QuoteOfTheDay";
  const URL_themes = "http://localhost:8000/themes";

  const loadCite = async () => {
    const r = await fetch(URL_micro);

    const c = await r.json();

    if (!cite) { setCite(c) };

  }

  const loadThemes = async () => {
    const promise = await fetch(URL_themes);

    const themesArray = await promise.json();

    setThemes(themesArray) ;
  }
  

  useEffect(() => {
    loadCite();
    loadThemes();
    setCurrentTheme(themes[0]);
  }, []);

const  listThemes = themes.map((theme)=> {
  return(
  <ThemeButton 
    key={theme.id} 
    theme={theme} 
    setCurrentTheme={setCurrentTheme}
  />
  )
  })



  return (
    <>
      <Header />
      <main className="row">
        <aside className="column">
          <ul
            className='menu' 
            style={{ listStyleType: "none" }}><h5 style={{color: "var(--darkpurple)"}}>Schemas:</h5>
            {listThemes}
          </ul>
        </aside>
        <section>
          <Template className="column-wide"/>
        </section>

      </main>
      <footer>made by Dmitry Uvarov 2023</footer>
      <hr></hr>

      
      {(cite&&isShow) ? <Modal cite={cite} setIsShow={setIsShow}  /> : <></>}
      
    </>
  );
}

export default App;
