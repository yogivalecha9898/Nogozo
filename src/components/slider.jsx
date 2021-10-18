import { useEffect, useState } from "react"
import "../styles/slider.css"

const Slider = () => {

    const[arr] = useState([
        {
            img: "1.jpg",
            atr: "image1",
            id: "1o",
            color: "gray"
        },
        {
            img: "2.jpg",
            atr: "image2",
            id: "2t",
            color: "#C9CCD5"
        },
        {
            img: "3.jpg",
            atr: "image3",
            id: "3t",
            color: "#F1F7E7"
        }
    ]) 
    const[idx, setIdx] = useState(0)

    return (
        <div>
            <div className="frame">
                <hr style={{borderTop: `5px dashed ${arr[idx].color}`}}/>
                <img src={arr[idx].img} alt={arr[idx].atr} />
                <i className="fa fa-chevron-left left-a" onClick={() => setIdx(((idx - 1)%arr.length + arr.length)%arr.length)}></i>
                <i className="fa fa-chevron-right right-a" onClick={() => setIdx((idx + 1)%arr.length)}></i>
            </div>
        </div>        
    )
}

export default Slider