
import './App.css';

function App() {
  // ============== TO DO ===============
  // * include in render differnet components that will persist at all
  //pages
  // header, footer, layout, navbar?
  // include router here 
  return (
    <>
      <header>
        <h1>logo here</h1>
        <span>Random stylized button</span>
        <p>welcome guest!</p>
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
