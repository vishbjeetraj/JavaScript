let a = 10; //Globel hai because function ke bahar hai 
{
          let a = 20; // Block Scope hai 
          console.log("Inside",a);          
}
console.log("Outside",a);
