import React, { useEffect, useState } from "react";
import './navigation.css'
import logo from '../../resources/images/goldLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export const Navigation = ({content, updater, menu, setMenu}) => {
    // const [menu, setMenu] = useState(false);

    // const burgerMenu = document.getElementById('burger');
    // let menuList = document.getElementById('items');

    useEffect(() => {
        // console.log('hello');
        const burgerMenu = document.getElementById('burger');
        const menuList = document.getElementById('items');
        

        if(menu) {
            burgerMenu.style.display = 'none';
            Array.from(menuList.children).forEach(e => e.style.display = 'block');
            // console.log('on', menuList);
        }else {
            burgerMenu.style.display = 'inline';
            Array.from(menuList.children).forEach(e => e.style.display = 'none');
            // console.log('off', menuList);
        }
    }, [menu])


    const toggle = () => {
        setMenu(!menu)
    };

    const menuHandler = (e) => {
        toggle();
        updater(e);
    }

    return (
        <div id="nav">
            <Link to='/'>
                <img id="logo" src={logo}/>
            </Link>

            <MenuIcon id='burger' className="menu" onClick={toggle}/>

            <div className="items" id='items'>
                <p id="x" onClick={toggle} style={{textAlign: 'center'}}>X</p>
                {/* <p onClick={menuHandler}>Home</p>
                <p onClick={menuHandler}>About</p>
                <p onClick={menuHandler}>Portfolio</p>
                <p>Contact</p> */}

                <p onClick={toggle}><Link to='/'>Home</Link></p>
                <p onClick={toggle}><Link to='/About'>About</Link></p>
                <p onClick={toggle}><Link to='/Portfolio'>Portfolio</Link></p>
                <p onClick={toggle}><Link to='/Contact'>Contact</Link></p>
            </div>
        </div>
    )
}