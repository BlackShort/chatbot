
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context/Context';
import { Logout } from '../Context/ChatsFunctions';

const AppBar = ({ color }) => {

    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const handleLogout = () => {
        Logout(setIsAuthenticated);
        navigate('/login');
    };
    return (
        <div className='App_Navbar' style={{ background: color }}>
            <Link to={isAuthenticated ? "/home" : "/"}>
                <h2 className="logo">CodeBot</h2>
            </Link>
            <nav className="navigation">
                {
                    isAuthenticated ? (
                        <>
                            {/* <p className='username'>{user.name}</p> */}
                            <button type='button' onClick={handleLogout} className="login-button">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to={"/login"}><button className="login-button">Login</button></Link>
                            <Link to={"/signup"}><button className="login-button">Signup</button></Link>
                        </>
                    )
                }
            </nav>
        </div>
    )
}

export default AppBar;