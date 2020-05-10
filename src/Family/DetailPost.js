import React from 'react'


export default function DetailPost ({family}) {

  return (
    <div>
      <p>Имя: {family.name}, возраст {family.age}</p>
    </div>
  )
}
