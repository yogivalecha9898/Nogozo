import { useEffect, useState } from "react"
import "../styles/about.css"

const About = () => {

    const[words, setWords] = useState(["pride", "style", "emotion"])
    const[word, setWord] = useState(words[0])
    const[idx, setIdx] = useState(0)

    useEffect(() => {
        const prev = words[idx].length
        let str = ""
        for(let j = 0; j < words[idx].length; j++) {
            setTimeout(() => {
                str += words[idx].charAt(j)
                setWord(str)
            }, j*200)
        }
        setTimeout(() => {
            for(let j = 0; j < words[idx].length; j++) {
                setTimeout(() => {
                    str = str.slice(0, -1)
                    setWord(str)
                }, j*100)
            }
        }, prev*200)
        setTimeout(() => {
            setIdx((idx+1)%words.length)
        }, prev*400)
    }, [idx])

    return (
        <div style={{background: "#F1F7E7"}} className="about">
            <h3 style={{color: "#3EDBF0"}}>ABOUT US</h3>
            <h1 style={{color: "#5E454B"}}>
                We are online exchange store<br />
                Sell your books online and claim and earn money!<br />
                With precision and <span style={{textDecoration: "underline"}}>{word}</span>
            </h1>
            <section>
                <h3>Our head</h3>
                <h3>XYZ</h3>
            </section>
        </div>
    )
}

export default About