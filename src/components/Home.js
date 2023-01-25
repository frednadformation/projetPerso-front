import React from 'react'

import { Button, Icon } from 'semantic-ui-react'

function Home() {
  return (
    <div>      
    
    <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
        <Icon name='arrow right' />
        </Button.Content>
    </Button>
  
  </div>
  )
}

export default Home 