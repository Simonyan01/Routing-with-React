import { useState, useEffect } from "react";
import { Box, Toolbar } from "@mui/material"
import { UserInfo, userURL } from "./content/Content";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(userURL)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error('Error fetching data: ', err);
            });
    }, []);

    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <UserInfo data={users} />
        </Box>
    )
}
export default Users