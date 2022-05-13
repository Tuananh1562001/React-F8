import './Header.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <header className="wrapper">
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="tiktok"/>
                </div>
                <div className='search'>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className='clear'>
                        {/* clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    
                    <FontAwesomeIcon className='loading' icon={faSpinner} />
                    
                    <button className='search-btn' >
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                <div className='action'></div>
            </div>
        </header>
    );
}

export default Header;
