import axios from '../../api'
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailsProduct = () => {
    // const {pathname} = useLocation()
    // console.log(pathname);
    const {id} = useParams()
    useEffect(()=>{
        axios
            .get(`/products/${id}`)
            .then(res => console.log(res))
    }, [])
    return (
    <div>
        <h2>Details Product</h2>
    </div>
  )
}

export default DetailsProduct