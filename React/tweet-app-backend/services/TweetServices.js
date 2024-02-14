class TweetService{
    constructor(Tweet){
        this.service=Tweet;
    }

    async createTweet({title, description, UserId}){
        try {
            const tweetData = this.service.create({title, description, UserId});
            return tweetData;
        } catch (error) {
            return error;
        }
    }
}

export default TweetService;