import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"
import "../App.css"
import Header from "../components/Header"
import "./Test.css"

const Result = () => {
    const location = useLocation()
    const contents = location?.state?.contents === undefined ? { mbti: "", img: "", cocktails: "", details: [""] } : location.state.contents
    const navigate = useNavigate()
    useEffect(() => {
        if (location?.state?.contents.mbti === undefined) {
            navigate("../")
        }
        function onResize() {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty("--vh", `${vh}px`)
        }
        window.addEventListener("resize", onResize)
    })

    return (
        <div className="mbtiLayout">
            <div className="questionLayout">
                <Header />
                <div className="questionList" style={{ display: "flex" }}>
                    <div >
                        <div>
                            당신의 칵테일은 <br />
                        </div>
                        <div className="cocktailName">{contents.cocktails}</div>
                        <div style={{ width: "auto", height: "auto", backgroundColor: "#fff", borderRadius: 10, margin: "5px 5px 15px 5px" }}>
                            <img src={contents.img} alt="" style={{ width: 250, height: 250, marginTop: 10 }} />
                        </div>
                        {contents.details.map((val: any, idx: any) => (
                            <div className="qChatbox" key={idx}>
                                <div>{val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
