import "../styles/nav.css"
import "../index.css"

const Nav = () => {

    const show = () => {
        const hiddenDiv = document.querySelector(".search")
        console.log(hiddenDiv)
        hiddenDiv.style.top = "0"
    }

    const hide = () => {
        const hiddenDiv = document.querySelector(".search")
        console.log(hiddenDiv)
        hiddenDiv.style.top = "-100%"
    }

    const showMenu = () => {
        const hiddenMenu = document.querySelector(".menu")
        const body = document.querySelector("body")
        body.style.overflow = "hidden"
        hiddenMenu.style.left = "0"
    }

    const hideMenu = () => {
        const hiddenMenu = document.querySelector(".menu")
        const body = document.querySelector("body")
        body.style.overflow = ""
        hiddenMenu.style.left = "-100%"
    }

    return (
        <nav>
            <div className="search">
                <nav>
                    <h1>Nogozo</h1>
                    <i onClick={hide} className="fa fa-times"></i>
                </nav>
                <form>
                    <input type="text" placeholder="Type words and hit Enter"/>
                    <i className="fa fa-search"></i>
                </form>
            </div>
            <div className="left center">
                <p>HOME</p>
                <p>SHOP</p>
                <p>CONTACTS</p>
                <p>FAVOURITES</p>
            </div>
            <div className="middle center">
                <h1>Nogozo</h1>
            </div>
            <div className="right center">
                <i onClick={show} className="fa fa-search"></i>
                <i className="fa fa-shopping-cart"></i>
                <i onClick={showMenu} className="fa fa-th"></i>
            </div>
            <div className="menu">
                <section>
                    <h1>NOGOZO</h1>
                    <i onClick={hideMenu} className="fa fa-times"></i>
                </section>
                <hr />
                <p>Some Menu</p>
                <p>Some Menu</p>
                <p>Some Menu</p>
                <p>Some Menu</p>
                <p>Some Menu</p>
            </div>
        </nav>
    )
}

export default Nav