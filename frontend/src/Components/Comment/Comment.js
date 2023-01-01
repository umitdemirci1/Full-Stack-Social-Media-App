import { CardContent, OutlinedInput, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import User from "../User/User";
import { red } from '@mui/material/colors';
import CommentForm from "./CommentForm";

const Comments = ({ comment, userId, userName }) => {
    return (
        <>
            <CardContent>
                <OutlinedInput>
                    position= "start"
                    disabled
                    id="outlined"
                    label="Comments"
                    className='w-[697px]'
                    value={comment}
                    startAdornment = {
                        <InputAdornment>
                            <Link className="flex flex-col justify-center align-middle" to={{ pathname: '/users/' + userId }} element={<User />}>
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {userName.charAt(0).toUpperCase()}
                                </Avatar>
                            </Link>
                        </InputAdornment>
                    }
                </OutlinedInput>
                <CommentForm userId={userId} userName={userName} text={"text hello"}></CommentForm>
            </CardContent>
        </>
    )
}

export default Comments;