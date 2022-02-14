import { useState } from 'react'

function NameUpdater ({ user, setUser, editUsername, setEditUsername }) {
    const [ username, setUsername]= useState(user.username)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditUsername(!editUsername)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Name
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditUsername(!editUsername)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setUsername(e.target.value)} value={username} type="text" name="name" required/><label htmlFor="name">Name</label>
            </div>
            </form>
        </div>
    )
}

export default NameUpdater