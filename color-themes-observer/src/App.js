
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';


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
  const [colors, setcolors] = useState([])

  return (
    <>
      <header>
        <h1>logo here</h1>
        <span><button>Random stylized button</button></span>
        <p>welcome, guest!</p>
        <button>login/logout</button>
      </header>
      <main>
        <section>
          <article>
            <h2> content to be changed </h2>
            <h3>header example</h3>
            <p>text here</p>
          </article>
        </section>
        <aside>
          <h2>menu with color schemas</h2>
          <button>schema 1</button>
          <button>schema 2</button>
          <button>schema 3</button>
        </aside>
      </main>
      <footer>legal info</footer>
    </>
  );
}

export default App;
