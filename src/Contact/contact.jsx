import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { sendData, emptyData } from '../Features/User'

const ContactComponent = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');



    return (
        <div>
            <h1>Contact</h1>

           <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
           <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
           <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

            <button onClick={() => dispatch(sendData({
                name: name, age: age, email: email
            }))}>Send Data</button>

          
        </div>
    )
}

export default ContactComponent