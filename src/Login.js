import React, {useState} from 'react'
import {auth} from './firebase.js';
import './Login.css'

function Login() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [profilePic, setProfilePic] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

function useDispatch(){
  console.log('calling useDispatch')
  
}

  const register = ()=>{
    if(!name){
      return alert('Please enter a full name')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoUrl:profilePic,
      })
      .then(()=>{
        // dispatch(login({
        //   email: userAuth.user.email,
        //   uid: userAuth.user.uid,
        //   displayName: name,
        //   photoUrl: profilePic
        // }))
      })
    }).catch(error => alert(error))
  }

  const loginToApp = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo_2013.svg_.png?itok=iel1g5Uw" alt="" />
      <form>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder = "Full name" type="text" />
        <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder = "Profile pic url (optional)" type="text" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder = "Email" type="email" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder = "Password" type="password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>

    </div>
  )
}

export default Login