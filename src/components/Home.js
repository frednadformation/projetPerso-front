import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Login from './Login'


function Home() {


  return (
    <div>  
      <h1>Home</h1>

      <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Login />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' href="/register"/>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    </div>
  )
}

export default Home 