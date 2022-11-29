import { Comment } from '../typings';

export const fetchComments = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?id=${tweetId}`);

    const comments: Comment[] = await res.json();

    console.log('fetch', comments);

    return comments;
}