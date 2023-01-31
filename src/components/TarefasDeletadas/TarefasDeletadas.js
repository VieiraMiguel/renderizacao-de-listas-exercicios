import { ListaContainer, Tarefa } from "./styled"

export function TarefasDeletadas(props) {

    return (
        <ListaContainer>
            <ul>
                {props.tarefasRemovidas.map((tarefa, index) => {
                    return (
                        <Tarefa key={index}>
                            <p>{tarefa}</p>
                        </Tarefa>
                    );
                })}
            </ul>
        </ListaContainer>
    )
}