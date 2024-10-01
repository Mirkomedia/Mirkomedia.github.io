import React from 'react'
const inputRef = useRef(null);
  const [data, setData] = useState([]);
export const randomInput = () => {
  return (
    <div>randomInput

<input ref={inputRef} type="text"/>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  )
}
