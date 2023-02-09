import React, {useState} from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'


const ImageUpload = () =>{
    // const [file, setFile] = useState();
    const [marque, setMarque] = useState();
    const [modele, setModele] = useState();
    const [annee, setAnnee] = useState();
    const [immatriculation, setImmatriculation] = useState();
    const [files, setFiles] = useState([]);

    // const onInputChange = (e) => {
    //     console.log(e.target.files);
    //     setFile(e.target.files[0])
    // };
    const onMarqueChange = (e) => {
        console.log(e.target.value);
        setMarque(e.target.value)
    };
    const onModeleChange = (e) => {
        console.log(e.target.value);
        setModele(e.target.value)
    };
    const onAnneeChange = (e) => {
        console.log(e.target.value);
        setAnnee(e.target.value)
    };
    const onImmatriculationChange = (e) => {
        console.log(e.target.value);
        setImmatriculation(e.target.value)
    };



    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('marque', marque);
        data.append('modele',modele);
        data.append('mise_en_service',annee);
        data.append('immatriculation',immatriculation);
        // data.append('file', file);
        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:5000/upload', data)
            .then((response) => {
                console.log('Upload Success');
                alert("Element ajouté");
            })
            .catch((e) => {
                console.log('Upload Error' + e)
            })
    };

    return (
        <form method="post" onSubmit={onSubmit}>

        <Form.Group widths='equal'>
          <Form.Input fluid label='Marque' placeholder='Marque' name="marque" onChange={onMarqueChange} />
          <Form.Input fluid label='Modèle' placeholder='Modèle' name="modele" onChange={onModeleChange}/>
          <Form.Input fluid label='Année' placeholder='Année' name="annee" type='number' onChange={onAnneeChange}/>
          <Form.Input fluid label='Immatriculation' placeholder='XX-123-XX' name="immatriculation" onChange={onImmatriculationChange}/>
        </Form.Group>
        
        <Form.TextArea label='Description' placeholder='Tell us more about you...' name="description" />
        
        <Form.Input fluid label='Année de mise en service' placeholder='Date' name="mise_en_service" type='Date' />

            <div>
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
}

export default ImageUpload