import { useState } from "react"
const Tracker = () => {

    const [clicks, setClicks] = useState(0)

    const sumador = () => {
        setClicks(clicks + 1)
        console.log(clicks)


    }

    const restador = () => {
        setClicks(clicks - 1)
    }

    return (
        <div> <button onClick={restador} >-</button> <span>{clicks}</span>
            <button onClick={sumador}>+</button>
        </div>
    )
}

export default Tracker;