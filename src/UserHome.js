import axios from 'axios';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';


export default function(){
    //roboto id : 3BX7MEBj6Z9OnCQ0fRdMQP
    //pop rising id : 37i9dQZF1DWUa8ZRTfalHk

    const [playlists, setPlaylists] = useState([])
    const [items, setItems] = useState([])
    let token = window.localStorage.getItem("token")
    var options = {
        headers: {
            "Authorization" : "Bearer " + token,
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        }
    }
    useEffect(() => {
        //show playlists
        axios.get('https://api.spotify.com/v1/me/playlists', options)
        .then(function (response) {
            setPlaylists(response.data.items)
        })
    },[])

    function addItems(){
        console.log("Token: " + token)
        //get playlist items
        let musicItems = []
        //api request data
        const data = {
            uris : [
                'spotify:track:0V3wPSX9ygBnCm8psDIegu'
            ]
        };
        axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8ZRTfalHk/tracks', options)
        .then(function(response){
            console.log(response)
            //setItems(response.data.items)
            musicItems = response.data.items
            console.log(musicItems)
            console.log(data)
        })
        .then(()=>{
            //construct item string
            let endPoint = "https://api.spotify.com/v1/playlists/3BX7MEBj6Z9OnCQ0fRdMQP/tracks"
            console.log("first track: " + musicItems[0].track.id)
            axios.post(endPoint,data,options)
            /*
            let itemString = ""
            for(let i = 0; i<musicItems.length; i++){
                console.log(musicItems[i].track.name)
                itemString += "spotify:track:" + musicItems[i].track.id + ","
            }
            itemString = itemString.slice(0, -1);
            endPoint += encodeURIComponent(itemString)
            console.log(itemString)
            axios.post(endPoint, options)
            */
            //add items to roboto
            //axios.post('https://api.spotify.com/v1/playlists/3BX7MEBj6Z9OnCQ0fRdMQP/tracks')
        })
    }

    const listItems = playlists.map((d) => <li key={d.name}>{d.name}</li>);

    return(
        <div>
            <button onClick={addItems}>add songs</button>
            <h1>Logged in HOME PAGE</h1>
            <ul id="listing">
                {listItems}
            </ul>
        </div>
    );
}