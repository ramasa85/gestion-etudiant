//import Students from "./crud/Students";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import Students from "./Students";

function AddStudent() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [departement, setDepartement] = useState("");
  const [classe, setClasse] = useState("");

  let history = useNavigate();
  
  const handleSubmit = (ev) => {
    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    let a = nom,
    b = prenom,
    c = age,
    d = departement,
    e = classe;
    Students.push({id : uniqueId, Nom : a, Prenom : b, Age : c, Departement : d, Classe : e});


    history('/');
  }

    return(
      <div className="container  justify-content-center" >
        <form >
        <legend>Ajouter un nouveau etudiant</legend>
          
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Nom" required onChange={(ev) => setNom(ev.target.value)}></input>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Prenom" required onChange={(ev) => setPrenom(ev.target.value)}></input>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Age" required onChange={(ev) => setAge(ev.target.value)}></input>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Departement" required onChange={(ev) => setDepartement(ev.target.value)}></input>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Classe" required onChange={(ev) => setClasse(ev.target.value)}></input>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-success btn-lg btn-block " type="submit" onClick={(ev) => handleSubmit(ev)}>Ajouter</button>
            </div>
        </form>
      </div>
    );     
}
export default AddStudent;