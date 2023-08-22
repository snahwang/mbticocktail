import { useEffect, useState } from "react"
import "./Test.css"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import ENTP from '../resources/images/ENTP.svg'
import INTP from '../resources/images/INTP.svg'
import ESFJ from '../resources/images/ESFJ.svg'
import ESTP from '../resources/images/ESTP.svg'
import ISFJ from '../resources/images/ISFJ.svg'
import ISTP from '../resources/images/ISTP.svg'
import ENFJ from '../resources/images/ENFJ.svg'
import INFJ from '../resources/images/INFJ.svg'
import ENTJ from '../resources/images/ENTJ.svg'
import INTJ from '../resources/images/INTJ.svg'
import ENFP from '../resources/images/ENFP.svg'
import INFP from '../resources/images/INFP.svg'
import ESFP from '../resources/images/ESFP.svg'
import ISFP from '../resources/images/ISFP.svg'
import ESTJ from '../resources/images/ESTJ.svg'
import ISTJ from '../resources/images/ISTJ.svg'
// import icKakao from '../resource/images/icKakao.svg'
// import icLink from '../resource/images/icLink.svg'

const Test = (props:any) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        function setWindow() {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty("--vh", `${vh}px`)
        }
        window.addEventListener("resize", setWindow)
    }, [])
    const types : String[] = []
    const [page, setPage] = useState(1)
    const [contents, setContents] = useState([])
    const [mbtiState, setMbtiState] = useState(types)

    const goRes = () => {
        navigate("../Result", { state: { contents: contents } })
    }

    const questionList = [
        {
            question: ["칵테일바에 갔을 때 어떤 자리에 앉는 것을 선호하나요?"],
            select: [
                { type: "E", answer: "바텐더와 이야기를 나누고싶어! 바 자리에 앉는다" },
                { type: "I", answer: "친구와 대화하면서 홀짝홀짝 마실래. 테이블 석에 앉는다" },
            ],
        },
        {
            question: ["친구들이나 동료들과의 만남에서 역할은?"],
            select: [
                { type: "E", answer: "주로 먼저 모이자고 제안하는 편이다" },
                { type: "I", answer: "누군가 모이자고 하면 참석하는 편이다" },
            ],
        },
        {
            question: ["술자리 모임이나 행사에 있을 때 본인의 모습을 골라주세요."],
            select: [
                { type: "E", answer: "나는 사교적이며 새로운 사람들을 만나는 것을 즐긴다" },
                { type: "I", answer: "나는 이미 알고 있고 편안함을 느끼는 사람들과 시간을 보내는 것을 선호한다" },
            ],
        },
        {
            question: ["칵테일을 선택할 때 어떤 것을 보고 고르나요?"],
            select: [
                { type: "N", answer: "칵테일의 모양과 느낌을 보고 고릅니다" },
                { type: "S", answer: "맛과 향에 대한 설명을 참고해서 고릅니다" },
            ],
        },
        {
            question: ["편한 술자리에서의 보통 어떤 주제로 대화를 하나요?"],
            select: [
                { type: "S", answer: "그때 그때 관심사에 따른 주제로 길게 대화를 나누는 편" },
                { type: "N", answer: "이야기 주제가 꼬리의 꼬리를 물고 어디로 튈 지 모른다" },
            ],
        },
        {
            question: ["맛이 강하고 강렬한 칵테일을 선호합니까, 아니면 더 가볍고 상쾌한 칵테일을 선호합니까?"],
            select: [
                { type: "N", answer: "나는 대담한 맛의 더 강한 칵테일을 즐깁니다" },
                { type: "S", answer: "더 가볍고 상쾌한 음료를 선호합니다" },
            ],
        },
        {
            question: ["술을 마시면 당신은 더 표현력이 풍부해지고 감정적으로 변하는 편인가요?"],
            select: [
                { type: "F", answer: "나는 내 감정에 대해 더 개방적이고 표현적이 된다" },
                { type: "T", answer: "나는 술을 마실 때도 크게 감정적으로 풍부해지거나 하지는 않는다" },
            ],
        },
        {
            question: ["술자리에서 술 값 내기로 게임을 하게 되었을 때 어떻게 하나요?"],
            select: [
                { type: "T", answer: "내기든 뭐든 게임은 이겨야지! 승부욕이 발동된다" },
                { type: "F", answer: "이기고 지는 것 상관없이 즐기기는 편이다" },
            ],
        },
        {
            question: ["바텐더가 자신이 만든 스페셜티 칵테일을 추천할 때 어떻게 반응합니까?"],
            select: [
                { type: "F", answer: "추천해주니 시도해보고 창의성에 감탄한다" },
                { type: "T", answer: "그렇지만 이미 알고 있는 안전한 맛의 칵테일을 고를 때도 있다" },
            ],
        },
        {
            question: ["익숙하지 않거나 새로운 사회적 상황에서의 술자리에서 당신은?"],
            select: [
                { type: "P", answer: "나는 잘 적응하고 새로운 환경의 새로움을 즐긴다" },
                { type: "J", answer: "익숙하지 않은 환경에서 더 조심스럽고 내성적인 편이다" },
            ],
        },
        {
            question: ["저녁 모임을 주도할 때는 어느 쪽에 가까운가요?"],
            select: [
                { type: "P", answer: "맛집에 가서 자리 없으면 그 근처 괜찮은 곳 아무데나 가서 먹지 뭐" },
                { type: "J", answer: "맛집은 인원이 많으면 자리가 없을수도 있으니 미리 예약해야지" },
            ],
        },
        {
            question: ["친구들을 집에 초대했을 때 어떤 스타일인가요?"],
            select: [
                { type: "P", answer: "친구들 와서 먹다가 모자라면 그때 먹고 싶은거 시켜야지" },
                { type: "J", answer: "음식이 모자라지는 않겠지? 인원 수로 양을 예상해서 넉넉히 준비한다" },
            ],
        },
    ]

    const mbtiCocktails: any[] = [
        {
            mbti: "ENFP",
            img: ENFP,
            cocktails: "마이타이(Mai Tai)",
            details: [
                "ENFP인 당신은 따뜻하고 열정적이며 새로운 아이디어를 탐구하는 것을 좋아합니다.",
                "마이타이는 다채로운 색과 풍부한 열대과일의 맛을 가진 칵테일로 삶과 탐험에 대한 ENFP의 열정과 닮은 칵테일입니다.",
            ],
        },

        {
            mbti: "INTP",
            img: INTP,
            cocktails: "네그로니(Negroni)",
            details: [
                "INTP인 당신은 분석적이고 상상력이 풍부하며 복잡한 문제를 좋아합니다.",
                "쓴 맛과 달콤한 맛이 균형을 이루고 있는 네그로니는 INTP의 복잡성과 분석에 대한 사랑에 잘 어울리는 칵테일입니다.",
            ],
        },

        {
            mbti: "ESFJ",
            img: ESFJ,
            cocktails: "코스모폴리탄(Cosmopolitan)",
            details: [
                "ESFJ인 당신은 사교적이고 배려하며 조화를 중시합니다.",
                "달콤하고 시큼한 맛으로 유명한 코스모폴리탄은 많은 사람들에게 사랑을 받는 칵테일입니다. 다른 사람들을 기분 좋게 해주는 매력의 ESFJ와 같은 결의 칵테일입니다.",
            ],
        },

        {
            mbti: "ESTP",
            img: ESTP,
            cocktails: "마가리타(Margarita)",
            details: [
                "ESTP인 당신은 활기차고 통찰력이 있으며 열정이 가득한 사람으로 의도치 않게 모임의 중심이 되곤합니다.",
                "데킬라, 트리플섹, 오렌지 맛 리큐어와 라임 즙으로 만드는 데킬라는 활기차고 상큼한 맛으로 유명합니다. ESTP의 열정과 외향적인 모습은 닮은 칵테일입니다.",
            ],
        },

        {
            mbti: "ISFJ",
            img: ISFJ,
            cocktails: "벨리니(Bellini)",
            details: [
                "ISFJ인 당신은 조화와 편안함에 중점을 두고 지원적이고 세부 지향적입니다.",
                "샴페인을 베이스로하여 상큼하면서 부드럽고 편안한 복숭아 향이 나는 Bellini는 ISFJ의 온화한 성격과 잘 어울려요.",
            ],
        },

        {
            mbti: "ISTP",
            img: ISTP,
            cocktails: "위스키 사워(Whiskey Sour)",
            details: [
                "ISTP인 당신은 실용적이고 관찰력이 뛰어나며 사물이 어떻게 작동하는지 이해하는 것을 좋아합니다.",
                "위스키, 레몬 주스, 설탕의 균형을 필요로 하는 위스키 사워는 그들의 호기심과 직접 체험하는 접근 방식과 비슷합니다.",
            ],
        },

        {
            mbti: "ENFJ",
            img: ENFJ,
            cocktails: "미모사(Mimosa)",
            details: [
                "ENFJ인 당신은 사교적이고 센스가 있어 사람들을 배려하는 따뜻한 성격의 소유자입니다.",
                "화이트와인과 오렌지주스를 혼합한 미모사는 즐거운 자리에서 기분과 분위기를 띄워주는 칵테일로 분위기 메이커 ENFJ와 잘 어울립니다.",
            ],
        },

        {
            mbti: "INFJ",
            img: INFJ,
            cocktails: "프렌치75(French 75)",
            details: [
                "INFJ인 당신은 통찰력 있고 이상주의적이며 복잡합니다.",
                "진, 레몬 주스, 슈가시럽, 샴페인의 절묘한 조화를 이루는 프렌치 75는 의미 있고 심오한 경험을 원하는 이들의 마음을 울릴 수 있어요.",
            ],
        },

        {
            mbti: "ENTJ",
            img: ENTJ,
            cocktails: "맨해튼(Manhattan)",
            details: [
                "ENTJ인 당신은 카리스마있고 직접적이며 효율성과 논리를 좋아하는 성격의 소유자입니다.",
                "위스키, 베르무트, 비터즈가 혼합되어 단단하고도 복합적인 맛을 지닌 맨해튼은 ENTJ의 직설적인 성향과 닮았어요.",
            ],
        },

        {
            mbti: "INTJ",
            img: INTJ,
            cocktails: "마티니(Martini)",
            details: [
                "INTJ인 당신은 호기심이 많고 자신감있고 분석적인 성격에 미니멀리즘을 선호합니다.",
                "진과 드라이 베르무트의 조합으로 우아함과 단순함이 있는 클래식 마티니는 미니멀하고 감각적인 칵테일로 INTJ와 잘 어울려요.",
            ],
        },

        {
            mbti: "ENTP",
            img: ENTP,
            cocktails: "롱 아일랜드 아이스티(Long Island Iced Tea)",
            details: [
                "ENTP인 당신은 외향적이고 창의적이며 항상 새로운 경험을 할 준비가 되어 있습니다.",
                "여러 종류의 알코올과 콜라 및 레몬 주스를 결합한 복잡하고 다재다능한 칵테일로 모험적이고 절충적인 성격에 잘 어울립니다. 그것의 다양한 성분은 여러 아이디어와 관심사를 저글링하는 ENTP의 능력을 반영합니다.",
            ],
        },

        {
            mbti: "INFP",
            img: INFP,
            cocktails: "블루 라군(Blue Lagoon)",
            details: [
                "INFP인 당신은 차분하고 낭만적인 성향으로 보이지만 호기심이 많으며 열정적인 사람으로 조화를 추구합니다.",
                "몽환적인 블루 컬러와 새콤달콤한 풍미가 어우러진 블루라군은 그들의 상상력과 기발함과 닮은 칵테일입니다.",
            ],
        },

        {
            mbti: "ESFP",
            img: ESFP,
            cocktails: "피나콜라다(Piña Colada)",
            details: [
                "ESFP인 당신은 자발적이고 열정적이며 다른 사람을 행복하게 만드는 것을 좋아합니다.",
                "열대 분위기와 관대한 맛을 지닌 피냐 콜라다는 즐거움을 좋아하고 관대한 성격의 ESFP에게 어울립니다.",
            ],
        },

        {
            mbti: "ISFP",
            img: ISFP,
            cocktails: "모히토(Mojito)",
            details: [
                "ISFP인 당신은 관찰력이 뛰어나고 실용적이며 아름다운 것을 좋아합니다.",
                "단맛, 신맛, 상쾌한 맛의 균형과 매력적인 미학을 지닌 모히토는 조화로운 감각적 경험에 대한 ISFP의 사랑에 부응할 거에요.",
            ],
        },

        {
            mbti: "ESTJ",
            img: ESTJ,
            cocktails: "블러디 메리(Bloody Mary)",
            details: [
                "ESTJ인 당신은 실용적이고 적극적이며 가치관이 명확하고 단호합니다",
                "고소한 풍미와 오랜 명성을 지닌 블러디 메리는 체계적이고 신뢰할 수 있는 경험을 선호하는 ESTJ에게 추천하는 칵테일이에요.",
            ],
        },

        {
            mbti: "ISTJ",
            img: ISTJ,
            cocktails: "올드패션드(Old Fashioned)",
            details: [
                "ISTJ인 당신은 논리적이고 실용적이며 전통을 중요하게 생각합니다.",
                "단순하지만 체계적인 접근이 필요한 클래식 칵테일인 Old Fashioned는 직설적이고 디테일 지향적인 특성과 어울립니다.",
            ],
        },
    ]

    const Counter = (idx: number, value: string) => {
        let types = mbtiState
        types[idx] = value
        setMbtiState(types)
        setPage(page + 1)
        if (page >= questionList.length - 1) {
            setMbti()
        }
    }

    function setMbti() {
        let energy = mbtiState.filter((v) => v === "I").length > mbtiState.filter((v) => v === "E").length ? "I" : "E"
        let recognize = mbtiState.filter((v) => v === "N").length > mbtiState.filter((v) => v=== "S").length ? "N" : "S"
        let judgment = mbtiState.filter((v) => v=== "F").length > mbtiState.filter((v) => v === "T").length ? "F" : "T"
        let lifestyle = mbtiState.filter((v) => v=== "J").length > mbtiState.filter((v) => v === "P").length ? "J" : "P"
        let mbti = energy + recognize + judgment + lifestyle
        setContents(mbtiCocktails.filter((v: { mbti: string }) => v.mbti === mbti)[0])
    }

    

    if (page <= questionList.length) {
        //질문페이지
        return (
            <div className="mbtiLayout">
                <div className="questionLayout">
                  <Header page={page} length={questionList.length} />
                    {questionList.map((val, idx) => (
                        <div key={idx} className="questionList" style={{ display: page === idx + 1 ? "flex" : "none" }}>
                            <div className="questionItemLayout">

                                <div className="chatListLayout">
                                    {val.question.map((qval, qidx) => (
                                        <div className="qChatbox" key={qidx}>
                                            <div>{qval}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="answerItem">
                                {val.select.map((aval, aidx) => (
                                    <div key={aidx} className="answerBox" onClick={() => Counter(page, aval.type)}>
                                        {aval.answer}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        //최종페이지
        return (
            <div className="mbtiLayout">
                <div className="questionLayout">
                    <Header/>
                    <div className="questionList" style={{ display: "flex" }}>
                        <div className="questionItemLayout">
                            <div className="chatListLayout">
                                <div className="qChatbox" onClick={() => goRes()}>
                                    <div>결과 확인하기</div>
                                </div>
                            </div>
                        </div>

                        <div className="answerItem">
                            <div className="answerBox" onClick={() => goRes()}>
                                결과 확인하기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test
