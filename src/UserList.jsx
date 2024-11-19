import React, { useState } from 'react'

function UserList() {

    const [users, setUsers] = useState([
        {id:1, name:"Selomon", age:30},
        {id:2, name:"dawit", age:24},
        {id:3, name:"surafel", age:27}
    ])

    const handleEdit = (id, field, value) => {
        setUsers((prevUsers) =>prevUsers.map((user) =>user.id===id ? {...user, [field]:value}:user
    ));
    };
  return (
        <div className='form'>
            <ul>
                {users.map((user) =><li key={user.id}>
                    <p>Id:{user.id}, Name:{user.name}, Age:{user.age}</p>
                    <div>
                        <label>
                             Name:{" "}
                            <input 
                                   id='name'
                                   type="text" 
                                   value={user.name} 
                                   onChange={(e) => handleEdit(user.id, "name", e.target.value)}
                            />
                        </label><br />
                        <label>
                            Ages : {" "}
                            <input 
                                   id='age'
                                   type="number" 
                                   value={user.age} 
                                   onChange={(e) => handleEdit(user.id, "age", e.target.value)}
                            />
                        </label>
                    </div>
                </li>
            )}
            </ul>
        </div>
  )
}

export default UserList
