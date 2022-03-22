/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function Contacts() {
    return (
        <div className='contact-page'>
            <div className='map-sect'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.36697786373!2d23.2539070974479!3d42.69553698343641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2z0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1647937070896!5m2!1sbg!2sbg" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className='contact-sect'>
                <ContactItem icon={phone} text1={'+359 888031448'} title={'Phone'} />
                <ContactItem icon={email} text1={'rosengeorgiew1@gmail.com'} title={'Email'} />
                <ContactItem icon={location} text1={'Sofia, Bulgaria'} title={'Location'} />
            </div>
        </div>
    )
}

export default Contacts