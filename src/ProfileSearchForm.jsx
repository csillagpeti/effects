import { useState } from "react"

function ProfileSearchForm({search}){
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(term)
    search(term)
    setTerm("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={term} placeholder="GH Username" onChange={handleChange}/>
      <button>Go</button>
    </form>
  )
}

export default ProfileSearchForm