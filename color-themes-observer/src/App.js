
import './App.css';
import styled from 'styled-components';
import { useState, useNavigate, useEffect } from 'react';
import Modal from './components/Modal';
import Template from './components/Template';
import Header from './components/Header';


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
  const [colors, setcolors] = useState([]);
  const [cite, setCite] = useState();

  const [isShow, setIsShow] = useState(true);

  const URL_micro = "http://localhost:8080/QuoteOfTheDay";

  const loadCite = async () => {
    const r = await fetch(URL_micro);

    const c = await r.json();

    if (!cite) { setCite(c) };

  }

  useEffect(() => {
    loadCite();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setIsShow(!isShow);
  }


  return (
    <>
      <Header />
      <main className="row">
        <aside className="column">
          <ul style={{ listStyleType: "none" }}><h5>default schemas:</h5>
            <li>schema 1</li>
            <li>schema 2</li>
            <li>schema 3</li>
          </ul>
        </aside>
        <section>
          <Template className="column-wide"/>
        </section>

      </main>
      <footer>made by Dmitry Uvarov 2023</footer>
      <hr></hr>

      {/*     <button onClick = {e=>handleClick(e)}>show quote of the day</button>
      {isShow ?   
      <Modal cite={cite}/>:<></>} */}
      
      {(cite&&isShow) ? <Modal cite={cite} setIsShow={setIsShow}  /> : <></>}
      
    </>
  );
}

export default App;
