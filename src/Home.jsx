import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Rooms from './Rooms';


const Home = () => {
    return (
        <>
            <div className='main-wrapper'>
               <Navbar />
                <Header />
                <Rooms />
                <div>footer</div>
            </div>
        </>
    )
}

export default Home