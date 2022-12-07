import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from '../components/Navbar.js'
import MainContent from '../components/main.js'

export default function Company() {
  return (
    <div class="App">
      <div clas="content">
        <header classname="App_header">
          <div class="header_content d-flex align-items-center"><HeaderNavbar /></div>
        </header>
        <body class="App_body">
          <div class="main_content"><MainContent /></div>
        </body>
      </div>
    </div>
  )
}
