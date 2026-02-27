
// Q1. Synchronous

// for(let i =1;i<=5;i++){

//     console.log(i);
// }
// console.log("done")
//----------------------------------------------
// Q2. Asynchronous Execution
// console.log("Start");
// setTimeout(()=>{
// console.log("Hello Async")

// },2000)
// console.log("end");
//-----------------------------------------------------------------------------------------
//Q3. Basic Callback and Q4

// function getpost (posts,callback){


//    setTimeout(() => {
//        let post={ post:"it was good day "}
//       callback(post)
//    }, 2000);
  


// }

// function getuser(id,callback){

//  let obj={
//    id:id,
//    name:"Ail"
//  }

//  setTimeout(()=>{
// callback(obj)



//  },1000)


// }

// getuser(1,(user)=>{

//    console.log(user);
//  getpost(125,(pos)=>{
//    console.log(pos);
//  })
// })

//-----------------------------------------------------------------------------------------
//.Q4. Callback Chaining (Callback Hell)


//--------------------------------------------------------------------------

//Q5
//  function getProduct(id){


//     return new Promise((resolve, reject) => {

//         if (id===1){
             
//         resolve( {id:1,name:"Laptop"});
       
           

//         }else{
           
//              reject("Product not foun")
         
           
//         }
        
//     })
//  }

//  getProduct(4).then((data)=>{
// console.log(data);


//  }).catch((data)=>{

// console.log (data);
//  })
//----------------------------------------------------------------
// Q6. Running Promises in Parallel

// function getUser (){


    
//   return  new Promise((resolve) => {
// setTimeout(()=>{
// resolve({id: 1, name: "Sara"})

// },1000)    

// })
// }

// function getPosts(){ 
    
// return  new Promise((resolve) => {
// setTimeout(()=>{
// resolve(["Post1", "Post2"])


// },2000)    

// })
// }




// Promise.all([getUser(),getPosts()]).then((value)=>{

// console.log(...value);


// })


//---------------------------------------------------------------------------------------------
//Q7
// let productContainer = []

// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{

//    return  data.json()


// }).then((API)=>{

  
//      productContainer= API
//  for (let i= 0;i<productContainer.length;i++){

    
   

//    let addrow =  `<tr>

       
//         <td>${productContainer[i].username} </td>
//         <td > <button class=" btn btn-outline-danger " onclick="getPosts(${i})"> POST </button></td>
        
//       </tr>


//   `
//     document.getElementById("users").innerHTML+=addrow;
//  }
   
// })


// async function getPosts(id) {
//  let api=  await   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id+1}`)
// let dataAPI= await api.json()



 
//  // console.log(dataAPI[id].title);

 
//    let row =  `<tr>

       
//         <td>${dataAPI[id].title} </td>
      
        
//       </tr>


//   `
//     document.getElementById("title").innerHTML+=row;
//  }








