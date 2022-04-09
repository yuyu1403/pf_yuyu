import { Link } from 'react-router-dom';
import Hero from '../../assets/images/hero.svg';
import './index.scss';

const Sidebar = () => (<div className="nav-bar">
    <Link className="logo" to="/">
    <img src={Hero} alt='hero' />
    </Link>
</div>)

export default Sidebar;