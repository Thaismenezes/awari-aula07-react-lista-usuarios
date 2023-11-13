import Item from "./Item";

const List = (props) => {
    
    return <>
         <h1>Componentes de Lista</h1>
         {props.itens.map((item) =>{
            return<Item item={item} key={item.id}/>
         })}
    </> 
}

export default List;