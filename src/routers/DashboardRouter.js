import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import {DcScreen} from '../components/dc/DcScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRouter = () => {
    return (
        <>
            
            <Navbar />


            <div className="container mt-2">
                <Switch>

                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact part="/dc" component={DcScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
