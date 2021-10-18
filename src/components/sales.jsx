import { useState } from "react"
import "../styles/sale.css"

const Sale = () => {

    const[arr] = useState([
        {
            img: "5.jpg",
            atr: "Novel1",
            rating: "⭐⭐⭐⭐",
            price: "Rs. 300",
            id: "5f"
        },
        {
            img: "6.jpg",
            atr: "Novel2",
            rating: "⭐⭐⭐⭐⭐",
            price: "Rs. 300",
            id: "6s"
        },
        {
            img: "7.jpg",
            atr: "Novel3",
            rating: "⭐⭐⭐",
            price: "Rs. 350",
            id: "7s"
        },
        {
            img: "8.jpg",
            atr: "Novel4",
            rating: "⭐⭐⭐⭐",
            price: "Rs. 400",
            id: "8e"
        }
    ])

    return (
        <div className="sales" style={{background: "#F1F7E7"}}>
            <h1 style={{color: "#3EDBF0"}}>SHOP ONLINE</h1>
            <section className="featured">
                {arr.map(obj => (
                    <div key={obj.id} className="img">
                        <div>
                            <img src={obj.img} alt={obj.atr} />
                            <section className="icons">
                                <span><i className="fa fa-heart i1"></i></span>
                                <span><i className="fa fa-shopping-cart i2"></i></span>
                                <span><i className="fa fa-arrow-right i3"></i></span>
                            </section>
                        </div>
                        <p>{obj.atr}</p>
                        <p>{obj.rating}</p>
                        <p>{obj.price}</p>
                    </div>
                ))}
                {arr.map(obj => (
                    <div key={obj.id} className="img">
                        <div>
                            <img src={obj.img} alt={obj.atr} />
                            <section className="icons">
                                <span><i className="fa fa-heart i1"></i></span>
                                <span><i className="fa fa-shopping-cart i2"></i></span>
                                <span><i className="fa fa-arrow-right i3"></i></span>
                            </section>
                        </div>
                        <p>{obj.atr}</p>
                        <p>{obj.rating}</p>
                        <p>{obj.price}</p>
                    </div>
                ))}
            </section>
            <div className="more">
                Explore
            </div>
            <div className="copyright">
                <h1>Nogozo <i className="fa fa-copyright"></i></h1>
            </div>
        </div>
    )
}

export default Sale