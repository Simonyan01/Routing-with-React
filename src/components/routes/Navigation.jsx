import { Routes, Route } from "react-router-dom"
import { navbar } from "../menu/Menu"

const Navigation = () => {
    return (
        <Routes>
            {navbar.map(({ id, element, path }) => (
                <Route key={id} element={element} path={path} />
            ))}
        </Routes>
    )
}
export default Navigation