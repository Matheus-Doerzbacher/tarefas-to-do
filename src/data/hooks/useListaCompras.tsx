import { useCallback, useEffect, useState } from "react";

export default function useListaCompras() {
  const [lista, setLista] = useState<any[]>([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@minhascompras");

    if (tarefasStorage) {
      setLista(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@minhascompras", JSON.stringify(lista));
  }, [lista]);

  function adicionarTarefa(item: string) {
    const idTarefa = Math.floor(Date.now() * Math.random()).toString(36);

    if (item) {
      const dataAtual = new Date();

      const objetoTafefa = {
        id: idTarefa,
        nome: item,
        concluido: false,
        data: dataAtual.toDateString(),
      };

      setLista([...lista, objetoTafefa]);
    }
  }

  function concluirTarefa(idTarefa: string) {
    const indexTarefa = lista.findIndex((tarefa) => tarefa.id === idTarefa);

    const tarefaSelecionada = lista[indexTarefa];
    tarefaSelecionada.concluido = !tarefaSelecionada.concluido;

    setLista(lista.filter((tarefa) => tarefa.id !== idTarefa));

    setLista([...lista]);
  }

  function deletarTarefa(idTarefa: string) {
    setLista(lista.filter((tarefa) => tarefa.id !== idTarefa));
  }

  return {
    lista,
    adicionarTarefa,
    concluirTarefa,
    deletarTarefa,
  };
}
