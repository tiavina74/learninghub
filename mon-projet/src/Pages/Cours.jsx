import React from 'react';
import SideBar from '../Components/SideBar';
import '../Styles/Dasboard.css'; // Assurez-vous d'avoir les styles
import Navbar from '../Components/Navbar';

function Cours() {
  return (
    <>
      <main className='center'>
        <SideBar />
        <section className='contenu'>
          <Navbar />
          <div className="texte">
            <h2>Liste des cours</h2>
            <button className='btn btn-primary ajouter'>Ajouter des cours</button>
            <hr />

            {/* Tableau des cours */}
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mathématiques Avancées</td>
                    <td>Dr. Martin</td>
                    <td>4</td>
                    <td>
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-danger ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Physique Quantique</td>
                    <td>Dr. Dupont</td>
                    <td>3</td>
                    <td>
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-danger ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Physique Quantique</td>
                    <td>Dr. Dupont</td>
                    <td>3</td>
                    <td>
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-danger ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Physique Quantique</td>
                    <td>Dr. Dupont</td>
                    <td>3</td>
                    <td>
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-danger ml-2">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Physique Quantique</td>
                    <td>Dr. Dupont</td>
                    <td>3</td>
                    <td>
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-danger ml-2">Supprimer</button>
                    </td>
                  </tr>
                  {/* Vous pouvez ajouter d'autres lignes de cours ici */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cours;
