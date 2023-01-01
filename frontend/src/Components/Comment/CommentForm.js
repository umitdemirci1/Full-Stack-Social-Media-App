import { CardContent, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import User from "../User/User";
import { red } from '@mui/material/colors';

const CommentForm = ({ text, userId, userName }) => {
    return (
        <div className="flex flex-row align-middle justify-center">
           
            <CardContent>
                <TextField
                    inputProps={{ maxLength: 120 }}
                    id="outlined"
                    className='w-[697px]'
                    value={text}
                />
            </CardContent>
        </div>
    )
}

export default CommentForm;