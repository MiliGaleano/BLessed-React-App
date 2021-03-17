import React, {useState, useEffect} from 'react'
import './styles.css'
import loading from '../../assets/images/loading.gif'

export default function Loading() {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 790)

    const updateMedia = () => {
      setDesktop(window.innerWidth < 790)
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
  })

    return (
        <div className="loading"
            style={(isDesktop) ? {background: `url(${loading}) center no-repeat #fff`, backgroundSize: '80vw'} : {background: `url(${loading}) center no-repeat #fff`, backgroundSize: 'auto 500px'}}
        >
        </div>
    )
}

