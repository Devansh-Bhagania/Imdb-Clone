import React from 'react'
import { useState, useEffect } from "react"
import Card from './Card'
import { useParams } from 'react-router-dom'

const MoviesType = () => {
    const { type } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=70639b9e7a2fb283c2d5d134d7149d9f`
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        console.log(type)
        getData()
    }, [])
    useEffect(() => {
        console.log(url)
        getData()
    }, [type])
    const getData = () => {
        fetch(url).then(resp => resp.json()).then(data => setMovieList(data.results))
    }
    return (

        <div className="movie_list">
            <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {movieList.map((movie) => (
                    <Card movie={movie} />
                ))}
            </div>

        </div>
    )
}

export default MoviesType