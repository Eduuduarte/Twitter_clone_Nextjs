// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Comment } from '../../typings';

const commentQuery = groq`
  *[_type=="comment" && references(*[_type== 'tweet' && _id == $id]._id)] 
    {
    _id,
    ...
    } | order(_createdAt desc)
`

type Data = Comment[];


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    id,
  })

  res.status(200).json(comments);
}