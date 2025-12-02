import React from 'react'

const TagsPage = async({params}) => {
     const {name} = await params
  return (
    <div>{name}</div>
  )
}

export default TagsPage