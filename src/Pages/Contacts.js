import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function Contacts() {
    return (
        <div className='contact-page'>
            <div className='map-sect'></div>
            <div className='contact-sect'>
                <ContactItem icon={phone} text1={'+359 888031448'} title={'Phone'} />
                <ContactItem icon={email} text1={'rosengeorgiew1@gmail.com'} title={'Email'} />
                <ContactItem icon={location} text1={'Sofia, Bulgaria'} title={'Location'} />
            </div>
        </div>
    )
}

export default Contacts