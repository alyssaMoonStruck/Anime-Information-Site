import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product(){
    const url = 'https://jikan1.p.rapidapi.com/schedule/monday'

    const [product, setProduct] = useState(null)
    const [day, setDay] = useState('monday')
    
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

    if(product){ 
        return (
            <div>
                <h1>{product.name}</h1>
                {product.map(item => 
                <div>
                    <img src={item.image_url}/>
                    <p>
                    {item.title} 
                    {item.type} 
                    {item.score} 
                    {item.airing_start} 
                    {item.episodes} 
                    {item.source} 
                    {item.licensors} 
                    {item.kids} 
                    {item.r18} 
                    {item.synopsis}
                    </p>
                </div>
                )}
            </div>
    )
}

return (
    <div></div>
    )
}

export default Product