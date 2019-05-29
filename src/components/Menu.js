import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Rooms</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Facilities</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/restaurant">Restaurant</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Book Now</a></li>
                <li><a href="#" className="button fit">Contact Us</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
