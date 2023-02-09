import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

import { Card, Image, Icon } from 'semantic-ui-react'


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
                
                 {/* <Card
                        image={['//localhost:5000/' + voiture.img]}
                        href={['/cars/'+voiture._id]}
                        header={voiture.modele}
                        meta={voiture.marque}
                        description={voiture.description}
                    />  */}
                    <Card>
                    {
                        voiture.img.map((file)=>
                            
                             <Image src={`http://localhost:5000/${file.filename}`} />
                        

                        )
                    }
                        <Card.Content>
                        <Card.Header>{voiture.modele}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{voiture.marque}</span>
                        </Card.Meta>
                        <Card.Description>
                            {voiture.description}
                        </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            )

        }) 
    }

    </div>
  )
}

export default AllVoiture