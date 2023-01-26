import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

import { Card } from 'semantic-ui-react'


function AllVoiture() {

    const initialState = {
        loading: true,
        error: '',
        voitures: {}
    };


    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS': {
                return {
                    loading: false,
                    error: '',
                    voitures: action.payload
                }
            }
            case 'FETCH_ERROR': {
                return {
                    loading: false,
                    error: action.payload,
                    voitures: {}
                };
            }
            default :{
                return state;
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('http://localhost:5000/allcars/')
        .then((response) =>{
            dispatch({
                type : 'FETCH_SUCCESS',
                payload: response.data
            } );
        })
        .catch((error) =>{
            dispatch({
                type: 'FETCH_ERROR',
                payload: error
            })
        })
    })

  return (
    <div>
    {
        state.loading ? 'Loading...' 
        
        : state.voitures.data.map((voiture, index) =>{
            
            return(
                <div key={index}>
                 <Card
                        href={['/',voiture._id]}
                        header={voiture.modele}
                        meta={voiture.marque}
                        description={voiture.description}
                    /> 
                </div>
            )

        }) 
    }

    </div>
  )
}

export default AllVoiture