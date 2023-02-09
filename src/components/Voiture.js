import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import moment from 'moment'

import 'moment/locale/fr'

import axios from 'axios'

function Voiture() {
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [cars, setCar] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5000/onecar/' + params.id)
        // axios.get(`http://localhost:5000/onecar/${params.id}`)
        .then(response =>{
            // console.log(response.data.data);
            setLoading(false)
            setError('')
            setCar(response.data.data)
        })
        .catch(error=>{
            setLoading(false)
            setCar({})
            setError(error)
        })
    })

    
  return (
    <div>
        Voiture id : {params.id}
        <br />
    {
        loading ? 'Loading...' : cars.marque        
    }
    <br />
    {
        loading ? 'Loading...' : cars.immatriculation        
    }
    <br />
    {
        loading ? 'Loading...' : moment(cars.mise_en_service).format('L')     
    }
    <br />
    {
        loading ? 'Loading...' : moment(cars.mise_en_service).format('LLL')     
    }



    {error ? 'error' : null}
    
    </div>
  )
}

export default Voiture