'use client'
import { PostMetadata } from '@/types'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import PostCard from './PostCard'
import SearchBar from './SearchBar'

export default function Preview({
  postMetadata,
}: {
  postMetadata: PostMetadata
}) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='postsContainer'>
        {postMetadata
          .filter((val: { title: string | string[] }) => {
            return val.title.includes(searchValue)
          })
          .map((post: PostMetadata) => {
            return <PostCard key={nanoid()} post={post} />
          })}
      </div>
    </>
  )
}
