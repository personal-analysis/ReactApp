import React from 'react'
import HeaderNavbar from '../components/Navbar.js'

export default function PersonalTest() {
    // データ
    const items = ['アイテム１', 'アイテム２', 'アイテム３', 'その他'];
    // 選択した値を管理（初期値：ラジオ１）
    const [val, setVal] = React.useState('アイテム１');
    // ラジオボタンの値がチェンジされた時
    const handleChange = (e) => {
      setVal(e.target.value);
    };
  return (
    <div class="App">
      <div clas="content">
        <div class="App_header">
          <HeaderNavbar />
        </div>
        <div class="App_body">
          <div class="main_content">
            <div className="container">
              {items.map((item) => {
                return (
                  <div key={item}>
                    <input
                      id={item}
                      type="radio"
                      value={item}
                      onChange={handleChange}
                      checked={item === val}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}

              <p>選択したのは「{val}」です。</p>
              {val === 'その他' && (
                <p>
                  <input type="text" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
