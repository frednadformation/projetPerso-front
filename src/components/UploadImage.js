import React, { useState } from "react";
import axios from "axios";
import { Form } from 'semantic-ui-react'

const UploadImage = () =>{

    // const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [marque, setMarque] = useState();
    const [modele, setModele] = useState();
    const [annee, setAnnee] = useState();
    const [immatriculation, setImmatriculation] = useState();
    const [description, setDescription] = useState();
    const [mise_en_service, setMise_en_service] = useState();


    const onSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData();
        data.append('marque',marque);
        data.append('modele',modele);
        data.append('annee',annee);
        data.append('immatriculation',immatriculation);
        data.append('description',description);
        data.append('mise_en_service',mise_en_service);
        
        for(let i = 0; i <files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:5000/upload', data)
        .then((response) =>{
            console.log("Upload successful");
        }
        )
        .catch((error) =>{
            console.log("Upload error: " + error);
        })
    }

    // const onFileChange = (event) =>{
    //     console.log(event.target.files[0]);
    //     setFile(event.target.files[0]);
    // }
    const onFileChange = (event) =>{
        setFiles(event.target.files[0]);
    }

    const onMarqueChange = (event) =>{
        setMarque(event.target.value)
    }
    const onModeleChange = (event) =>{
        setModele(event.target.value)
    }
    const onAnneeChange = (event) =>{
        setAnnee(event.target.value)
    }
    const onImmatriculationChange = (event) =>{
        setImmatriculation(event.target.value)
    }
    const onDescriptionChange = (event) =>{
        setDescription(event.target.value)
    }
    const onMiseEnServiceChange = (event) =>{
        setMise_en_service(event.target.value)
    }

    
    return (

        <form method="post" onSubmit={onSubmit}>

        <Form.Group widths='equal'>
                <Form.Input fluid label='Marque' onChange={onMarqueChange} placeholder='Marque' name="marque" />
                <Form.Input fluid label='Modèle' onChange={onModeleChange} placeholder='Modèle' name="modele" />
                <Form.Input fluid label='Année' onChange={onAnneeChange} placeholder='Année' name="annee" type='number' />
                <Form.Input fluid label='Immatriculation' onChange={onImmatriculationChange} placeholder='XX-123-XX' name="immatriculation"/>
                </Form.Group>
                
                <Form.TextArea label='Description' onChange={onDescriptionChange} placeholder='Tell us more about you...' name="description" />
                
                <Form.Input fluid label='Année de mise en service' onChange={onMiseEnServiceChange} placeholder='Date' name="mise_en_service" type='Date' />
                
            <label>Upload Image :</label>
            <input type="file" 
            onChange={onFileChange}
            multiple 
            />
            <button>Submit</button>
        </form>
    )
}

export default UploadImage
