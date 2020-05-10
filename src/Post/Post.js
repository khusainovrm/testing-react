import React from 'react'
import DetailPost from './DetailPost'
import './Post.css'


export default function Post ({posts, onCreateNote}) {

  function useInputvalue (defaultValue = '') {
    const [value, setValue] = React.useState('')
    const [age, setAge] = React.useState('')

    return {
      bindA: {
        value,
        onChange: (e) => setValue(e.target.value)
      },
      valueName: () => value,
      clearName: () => setValue(''),
      bindB: {
        value: age,
        onChange: (e) => setAge(e.target.value)
      },
      valueAge: () => age,
      clearAge: () => setAge(''),
    }

  }

  const input = useInputvalue()

  function createNote(e) {
    e.preventDefault()
    if(input.bindA.value.trim() && input.bindB.value.trim()) {
      onCreateNote(input.valueName(), input.valueAge())
    input.clearName()
    input.clearAge()
    }
  }


  return (
    <div className='post'>
      <div className='post-body'>
        <h1>Post</h1>
        <form onSubmit={createNote}>
          <input placeholder='Title' {...input.bindA}/>
          <input placeholder='Body' {...input.bindB} />
          <button type='submit'>Create</button>

          <hr/>
          { 
            posts.length 
            ? (posts.map(post => {
            return <DetailPost post={post} key={post.id}/> 
            }))
            : <p>not done</p>
          }

      </form>
      </div>
    </div> 
  )
}
