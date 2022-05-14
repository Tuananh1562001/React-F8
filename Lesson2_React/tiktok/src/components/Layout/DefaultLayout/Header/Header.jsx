import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';

import Propper from '~/components/Propper/Propper';
import './Header.scss';
import images from '~/assets/images';

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setSearchResult([1, 2, 3])
    }, [])
    return (
        <header className="wrapper">
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="tiktok"/>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <Propper>
                            <div className='search-result' tabIndex="-1" {...attrs} >
                                Ket qua
                            </div>
                        </Propper>
                    )}
                >
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
                </Tippy>
                <div className='action'></div>
            </div>
        </header>
    );
}

export default Header;
