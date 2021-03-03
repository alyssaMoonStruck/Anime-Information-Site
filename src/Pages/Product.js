import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Product(){
    const [product, setProduct] = useState([])
    const [day, setDay] = useState('monday')
    function onChange(e){
        setDay(e.target.value)
    }
    
    useEffect(() => {

    const options = {
        method: 'GET',
        url: 'https://jikan1.p.rapidapi.com/schedule/' + day,
        headers: {
            'x-rapidapi-key': '5f0baa9bbdmsh029cce2c1f37cb1p1bc405jsneb7dd91e1226',
            'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
    };
        axios.request(options).then(response => {
            setProduct(response.data[day])
        })
    }, [day])

        return (
            <>
                <select onChange={onChange} value={day}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                <div className="container">
                {product.map(item => 
                <div className="item">
                    <img src={item.image_url}/>
                    <p className="sections">
                    <div className="title">{item.title}</div>
                    <div className="syn">{item.synopsis}</div>
                    {item.type} 
                    {item.score} 
                    {item.airing_start} 
                    {item.episodes} 
                    {item.source} 
                    {item.licensors} 
                    {item.kids} 
                    {item.r18} 
                    </p>
                </div>
                )}
            </div>
            </>
        )
}

export default Product