import React from 'react'
import '../App.css';
import {HashLink} from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from '../components/Navbar.js'

export default function Prid() {
  return (
    <div class="App">
      <div clas="content">
        <div class="App_header">
          <HeaderNavbar />
        </div>
        <div class="App_body">
          <div class="main_content">
            <div class="intro_content intro_top float-left">
              <span class="intro_content_top_text">Prid</span><br></br>
              <p class="intro_support m-0">傲慢</p>
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
                  「傲慢（ごうまん）とは、思い上がり、おごり高ぶり、他人に対して見下すような態度で接するような様子を形容する表現である。」<br></br><br></br>
                  例えば、自分を上げる発言をしたり、他人を下げる発言をしたりすることです。<br></br>
                  自分とは異なる意見が出たときには「相手が間違っていて自分が正しい」と相手に認めさせて自分の主張を押し通すこともあるでしょう。<br></br><br></br>
                  いずれも自分が他人より優位な存在であることを主張しています。<br></br>
                  「他者へ自己の優位性を主張すること」
                  これが傲慢の特徴です。<br></br><br></br>
                  それでは傲慢とうまく付き合っていく方法を解説していきます。

                  </div>
                </div>
                <div id="step1" class="personal_main">
                  <div class="personal_top_text">自覚</div>
                  <div class="personal_main_text">
                  今までは特に意識していなかったかもしれませんが、自分の中の傲慢が顔を出す時が少なからずあるはず。<br></br><br></br>
                  まずはどんな時に傲慢が表れているか気づけるようになりましょう。<br></br>
                  「あ、昨日の飲み会のあの場面で傲慢の特徴が出ていたな。」といったように自分で気付けるようになればステップ１はクリアです。<br></br><br></br>
                  傲慢は誰かと会話している時に分かりやすく出ることが多いので、つい自分のことを良く言い過ぎた場面やつい他人のことを悪く言い過ぎた場面などを思い出すと分かりやすいです。<br></br>
                  また、自分と異なる意見が出ると自分の優位性が脅かされると感じて必死に自分の意見を肯定して異なる意見を否定するといった傾向も表れやすいですね。
                  </div>
                </div>
                <div id="step2" class="personal_main">
                  <div class="personal_top_text">自己否定</div>
                  <div class="personal_main_text">
                  次は傲慢という欲が自分の中にあることを認めましょう。<br></br><br></br>
                  傲慢の特徴は「他者へ自己の優位性を主張すること」です。<br></br>
                  そして、自分が重要視していることに対してのみ傲慢が表れます。<br></br>
                  つまり、どんなことに対して優位性を主張しようとしていたかを分析することで自分が何を重要視していたかが分かってきます。<br></br><br></br>
                  自分にとってこれが重要だと感じるものが分かったらそれをさらに深掘りしてください。<br></br>
                  なぜそれが重要だと感じるのか？その根幹となる部分はなんなのか？<br></br>
                  自分に大事なことは〇〇だと言えるようになればステップ２は終了です。
                  </div>
                </div>
                <div id="step3" class="personal_main">
                  <div class="personal_top_text">活用(自分に対して)</div>
                  <div class="personal_main_text">
                  ここからは傲慢を活かせるようになるための方法です。<br></br><br></br>
                  傲慢な特徴が表れていると気づいた時は抑えめにすることを心がけましょう。<br></br>
                  特に他人を落とす方向で傲慢が表れている場合は特に注意してください。<br></br>嫌われてしまいます。<br></br><br></br>
                  傲慢の特徴が強い人というのは向上心の高い人です。<br></br>
                  しかし、現実の自分と理想の自分の差が傲慢となって表れてしまっていることが多いです。<br></br><br></br>
                  この場合の解決方法は一つです。<br></br>
                  劣っている現在の自分を認めて理想の自分になれるように努力しましょう。<br></br>
                  傲慢で見栄を張らなくても普通にしていても理想的であると言える自分になればいいのです。<br></br>
                  傲慢な人は向上するモチベーションが人一倍高いので、正しい方向にそれを向ければ人一倍成長することができるはずです。
                  </div>
                </div>
                <div id="step4" class="personal_main">
                  <div class="personal_top_text">活用(他人に対して)</div>
                  <div class="personal_main_text">
                  今度は他人が傲慢だった時にどうするべきか、について話していきます。<br></br><br></br>
                  相手に傲慢な特徴が表れている。つまり相手が優位性を主張している場面にあなたが立ち会っているとします。<br></br>
                  この時、相手が主張していることは相手にとってはとても重要なことです。<br></br>
                  その重要な部分を絶対に否定してはいけません。<br></br>
                  あなたにとってはどうでも良くても相手にとってはとても重要なことだからです。<br></br>
                  なるべく肯定してあげて、気持ちよく話してもらいましょう。<br></br><br></br>
                  傲慢が表れている時の人は自分の優位性を感じることが目的となっているため、ただの雑談であれば論理的におかしくても聞き流して肯定してあげたほうが良いかもしれません。<br></br>
                  ビジネスの場などで内容を訂正しないといけない場面であれば、難易度は高いですが相手の優位性を損なわないような言葉を選ぶことを心がけましょう。<br></br><br></br>
                  また、あなたには相手にとって重要なことが分かるのでその内容は忘れずに覚えていてください。<br></br>
                  今後あなたがその人とコミュニケーションする上で役立つ知識となります。
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

