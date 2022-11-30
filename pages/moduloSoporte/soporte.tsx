import styles from '../../styles/soporte.module.css'
import Header from '../header';
import TicketCard from './ticketCard';
import Head_ from '../head';
import ColumnaTicket from './columnaTickets';
import SearchBar from './searchBar';
import TicketData from './TicketsData.json'



export default function Soporte() {

    return(<div className={styles.container}>

       <Head_ nombre='Soporte'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Soporte</h1>
          </div>
          <div className={styles.navbarDer}> 
          
            <SearchBar placeholder="Ingrese un nombre" data={TicketData}/>

          </div>
        </div>

        <div className={styles.titulos}>
              <div>

                <p>Abierto</p>
                
                <ColumnaTicket estadoFiltro='Abierto'></ColumnaTicket>
               
              </div>

              <div>
              <p>En analisis</p>
              <ColumnaTicket estadoFiltro='En analisis'></ColumnaTicket>
              </div>
              <div>
              <p>Derivado</p>
              <ColumnaTicket estadoFiltro='Derivado'></ColumnaTicket>
              </div>
              <div>
              <p>Resuelto</p>
              <ColumnaTicket estadoFiltro='Resuelto'></ColumnaTicket>
              </div>
              <div>
              <p>Cancelado</p>
              <ColumnaTicket estadoFiltro='Cancelado'></ColumnaTicket>


              
              </div>
            </div>
     


            <div className={styles.contenedorBoton}>
            <a href='/moduloSoporte/ticketCreate'><button>CREAR TICKET</button></a>
            </div>
  
  
      </div>
    );
  }
