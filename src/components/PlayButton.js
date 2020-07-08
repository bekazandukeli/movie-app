import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlayFill } from 'react-icons/bs';

export default function PlayButton({ setModalShow }) {
    const [ size, setSize ] = useState("100px");
    return (
        <div onMouseOver={() => setSize("120px")} onMouseOut={() => setSize("100px")} >
            <BsPlayFill size={size} color="white" />  
        </div>
    );
}