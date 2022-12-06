import styles from '../../styles/soporte.module.css'
import Header from '../header';
import ProductCard from './productCard';
import Head_ from '../head';

import Link from 'next/link';
import productCard from './productCard';
import { ClientesProperties, ProductProperties } from '../../components/soporte/types';
import { useEffect, useState } from 'react';
import ClienteCard from './clienteCard';
import HeaderSoporte from '../headerSoporte';



export default function Productos() {


    const [clientes, setClientes]: [Array<ClientesProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes")
        .then((res) => res.json())
        .then((data) => {
          setClientes(data)
          console.log(data)
        })
    }, [])
  

    return(<div className={styles.container}>

       <Head_ nombre='Productos y Versiones'></Head_>
      
       <HeaderSoporte></HeaderSoporte>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Soporte</h1>

          </div>
          <div className={styles.navbarDer}> 

          </div>
        </div>

                
        <div className={styles.productos}>
            {(clientes).map((cliente) => (
                <div key={cliente.id}>
                    
                    <Link href={"clientes/" + cliente.id}><ClienteCard id={cliente.id} razon_social={cliente['razon social']} CUIT={cliente.CUIT} ></ClienteCard></Link>
                

                </div>
            ))}


  

        </div>


 
  
      </div>
    );
  }