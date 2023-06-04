// import logo from './logo.svg';
import './App.css';
import SortedList from './SortedList';

function App() {
  let arr = [10,58,9,5,100,99,84];
  const handleSort = () => {
    let i = 0,j=0;
    for(i=0;i<arr.length;i++) 
    {
        for(j=0;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
        }
    }
    <SortedList props={arr}/>
    //console.log(arr);
  }
  return (
    <div className="App">
      <header className="App-header">
      <table className="tbl">
        <thead>
        <tr>
          <th>index</th>
          {arr.map((item,i)=>{
              return(
                  <th key={i}>{i}</th>
                )
              })}
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>data</td>
              {arr.map((item,i)=>{
                return(
                  <td key={i}>{item}</td>
                )
              })}
        </tr>
        </tbody>
      </table>
      &nbsp;
      <button onClick={()=>handleSort()}>Sort the Array</button>
      </header>
      
    </div>
  );
}

export default App;
