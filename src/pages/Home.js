import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from '../components/Navbar.js'
import MainContent from '../components/main.js'

export default function Company() {
  return (
    <div class="App">
      <div clas="content">
        <header class="App_header">
          <div><HeaderNavbar /></div>
        </header>
        <body class="App_body">
          <div class="main_content"><MainContent /></div>
        </body>
      </div>
    </div>
  )
}
