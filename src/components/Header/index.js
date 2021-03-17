import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import blfavicon from '../../assets/images/blfavicon.png'
import Search from './Search'
import NavMenu from './NavMenu'
import './styles.css'

export default function Header( {handleSearching, category, userList} ) {
const [isDesktop, setDesktop] = useState(window.innerWidth > 790);

const updateMedia = () => {
    setDesktop(window.innerWidth > 790);
};

useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
});

    return (
        <header className='Header'>
           <div className='divLogo'> 
                <Link to='/'>
                    <img src={blfavicon} alt='logo' className='logo'></img>
                </Link>
           </div>
           <Search handleSearching={handleSearching} category={category} userList={userList}></Search>
           {isDesktop ? <NavMenu></NavMenu> : null}
        </header>
    )
}
