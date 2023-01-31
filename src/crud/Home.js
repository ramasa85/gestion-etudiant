import { Fragment } from "react";
import { Link,useNavigate } from "react-router-dom";
import Students from "./Students";
function Home (){ 
    let history = useNavigate();

    const handleEdit = (id, nom, prenom, age, departement, classe) => {
        localStorage.setItem('Nom', nom)
        localStorage.setItem('Prenom', prenom)
        localStorage.setItem('Age', age)
        localStorage.setItem('Departement', departement)
        localStorage.setItem('Classe', classe)
        localStorage.setItem('Id', id)

    } 
    const handleDelete = (id) => {
        var index = Students.map(function(ev){
            return ev.id
        }).indexOf(id);
        Students.splice(index,1);

        history('/');
   
    }
    return(
        <Fragment>
        <div className="table-responsive container  justify-content-center">
        <h1>Liste des etudiants</h1>
        <table className="table">
        <thead className="bg-success">
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
            <th>Departement</th>
            <th>Classe</th>
            <th>Actions</th>
        </thead>
        <tbody>
        {
            Students && Students.length > 0
            ?
            Students.map((item) => {
                return(
                <tr>
                    <td>{item.Prenom}</td>
                    <td>{item.Nom}</td>
                    <td>{item.Age}</td>
                    <td>{item.Departement}</td>
                    <td>{item.Classe}</td>
                    <td>
                        <Link to="/EditStudent">
                        <button onClick={() => handleEdit(item.id, item.Nom, item.Prenom, item.Age, item.Departement, item.Classe)} className="btn btn-warning btn-sm">Modifier</button>
                        </Link>
                        &nbsp;
                        <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Supprimer</button>
                    </td>
                </tr>
                )

            })
            : "No data available"
        }
        
        </tbody>
        </table>
        <br></br>
        <Link className="d-grid gap-2" to="/AddStudent">
        <button className="btn btn-success" >Nouveau etudiant</button></Link>
        </div>
        </Fragment>
    );
}
export default Home;