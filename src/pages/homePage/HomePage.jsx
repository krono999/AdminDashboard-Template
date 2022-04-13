import React from 'react'
import {} from '@mui/material'
import './homePage.scss'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import { Suspense } from 'react';
import AnimationCanvas from '../../components/waterParticles/WaterParticles'
const HomePage = () => {
    return (
        <div className='homePage'>
                <SideBar />
            <div className="homeContainer">
                <NavBar />
                <div className='widgets'>
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earnings' />
                    <Widget type='balance' />
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="chartWave">
                    <Suspense fallback={<div>Loading...</div>}>
                            <AnimationCanvas />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default HomePage