import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import {v4 as uuid} from "uuid";
import Students from "./Students";
function EditStudent() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const [departement, setDepartement] = useState("");
    const [classe, setClasse] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Students.map(function(ev){
        return ev.id
    }).indexOf(id);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        let a = Students[index];
        a.Nom = nom;
        a.Prenom = prenom;
        a.Age = age;
        a.Departement = departement;
        a.Classe = classe;
    
        history("/");
      }

      useEffect(() =>{
        setNom(localStorage.getItem('Nom'))
        setPrenom(localStorage.getItem('Prenom'))
        setAge(localStorage.getItem('Age'))
        setDepartement(localStorage.getItem('Departement'))
        setClasse(localStorage.getItem('Classe'))
        setId(localStorage.getItem('Id'))
      },[])

    return(
        <div className="container  justify-content-center" >
            <form >
            <legend>Modifier un etudiant</legend>
          
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Nom" value={nom} required onChange={(ev) => setNom(ev.target.value)}></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Prenom" value={prenom} required onChange={(ev) => setPrenom(ev.target.value)}></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Age" value={age} required onChange={(ev) => setAge(ev.target.value)}></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Departement" value={departement} required onChange={(ev) => setDepartement(ev.target.value)}></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Classe" value={classe} required onChange={(ev) => setClasse(ev.target.value)}></input>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-success btn-lg btn-block " type="submit" onClick={(ev) => handleSubmit(ev)}>Modifier</button>
          </div>
            </form>
        </div>
    )
}
export default EditStudent;