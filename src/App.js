import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { Massage } from './components/massage/Massage';

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  const [success, setSuccess] = useState(false)
  // Search
  const [search, setSearch] = useState('')
  const [invites, setInvites] = useState([])

  // Modal
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    fetch('https://643165603adb1596516b77dd.mockapi.io/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json[0].data)
        setLoading(false)
      })
      .catch(err => {
        console.warn("Ошибка получения пользователей", err)
        alert('Ошибка получения пользователей')
        setLoading(true)
      })

      localStorage.getItem("")
  }, [])

  const onChangeInput = (e) => {
    setSearch(e.target.value)
  }

  const addUserInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    }
    else {
      setInvites(prev => [...prev, id]);

    }
  }

  const openModal = (state) => {
    setOpen(state)
  }

  const sendMassage = (state) => {
    setSuccess(state)
  }

  return (
    <div className="App">
      
      {
          isOpen ?
            success ? (
              <Success count={invites.length} />
            ) : (
              <Massage 
                sendMassage={sendMassage}
                openModal={openModal} />
            )
            : (
              <Users
                items={users}
                isLoading={isLoading}
                onChangeInput={onChangeInput}
                search={search}
                invites={invites}
                addUserInvite={addUserInvite}
                openModal={openModal}
              />
            )
        }
    </div>
  );
}

export default App;
