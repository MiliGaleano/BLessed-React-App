import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import homeFill from '../../assets/images/homeFill.png'
import favsFill from '../../assets/images/favsFill.png'
import watchFill from '../../assets/images/watchFill.png'
import listFill from '../../assets/images/listFill.png'
import home from '../../assets/images/home.png'
import favs from '../../assets/images/favs.png'
import watch from '../../assets/images/watch.png'
import list from '../../assets/images/list.png'
import './styles.css'

export default function Footer() {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 790);
    const [pathname, setPathname] = useState('/')
    const location = useLocation()
  
    useEffect(() => {
      setPathname(location.pathname)
    }, [location])


    const updateMedia = () => {
        setDesktop(window.innerWidth < 790);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    if (isDesktop) { return ( <footer>
            <div className='divFooter'>
                <NavLink to='/watchlist'>
                    {pathname === '/watchlist' ? 
                    (<img src={watchFill} alt="watchlist" className="iconFooter" />) 
                    : (<img src={watch} alt="watchlist" className="iconFooter" />)}
                </NavLink>
                <NavLink to='/watched'>
                    {pathname === '/watched' ? 
                    (<img src={listFill} alt="watched" className="iconFooter" />) 
                    : (<img src={list} alt="watched" className="iconFooter" />)}
                </NavLink>
                <NavLink to='/favs'>
                    {pathname === '/favs' ? 
                    (<img src={favsFill} alt="favs" className="iconFooter heartpadding" />) 
                    : (<img src={favs} alt="favs" className="iconFooter heartpadding" />)}
                </NavLink>
                <NavLink to='/' 
                exact >
                    {pathname === '/' || pathname.indexOf('/category/') !== -1 ? 
                    (<img src={homeFill} alt="home" className="iconFooter" />) 
                    : (<img src={home} alt="home" className="iconFooter" />)}
                </NavLink>
             </div>
        </footer>
    )}
    else return null
}