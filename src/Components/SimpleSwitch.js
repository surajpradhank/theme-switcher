import React, { useState } from 'react'

const SimpleSwitch = () => {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        })

    const [btnText, setbtnText] = useState("Enable Dark Mode");

    const toggleThemeStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Enable Light Mode");
        }
        else {
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white',
                    border: '1px solid black'
                });
            setbtnText("Enable Dark Mode");
        }

    }


    return (
        <div className="container" style={myStyle}>
            <h1>This is heading one</h1>
            <p style={myStyle}>
                <h3>This is paragraph</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                accusantium consequuntur saepe ea doloremque delectus eos officia?
                Ut in alias vitae ab atque iste similique! Commodi et asperiores nobis
                libero quidem molestiae at nihil porro aspernatur impedit!
            </p>
            <button onClick={toggleThemeStyle} type="button" className="btn btn-primary my-2">{btnText}</button>
        </div>
    )
}

export default SimpleSwitch;