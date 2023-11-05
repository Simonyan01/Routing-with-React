import { ColorButton, box, boxContainer, boxTitle, close, imageContainer } from "./styles";
import { Box, Container, Fade, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const photoURL = 'https://jsonplaceholder.typicode.com/photos'
export const userURL = 'https://jsonplaceholder.typicode.com/users'
export const commentURL = 'https://jsonplaceholder.typicode.com/comments'

export const UserInfo = ({ data }) => {
    return (
        <Box style={{ padding: 10, userSelect: "none" }}>
            <span style={{ fontSize: 25 }}>User Data :</span>
            {data.map(({ id, name, email }) => (
                <li style={{ marginTop: 10 }} key={id}>
                    {name} --- {email}
                </li>
            ))}
        </Box>
    );
}

export const PhotoDetails = ({ photos }) => {
    const [modalSrc, setModalSrc] = useState(false);

    return (
        <Container sx={boxContainer}>
            {photos.map(({ id, title, url, thumbnailUrl }) => (
                <Stack key={id} sx={box}>
                    <img
                        src={thumbnailUrl}
                        alt="150px img"
                        style={{ borderRadius: 14 }}
                        onClick={() => setModalSrc(url)}
                    />
                    {modalSrc === url
                        &&
                        <Fade in={!!modalSrc}>
                            <Stack sx={imageContainer}>
                                <ColorButton
                                    sx={close}
                                    variant="contained"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setModalSrc(!modalSrc)
                                    }}
                                >
                                    close
                                </ColorButton>
                                <img
                                    style={{ borderRadius: 20 }}
                                    src={url}
                                    alt="600px img"
                                />
                            </Stack>
                        </Fade>
                    }
                    <Typography sx={boxTitle}>
                        {title}
                    </Typography>
                </Stack>
            ))}
        </Container>
    );
};
