import React, { useEffect, useState } from "react";
// import HeaderNavbar from '../components/Navbar.js'
import { db } from '../utils/firebase.js';
// import { onValue, ref } from "firebase/database";
import { addDoc,collection, onSnapshot } from 'firebase/firestore';

export default function Firebasetest() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = event.target.elements;
    console.log(name.value, email.value);
    const usersCollectionRef = collection(db, 'users');
    const documentRef = await addDoc(usersCollectionRef, {
      name: name.value,
      email: email.value,
    });
    console.log(documentRef);
  };

  return (
    <div style={{ margin: '50px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前</label>
          <input name="name" type="text" placeholder="名前" />
        </div>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="メールアドレス" />
        </div>
        <div>
          <label>感想</label>
          <input name="impressions" type="text" placeholder="impresions" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
      <h1>ユーザ一覧</h1>
      {<div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        {users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div> }
    </div>
  );
}
