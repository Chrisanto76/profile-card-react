import React from 'react';

export default function Infos() {
    return (
        <div className='user'>
            <img
                src='./images/profilePicture.jpg'
                alt='anto'
                className='anto'
            />
            <h1>Antony Poure</h1>
            <span>Frontend developer</span>
            <p>antonypoure2@gmail.com</p>
            <div className='contact--btn'>
                <button className='btn--item-1'>
                    <img
                        src='./images/email-icon.svg'
                        alt=''
                        height='16px'
                        className='email--icon'
                    />
                    Email
                </button>
                <button className='btn--item-2'>
                    <img src='./images/linkedin--icon.svg' alt=''  height="16px" className="email--icon"/>
                    LinkedIn
                </button>
            </div>
        </div>
    );
}
