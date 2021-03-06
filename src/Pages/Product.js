import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'


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
            <div className='days'>
                <select onChange={onChange} value={day}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                </div>
                <div className="container">
                {product.map(item => 
                    <div className="item">
                        <p className="sections">
                        <div className="card">
                            <div className="title">{item.title}</div>
                            <img className="cover" src={item.image_url}/>
                            <div className="syn">
                            {item.synopsis.substring(0,150)}....
                            
                            <div className="info">
                            <div>{item.type}</div> 
                            <div>{item.score} </div>
                            <div>{moment(item.airing_start).format("dddd, MMMM Do YYYY")}</div>
                            <div>{item.episodes}</div> 
                            <div>{item.source} </div>
                            <div>{item.licensors}</div>
                            <div>{item.kids}</div> 
                            <div>{item.r18}</div>
                            </div>
                            </div>
                        </div>
                        </p>
                    </div>
                )}
            </div>
            </>
        )
}

export default Product