import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BiCommentDetail } from "react-icons/bi";
import User from '../User/User';
import { Link } from 'react-router-dom';
import Comments from '../Comment/Comment';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Post = ({ text, title, userId, userName, postId }) => {

    const [expanded, setExpanded] = React.useState(false)
    const [like, setLike] = React.useState(false)
    const [comments, setComments] = React.useState([])
    const isInitialMount = React.useRef(true)

    const refreshComments = () => {
        fetch("http://localhost:8080/comments?postId=" + postId)
            .then(res => res.json())
            .then(
                (result) => {
                    setComments(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    React.useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            refreshComments()
        }
    }, [comments])

    const handleExpandClick = () => {
        setExpanded(!expanded);
        refreshComments()
        console.log(comments)
    };

    const handleLikeClick = () => {
        setLike(!like)
    }

    return (
        <>
            <ul>
                <div className='flex justify-center'>
                    <Card className={"w-[800px] mb-4 border border-gray-300"} sx={{ maxWidth: 800 }}>
                        <CardHeader
                            avatar={
                                <Link to={{ pathname: '/users/' + userId }} element={<User />}>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {userName.charAt(0).toUpperCase()}
                                    </Avatar>
                                </Link>
                            }
                            title={title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={handleLikeClick} >
                                <FavoriteIcon
                                    className={like === true ? 'text-red-600' : 'null'}
                                />
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <BiCommentDetail />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {comments.map((comment, index) => (
                                <Comments key={index}
                                    userName={userName}
                                    userId={userId}
                                    comment={comment.text}>
                                </Comments>
                            ))}
                        </Collapse>
                    </Card>
                </div>
            </ul>
        </>
    )
}

export default Post;