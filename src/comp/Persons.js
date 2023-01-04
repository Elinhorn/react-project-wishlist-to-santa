//This is how the data will be presented, when a new wish i added this is the reusable template 
export default function Persons({ persons }){
    const { name, wish } = persons

    return(
        <li>
            <h4>{name}</h4>
            <p>Wish: {wish}</p>
        </li>

    )
}