import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "MJ LEE",
        comment: "안녕하세요, 묭묭입니다.",
    },
    {
        name: "김자바",
        comment: "리액트 너무 재미있습니다.",
    },
    {
        name: "유리아",
        comment: "저도 리액트 배워보고 싶습니다.",
    },
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default  CommentList;
