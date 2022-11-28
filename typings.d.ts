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
