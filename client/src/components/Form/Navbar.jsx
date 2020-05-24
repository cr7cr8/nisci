
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContextProvider';


const Navbar = () => {


    const { user, dispatch: dispatchUser } = useContext(UserContext)

    return (
        <>
                <h2>{process.env.NODE_ENV}</h2>
            {user.username && <h2>{user.username}</h2>}
            {user.username && <button onClick={(e) => {

            //    localStorage.removeItem("token")

                dispatchUser({type:"removeLocalStorage"})


                window.location.assign("/")

            }}>logout</button>}


            {!user.username && <Link to="/login"><h3>Login</h3></Link>}
            {!user.username && <Link to="register"><h3>Register</h3></Link>}
     
        </>
    );
}

export default Navbar;

