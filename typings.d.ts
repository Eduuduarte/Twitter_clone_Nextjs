export interface Tweet {
    _id: string,
    _createdAt: string,
    _updateAt: string,
    _rev: string,
    _type: 'tweet',
    blockTweet: boolean
    text: string,
    username: string,
    profileImg: string,
    image?: string
}

export interface Comment {
    comment: string,
    tweetId: string,
    username: string,
    profileImg: string,
    _id: string,
    _createdAt: string,
    _updateAt: string,
    _rev: string,
    _type: 'comment',
    tweet: {
        _ref: string,
        _type: 'reference'
    }
}