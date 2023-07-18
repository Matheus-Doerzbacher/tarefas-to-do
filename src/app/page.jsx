"use client"
import BarraAdicionar from '../components/BarraAdicionar'
import HeaderMain from '../components/HeaderMain'
import Tarefa from '../components/Tarefa'
import {useEffect, useState} from 'react'

export default function Home() {
  
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas')

    if (tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
    }
  },[])

  
  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  },[tarefas])

  
  function adicionarTarefa(newTarefa) {
    if(newTarefa){
      setTarefas([...tarefas, newTarefa])
    }
  }

  return (
    <>
      <HeaderMain nome="Meu Dia" />
      <BarraAdicionar addTarefa={adicionarTarefa}/>

      {tarefas.map(item => (
        <Tarefa key={item} nome={item}/>
      ))}

    </>
  )
}



