import React, {useState, useEffect} from 'react'
import { Link, Route, Router } from 'react-router-dom'
import data from "../fixtures/nav.json"
import '../Style/Navbar.css'
import netflix from '../Netflix_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons'


function Navbar({login}) {
    const [currentPage, setCurrentPage] = useState(data[0].name)
    const [navBlack, setNavBlack] = useState(false)


    const changeCurrentPage = (name) =>{
        setCurrentPage(name)
    }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>100){
                setNavBlack(true)
            } else setNavBlack(false)
        })
        return () =>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <nav className={`navbar ${navBlack && 'navbar-black'}`}>
            <div className="navbar-margin">
                <div className="navbar-left">
                    <div className="logo-div">
                        <img src={netflix} alt="netfix" className="netflix-logo"/>
                    </div>

                    {/* Show the nagivation page if logged in */}
                    {login && 
                        <ul className="nav-ul">
                            {data.map((item) =>{
                                console.log(item)
                                return (
                                <li id={item.id} className="nav-list">
                                    <Link 
                                        to={item.url}           
                                        className={`${currentPage === item.name&&'current-nav'} nav-link`}
                                        onClick={() => changeCurrentPage(item.name)}
                                    >{item.name}
                                    
                                    </Link>
                                </li>
                            )})}
                        </ul>
                    }
                </div>

                {login
                    ?
                    <div className="navbar-right">               
                        <FontAwesomeIcon icon={faSearch} className="navbar-icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBell} className="navbar-icon"></FontAwesomeIcon>
                    </div>
                    :
                    <div className="navbar-right">
                        <button>Log in</button>
                    </div>

                }


            </div>
            
        </nav>
    )
}

export default Navbar;