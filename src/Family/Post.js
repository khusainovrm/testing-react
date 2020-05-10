import React from 'react'
import DetailPost from './DetailPost'
import './Post.css'


export default function Post ({family, onCreate}) {

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
      onCreate(input.valueName(), input.valueAge())
    input.clearName()
    input.clearAge()
    }

    
  }

 

  return (
    <div className='post'>
      <div className='post-body'>
        <h1>Family list</h1>
        <form onSubmit={createNote}>
          <input placeholder='Name' {...input.bindA}/>
          <input placeholder='Age' {...input.bindB} />
          <button type='submit'>Create</button>

          <hr/>
          { 
            family.length 
            ? (family.map(fam => {
            return <DetailPost family={fam} key={fam.id}/> 
            }))
            : <p>not done</p>
          }


      </form>
      </div>
    </div> 
  )
}
