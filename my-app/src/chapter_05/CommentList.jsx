import React from "react";
import Comment from "./Comment";

const comments = [
    { id: 1, name: '왕코독', comment: '왕초보 코딩 독학',},
    { id: 2, name: '프코독', comment: '프론트엔드 코딩 독학',},
    { id: 3, name: '웹코독', comment: '웹개발자 코딩 독학',},
    
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <Comment key={comment.id} name={comment.name} comment={comment.comment} />
                    // <Comment key={index} name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;