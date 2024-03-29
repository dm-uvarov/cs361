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
      <ul> list 
        <li>list item 1</li>
        <li>list item 2</li>
      </ul> 
      <ol> numbered list
        <li>list item 1</li>
        <li>list item 2</li>
      </ol>

      <hr></hr>
      <form>
      <fieldset>
        <legend>example form</legend>
        
          <span>form example</span>
          <input type="text" placeholder="textfield"></input>
          <button disabled>button</button>
        
      </fieldset>
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