
export class Quote {
    public showAuthor:boolean;
    constructor(public author: string, public narration: string, public post: string, public upvote: number, public downvote: number) { 
this.showAuthor=false

}
}