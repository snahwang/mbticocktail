import "./Header.css"
import {useNavigate} from "react-router-dom"
import logo from '../resources/images/logo.svg'


export default function Header(props:any){
    const movePage = useNavigate()
    const goStart = () => {
        movePage('/')
    }

    return (
        <div className="pageHeader">
            <div onClick={() => goStart()}>
                <img src={logo} alt="" style={{ width: 20, height: 20, marginTop: 5 }}/>
                칵테일MBTI                
            </div>
            {props.page===undefined?
                <div></div>
                :     
                <div>{`${props.page} / ${props.length}`}</div>
            }
        </div>
    )

}


