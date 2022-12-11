import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
import { useLocation } from "react-router-dom"
import HeaderNavbar from '../components/Navbar.js'
import { Link } from 'react-router-dom';

const resultAnalyse = ({url}) => {
	return (
    <div>
      <div>{url}</div>
    </div>
	);
};
export default function Result() {
  const { state } = useLocation()
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

// 画面変移時に一度だけ、TodoListのStateを更新する。
// その為UseEffectの第二変数に[]を記載。この様にしないと、無限レンダリングが発生
  useEffect(() => {
    setPrid_1(state.prid_1)
    setPrid_2(state.prid_2)
    setPrid_3(state.prid_3)
    setPrid_4(state.prid_4)
    setPrid_5(state.prid_5)
    setHumility_1(state.humility_1)
    setHumility_2(state.humility_2)
    setHumility_3(state.humility_3)
    setHumility_4(state.humility_4)
    setHumility_5(state.humility_5)
    setEnvy_1(state.envy_1)
    setEnvy_2(state.envy_2)
    setEnvy_3(state.envy_3)
    setEnvy_4(state.envy_4)
    setEnvy_5(state.envy_5)
    setGratitude_1(state.gratitude_1)
    setGratitude_2(state.gratitude_2)
    setGratitude_3(state.gratitude_3)
    setGratitude_4(state.gratitude_4)
    setGratitude_5(state.gratitude_5)
    setWrath_1(state.wrath_1)
    setWrath_2(state.wrath_2)
    setWrath_3(state.wrath_3)
    setWrath_4(state.wrath_4)
    setWrath_5(state.wrath_5)
    setPatience_1(state.patience_1)
    setPatience_2(state.patience_2)
    setPatience_3(state.patience_2)
    setPatience_4(state.patience_4)
    setPatience_5(state.patience_5)
    setSloth_1(state.sloth_1)
    setSloth_2(state.sloth_2)
    setSloth_3(state.sloth_3)
    setSloth_4(state.sloth_4)
    setSloth_5(state.sloth_5)
    setDiligence_1(state.diligence_1)
    setDiligence_2(state.diligence_2)
    setDiligence_3(state.diligence_3)
    setDiligence_4(state.diligence_4)
    setDiligence_5(state.diligence_5)
    setGreed_1(state.greed_1)
    setGreed_2(state.greed_2)
    setGreed_3(state.greed_3)
    setGreed_4(state.greed_4)
    setGreed_5(state.greed_5)
    setCharity_1(state.charity_1)
    setCharity_2(state.charity_2)
    setCharity_3(state.charity_3)
    setCharity_4(state.charity_4)
    setCharity_5(state.charity_5)
    setGluttony_1(state.gluttony_1)
    setGluttony_2(state.gluttony_2)
    setGluttony_3(state.gluttony_3)
    setGluttony_4(state.gluttony_4)
    setGluttony_5(state.gluttony_5)
    setTemperance_1(state.temperance_1)
    setTemperance_2(state.temperance_2)
    setTemperance_3(state.temperance_3)
    setTemperance_4(state.temperance_4)
    setTemperance_5(state.temperance_5)
    setLust_1(state.lust_1)
    setLust_2(state.lust_2)
    setLust_3(state.lust_3)
    setLust_4(state.lust_4)
    setLust_5(state.lust_5)
    setChastity_1(state.chastity_1)
    setChastity_2(state.chastity_2)
    setChastity_3(state.chastity_3)
    setChastity_4(state.chastity_4)
    setChastity_5(state.chastity_5)
  }, [])
  const prid=Number(prid_1)+Number(prid_2)+Number(prid_3)+Number(prid_4)+Number(prid_5)
  const humility=Number(humility_1)+Number(humility_2)+Number(humility_3)+Number(humility_4)+Number(humility_5)
  const envy=Number(envy_1)+Number(envy_2)+Number(envy_3)+Number(envy_4)+Number(envy_5)
  const gratitude=Number(gratitude_1)+Number(gratitude_2)+Number(gratitude_3)+Number(gratitude_4)+Number(gratitude_5)
  const wrath=Number(wrath_1)+Number(wrath_2)+Number(wrath_3)+Number(wrath_4)+Number(wrath_5)
  const patience=Number(patience_1)+Number(patience_2)+Number(patience_3)+Number(patience_4)+Number(patience_5)
  const sloth=Number(sloth_1)+Number(sloth_2)+Number(sloth_3)+Number(sloth_4)+Number(sloth_5)
  const diligence=Number(diligence_1)+Number(diligence_2)+Number(diligence_3)+Number(diligence_4)+Number(diligence_5)
  const greed=Number(greed_1)+Number(greed_2)+Number(greed_3)+Number(greed_4)+Number(greed_5)
  const charity=Number(charity_1)+Number(charity_2)+Number(charity_3)+Number(charity_4)+Number(charity_5)
  const gluttony=Number(gluttony_1)+Number(gluttony_2)+Number(gluttony_3)+Number(gluttony_4)+Number(gluttony_5)
  const temperance=Number(temperance_1)+Number(temperance_2)+Number(temperance_3)+Number(temperance_4)+Number(temperance_5)
  const lust=Number(lust_1)+Number(lust_2)+Number(lust_3)+Number(lust_4)+Number(lust_5)
  const chastity=Number(chastity_1)+Number(chastity_2)+Number(chastity_3)+Number(chastity_4)+Number(chastity_5)
  const products=()=>{
    const reply = [];
    let scores=[
      {personal:'prid(傲慢)',score:prid,url:'/prid',url_name:"prid(傲慢)ページへ"},
      {personal:'humility(謙虚)',score:humility,url:'/humility',url_name:"humility(謙虚)ページへ"},
      {personal:'envy(嫉妬)',score:envy,url:'/envy',url_name:"envy(嫉妬)ページへ"},
      {personal:'gratitude(感謝)',score:gratitude,url:'/gratitude',url_name:"gratitude(感謝)ページへ"},
      {personal:'wrath(憤怒)',score:wrath,url:'/wrath',url_name:"wrath(憤怒)ページへ"},
      {personal:'patience(忍耐)',score:patience,url:'/patience',url_name:"patience(忍耐)ページへ"},
      {personal:'sloth(怠惰)',score:sloth,url:'/sloth',url_name:"sloth(怠惰)ページへ"},
      {personal:'diligence(勤勉)',score:diligence,url:'/diligence',url_name:"diligence(勤勉)ページへ"},
      {personal:'greed(強欲)',score:greed,url:'/greed',url_name:"greed(強欲)ページへ"},
      {personal:'charity(慈善)',score:charity,url:'/charity',url_name:"charity(慈善)ページへ"},
      {personal:'gluttony(暴食)',score:gluttony,url:'/gluttony',url_name:"gluttony(暴食)ページへ"},
      {personal:'temperance(節制)',score:temperance,url:'/temperance',url_name:"temperance(節制)ページへ"},
      {personal:'lust(色欲)',score:lust,url:'/lust',url_name:"lust(色欲)ページへ"},
      {personal:'chastity(純潔)',score:chastity,url:'/chastity',url_name:"chastity(純潔)ページへ"},
    ]
    scores = scores.sort( ( a, b ) => {
      var x = a[ 'score' ];
      var y = b[ 'score' ];
      if ( x > y ) { return -1; }
      if ( x < y ) { return  1; }
      return 0;
    });
    let count, tmp;
    scores.forEach( ( item, index ) => {
      if ( item.score !== tmp ) {
        count = index + 1;
        tmp = item.score;
      }
      reply.push(
        <tbody class="rank_tbody">
          <tr class="rank_tbody_tr">
            <th class="rank_tbody_th text-center">{count}</th>
            <td class="rank_tbody_td text-center">{item.personal}</td>
            <td class="rank_tbody_td text-center">{item.score}</td>
            <td class=" text-center rank_tbody_td_url"><Link to={item.url}>{item.url_name}</Link></td>
          </tr>
        </tbody>
      );
    } );
    return reply;
  };
  const real_products=()=>{
    const real_reply = [];
    let scores=[
      {personal:'prid(傲慢)',score:prid,url:'/prid',url_name:"prid(傲慢)ページへ"},
      {personal:'humility(謙虚)',score:humility,url:'/humility',url_name:"humility(謙虚)ページへ"},
      {personal:'envy(嫉妬)',score:envy,url:'/envy',url_name:"envy(嫉妬)ページへ"},
      {personal:'gratitude(感謝)',score:gratitude,url:'/gratitude',url_name:"gratitude(感謝)ページへ"},
      {personal:'wrath(憤怒)',score:wrath,url:'/wrath',url_name:"wrath(憤怒)ページへ"},
      {personal:'patience(忍耐)',score:patience,url:'/patience',url_name:"patience(忍耐)ページへ"},
      {personal:'sloth(怠惰)',score:sloth,url:'/sloth',url_name:"sloth(怠惰)ページへ"},
      {personal:'diligence(勤勉)',score:diligence,url:'/diligence',url_name:"diligence(勤勉)ページへ"},
      {personal:'greed(強欲)',score:greed,url:'/greed',url_name:"greed(強欲)ページへ"},
      {personal:'charity(慈善)',score:charity,url:'/charity',url_name:"charity(慈善)ページへ"},
      {personal:'gluttony(暴食)',score:gluttony,url:'/gluttony',url_name:"gluttony(暴食)ページへ"},
      {personal:'temperance(節制)',score:temperance,url:'/temperance',url_name:"temperance(節制)ページへ"},
      {personal:'lust(色欲)',score:lust,url:'/lust',url_name:"lust(色欲)ページへ"},
      {personal:'chastity(純潔)',score:chastity,url:'/chastity',url_name:"chastity(純潔)ページへ"},
    ]
    scores = scores.sort( ( a, b ) => {
      var x = a[ 'score' ];
      var y = b[ 'score' ];
      if ( x > y ) { return -1; }
      if ( x < y ) { return  1; }
      return 0;
    });
    for (let i=1;i<4;i++){
      real_reply.push(
        <div class="col-3 rank_top_box ">
          <div class="d-flex justify-content-center align-items-center rank_top_circle">{i}</div>
          <div class="d-flex justify-content-center align-items-center rank_top_text">{scores[i].personal}</div>
          <div class="d-flex justify-content-center align-items-center rank_top_text_score">{scores[i].score}点</div>
          <div class="d-flex justify-content-center align-items-center rank_top_text_url link-text">
            <Link to={scores.url}>{scores[i].url_name}</Link>
          </div>
        </div>
      )
    }
    return real_reply;
  };
  return (
    <div class="App container p-0">
      <div clas="content">
        <header class="App_header">
          <div><HeaderNavbar /></div>
        </header>
        <body class="App_body">
          <div class="main_content">
            <div class="d-flex align-items-center justify-content-center">
              {real_products()}
            </div>
            <div class="d-flex justify-content-center rank_table_sub">
              <table class="rank_table">
                <thead class="rank_thead">
                  <tr class="rank_thead_tr">
                    <th class="rank_thead_th rank_thead_th_rank">ランキング</th>
                    <th class="rank_thead_th rank_thead_th_personal">性格</th>
                    <th class="rank_thead_th rank_thead_th_score">点数</th>
                    <th class="rank_thead_th rank_thead_th_url">URl</th>
                  </tr>
                </thead>
                {products()}
              </table>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

