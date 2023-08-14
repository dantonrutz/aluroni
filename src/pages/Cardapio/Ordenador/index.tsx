import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface ordenadorProps{
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador( { ordenador, setOrdenador }: ordenadorProps){
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return(
    <button 
      className={`${styles.ordenador} ${ordenador !== "" ? styles.ordenador__ativo : ""}`} 
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div className={`${styles.ordenador__options} ${aberto ? styles.ordenador__options__ativo : ""}`}>
        {opcoes.map(opcao => (
          <div 
            className={styles.ordenador__option} 
            key={opcao.value} 
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}