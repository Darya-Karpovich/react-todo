import React, { useState } from 'react'

export default function ManageTodo({handleSubmit, todo}) {
    const [title, setTitle] = useState(todo?.title || '');
    function clearText()  
    {
        document.getElementById('textfield').value = "";
        
    }  
  return (
    <div>
        <input type="text" id='textfield' placeholder="Write your todo" onChange={(e) => setTitle(e.target.value)} />
        <button type="button" className="btn btn-primary  ms-3 btn-sm"  onClick={() => {handleSubmit({title}); clearText();}}  >{todo ? 'Save ': 'Add'} todo</button>
    </div>
  )
}
