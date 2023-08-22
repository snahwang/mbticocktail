import "./Header.css"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"


export default function Share(){

    useEffect(()=>{
        window.Kakao.Init("process.env.NEXT_PUBLIC_KAKAO_API_KEY")
    })
  
    function copyLink() {
        var textarea = document.createElement("textarea")
        document.body.appendChild(textarea)
        textarea.value = "https://phr0929.github.io/mbti"
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
    }


    // Twitter
    const shareTwitter = () => {
      const text = '나의 MBTI는?'
      window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + 'https://phr0929.github.io/mbti')
    }

    
    const shareKakao = () => {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나의 MBTI는?',
          description: '친구와 대화하는 느낌으로 편하게 MBTI 검사를 받아보자!',
          imageUrl: null,
          link: {
            webUrl : 'https://phr0929.github.io/mbti',
            mobileWebUrl : 'https://phr0929.github.io/mbti',
          },
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              webUrl : 'https://phr0929.github.io/mbti',
              mobileWebUrl : 'https://phr0929.github.io/mbti',
            },
          },
        ]
      })
    }


    return (
        <div className="pageHeader">
            <div >
                <img src="../resources/images/logo.jpg" alt="" style={{ width: 20, height: 20, marginTop: 5 }}/>
                칵테일MBTI                
            </div>            
        </div>
    )

}


