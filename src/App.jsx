import { useState } from 'react'
import './App.css'

function App() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  //função para buscar dados do clima
  const buscarClima = async () => {
    //validação do campo vazio da cidade
    if (!cidade.trim()){
      setErro('Por favor, digite uma cidade');
      return;
    }

    setCarregando(true);
    setErro('');

    try{

    }catch (error){

    }finally{
      
    }
  }
  return (
    <>
      
    </>
  )
}

export default App
