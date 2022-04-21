import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './Title';
function App() {
  const [movie,setMovie] = React.useState("baahubali")
  const [id,setId] = React.useState()
   const [data,setData] = React.useState([])
  async function handleClick (){
   let res = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_auitn2qs/${movie}`)
    //  console.log(res.data.results.id)
    
    setData( res.data.results)
    // console.log(data.id)
    // setId((elem)=>{
      
    // })
  }
  // handleClick()
  // console.log(data)
  // console.log(id)
  return (
    <div className="App">
     {/* <Title /> */}
     <div className="header-wrapper">
     <h1>Getting Movies and shows</h1>
     </div>
     <div className='main-wrapper'>
     <input type="text" className='form' value={movie} 
      onChange={(event)=>{
        setMovie(event.target.value)  
      }}/>
        <button type='submit' onClick={handleClick}>get Movie</button> 
     <div className="img-wrapper"> {
        data.map((elem)=>{
          return(
            <div  className="container">
              
              <p>{elem.description}</p> 
              
              <p>{elem.title}</p>
              <img src={elem.image} width="200rem"/>
            </div>
          )
        })
      }
      </div>
     {/* <Title title={data.data}/> */}
    </div>
    </div>
  );
}

export default App;
