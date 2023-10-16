import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavMenu.module.css";

export default function NavMenu() {
    const [isSignedin, setIsSignedin] = useState(JSON.parse(localStorage.getItem('isSignedin') || 'false'));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'isSignedin') {
                setIsSignedin(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Initial check when the component mounts
        const storedValue = localStorage.getItem('isSignedin');
        if (storedValue !== null) {
            setIsSignedin(JSON.parse(storedValue));
        }

        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        setIsSignedin(false);
        localStorage.setItem('isSignedin', 'false');
        localStorage.removeItem('user');
        navigate("/");
    };

    return (
        <div className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/Home">HOME PAGE</NavLink>
                </li>
                {isSignedin && (
                    <>
                        <li>
                            <NavLink to="/Profile">PROFILE PAGE</NavLink>
                        </li>
                        <li>
                            <div>
                                {userName && userName.Name}
                            </div>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}
