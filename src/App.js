import React from 'react'
import './App.css'
import Home from './pages/Home'
import Favs from './pages/Favs'
import Watched from './pages/Watched'
import Watchlist from './pages/Watchlist'
import AllSeries from './pages/Home/AllSeries'
import Category from './pages/Home/Category'
import Description from './pages/Description'
import { BrowserRouter, Route } from 'react-router-dom'
import {AuthContext} from './context/authContext'
import {CardSeriesContext} from './context/CardSeriesContext'
import Login from './components/Login'
import 'firebase/auth'

const App = () => {

    return (
        <AuthContext>
            <CardSeriesContext>
                <BrowserRouter>
                    <Route path='/' exact>
                        <Home></Home>
                    </Route>
                        <Route path='/all' exact>
                            <AllSeries></AllSeries>
                        </Route>
                        <Route path='/all/:id' exact>
                            <Category></Category>
                        </Route>
                    <Route path='/favs'>
                        <Favs></Favs>
                    </Route>
                    <Route path='/watchlist'>
                        <Watchlist></Watchlist>
                    </Route>
                    <Route path='/watched'>
                        <Watched></Watched>
                    </Route>
                    <Route path='/description/:id' exact>
                        <Description/>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </BrowserRouter>
            </CardSeriesContext>
        </AuthContext>
    )
}

 export default App