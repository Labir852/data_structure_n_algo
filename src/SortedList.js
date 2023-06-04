import React from 'react'

function SortedList(props){
    console.log(props);
  return (
    <div>
        <div className="App">
      <header className="App-header">
      <table className="tbl">
        <thead>
        <tr>
          <th>index</th>
          {props.map((item,i)=>{
              return(
                  <th key={i}>{i}</th>
                )
              })}
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>data</td>
              {props.map((item,i)=>{
                return(
                  <td key={i}>{item}</td>
                )
              })}
        </tr>
        </tbody>
      </table>
      </header>
      
    </div>
    </div>
  )
}

export default SortedList;