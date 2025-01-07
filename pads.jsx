import React from "react"
export default function Pad(props) {


    const [isOn, setIsOn] = React.useState(props.on)

    function toggleClick(){
        setIsOn( prev => !prev)
        console.log('on')
    }

    return (
        <button
            style={{backgroundColor: props.color}}
            className={isOn ? "on" : undefined}
            onClick={toggleClick}
        ></button>
    )
}