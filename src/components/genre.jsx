import { useEffect, useRef, useState } from "react"
import "../styles/genre.css"

const Genre = () => {

    const[arr] = useState([
        {
            img: "5.jpg",
            atr: "Fantasy",
            id: "5f"
        },
        {
            img: "6.jpg",
            atr: "Sci-Fi",
            id: "6s"
        },
        {
            img: "7.jpg",
            atr: "Thriller",
            id: "7s"
        },
        {
            img: "8.jpg",
            atr: "History",
            id: "8e"
        }
    ])

    return (
        <div className="genre">
            <h1>Novels for you!</h1>
            <section>
                {arr.map(obj => (
                    <div key={obj.id} className="img">
                        <img src={obj.img} alt={obj.atr} />
                        <p>{obj.atr}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Genre