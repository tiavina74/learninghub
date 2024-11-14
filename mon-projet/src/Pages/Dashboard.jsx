import React from 'react';
import SideBar from '../Components/SideBar';
import '../Styles/Dasboard.css'; // Assurez-vous d'avoir les styles
import Navbar from '../Components/Navbar';
import CoursChart from '../Components/CoursChart';
import EtudiantChart from '../Components/EtudiantChart';



function Dashboard() {
  return (
    <>
    <main className='center'>
        <SideBar/>
      <section className='contenu'>
        <Navbar/>
        <div className="texte">
        <h2>Tableau de bord</h2>
        <hr />

        <div className="stats center">
        <div className="one m-4">
            <div className="cours">
              <h4 className='p-4'>Total</h4>
              <div className="center">
                <p className='fw-bold fs-1 text-primary'>50</p>
              </div>
            </div>
          </div>
          <div className="one m-4">
            <div className="cours">
              <h4 className='p-4'>Cours</h4>
              <div className="center">
                <p className='fw-bold fs-1 text-primary'>50</p>
              </div>
            </div>
          </div>

          <div className="one m-4">
          <div className="cours">
              <h4 className='p-4'>Etudiants</h4>
              <div className="center">
                <p className='fw-bold fs-1 text-primary'>50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="charts p-3 center">
          <div className="chart1 p-5">
          <CoursChart />
          </div>
          <div className="chart2 p-5">
<EtudiantChart />
          </div>
        </div>
        </div>

      </section>
    </main>
    </>
  );
}

export default Dashboard;
