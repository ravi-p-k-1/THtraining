import React, { useState } from 'react'
import { UserTweetObject } from '../Interfaces/UserTweet';

export default function Tweet() {

    const [tweetObject, setTweetObject] = useState<UserTweetObject>({
        title: '',
        description: '',
    });

    const handleTweetObjectChange=(name:string, value:string)=>{
        setTweetObject({
            ...tweetObject,
            [name]: value,
        });
    }

    const submit=()=>{

    }

  return (
    <div className='tweet'>
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }} >
            Title: <input name='title' value={tweetObject.title} onChange={(e)=>handleTweetObjectChange(e.target.name, e.target.value)} type="text" />
        </div>
        <br/>
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            whiteSpace: 'preserve'
        }} >
            Description: <textarea name="description" value={tweetObject.description} onChange={(e)=>handleTweetObjectChange(e.target.name, e.target.value)} cols={30} rows={10}></textarea>
        </div>

        <button onClick={submit} style={{
            marginTop: 40,
            alignSelf: 'center'
        }} className='btn btn-follow' >Upload</button>
    </div>
  )
}
