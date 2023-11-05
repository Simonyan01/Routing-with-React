import { useState, useEffect } from "react";
import { UserInfo, commentURL } from "./content/Content";
import { Box, Toolbar } from "@mui/material"
import axios from "axios";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(commentURL)
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.error('Error fetching data: ', err);
            });
    }, []);

    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <UserInfo data={comments} />
        </Box>
    )
}

export default Comments