import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type opcaoProps = typeof filtros[0];

interface filtrosProps{
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: filtrosProps){

  function selecionarFiltro(opcao: opcaoProps){
    if (filtro === opcao.id){
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map ((opcao)=> (
        <button 
          className={`${styles.filtros__filtro} ${opcao.id === filtro ? styles.filtros__filtro__ativo : ""}`}
          key={opcao.id} 
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
        
      ))}
    </div>
  )
}
