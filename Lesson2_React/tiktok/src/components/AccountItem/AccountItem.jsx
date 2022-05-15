import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AccountItem.scss'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
function AccountItem() {
  return (
    <div className='accountItem'>
        <img className='avatar' src='' alt='Hoa' />
        <div className='info'>
            <h4 className='info-name'>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className='check' icon={faCheckCircle} />
            </h4>
            <span className='username'>Nguyenvana</span>
        </div>
    </div>
  )
}

export default AccountItem