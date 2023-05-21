import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const HomeCard = () => {
  return (
    <div>
        <style type="text/css">
          {`
            .kanji{
                font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN","HG明朝E","ＭＳ Ｐ明朝","ＭＳ 明朝",serif;
                -webkit-transform-origin: 0 0;
                -webkit-transform: scale(1, 1.01);
                -moz-transform-origin: 0 0;
                -moz-transform: scale(1, 1.01);
                -ms-transform-origin: 0 0;
                -ms-transform: scale(1, 1.02);
                -o-transform-origin: 0 0;
                -o-transform: scale(1, 1.01);
                
                position:absolute;
                font-size:20vw;
                animation:fadeIn 4s;
            }
            .right{
                background:black;
                position:absolute;
                width:50vw;
                height:100vh;
                top:55px;
                right:0;
                text-align:left;
                animation: slideIn 1.5s forwards;
                text-align:center;
                padding:200px 30px;
            }
            .second{
                top:350px;
                left:150px;
            }
            .explanation{
                display:flex;
                justify-content:center;
                color:white;
                font-size:30px;
                margin-top:30px;
                margin-left:10px;
            }

            @keyframes fadeIn {
                0% { opacity: 0; }
                30% { opacity: 0; }
                100% { opacity: 1; }
            }

            @keyframes slideIn{
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
          `}
        </style>
        <div className="left">
            <div class="kanji first">感情</div>
            <div class="kanji second">移入</div>
        </div>
        <div className="right">
            <div className="explanation">Kanjo inyu-- The ethereal art of connection and emotional immersion. It is a concept deeply rooted in Japanese culture, its essence resonating with the universal human experience.
            Spreading this idea is essential for achieving world peace.</div>
        </div>
    </div>
  )
}

export default HomeCard;