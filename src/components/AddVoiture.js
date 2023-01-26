import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class AddVoiture extends Component {
  render() {
    return (
      <div>
        <Form action="http://localhost:5000/api/Voiture" method="POST">
        <Form.Group widths='equal'>
          <Form.Input fluid label='Marque' placeholder='Marque' name="marque" />
          <Form.Input fluid label='Modèle' placeholder='Modèle' name="modele" />
          <Form.Input fluid label='Année' placeholder='Année' name="annee" type='number' />
          <Form.Input fluid label='Immatriculation' placeholder='XX-123-XX' name="immatriculation"/>
        </Form.Group>
        
        <Form.TextArea label='Description' placeholder='Tell us more about you...' name="description" />
        
        <Form.Input fluid label='Année de mise en service' placeholder='Date' name="mise_en_service" type='Date' />

        <Form.Button>Submit</Form.Button>
      </Form>

      </div>
    )
  }
}

export default AddVoiture