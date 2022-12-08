import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashLink} from 'react-router-hash-link';
import HeaderNavbar from '../components/Navbar.js'

export default function Envy() {
  return (
    <div class="App">
      <div clas="content">
        <div class="App_header">
          <HeaderNavbar />
        </div>
        <div class="App_body">
          <div class="main_content">
            <div class="intro_content intro_top float-left">
              <span class="intro_content_top_text">Envy</span><br></br>
              <p class="intro_support m-0">嫉妬</p>
            </div>
            <div class="intro_main_content d-flex container-fluid">
              <div class="block_conetnt left_block col-3">
                <div class="sticky_box">
                  <div class="float-left"><HashLink class="link-text" smooth to="/prid#intro">Introduction</HashLink></div>
                  <div><HashLink class="link-text" smooth to="/prid#step1">step1 : 自覚</HashLink></div>
                  <div><HashLink class="link-text" smooth to="/prid#step2">step2 : 自己否定</HashLink></div>
                  <div><HashLink class="link-text" smooth to="/prid#step3">step3 : 活用(自分に対して)</HashLink></div>
                  <div><HashLink class="link-text" smooth to="/prid#step4">step4 : 活用(他人に対して)</HashLink></div>
                  </div>
              </div>
              <div class="block_conetnt center_block col-6">
                <div id="intro" class="personal_main">
                  <div class="personal_top_text">introduction</div>
                  <div class="personal_main_text">
                  まずは辞書の定義を引用します。<br></br>
                  嫉妬（しっと）とは、自分より他人の方が優れている、あるいは自分より他人の方に愛情が向けられている、といった認識に伴って生じるネガティブな感情のことである。<br></br>一般的には、羨望と憎悪が含まれる攻撃的な感情と捉えられる。<br></br><br></br>
                  嫉妬の例は想像しやすいのではないでしょうか。<br></br>
                  自分の好きな人が他の異性と仲良くしている場面を見たとき、同僚が自分よりも早く出世したとき、自分よりも友人の方が年収が高かったとき。<br></br>
                  いずれも自分には手が届かない物を他人が手にしている時に嫉妬の感情が湧き上がってきます。<br></br>
                  そんな時は「羨ましい、自分もそうなりたい」といった自分を高めたい感情と、「どうせ失敗する、うまくいかないでほしい」といった他人を落とす感情の2種類が混ざり合っているはずです。<br></br><br></br>
                  自分よりも優位な存在が現れた時に、その存在を認めたくないという気持ちが表れたと言えるでしょう。<br></br>
                  「自分の優位性を守りたい」<br></br>
                  これが嫉妬の特徴です。<br></br><br></br>
                  つぎは嫉妬とうまく付き合っていく方法を解説していきます。
                  </div>
                </div>
                <div id="step1" class="personal_main">
                  <div class="personal_top_text">自覚</div>
                  <div class="personal_main_text">
                  嫉妬はよく使われる言葉なので分かりやすいですね。<br></br>
                  生活の中で、他人のことを「羨ましいな、自分もそうなりたい」と感じた時です。<br></br><br></br>
                  同僚が上司から褒められていたとき、自分の好きな人が他の異性と仲良くしていたとき、同僚の年収が自分よりも高かったとき、
                  これらの場面で嫉妬を感じることが多いです。<br></br><br></br>
                  嫉妬の単語がよく使われる場面は好きな異性や恋人が他の異性と仲良くしているのを知った時ですよね。<br></br>
                  これもその人の一番になりたい、その座を誰にも奪われたくない、そんな気持ちの表れでしょう。
                  </div>
                </div>
                <div id="step2" class="personal_main">
                  <div class="personal_top_text">自己否定</div>
                  <div class="personal_main_text">
                  次は嫉妬という欲が自分の中にあることを認めましょう。<br></br>
                  嫉妬の特徴は「自分の優位性を守りたい」です。<br></br>
                  そして、自分が重要視していることに対してのみ嫉妬が表れます。<br></br>
                  つまり、嫉妬を感じた対象というのは自分が重要視している対象だということです。<br></br><br></br>
                  さて、自分が嫉妬を感じるときはどんなときか思い出してください。<br></br>
                  そのシチュエーションを分析してください。<br></br>
                  自分は何を求めているのでしょうか。<br></br>
                  会社内での評価、恋人の存在、年収、どんなものだとしても、嫉妬を感じたということはそれが自分にとって重要なものなのです。<br></br><br></br>
                  自分にとってこれが重要だと感じるものが分かったらそれをさらに深掘りしてください。<br></br>
                  なぜそれが重要だと感じるのか？その根幹となる部分はなんなのか？<br></br>
                  自分に大事なことは〇〇だと言えるようになればステップ２は終了です。<br></br>
                  </div>
                </div>
                <div id="step3" class="personal_main">
                  <div class="personal_top_text">活用(自分に対して)</div>
                  <div class="personal_main_text">
                  ここからは嫉妬を活かせるようになるための方法です。<br></br><br></br>
                  ここでは、恋人が全然自分にかまってくれなくて嫉妬して相手を束縛する行動を取ってしまった例で考えてみましょう。<br></br>
                  表面的には「自分の知らないところで他の異性と仲良くしないで欲しい」といった要求が表れますが、本質的には何を求めているのでしょうか。<br></br><br></br>
                  自分のことを一番に思って欲しい<br></br>
                  →他の異性と仲良くしないで欲しい<br></br>
                  →自分の見ていないところで仲良くなっていないか不安<br></br>
                  →相手の行動全てを把握しておきたい<br></br>
                  このように表面的に出てくる欲ではなく、本質的な欲に目を向けてください。<br></br><br></br>
                  自分よりも高い評価を受けている同僚に対して「媚を売っているだけだ」と思ってしまったり、自分より稼いでいる人に「ズルをしているだけだ」と思ってしまうこともあるかもしれないです。<br></br>
                  しかし、負の感情ではなく正の感情を意識しましょう。<br></br>
                  恋人に自分のことを一番に思ってもらうためにはどうすれば良いだろうか？会社で自分が正しく評価されるにはどうすれば良いだろうか？（そもそも評価に値する活躍をしているだろうか？）稼ぐためにはどうすれば良いだろうか？<br></br>
                  そう考えることで、次に自分は何をするべきか見えてくるはずです。<br></br><br></br>
                  場合によっては嫉妬の対象となった相手に教えてもらえば良いのです。<br></br>
                  どうやって出世したのか、どうやって稼いだのか、どうやって仲良くなったのか<br></br>
                  その人と良い関係を築けていればきっと教えてくれるでしょう。<br></br>
                  </div>
                </div>
                <div id="step4" class="personal_main">
                  <div class="personal_top_text">活用(他人に対して)</div>
                  <div class="personal_main_text">
                  今度は他人が嫉妬の強い人だった場合にどうするべきか、について話していきます。<br></br><br></br>
                  例えば恋人から束縛のようなことをされたり、誹謗中傷されたりといったときです。<br></br><br></br>
                  恋人からの束縛であれば、自分の愛が相手に伝わっていないのかもしれないので、どうすれば伝わるのかきちんと話し合う必要があります。<br></br><br></br>
                  誹謗中傷の場合は、何かしら自分の地位や名誉、資産などの嫉妬の対象となっているものがあるはずです。<br></br>
                  相手のことを大事に思うのであればその地位や名誉、資産の手に入れ方を教えてあげてください。<br></br>
                  それを手に入れることが不可能なことではない、悪いことをして手に入れた物ではない、といったことを伝えましょう。<br></br><br></br>
                  相手が成長して嫉妬を克服する必要があるため、なかなか難しいときもあると思います。<br></br>
                  どうでもいい相手であれば、必要以上に関与しないことも重要な決断です。<br></br>
                  </div>
                </div>
              </div>
              <div class="block_conetnt right_block col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
