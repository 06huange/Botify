import {useEffect, useState} from 'react';

export default function({setLoginStatus}){
    const client_id = 'af10493cc00144dd85c1d6494791a9a2'
    const redirect_uri = 'http://localhost:3000/userHome';
    const spotifyAuthorize = 'https://accounts.spotify.com/authorize'
    const response_type = "token"
    const scope = "playlist-read-private playlist-modify-public"

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setLoginStatus(true)
        }

        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        setLoginStatus(false)
    }
    return (
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
            <div className="container-fluid">
                <a className="nav-link" href="/y2s">Y2S</a>
                <a className="navbar-brand nav-link" href="/home">Spotify Bot</a>
                <div>
                {!token ? 
                    <a href={`${spotifyAuthorize}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}>Login</a>
                    : <button onClick={logout} href="/home">Logout</button>}
                </div>
            </div>
        </nav>
    );
}