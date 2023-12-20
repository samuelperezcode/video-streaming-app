'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import qs from 'query-string'

export function SearchBar () {
  const [value, setValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    const url = qs.stringifyUrl({
      url: '/search',
      query: { term: value }
    }, { skipEmptyString: true })

    router.push(url)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <form className="relative w-full lg:w-[400px] flex items-center" onSubmit={handleSubmit}>
      <Input
        placeholder='Search..'
        className='rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-offset-transparent'
        onChange={handleChange}
        value={value}
      />
      {
        value && (
          <X
            onClick={handleClear}
            className = 'absolute t-2.5 right-14 mr-2 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition'
          />
        )
      }
      <Button
        type='submit'
        size={'sm'}
        variant={'secondary'}
        className='rounded-l-none'
      >
        <SearchIcon className='h-5 w-5 text-muted-foreground' />
      </Button>
    </form>
  )
}
