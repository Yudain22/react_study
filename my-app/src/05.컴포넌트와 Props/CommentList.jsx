import React from "react";
import Comment from "./Comment";

//props로 데이터 넣기
// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"유다인"} comment={"나는 유다인이다!"}/>
//             <Comment name={"백승엽"} comment={"나는 백승여비다!"}/>
//         </div>
//     );
// }

const comments = [
    {
        name:"유다인",
        comment:"저는 유다인입니다."
    },
    {
        name:"백승엽",
        comment:"저는 백승엽입니다."
    },
    {
        name:"유다연",
        comment:"저는 유다연입니다."
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=> {
                return(
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;