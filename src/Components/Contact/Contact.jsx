import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from '../../Context';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const form = useRef();
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs
            .sendForm('service_yyucfps', 'template_6o0ss77', form.current, {
                publicKey: 'aIqPHYvMYSXLxa3dE',
            })
            .then(
                () => {
                    setStatus('success');
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    setStatus('error');
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="contact">
            <div className="c-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div 
                        className="blur c-blur2" 
                        style={{ 
                            background: "var(--purple)",
                            position: "absolute",
                            right: "-100px"
                        }}
                    ></div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="c-right">
                    <input type="text" name='user_name' placeholder='Name' required />
                    <input type="email" name='user_email' placeholder='Email' required />
                    <textarea name="message" placeholder='Message' required></textarea>
                    <button className="button c-button" type='submit' disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Send Mail'}
                    </button>
                    {status === 'success' && <span className="success-message">Thanks for contacting me!</span>}
                    {status === 'error' && <span className="error-message">Failed to send. Please try again.</span>}
                </div>
            </form>
        </div>
    );
};

export default Contact;