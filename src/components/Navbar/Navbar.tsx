import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar fixed-top bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fixed top</a>
      </div>
    </nav>
  )
}

export default Navbar