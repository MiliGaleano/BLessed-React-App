import React, {useEffect, useState} from 'react'
import GetPoster from '../../services/getPoster'

export default function PosterFav({id}) {
    const [loading, setLoading] = useState(false)
    const [urlSerie, seturlSerie] = useState([])

    useEffect(() => {
        setLoading(true)
        GetPoster({id})
        .then(urlSerie => {
            seturlSerie(urlSerie)
            setLoading(false)
        })
    }, [id])

    if (loading) return <div><p>Learning...</p></div>

    return (
        <div>
            <img src={urlSerie} alt='poster'></img>
        </div>
    )
}