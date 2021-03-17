import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'

export default function Categories() {
    return (
            <div className='NavLinksfilter'>
                <NavLink to='/' exact activeClassName='NavActive'>home</NavLink>|
                <NavLink to='/all/short' activeClassName='NavActive'>short</NavLink>|
                <NavLink to='/all/movie' activeClassName='NavActive'>movie</NavLink>|
                <NavLink to='/all/miniseries' activeClassName='NavActive'>mini series</NavLink>|
                <NavLink to='/all/series' activeClassName='NavActive'>series</NavLink>|
                <NavLink to='/all/tocry' activeClassName='NavActive'>to cry</NavLink>
            </div>
    )
}