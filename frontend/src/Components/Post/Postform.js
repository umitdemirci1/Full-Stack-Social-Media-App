import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import User from '../User/User';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostForm = ({ userId, userName, refreshPost }) => {

    const [text, setText] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [isSent, setIsSent] = React.useState(false)

    const savePost = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                text: text,
                userId: userId
            })
        }

        fetch('http://localhost:8080/posts', requestOptions)
            .then((response) => response.json())
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        savePost()
        refreshPost()

        setIsSent(true)
        setText("")
        setTitle("")
    }
    const handleText = (e) => {
        setText(e.target.value)
        setIsSent(false)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
        setIsSent(false)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setIsSent(true)
    }

    return (
        <>
            <Snackbar open={isSent} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You successfully sent your post!
                </Alert>
            </Snackbar>

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
                        title={
                            <TextField
                                required
                                id="outlined"
                                label="Title"
                                placeholder='Type your title here:'
                                className='w-[697px]'
                                inputProps={{ maxLength: 120 }}
                                onChange={handleTitle}
                                value={title}
                            />
                        }
                    />
                    <CardContent className='relative'>
                        {<Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '745px' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Content"
                                    multiline
                                    maxRows={6}
                                    placeholder="Type your content here:"
                                    onChange={handleText}
                                    value={text}
                                />
                            </div>
                        </Box>}
                        <button className='absolute top-30 right-7 bg-blue-500 border border-blue-600 rounded 
                        hover:bg-blue-600 transition-colors p-1 px-3 text-white'
                            onClick={handleSubmit}
                            disabled={!text || !title}
                        >Post</button>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        </IconButton>
                        <IconButton aria-label="share">
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default PostForm;