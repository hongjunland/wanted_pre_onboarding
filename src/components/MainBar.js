import React,{useState} from 'react';
import './MainBar.css';


function MainBar(){
    return(
        <div className="MainBar">
            <nav className="MainBar_nav">
                <div className="MainBar_nav_top">
                    <button type="button" className="MainBar_hamberger"><img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu"/></button>
                    <a href="/" className="MainBar_logo__bGymr">
                        <i>
                            Wanted
                        </i>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default MainBar;