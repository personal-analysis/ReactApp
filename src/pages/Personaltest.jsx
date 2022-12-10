import React from 'react';
import HeaderNavbar from '../components/Navbar.js'

const RadioInput = ({spanname, labelname, label, value, checked, setter, inputname}) => {
	return (
	  <label class={labelname}>
	    <input class={inputname} type="radio" checked={checked === value} onChange={() => setter(value)} />
	    <span class={spanname}>{label}</span>
	  </label>
	);
};
export default function Personaltest() {
  const [prid_1, setPrid_1] = React.useState();
  const [prid_2, setPrid_2] = React.useState();
  const [prid_3, setPrid_3] = React.useState();
  const [prid_4, setPrid_4] = React.useState();
  const [prid_5, setPrid_5] = React.useState();
  const [humility_1, setHumility_1] = React.useState();
  const [humility_2, setHumility_2] = React.useState();
  const [humility_3, setHumility_3] = React.useState();
  const [humility_4, setHumility_4] = React.useState();
  const [humility_5, setHumility_5] = React.useState();
  const [envy_1, setEnvy_1] = React.useState();
  const [envy_2, setEnvy_2] = React.useState();
  const [envy_3, setEnvy_3] = React.useState();
  const [envy_4, setEnvy_4] = React.useState();
  const [envy_5, setEnvy_5] = React.useState();
  const [gratitude_1, setGratitude_1] = React.useState();
  const [gratitude_2, setGratitude_2] = React.useState();
  const [gratitude_3, setGratitude_3] = React.useState();
  const [gratitude_4, setGratitude_4] = React.useState();
  const [gratitude_5, setGratitude_5] = React.useState();
  const [wrath_1, setWrath_1] = React.useState();
  const [wrath_2, setWrath_2] = React.useState();
  const [wrath_3, setWrath_3] = React.useState();
  const [wrath_4, setWrath_4] = React.useState();
  const [wrath_5, setWrath_5] = React.useState();
  const [patience_1, setPatience_1] = React.useState();
  const [patience_2, setPatience_2] = React.useState();
  const [patience_3, setPatience_3] = React.useState();
  const [patience_4, setPatience_4] = React.useState();
  const [patience_5, setPatience_5] = React.useState();
  const [sloth_1, setSloth_1] = React.useState();
  const [sloth_2, setSloth_2] = React.useState();
  const [sloth_3, setSloth_3] = React.useState();
  const [sloth_4, setSloth_4] = React.useState();
  const [sloth_5, setSloth_5] = React.useState();
  const [diligence_1, setDiligence_1] = React.useState();
  const [diligence_2, setDiligence_2] = React.useState();
  const [diligence_3, setDiligence_3] = React.useState();
  const [diligence_4, setDiligence_4] = React.useState();
  const [diligence_5, setDiligence_5] = React.useState();
  const [greed_1, setGreed_1] = React.useState();
  const [greed_2, setGreed_2] = React.useState();
  const [greed_3, setGreed_3] = React.useState();
  const [greed_4, setGreed_4] = React.useState();
  const [greed_5, setGreed_5] = React.useState();
  const [charity_1, setCharity_1] = React.useState();
  const [charity_2, setCharity_2] = React.useState();
  const [charity_3, setCharity_3] = React.useState();
  const [charity_4, setCharity_4] = React.useState();
  const [charity_5, setCharity_5] = React.useState();
  const [gluttony_1, setGluttony_1] = React.useState();
  const [gluttony_2, setGluttony_2] = React.useState();
  const [gluttony_3, setGluttony_3] = React.useState();
  const [gluttony_4, setGluttony_4] = React.useState();
  const [gluttony_5, setGluttony_5] = React.useState();
  const [temperance_1, setTemperance_1] = React.useState();
  const [temperance_2, setTemperance_2] = React.useState();
  const [temperance_3, setTemperance_3] = React.useState();
  const [temperance_4, setTemperance_4] = React.useState();
  const [temperance_5, setTemperance_5] = React.useState();
  const [lust_1, setLust_1] = React.useState();
  const [lust_2, setLust_2] = React.useState();
  const [lust_3, setLust_3] = React.useState();
  const [lust_4, setLust_4] = React.useState();
  const [lust_5, setLust_5] = React.useState();
  const [chastity_1, setChastity_1] = React.useState();
  const [chastity_2, setChastity_2] = React.useState();
  const [chastity_3, setChastity_3] = React.useState();
  const [chastity_4, setChastity_4] = React.useState();
  const [chastity_5, setChastity_5] = React.useState();
	const handleSubmit = e => {
		e.preventDefault();
		const data = {prid_1, prid_2,prid_3,prid_4,prid_5,humility_1, humility_2,humility_3,humility_4,humility_5,envy_1, envy_2,envy_3,envy_4,envy_5,gratitude_1, gratitude_2,gratitude_3,gratitude_4,gratitude_5,wrath_1, wrath_2,wrath_3,wrath_4,wrath_5,patience_1, patience_2,patience_3,patience_4,patience_5,sloth_1, sloth_2,sloth_3,sloth_4,sloth_5,diligence_1, diligence_2,diligence_3,diligence_4,diligence_5,greed_1, greed_2,greed_3,greed_4,greed_5,charity_1, charity_2,charity_3,charity_4,charity_5 ,gluttony_1, gluttony_2,gluttony_3,gluttony_4,gluttony_5 ,temperance_1, temperance_2,temperance_3,temperance_4,temperance_5 ,lust_1, lust_2,lust_3,lust_4,lust_5 ,chastity_1, chastity_2,chastity_3,chastity_4,chastity_5};
		const json = JSON.stringify(data, null, 4);
		console.clear();
		console.log(json);
	};
	return (
    <div class="App container p-0">
      <div clas="content">
        <div class="App_header">
          <HeaderNavbar />
        </div>
        <div class="App_body">
          <div class="main_content">
            <div class="d-flex justify-content-center question_area">
                <form onSubmit={handleSubmit}>

                  <div>
                    <div class="question_text">人に自慢できることがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_1} setter={setPrid_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_1} setter={setPrid_1}  />
                      </div>
                    </group>
                    <div class="question_text">できるだけその場を仕切りたい</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_2} setter={setPrid_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_2} setter={setPrid_2}  />
                      </div>
                    </group>
                    <div class="question_text">自分の意見が受け入れられたら嬉しい</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_3} setter={setPrid_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_3} setter={setPrid_3}  />
                      </div>
                    </group>
                    <div class="question_text">悪い行いをした人に正しさを指摘する</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_4} setter={setPrid_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_4} setter={setPrid_4}  />
                      </div>
                    </group>
                    <div class="question_text">人の意見や物事をまとめるのが上手いほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_5} setter={setPrid_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_5} setter={setPrid_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_5} setter={setPrid_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_5} setter={setPrid_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_5} setter={setPrid_5}  />
                      </div>
                    </group>
                  </div>

                  <div>
                    <div class="question_text">人にものを教えるのが得意だ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_1} setter={setHumility_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_1} setter={setHumility_1}  />
                      </div>
                    </group>
                    <div class="question_text">人の話を最後まで聞いてから、判断することを心がけている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_2} setter={setHumility_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_2} setter={setHumility_2}  />
                      </div>
                    </group>
                    <div class="question_text">どんな人からでも学びたいと思う</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_3} setter={setHumility_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_3} setter={setHumility_3}  />
                      </div>
                    </group>
                    <div class="question_text">腰が低いほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_4} setter={setHumility_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_4} setter={setHumility_4}  />
                      </div>
                    </group>
                    <div class="question_text">人への挨拶を大切にするほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_5} setter={setHumility_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_5} setter={setHumility_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_5} setter={setHumility_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_5} setter={setHumility_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_5} setter={setHumility_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">尊敬している人はいるか</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_1} setter={setEnvy_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_1} setter={setEnvy_1}  />
                      </div>
                    </group>
                    <div class="question_text">人のSNSの投稿を見て、自分もこのような生活が過ごせたらなと思う</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_2} setter={setEnvy_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_2} setter={setEnvy_2}  />
                      </div>
                    </group>
                    <div class="question_text">結果が出ないのは本気をまだ出せていないからだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_3} setter={setEnvy_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_3} setter={setEnvy_3}  />
                      </div>
                    </group>
                    <div class="question_text">上司や先輩に褒められると嬉しい</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_4} setter={setEnvy_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_4} setter={setEnvy_4}  />
                      </div>
                    </group>
                    <div class="question_text">自分と他人を比べて、どうして自分はこんなにもできないのだと自己嫌悪に陥ることがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_5} setter={setEnvy_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_5} setter={setEnvy_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_5} setter={setEnvy_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_5} setter={setEnvy_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_5} setter={setEnvy_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">感謝の言葉を人に日々欠かさない</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_1} setter={setGratitude_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_1} setter={setGratitude_1}  />
                      </div>
                    </group>
                    <div class="question_text">批判をされても受け入れ、相手にお礼をいう</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_2} setter={setGratitude_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_2} setter={setGratitude_2}  />
                      </div>
                    </group>
                    <div class="question_text">人に遊びに誘われることが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_3} setter={setGratitude_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_3} setter={setGratitude_3}  />
                      </div>
                    </group>
                    <div class="question_text">人から頼りにされることが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_4} setter={setGratitude_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_4} setter={setGratitude_4}  />
                      </div>
                    </group>
                    <div class="question_text">相談に乗ることが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_5} setter={setGratitude_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_5} setter={setGratitude_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_5} setter={setGratitude_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_5} setter={setGratitude_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_5} setter={setGratitude_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">自分は小さいことが気になり、イライラしやすい方だ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_1} setter={setWrath_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_1} setter={setWrath_1}  />
                      </div>
                    </group>
                    <div class="question_text">怒った時に人に手を出したことがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_2} setter={setWrath_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_2} setter={setWrath_2}  />
                      </div>
                    </group>
                    <div class="question_text">怒った時にものを投げたことがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_3} setter={setWrath_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_3} setter={setWrath_3}  />
                      </div>
                    </group>
                    <div class="question_text">感覚が敏感であり、いきたくない場所があったり、やりたくないことがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_4} setter={setWrath_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_4} setter={setWrath_4}  />
                      </div>
                    </group>
                    <div class="question_text">友人が自分のために怒ってくれるのは嬉しい</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_5} setter={setWrath_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_5} setter={setWrath_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_5} setter={setWrath_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_5} setter={setWrath_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_5} setter={setWrath_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">目的のためにいろんなことを我慢している</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_1} setter={setPatience_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_1} setter={setPatience_1}  />
                      </div>
                    </group>
                    <div class="question_text">怒って失敗した経験があるので、気になっても堪えるようにしている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_2} setter={setPatience_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_2} setter={setPatience_2}  />
                      </div>
                    </group>
                    <div class="question_text">自分がイライラしたことを気にしない術を知っている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_3} setter={setPatience_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_3} setter={setPatience_3}  />
                      </div>
                    </group>
                    <div class="question_text">自分が気になることを相手に直接伝えない</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_4} setter={setPatience_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_4} setter={setPatience_4}  />
                      </div>
                    </group>
                    <div class="question_text">その場を台無しにしたくないので、我慢することが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_5} setter={setPatience_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_5} setter={setPatience_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_5} setter={setPatience_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_5} setter={setPatience_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_5} setter={setPatience_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">夏休みの宿題は最後まで溜める方だ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_1} setter={setSloth_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_1} setter={setSloth_1}  />
                      </div>
                    </group>
                    <div class="question_text">一度気になりだすと、他のことに集中できなくなる</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_2} setter={setSloth_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_2} setter={setSloth_2}  />
                      </div>
                    </group>
                    <div class="question_text">怒るより諦めるほうが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_3} setter={setSloth_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_3} setter={setSloth_3}  />
                      </div>
                    </group>
                    <div class="question_text">ぼーっとする時間が好きだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_4} setter={setSloth_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_4} setter={setSloth_4}  />
                      </div>
                    </group>
                    <div class="question_text">寝ることが一番好きである</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_5} setter={setSloth_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_5} setter={setSloth_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_5} setter={setSloth_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_5} setter={setSloth_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_5} setter={setSloth_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">特技がある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_1} setter={setDiligence_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_1} setter={setDiligence_1}  />
                      </div>
                    </group>
                    <div class="question_text">オタク気質である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_2} setter={setDiligence_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_2} setter={setDiligence_2}  />
                      </div>
                    </group>
                    <div class="question_text">気がつくと5時間経っているほどのめり込む趣味がある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_3} setter={setDiligence_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_3} setter={setDiligence_3}  />
                      </div>
                    </group>
                    <div class="question_text">コツコツ積み上げるのは得意だ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_4} setter={setDiligence_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_4} setter={setDiligence_4}  />
                      </div>
                    </group>
                    <div class="question_text">多少の無理をしてもやりたいことがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_5} setter={setDiligence_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_5} setter={setDiligence_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_5} setter={setDiligence_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_5} setter={setDiligence_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_5} setter={setDiligence_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">趣味は多いほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_1} setter={setGreed_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_1} setter={setGreed_1}  />
                      </div>
                    </group>
                    <div class="question_text">やりたいことはたくさんあるが、飽き性である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_2} setter={setGreed_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_2} setter={setGreed_2}  />
                      </div>
                    </group>
                    <div class="question_text">広告を見るとすぐほしくなってしまう</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_3} setter={setGreed_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_3} setter={setGreed_3}  />
                      </div>
                    </group>
                    <div class="question_text">衝動買いをしたら数日後に後悔することが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_4} setter={setGreed_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_4} setter={setGreed_4}  />
                      </div>
                    </group>
                    <div class="question_text">人に勧められたらすぐ興味が湧く</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_5} setter={setGreed_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_5} setter={setGreed_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_5} setter={setGreed_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_5} setter={setGreed_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_5} setter={setGreed_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">人には人の考え方があると思う</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_1} setter={setCharity_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_1} setter={setCharity_1}  />
                      </div>
                    </group>
                    <div class="question_text">人が時間を守れなくても許せるほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_2} setter={setCharity_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_2} setter={setCharity_2}  />
                      </div>
                    </group>
                    <div class="question_text">他人をあまり否定しない</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_3} setter={setCharity_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_3} setter={setCharity_3}  />
                      </div>
                    </group>
                    <div class="question_text">自分のやりたいことより他人のやりたいことの話を聞くことが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_4} setter={setCharity_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_4} setter={setCharity_4}  />
                      </div>
                    </group>
                    <div class="question_text">ボランティアに興味がある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_5} setter={setCharity_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_5} setter={setCharity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_5} setter={setCharity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_5} setter={setCharity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_5} setter={setCharity_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">自分は恋愛体質だと思う</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_1} setter={setGluttony_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_1} setter={setGluttony_1}  />
                      </div>
                    </group>
                    <div class="question_text">できるだけ人と一緒に過ごして楽しみたいと思っている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_2} setter={setGluttony_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_2} setter={setGluttony_2}  />
                      </div>
                    </group>
                    <div class="question_text">どんな人とも仲良くしたいと思っている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_3} setter={setGluttony_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_3} setter={setGluttony_3}  />
                      </div>
                    </group>
                    <div class="question_text">告白は自分からすることが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_4} setter={setGluttony_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_4} setter={setGluttony_4}  />
                      </div>
                    </group>
                    <div class="question_text">恋愛をしている時に自分は尽くすタイプである</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_5} setter={setGluttony_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_5} setter={setGluttony_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_5} setter={setGluttony_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_5} setter={setGluttony_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_5} setter={setGluttony_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">浮気をするのは許せない</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_1} setter={setTemperance_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_1} setter={setTemperance_1}  />
                      </div>
                    </group>
                    <div class="question_text">思わせぶりな態度をとる人のことが苦手である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_2} setter={setTemperance_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_2} setter={setTemperance_2}  />
                      </div>
                    </group>
                    <div class="question_text">物理的な距離が近い人は苦手である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_3} setter={setTemperance_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_3} setter={setTemperance_3}  />
                      </div>
                    </group>
                    <div class="question_text">露出度の高い服装を着る人が苦手である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_4} setter={setTemperance_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_4} setter={setTemperance_4}  />
                      </div>
                    </group>
                    <div class="question_text">下ネタや下品な会話は苦手である</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_5} setter={setTemperance_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_5} setter={setTemperance_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_5} setter={setTemperance_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_5} setter={setTemperance_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_5} setter={setTemperance_5}  />
                      </div>
                    </group>
                  </div>
                  <div>
                    <div class="question_text">レストランで待たされるくらいなら、近場のチェーンで済ませたいタイプである</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_1} setter={setLust_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_1} setter={setLust_1}  />
                      </div>
                    </group>
                    <div class="question_text">お腹が空くとイライラする</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_2} setter={setLust_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_2} setter={setLust_2}  />
                      </div>
                    </group>
                    <div class="question_text">できることなら、ずっと美味しいものを食べて生きていきたい</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_3} setter={setLust_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_3} setter={setLust_3}  />
                      </div>
                    </group>
                    <div class="question_text">気がつくと、さっき開けたばかりのお菓子がなくなっていることが多い</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_4} setter={setLust_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_4} setter={setLust_4}  />
                      </div>
                    </group>
                    <div class="question_text">自分は痛みには強いほうだ</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_5} setter={setLust_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_5} setter={setLust_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_5} setter={setLust_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_5} setter={setLust_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_5} setter={setLust_5}  />
                      </div>
                    </group>
                  </div>
                  
                  <div>
                    <div class="question_text">ダイエットに成功したことがある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_1} setter={setChastity_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_1} setter={setChastity_1}  />
                      </div>
                    </group>
                    <div class="question_text">美味しい食べ物はつい食べ過ぎてしまうので、食べる回数をあえて減らしている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_2} setter={setChastity_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_2} setter={setChastity_2}  />
                      </div>
                    </group>
                    <div class="question_text">ハメを外さないように心がけていることがいくつかある</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_3} setter={setChastity_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_3} setter={setChastity_3}  />
                      </div>
                    </group>
                    <div class="question_text">自分の好きな食べ物を人にお薦めするのが好きである</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_4} setter={setChastity_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_4} setter={setChastity_4}  />
                      </div>
                    </group>
                    <div class="question_text">食べるのは好きだが、健康に気を遣って食べるようにしている</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_5} setter={setChastity_5} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_5} setter={setChastity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_5} setter={setChastity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_5} setter={setChastity_5}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_5} setter={setChastity_5}  />
                      </div>
                    </group>
                  </div>
                  <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

<script>
{/* if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
} */}
</script>
