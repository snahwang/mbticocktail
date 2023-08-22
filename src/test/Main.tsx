import { useEffect, useState } from "react"
import "./Test.css"
import { useNavigate } from "react-router-dom"
import logo from '../resources/images/logo.svg'

const Main = () => {
    const navigate = useNavigate()
    const goTest = () => {
        navigate("./Test", { state: { page: 1 } })
    }
    return (
        <div className="mbtiLayout">
            <div className="startPageLayout">
                <div style={{ height: 130, minHeight: 130, maxHeight: 130 }} />
                <div className="startItem">
                    <div onClick={() => goTest()} className="startButton">
                    <img src={logo} alt="" style={{ width: 100, height: 100, marginTop: 5 }}/>
                    <br/>
                        MBTI로 보는 칵테일 추천
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
