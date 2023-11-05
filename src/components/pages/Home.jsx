import { useState, useEffect } from "react";
import { Box, CircularProgress, Toolbar } from "@mui/material"
import { PhotoDetails, photoURL } from "./content/Content";
import axios from "axios";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try {
            axios
                .get(photoURL, {
                    params: {
                        _page: 1,
                    },
                })
                .then((res) => {
                    setPhotos(res.data);
                    setIsOpen(false);
                })
        } catch (err) {
            console.error('Error fetching data: ', err);
        } finally {
            setTimeout(() => {
                setIsOpen(true);
            }, 1500)
        }
    }, []);

    return (
        <Box component="main" sx={{ p: 4 }}>
            <Toolbar />
            {!isOpen
                ? <CircularProgress
                    sx={{
                        display: "flex",
                        margin: "1rem 2rem auto"
                    }} />
                : <PhotoDetails photos={photos} />
            }
        </Box>
    )
}

export default HomePage