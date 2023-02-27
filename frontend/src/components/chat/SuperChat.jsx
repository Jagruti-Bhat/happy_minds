// import React from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// import { initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth";
//   import { getFirestore } from "firebase/firestore";
// import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyDSRs5AvwkxDQOS-ULZK7Rcv5B9IUULPPg",
//     authDomain: "happyminds-d8de3.firebaseapp.com",
//     projectId: "happyminds-d8de3",
//     storageBucket: "happyminds-d8de3.appspot.com",
//     messagingSenderId: "1021107026354",
//     appId: "1:1021107026354:web:8cf1e80ff7dc55f4ba0cab",
//     measurementId: "G-0RWM8B4Z6F"
//   };

//   const app = initializeApp(firebaseConfig);
  
//   const auth = getAuth(app);
//   const firestore = getFirestore(app);
// //   const firestore = firebase.firestore()

// const SuperChat = () => {
//     const [user] = useAuthState(auth);
//   return (
//     <div>
//         <section>
//             {user ? <ChatRoom /> : <SignIn />}
//         </section>
//     </div>
//   )
// }

// function SignIn(){
//     const signInWithGoogle=()=>{
//         const provider = new firebase.auth.GoogleAuthProvider();
//         auth.signInWithPopup(provider)
//     }
//     return(
//         <button onClick={signInWithGoogle}>Sign in with google</button>
//     )
// }

// function SignOut(){
//     return auth.currentUser && (
//         <button onClick={()=> auth.signOut()}>Sign Out</button>
//     )
// }

// function ChatRoom(){

//     const messagesRef = firestore.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);

//     const [messages] = useCollectionData(query,{idField:'id'})

//     return(
//         <>
//         {messages && messages.map(msg => <ChatMessage key={msg.id}/>)}
//         </>
//     )

// }

// function ChatMessage(props){
//     const {text, uid} = props.message;

//     return (
//         <p>{text}</p>
//     )
// }

// export default SuperChat

import React from 'react'

const SuperChat = () => {
  return (
    <div>SuperChat</div>
  )
}

export default SuperChat