import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface buscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}
a

export default function Buscador({ busca, setBusca }: buscadorProps){
  return(
    <div className={styles.buscador}>
      <input
        id='input'
        placeholder='Buscar'
        value={busca}
        onChange={evento => setBusca(evento.target.value)} 
      />
      <label htmlFor="input">
      <CgSearch 
        size={20} 
        color='#4C4D5E'
      />
      </label>
    </div>
  )
}