// import React from 'react'
export const Netflixseries = () => {
  const name ="Queen of Tears";
  // const rating = 8.2;
  const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus itaque amet enim? Labore iste debitis vero ratione, accusantium vel! ipsum...";
  let age=10;

  // let canWatch="Not Available";
  // if(age>=18) canWatch="Watch Now";


  const canWatch=()=>{
    if(age>=18){
      return "Watch Now";
    }
    return "Not Available";
  }
  
  const returnGenre = () => {
    const genre="Romcom";
    return genre;
  }


// this violets do  not repeat yourself
  // if (age<18){
  //   return (
  //   <div>
  //     <div>
  //     <img 
  //       src="/src/pexels-mikebirdy-170811.jpg" 
  //       alt="car" 
  //       width="40%" 
  //       height="40%" 
  //     />
  //     </div>
  //     {/* by making this we can use the variable name */}
  //     <h2>Name: {name}</h2>     
  //     <h3>Rating: {5+4.2}</h3>    {/* by making this we can use the expression rating */}
  //     <p>Summary: {summary}</p> 
  //     <p>Genre: {returnGenre()}</p> {/* by making this we can use the function returnGenre */}
  //     <button>Not Available</button>
  //   </div>
  // )
  // }



  return (
    <div>
      <div>
      <img 
        src="/src/pexels-mikebirdy-170811.jpg" 
        alt="car" 
        width="40%" 
        height="40%" 
      />
      </div>
      {/* by making this we can use the variable name */}
      <h2>Name: {name}</h2>     
      <h3>Rating: {5+4.2}</h3>    {/* by making this we can use the expression rating */}
      <p>Summary: {summary}</p> 
      <p>Genre: {returnGenre()}</p> {/* by making this we can use the function returnGenre */}
      {/* <button>{age>=18 ? "Watch Now" : "Not Available"}</button>  this is also a good way to write conditional  */}
       {/* good way <button>{canWatch}</button>    This is also a d */}
       <button>{canWatch()}</button>
    </div>
  )
}

// export default Netflixseries;


export const Footer =() =>{
     return(
        <div>
            <p>copyright@Raman 2025</p>
        </div>
     )
}