import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Widgets = () => {
  return (
    <div>
      {/* Search */}
      <div className='flex items-center space-x-2 bg-gray-100 p-3'>
        <MagnifyingGlassIcon className='h-5 w-5'/>
        <input type="text" placeholder="Search Twitter" className='bg-transparent'/>
      </div>
    </div>
  )
}

export default Widgets
