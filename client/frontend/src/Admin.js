import React from 'react'
import { useState } from "react";
import Axios from "axios";

function Admin() {
  const [engWord, setEngWord] = useState('')
  const [finWord, setFinWord] = useState('')

  return (
    <div>
      <label>English word</label>
      <input type="text"/>
      <label>Finnish word</label>
      <input type="text"/>
      <button>Add</button>
    </div>
  )
}

export default Admin
