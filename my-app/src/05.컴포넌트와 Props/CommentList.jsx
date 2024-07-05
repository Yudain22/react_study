import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"유다인"} comment={"나는 유다인이다!"}/>
            <Comment name={"백승엽"} comment={"나는 백승여비다!"}/>
        </div>
    );
}

export default CommentList;