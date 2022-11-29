import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'


export default function crearProyecto() {
  return(
    
    <>
    <Head_ nombre='Nuevo proyecto'></Head_>
    <Header></Header>
    <div className={styles.container}>



        <form action="una_accion.php" >

        <div className = {styles.new_project_window}>
        <label htmlFor="fname">Nombre proyecto </label>
        <br/>
        <input type="text"  id="fname" name="firstname" placeholder="New project name"  >
           </input>

        </div>
        <div className = {styles.new_project_window}>
        <label htmlFor="projectID">ID </label>
        <br/>
        <input type="text"  id="projectID" name="projectid" placeholder="New project id"  >
           </input>
        </div>

        <div className = {styles.new_project_window}>
          <label htmlFor = "projectState">
            Estado 
          </label>
          <br/>
          <select>
              <option disabled selected> Estado</option>
              <option value = "optionDesarrollo"> Desarrollo </option>
              <option value = "optionProduccion"> Producción</option>
              <option value = "optionPostProduccion">Post Producción </option>
          </select>
        </div>

        <div className = {styles.new_project_window}>
          <label  htmlFor = "Client name">Cliente  </label>
          <br/>
          <input type = "text" id = "projectClient" placeholder="A client"></input>
        </div >

        <div className = {styles.new_project_window}>
          <label htmlFor = "ClientType" >
            Tipo de cliente:
          </label>
          <br/>
          <select>
              <option disabled selected> Tipo cliente </option>
              <option > Tipo cliente 1</option>
          </select>
        </div>

        <div  className = {styles.new_project_window}>
          <label htmlFor = "FechaDeInicio"> Fecha de inicio </label>
          <br/>
          <input type = "date" id = "FechaDeInicio" name = "comienzoDeProyecto">
          </input>
        </div>

        <div  className = {styles.new_project_window}>
          <label htmlFor = "FechaDeFin"> Fecha estimada de fin </label>
          <br/>
            <input type = "date" id = "FechaDeFin" name = "finDeProyecto">
            </input>
        </div>

        <div className = {styles.new_project_window}>
          <label  htmlFor = "productManager">PM  </label>
          <br/>
          <input type = "text" id = "productManager" placeholder="PM"></input>
        </div >
        

        <div className = {styles.new_project_window}>
          <label htmlFor = "SubmitButton">
          </label>
          <br/>
          <button className = {styles.positive_button_style}>
            Crear proyecto
          </button>
          

        </div>
        </form>

        <div  className = {styles.new_project_window}>
          <label htmlFor = "CancelButton">
          </label>
          <br/>
          <a href="">
          <button className = {styles.negative_button_style}>
            Cancelar
          </button>
        </a>
        </div>
    </div>
  </>
  );
}