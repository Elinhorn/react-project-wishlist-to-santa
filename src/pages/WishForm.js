import { useState } from 'react' //saves form input in variable 
import styles from './WishForm.module.scss'

//send our data to the JSON server
export default function WishForm() {
    const [name, setName] = useState('')
    const [wish,setWish] = useState('')

    
    const handleSubmit = async (e) => {

        e.preventDefault() //prevent reloading of the pages when data gets send to server
        
        const addWish = {
            name, wish
        }

        //Validation. If input name and/or wish is not filled right an alert will pop up and the user will not be able to sen the data
        if (addWish.name === "" || addWish.wish === "") {
            alert("Make sure to fill out the form correctly!");
            return false;
          }
        
        //This makes the request to post new data in the DB. Method = what type of CRUD. Header = what the request contains. Body =  The content and makes it to a string.
        const res = await fetch('http://localhost:3001/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addWish)
        })

        //If everything went ok the input will be cleard and a alert will pop up.
        if (res.ok) {
            setName('')
            setWish('')
            alert("Thanks for your wish! Santa will check if you have been nice this year!");
        }
    }


    //JSX How it will be presented on the page and when the form is change the value is stored in setName/setWish.
    return (
        <div className={styles.sendWish}>
            <form onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input> <br/>
                <label>Your Wish:</label>
                <input type='text' value={wish} onChange={(e) => setWish(e.target.value)}></input> <br/>
                <button>Send to santa! 🎅</button>
            </form>
        </div>
    )
}