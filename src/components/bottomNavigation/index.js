import React from 'react';
import { NavLink } from 'react-router-dom';


const BottomNavigation = () => {

    return (
        <div className="container" >
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/chat">
                        <div>
                            <i class="far fa-comment"></i>
                        </div>
                        <div>
                            Chat
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">
                        <div>
                            <i class="far fa-user"></i>
                        </div>
                        <div>
                            Contact
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/discover">
                        <div>
                            <i class="far fa-compass"></i>
                        </div>
                        <div>
                            Discover
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/me">
                        <div>
                            <i class="far fa-user"></i>
                        </div>
                        <div>
                            Me
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}


export default BottomNavigation;


// <ul className="nav">
//     <li className="navItem">
//         <NavLink className="navLink" activeClassName="active" to="/chat">
//             <img className="navItemImg" src={`${process.env.PUBLIC_URL}/assets/images/chat.png`} alt="" /><br />
//             <span>Chat</span>
//         </NavLink>
//     </li>


//     <li className="navItem">
//         <NavLink className="navLink" activeClassName="active" to="/contact">
//             <img className="navItemImg" src={`${process.env.PUBLIC_URL}/assets/images/me_contact.png`} alt="" /><br />
//             <span>Contact</span>
//         </NavLink>
//     </li>
//     <li className="navItem">
//         <NavLink className="navLink" activeClassName="active" to="/discover">
//             <img className="navItemImg" src={`${process.env.PUBLIC_URL}/assets/images/discover.png`} alt="" /><br />
//             <span>Discover</span>
//         </NavLink>
//     </li>
//     <li className="navItem">
//         <NavLink className="navLink" activeClassName="active" to="/me">
//             <img className="navItemImg" src={`${process.env.PUBLIC_URL}/assets/images/me_contact.png`} alt="" /><br />
//             <span>Me</span>
//         </NavLink>
//     </li>
// </ul>