import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import menu from '../../../assets/images/menu.png'
import homeFill from '../../../assets/images/homeFill.png'
import favs from '../../../assets/images/favs.png'
import watch from '../../../assets/images/watch.png'
import list from '../../../assets/images/list.png'
import favsFill from '../../../assets/images/favsFill.png'
import watchFill from '../../../assets/images/watchFill.png'
import listFill from '../../../assets/images/listFill.png'
import home from '../../../assets/images/home.png'
import './styles.css'

export default function NavMenu() {

    const [pathname, setPathname] = useState('/')
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setPathname(location.pathname)
      }, [location])

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={'hambMenu'}>
            <img src={menu} alt='menu' onClick={handleClick} className='iconHamb' />
            {openMenu ? (
                <div className='divMenu' id='divMenu'>
                    <NavLink to='/' exact >
                        {pathname === '/' || pathname.indexOf('/category/') !== -1 ? 
                        (<img src={homeFill} alt="home" className="icon" />) 
                        : (<img src={home} alt="home" className="icon" />)}
                    </NavLink>
                    <NavLink to='/favs'>
                        {pathname === '/favs' ? 
                        (<img src={favsFill} alt="favs" className="icon heartpadding" />) 
                        : (<img src={favs} alt="favs" className="icon heartpadding" />)}
                    </NavLink>
                    <NavLink to='/watchlist'>
                        {pathname === '/watchlist' ? 
                        (<img src={watchFill} alt="watchlist" className="icon" />) 
                        : (<img src={watch} alt="watchlist" className="icon" />)}
                    </NavLink>
                    <NavLink to='/watched'>
                        {pathname === '/watched' ? 
                        (<img src={listFill} alt="watched" className="icon" />) 
                        : (<img src={list} alt="watched" className="icon" />)}
                    </NavLink>
                </div>
                )
                : null
            }
        </div>
    )
}