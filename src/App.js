import React from 'react'
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContent from './components/Profile/ProfileContent';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                {/*<ProfileContent />*/}
                <Dialogs/>
            </div>
        </div>
    );
};

export default App;
