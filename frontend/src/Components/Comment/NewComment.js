import "./NewComment.css"

const NewComment = ({ userName }) => {

    return (
        <div className="comment">
            <div className="profileImage">
                <h2>{userName.charAt(0).toUpperCase()}</h2>
            </div>
            <div className="commentLine">
                <div className="commentLineBox">
                    <textarea cols="250" rows="3" placeholder="Type your comment here!"
                    ></textarea>
                    <span>Comment</span>
                </div>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default NewComment;