import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark " >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">fullstack developer</a>
      </div>
    </nav>
  )
}

export default Navbar