import React from "react";
import { Route, NavLink}  from 'react-router-dom';
import Classes from '../Classes/classes';
import Services from '../Services/services';
import Contact from '../Contact/contact'

function FixedNav() {
    return (
        <div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/classes">Classes</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div>
                <button><a href='https://booksy.com/en-us/188605_naturally-naps-salon_hair-salon_39947_milwaukee'>Book Appointment</a></button>
            </div>
        </div>
    );
}

export default FixedNav;