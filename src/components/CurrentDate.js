import { useState } from 'react'

const CurrentDate = () =>{
    
  const [current_date, setCurrentDate] = useState(new Date().toLocaleString())
  return(
    <>
      {current_date}
    </>
  )
}

export default CurrentDate;

