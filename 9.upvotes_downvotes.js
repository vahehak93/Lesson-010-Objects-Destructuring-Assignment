// Given an object containing counts of both upvotes and downvotes, return what vote count should be
// displayed. This is calculated by subtracting the number of downvotes from upvotes.

const votes = {
    upvotes: 13,
    downvotes: 0,
};

let getVoteCount = function(votes) {
    let vote_count = votes.upvotes - votes.downvotes

    return vote_count
};



console.log(getVoteCount(votes))