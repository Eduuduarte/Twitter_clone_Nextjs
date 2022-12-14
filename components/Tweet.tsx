import { fetchComments } from '../utils/fetchComments';
import React, { useEffect, useState } from 'react'
import { Tweet, Comment } from '../typings'
import TimeAgo from 'react-timeago';

import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowsRightLeftIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

interface Props {
    tweet: Tweet;
}

const Tweet = ({ tweet }: Props) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const refreshComments = async () => {
        console.log('entrou no refresh')
        const comments: Comment[] = await fetchComments(tweet._id);
        setComments(comments);
    }

    useEffect(() => {
        refreshComments()
    }, []);


    return (
        <div className='flex flex-col space-x-3 border-3 border-y border-gray-100 p-5'>
            <div className='flex space-x-3'>
                <img src={tweet.profileImg} alt="" className='h-10 w-10 rounded-full object-cover' />

                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'>{tweet.username}</p>
                        <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}  - </p>

                        <TimeAgo
                            className='text-sm text-gray-500'
                            date={tweet._createdAt}
                        />
                    </div>

                    <p className='pt-1'>{tweet.text}</p>

                    {tweet.image && <img src={tweet.image} alt="" className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm" />}
                </div>
            </div>

            <div className='flex justify-between mt-5'>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                    <ChatBubbleOvalLeftIcon className='h5 w-5' />
                    <p>{comments.length}</p>
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><ArrowsRightLeftIcon className='h5 w-5' /></div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><HeartIcon className='h5 w-5' /></div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><ArrowUpTrayIcon className='h5 w-5' /></div>
            </div>

            {comments?.length > 0 && (
                <div className='my-2 mt-5 max-h-44 space-x-5 overflow-y-scroll border-t border-gray-100 p-5'>
                    {comments.map(comment => (
                        <div key={comment._id} className="relative flex space-x-2">
                            <hr className='absolute left-5 top-10 h-8 border-x border-twitter/30'/>
                            <img src={comment.profileImg} className='mt-2 h-7 w-7 rounded-full object-cover' alt='' />
                            <div className=''>
                                <div className='flex items-center space-x-1'>
                                    <p className='mr-1 font-bold'>{comment.username}</p>
                                    <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()} -</p>
                                    <TimeAgo
                                        className='text-sm text-gray-500'
                                        date={comment._createdAt}
                                    />
                                </div>

                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Tweet
