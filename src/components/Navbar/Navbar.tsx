import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>
                <Link to="/" style={{ color: 'grey' }}>Home</Link>
            </li>
            <br />
            <li>
                <Link to="/custom-list" style={{ color: 'grey' }}>Custom List</Link>
            </li>
            <br />
            <li>
                <Link to="/counter" style={{ color: 'grey' }}>Counter</Link>
            </li>
            <br />
            <li>
                <Link to="/toggle-greeting" style={{ color: 'grey' }}>Toggle Greeting</Link>
            </li>
            <br />
            <li>
                <Link to="/reverse-string" style={{ color: 'grey' }}>Reverse String</Link>
            </li>
            <br />
            <li>
                <Link to="/github-user" style={{ color: 'grey' }}>Github User</Link>
            </li>
        </ul>
    );
};

export default Navbar;