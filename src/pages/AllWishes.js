import { useState, useEffect } from 'react' 
import Persons from "../comp/Persons" 
import styles from './AllWishes.module.scss'


//Get the data from server  
export default function AllWishes() {
    const [allWishes, setAllWishes] = useState([]) // puts in to an array

        //By using useEffect() the data will just get fetched one time istead of everytime the stat change.. Get the data and writes it out in an array
        useEffect(function () {
            async function showPersons() {
                const res = await fetch('http://localhost:3001/persons')
                const persons = await res.json()

                setAllWishes(persons)
            }

            showPersons()
        }, [])


    //Using map() to make a new array
    return (
        <>
        <ul className={styles.allWish}>
        <h3>All wishes to Santa</h3>
            {allWishes.map(persons => <Persons key={persons.id} persons={persons} />)} 
        </ul>
        </>

    )
}