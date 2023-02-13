import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/", {state: "Error No Page"})
        }, 1000);
    }, [])
    return <h1>Not Found</h1>
}