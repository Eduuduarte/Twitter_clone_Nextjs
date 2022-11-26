import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import React from 'react'

const Widgets = () => {
    return (
        <div className='col-span-2 w-auto mt-2 hidden px-2 lg:inline'>
            {/* Search */}
            <div className='flex items-center space-x-2 bg-gray-100 p-3'>
                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                <input type="text" placeholder="Search Twitter" className='flex-1 bg-transparent outline-none' />
            </div>

            <div className='w-auto'>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="vascodagama"
                options={{ height: 1000 }}
            />
            </div>
        </div>
    )
}

export default Widgets
