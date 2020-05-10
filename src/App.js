import React from 'react';
import Counter from './Counter/Counter'
import Family from './Family/Post'
import Post from './Post/Post'


function App() {
  const [family, setFamily] = React.useState([{id:1, name: 'Rinat', age: 33}, {id:2, name: 'Dinara', age: 33}])

  const [posts, setPosts] = React.useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(posts => setPosts(posts))
  },[])




  function onCreate(v,a) {
    const val = [{
      id:Date.now(), name: v, age: a
    }]
    setFamily(family.concat(val))
  }

  function onCreateNote(v,a) {
    const val = [{
      id:Date.now(), title: v, body: a
    }]
    setPosts(posts.concat(val))
  }


  return (
      <div className='wrapper'>
        <h1>Testing react features</h1>
          <Counter />
          <Family family={family} onCreate={onCreate}/>
          <Post posts={posts} onCreateNote={onCreateNote}/>
      </div>
  );
}

export default App;
