import React from 'react'


export default function DetailPost ({post}) {

  return (
    <div>
      <p>Заголовок: {post.title}. Содержание: {post.body}</p>
    </div>
  )
}
