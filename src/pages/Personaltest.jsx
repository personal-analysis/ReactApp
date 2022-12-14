import React from 'react';
import HeaderNavbar from '../components/Navbar.js'
import { Link } from 'react-router-dom';

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
		const result_data = JSON.stringify(data, null, 4);
		console.clear();
		console.log(result_data);
	};
  // const personalAnalyse = ({ statics:prid_1, prid_2,prid_3,prid_4,prid_5,humility_1, humility_2,humility_3,humility_4,humility_5,envy_1, envy_2,envy_3,envy_4,envy_5,gratitude_1, gratitude_2,gratitude_3,gratitude_4,gratitude_5,wrath_1, wrath_2,wrath_3,wrath_4,wrath_5,patience_1, patience_2,patience_3,patience_4,patience_5,sloth_1, sloth_2,sloth_3,sloth_4,sloth_5,diligence_1, diligence_2,diligence_3,diligence_4,diligence_5,greed_1, greed_2,greed_3,greed_4,greed_5,charity_1, charity_2,charity_3,charity_4,charity_5 ,gluttony_1, gluttony_2,gluttony_3,gluttony_4,gluttony_5 ,temperance_1, temperance_2,temperance_3,temperance_4,temperance_5 ,lust_1, lust_2,lust_3,lust_4,lust_5 ,chastity_1, chastity_2,chastity_3,chastity_4,chastity_5,prid,humility,envy,gratitude,wrath,patience,sloth,diligence,greed,charity,gluttony,temperance,lust,chastity}) => {
  //   return (
  //     prid=Number(prid_1)+ Number(prid_2)+Number(prid_3)+Number(prid_4)+Number(prid_5),
  //     humility=Number(humility_1)+ Number(humility_2)+Number(humility_3)+Number(humility_4)+Number(humility_5),
  //     envy=Number(envy_1)+ Number(envy_2)+Number(envy_3)+Number(envy_4)+Number(envy_5),
  //     gratitude=Number(gratitude_1)+ Number(gratitude_2)+Number(gratitude_3)+Number(gratitude_4)+Number(gratitude_5),
  //     wrath=Number(wrath_1)+ Number(wrath_2)+Number(wrath_3)+Number(wrath_4)+Number(wrath_5),
  //     patience=Number(patience_1)+ Number(patience_2)+Number(patience_3)+Number(patience_4)+Number(patience_5),
  //     sloth=Number(sloth_1)+ Number(sloth_2)+Number(sloth_3)+Number(sloth_4)+Number(sloth_5),
  //     diligence=Number(diligence_1)+ Number(diligence_2)+Number(diligence_3)+Number(diligence_4)+Number(diligence_5),
  //     greed=Number(greed_1)+ Number(greed_2)+Number(greed_3)+Number(greed_4)+Number(greed_5),
  //     charity=Number(charity_1)+ Number(charity_2)+Number(charity_3)+Number(charity_4)+Number(charity_5),
  //     gluttony=Number(gluttony_1)+ Number(gluttony_2)+Number(gluttony_3)+Number(gluttony_4)+Number(gluttony_5),
  //     temperance=Number(temperance_1)+ Number(temperance_2)+Number(temperance_3)+Number(temperance_4)+Number(temperance_5),
  //     lust=Number(lust_1)+ Number(lust_2)+Number(lust_3)+Number(lust_4)+Number(lust_5),
  //     chastity=Number(chastity_1)+ Number(chastity_2)+Number(chastity_3)+Number(chastity_4)+Number(chastity_5)
  //   );
  // };
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
                    <div class="question_text">????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_1} setter={setPrid_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_1} setter={setPrid_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_1} setter={setPrid_1}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_2} setter={setPrid_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_2} setter={setPrid_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_2} setter={setPrid_2}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_3} setter={setPrid_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_3} setter={setPrid_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_3} setter={setPrid_3}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={prid_4} setter={setPrid_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={prid_4} setter={setPrid_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={prid_4} setter={setPrid_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????</div>
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
                    <div class="question_text">???????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_1} setter={setHumility_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_1} setter={setHumility_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_1} setter={setHumility_1}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_2} setter={setHumility_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_2} setter={setHumility_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_2} setter={setHumility_2}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_3} setter={setHumility_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_3} setter={setHumility_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_3} setter={setHumility_3}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={humility_4} setter={setHumility_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={humility_4} setter={setHumility_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={humility_4} setter={setHumility_4}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_1} setter={setEnvy_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_1} setter={setEnvy_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_1} setter={setEnvy_1}  />
                      </div>
                    </group>
                    <div class="question_text">??????SNS?????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_2} setter={setEnvy_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_2} setter={setEnvy_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_2} setter={setEnvy_2}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_3} setter={setEnvy_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_3} setter={setEnvy_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_3} setter={setEnvy_3}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={envy_4} setter={setEnvy_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={envy_4} setter={setEnvy_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={envy_4} setter={setEnvy_4}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_1} setter={setGratitude_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_1} setter={setGratitude_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_1} setter={setGratitude_1}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_2} setter={setGratitude_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_2} setter={setGratitude_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_2} setter={setGratitude_2}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_3} setter={setGratitude_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_3} setter={setGratitude_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_3} setter={setGratitude_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gratitude_4} setter={setGratitude_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gratitude_4} setter={setGratitude_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gratitude_4} setter={setGratitude_4}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????</div>
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
                    <div class="question_text">????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_1} setter={setWrath_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_1} setter={setWrath_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_1} setter={setWrath_1}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_2} setter={setWrath_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_2} setter={setWrath_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_2} setter={setWrath_2}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_3} setter={setWrath_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_3} setter={setWrath_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_3} setter={setWrath_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={wrath_4} setter={setWrath_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={wrath_4} setter={setWrath_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={wrath_4} setter={setWrath_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_1} setter={setPatience_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_1} setter={setPatience_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_1} setter={setPatience_1}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_2} setter={setPatience_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_2} setter={setPatience_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_2} setter={setPatience_2}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_3} setter={setPatience_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_3} setter={setPatience_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_3} setter={setPatience_3}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={patience_4} setter={setPatience_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={patience_4} setter={setPatience_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={patience_4} setter={setPatience_4}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????????????????</div>
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
                    <div class="question_text">????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_1} setter={setSloth_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_1} setter={setSloth_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_1} setter={setSloth_1}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_2} setter={setSloth_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_2} setter={setSloth_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_2} setter={setSloth_2}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_3} setter={setSloth_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_3} setter={setSloth_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_3} setter={setSloth_3}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={sloth_4} setter={setSloth_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={sloth_4} setter={setSloth_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={sloth_4} setter={setSloth_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
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
                    <div class="question_text">???????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_1} setter={setDiligence_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_1} setter={setDiligence_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_1} setter={setDiligence_1}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_2} setter={setDiligence_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_2} setter={setDiligence_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_2} setter={setDiligence_2}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????5?????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_3} setter={setDiligence_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_3} setter={setDiligence_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_3} setter={setDiligence_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={diligence_4} setter={setDiligence_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={diligence_4} setter={setDiligence_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={diligence_4} setter={setDiligence_4}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????</div>
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
                    <div class="question_text">????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_1} setter={setGreed_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_1} setter={setGreed_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_1} setter={setGreed_1}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_2} setter={setGreed_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_2} setter={setGreed_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_2} setter={setGreed_2}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_3} setter={setGreed_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_3} setter={setGreed_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_3} setter={setGreed_3}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={greed_4} setter={setGreed_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={greed_4} setter={setGreed_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={greed_4} setter={setGreed_4}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????</div>
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
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_1} setter={setCharity_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_1} setter={setCharity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_1} setter={setCharity_1}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_2} setter={setCharity_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_2} setter={setCharity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_2} setter={setCharity_2}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_3} setter={setCharity_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_3} setter={setCharity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_3} setter={setCharity_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={charity_4} setter={setCharity_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={charity_4} setter={setCharity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={charity_4} setter={setCharity_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_1} setter={setGluttony_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_1} setter={setGluttony_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_1} setter={setGluttony_1}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_2} setter={setGluttony_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_2} setter={setGluttony_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_2} setter={setGluttony_2}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_3} setter={setGluttony_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_3} setter={setGluttony_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_3} setter={setGluttony_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={gluttony_4} setter={setGluttony_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={gluttony_4} setter={setGluttony_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={gluttony_4} setter={setGluttony_4}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_1} setter={setTemperance_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_1} setter={setTemperance_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_1} setter={setTemperance_1}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_2} setter={setTemperance_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_2} setter={setTemperance_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_2} setter={setTemperance_2}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_3} setter={setTemperance_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_3} setter={setTemperance_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_3} setter={setTemperance_3}  />
                      </div>
                    </group>
                    <div class="question_text">??????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={temperance_4} setter={setTemperance_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={temperance_4} setter={setTemperance_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={temperance_4} setter={setTemperance_4}  />
                      </div>
                    </group>
                    <div class="question_text">?????????????????????????????????????????????</div>
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
                    <div class="question_text">????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_1} setter={setLust_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_1} setter={setLust_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_1} setter={setLust_1}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_2} setter={setLust_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_2} setter={setLust_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_2} setter={setLust_2}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_3} setter={setLust_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_3} setter={setLust_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_3} setter={setLust_3}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={lust_4} setter={setLust_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={lust_4} setter={setLust_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={lust_4} setter={setLust_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????</div>
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
                    <div class="question_text">?????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_1} setter={setChastity_1} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_1} setter={setChastity_1}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_1} setter={setChastity_1}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_2} setter={setChastity_2} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_2} setter={setChastity_2}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_2} setter={setChastity_2}  />
                      </div>
                    </group>
                    <div class="question_text">???????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_3} setter={setChastity_3} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_3} setter={setChastity_3}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_3} setter={setChastity_3}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????</div>
                    <group class="inline-radio d-flex justify-content-center align-items-center">
                      <div class="sm_question_area">
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="5" value="5" checked={chastity_4} setter={setChastity_4} />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="4" value="4" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="3" value="3" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="2" value="2" checked={chastity_4} setter={setChastity_4}  />
                        <RadioInput labelname="radio_label" inputname="radio_input" spanname="radio_span" class="answer_radio" label="1" value="1" checked={chastity_4} setter={setChastity_4}  />
                      </div>
                    </group>
                    <div class="question_text">????????????????????????????????????????????????????????????????????????????????????</div>
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
                  <div class="d-flex justify-content-center">
                    <Link to='/result' state={{ prid_1:prid_1,prid_2:prid_2,prid_3:prid_3,prid_4:prid_4,prid_5:prid_5,humility_1:humility_1,humility_2:humility_2,humility_3:humility_3,humility_4:humility_4,humility_5:humility_5,envy_1:envy_1,envy_2:envy_2,envy_3:envy_3,envy_4:envy_4,envy_5:envy_5,gratitude_1:gratitude_1,gratitude_2:gratitude_2,gratitude_3:gratitude_3,gratitude_4:gratitude_4,gratitude_5:gratitude_5,wrath_1:wrath_1,wrath_2:wrath_2,wrath_3:wrath_3,wrath_4:wrath_4,wrath_5:wrath_5,patience_1:patience_1,patience_2:patience_2,patience_3:patience_3,patience_4:patience_4,patience_5:patience_5,sloth_1:sloth_1,sloth_2:sloth_2,sloth_3:sloth_3,sloth_4:sloth_4,sloth_5:sloth_5,diligence_1:diligence_1,diligence_2:diligence_2,diligence_3:diligence_3,diligence_4:diligence_4,diligence_5:diligence_5,greed_1:greed_1,greed_2:greed_2,greed_3:greed_3,greed_4:greed_4,greed_5:greed_5,charity_1:charity_1,charity_2:charity_2,charity_3:charity_3,charity_4:charity_4,charity_5:charity_5,gluttony_1:gluttony_1,gluttony_2:gluttony_2,gluttony_3:gluttony_3,gluttony_4:gluttony_4,gluttony_5:gluttony_5,temperance_1:temperance_1,temperance_2:temperance_2,temperance_3:temperance_3,temperance_4:temperance_4,temperance_5:temperance_5,lust_1:lust_1,lust_2:lust_2,lust_3:lust_3,lust_4:lust_4,lust_5:lust_5,chastity_1:chastity_1,chastity_2:chastity_2,chastity_3:chastity_3,chastity_4:chastity_4,chastity_5:chastity_5, }}>
                      <button class="btn btn-secondary btn-lg"type="submit">Submit</button>
                    </Link>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

