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

const PostForm = ({ userId, userName }) => {
    return (
        <>
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
                            />
                        }
                    />
                    <CardContent>
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
                                    />
                                </div>
                            </Box>}   
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