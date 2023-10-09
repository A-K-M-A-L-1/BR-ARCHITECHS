 
 









  
 
 
 const visible = () => {    


    const mytext = `
    
    display: block;
    
    `

     document.querySelector(`.nav-sec`).style.cssText = mytext; 
}
 
 
 document.querySelector(`.hamburger`).addEventListener(`click`, visible)



const hidden = ()=> { 
    const myhiddentext = `
    
    display: none;
  
    
    `

    document.querySelector(`.nav-sec`).style.cssText = myhiddentext;
}

document.querySelector(`.cross`).addEventListener(`click`,hidden)