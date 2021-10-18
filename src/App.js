import About from "./components/about"
import Genre from "./components/genre"
import Nav from "./components/nav"
import Sale from "./components/sales"
import Slider from "./components/slider"

const App = () => {
    return (
        <div>
            <Nav />
            <Slider />
            <About />
            <Genre />
            <Sale />
        </div>
    )
}

export default App