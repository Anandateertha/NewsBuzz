import '../styles/Navbar.css';
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

    const [search, setsearch] = useState("")

    const onChange=(e)=>{
        setsearch(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.updateNews(search)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand wrapper fontg" to="/">NewsBuzz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item wrapper" key='general'><Link className="nav-link" aria-current="page" to="/">Home</Link> </li>
                            <li className="nav-item wrapper" key='business'><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                            <li className="nav-item wrapper" key='entertainment'><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item wrapper" key='health'><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                            <li className="nav-item wrapper" key='science'><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                            <li className="nav-item wrapper" key='sports'><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                            <li className="nav-item wrapper" key='technology'><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={onChange} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar


