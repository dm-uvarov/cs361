

export default function Header() {
  return (
    <header>
      <h1 style={{color: "Darkgreen"}} className="item">
        <span style={{color:"Darkgreen"}}> C</span>
        <span style={{color:"Green"}}>olor</span> 
        <span style={{color:"var(--darkest2)"}}> T</span>
        <span style={{color:"var(--brightest2)"}}>heme</span>  
        <span style={{color:"var(--darkpurple)"}}> C</span>
        <span style={{color:"var(--brightpurple)"}}>hanger </span> 
      </h1>
      {/* <span><button>Random stylized button</button></span> */}
      <span className="item item-text">welcome, guest!</span>
      {/* <button>login/logout</button> */}
    </header>
  )
}