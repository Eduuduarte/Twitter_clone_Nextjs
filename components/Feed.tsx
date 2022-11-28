import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';
import { Tweet } from '../typings';
import TweetComponent from '../components/Tweet';

type Props = {
    tweets: Tweet[];
}

const Feed = ({tweets}: Props) => {
    return (
        <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='flex items-center justify-between'>
                <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
                <ArrowPathIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scalle-125' />
            </div>

            {/* Tweetbox */}
            <div>
                <TweetBox />
            </div>

            {/* Feed */}
            <div>
                {tweets.map(tweet => (
                    <TweetComponent key={tweet._id} tweet={tweet} />
                ))}
            </div>

        </div>
    )
}

export default Feed;