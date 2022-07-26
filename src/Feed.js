import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post.js';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  // Set posts variable based on firebase database
  useEffect(()=>{
      db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot =>(
          setPosts(snapshot.docs.map(doc=>(
              {
                  id: doc.id,
                  data: doc.data()
              }
          )))
      ))
  }, [])

  // When form is submitted, send info to firebase
  const sendPost = e=>{
      console.log('clicked')
      e.preventDefault()

      db.collection('posts').add({
          name: 'Akhil Kammila',
          description: 'test post description',
          message: input,
          photoUrl: '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setInput('');
  }


  return (
    <div className = "feed">
        {/* Top Input Part */}
        <div className="feed__inputContainer">

            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>

            <div className="feed__inputOption">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>

        </div>

        {/* Render the posts variable into REACT POSTS  */}
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}

        <Post name="Akhil Kammila" description = "Testing testing..."
        message = "Hi! This is my first post :)"/>

    </div>
  )
}

export default Feed