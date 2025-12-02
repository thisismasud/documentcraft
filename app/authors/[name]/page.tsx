import React from 'react'

const AuthorsPage = async ({params}) => {
    const {name} = await params

  return (
    <div>{name}</div>
  )
}

export default AuthorsPage