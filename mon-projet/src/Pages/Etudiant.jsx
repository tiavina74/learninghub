import React from 'react';
import SideBar from '../Components/SideBar';
import '../Styles/Dasboard.css'; // Assurez-vous d'avoir les styles
import Navbar from '../Components/Navbar';

function Etudiant() {
  return (
    <>
      <main className='center'>
        <SideBar />
        <section className='contenu'>
          <Navbar />
          <div className="texte">
            <h2>Liste des Etudiants</h2>
            <hr />

            {/* Tableau des étudiants */}
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom de l'Étudiant</th>
                    <th>Cours</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jean Dupont</td>
                    <td>Mathématiques Avancées</td>
                    <td>
                      <button className="btn btn-info btn-sm">Modifier</button>
                      <button className="btn btn-danger btn-sm ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Marie Curie</td>
                    <td>Physique Quantique</td>
                    <td>
                      <button className="btn btn-info btn-sm">Modifier</button>
                      <button className="btn btn-danger btn-sm ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Pierre Martin</td>
                    <td>Chimie Organique</td>
                    <td>
                      <button className="btn btn-info btn-sm">Modifier</button>
                      <button className="btn btn-danger btn-sm ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sophie Lemoine</td>
                    <td>Informatique Avancée</td>
                    <td>
                      <button className="btn btn-info btn-sm">Modifier</button>
                      <button className="btn btn-danger btn-sm ml-2">Supprimer</button>
                    </td>
                  </tr>
                  {/* Ajoutez d'autres étudiants ici */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Etudiant;
