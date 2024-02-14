export interface UserTweetObject{
    title: string;
    description: string;
}

export interface UploadTweetAPIObject extends UserTweetObject{
    UserId: string;
}