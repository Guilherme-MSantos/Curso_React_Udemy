import styles from './Carros.module.css';
const Carros = ()=>{

 const cars = [
   { brand: "FERRARI", color: "vermelho",placa:"111111" },
   { brand: "BMW", color: "preto" ,placa: "22222"},
   { brand: "TESLA", color: "amarelo",placa:"333333" },
 ];
 return (
   <div className={styles.container}>
     {cars.map((car) => (
       <div className={styles.card}>
         <h3 className={styles.carro_marca}>{car.brand}</h3>
         <p>Cor : {car.color}</p>
         <p>Placa: {car.placa}</p>
       </div>
     ))}
   </div>
 );
  }

export default Carros 