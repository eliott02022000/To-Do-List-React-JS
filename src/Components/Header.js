import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div  href="#" className="navbar-brand">Salut</div>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <NavLink to="/todo">My todolist</NavLink>
                    <NavLink to="/">Back to menu</NavLink>
                </nav>

                <div className="jumbotron text-center">
                    <h1>My First Todolist Page in React</h1>
                    <p>Great to forget nothing</p> 
                    <h3>Click on task to erase it</h3>

                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>

                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>

                        <div className="col-sm-4">
                            <h3>Column 3</h3> 
                            <p>Lorem ipsum dolor..</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
