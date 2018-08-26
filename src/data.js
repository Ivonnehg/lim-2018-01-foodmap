window.searchRestaurants=(listRestaurant,search)=>{
    
   
    if(search!==''){
     
        /* console.log(search); */
        const restaurants=listRestaurant.filter(objRestaurant=>{
            
            return objRestaurant.type.toUpperCase().indexOf(search.toUpperCase()) > -1;
            
        })
        return restaurants;
       
    }else{
        return listRestaurant;
    }

}

/* et rest=listRestaurant.forEach(element => {
    let districts=element.district;
}); */