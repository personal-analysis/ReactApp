import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from '../components/Navbar.js'

export default function Prid() {
  return (
    <div class="App">
      <div clas="content">
        <header classname="App_header">
          <div class="header_content d-flex align-items-center"><HeaderNavbar /></div>
        </header>
        <body class="App_body">
          <div class="main_content">傲慢</div>
        </body>
      </div>
    </div>
  )
}
