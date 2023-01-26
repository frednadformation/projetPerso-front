import React, {useReducer, useEffect} from 'react'

import { Card, Icon } from 'semantic-ui-react'



import axios from 'axios'

function AllUsers() {

    const initialState = {
        loading: true,
        error: '',
        users: {}
    };
    const reducer = (state, action) => {
        switch(action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    error: '',
                    users: action.payload
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    error: action.payload,
                    users: {}
                }
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect (()=>{
        axios.get("http://localhost:5000/allusers/")
        .then((response)=>{
            dispatch({
                type: "FETCH_SUCCESS",
                payload: response.data
            })
        }).catch((error)=>{
            dispatch({
                type: "FETCH_ERROR",
                payload: error
            });
        });

        // }).catch({
        //     type: "FETCH_ERROR"
        // });
    })


  return (
      <React.Fragment>
        {
            state.loading ? 'Loading.......' : state.users.data.map((user) =>{
                return (
                    <Card>
                        <Card.Content header={user.username} />
                        <Card.Content description={user.email} />
                        <Card.Content extra>
                        <Icon name='user' />{user.admin ? "L'utilisateur est admin" : "L'utilisateur n'est pas admin" }
                        </Card.Content>
                    </Card>
                
                )
            })
        }
    </React.Fragment>
  )
}

export default AllUsers