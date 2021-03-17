import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
import './styles.css'
import DivStars from '../Stars/divStars';
import Heartsvg from './Heartsvg'
import CardSeriesContext from '../../context/CardSeriesContext'

export default function Slider(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 790)

  const updateMedia = () => {
    setDesktop(window.innerWidth < 790)
}

useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
})

const propType= props.sliderType
const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
const recently = JSON.parse(sessionStorage.getItem('RecentlyAdded'))
let sortSeries= seriesDB.slice(0);
if (propType === 'year') {
sortSeries=sortSeries.filter((x) => recently.includes(x.id))
} else if (propType === 'favs') {
sortSeries.sort((a,b) => (a.favs < b.favs) ? 1 : -1)
} else {
  for (let i=0; i<sortSeries.length; i++){
  sortSeries[i].stars.length !== 0 ?
  sortSeries[i].stars= sortSeries[i].stars.reduce(function(a, b){ return a + b })/sortSeries[i].stars.length :
  sortSeries[i].stars= 0
  }
  sortSeries.sort((a,b) => (a.stars < b.stars) ? 1 : -1)
}

const seriesToSlide = [];
  for (let i=0; i < 10; i++){
      seriesToSlide.push(sortSeries[i])
  }

  const {setShowCard} = useContext(CardSeriesContext)

    return (
      <Swiper
        spaceBetween={100}
        slidesPerView={(isDesktop) ? 3 : 6}
        loop={true}
      >
        {seriesToSlide.map(({year, id, stars, favs}) =>
            <SwiperSlide key={`slide-${id}`}>
                  <img onClick={() => setShowCard(id)} src={'https://firebasestorage.googleapis.com/v0/b/blessed-e4d26.appspot.com/o/'+id+'.jpg?alt=media&token=24dd3d4a-81c9-4d7e-b5ca-4eff42c4c14e'} alt={`slider ${id}`}></img>
                {propType === 'favs' ?
                <Heartsvg favs={favs}></Heartsvg> :
                propType === 'stars' ?
                <DivStars sliderDiv={'sliderDiv'} starsAverage={stars/2}></DivStars> :
                <p className='textSlider' style={(isDesktop) ? {width: '36vw', textAlign:'center'} : {width: '12vw', textAlign:'center'}}>{year}</p>
                }
            </SwiperSlide>
        )}
        <SwiperSlide className='LastSlide'></SwiperSlide>
      </Swiper>
    )
  }
