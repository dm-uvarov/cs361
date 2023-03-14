import React from "react";


export default function Template() {


  return (
    <article>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h3>h4</h3>
      <h3>h5</h3>
      <h3>h6</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br></br>
      <hr></hr>
      <form>
        <caption>form example</caption>
        <input type="text" placeholder="textfield"></input>
        <button >button</button>
      </form>

      <table>
        <caption>example of table</caption>
        <thead>
          <tr>
            <th>category 1</th>
            <th scope="col">category 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">item1</th>
            <td>item 2</td>
          </tr>
          <tr>
            <th scope="row">item 3</th>
            <td>item 4</td>
          </tr>
        </tbody>
      </table>


    </article>
  )
}