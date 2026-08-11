import React from 'react'
import './Main.css'
import Service from '../../assets/Service 24_7-pana 1.svg'
import { Phone } from 'lucide-react'
import { MessageSquareText } from 'lucide-react'



const Main = () => {
    return (
        <div className='main'>
            <div className="headline">
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>

            <div className='contact-us'>
                <form className="form">
                    <div className="via-btn">
                        <button className="btn"><MessageSquareText width={15} height={13} />VIA SUPPORT CHAT</button>
                        <button className="btn"><Phone width={15} height={13} />VIA CALL</button>
                    </div>
                    <button className="emai-btn">VIA EMAIL FORM</button>
                    <label className="name">NAME</label>
                    <input type="text" className='name' />
                    <label className="email">E-MAIL</label>
                    <input type="email"  />
                    <label className="textarea">TEXT</label>
                    <input type="text"  />
                    <button className="btn">SUBMIT</button>
                </form>
                <img src={Service} alt="" />
            </div>
        </div>

    )
}

export default Main
