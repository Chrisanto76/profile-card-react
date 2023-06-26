import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='icon--container'>
                <img
                    src='/images/Facebook icon.svg'
                    alt='facebook-icon'
                    height='24px'
                    width='24px'
                    className='icon--container_item'
                />
                <img
                    src='/images/Github icon.svg'
                    alt='Github-icon'
                    height='24px'
                    width='24px'
                    className='icon--container_item'
                />
                <img
                    src='/images/Instagram icon.png'
                    alt='insta-icon'
                    height='24px'
                    width='24px'
                    className='icon--container_item'
                />
                <img
                    src='/images/Twitter icon.svg'
                    alt='twitter-icon'
                    height='24px'
                    width='24px'
                    className='icon--container_item'
                />
            </div>
        </>
    );
}
