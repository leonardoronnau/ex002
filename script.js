let inicio = 0 
let arr = [-5,  -2 ,0 , 1, 2, 4 ,5,6,7,10] 
let fim = arr.length - 1

let procurar = 7
while (inicio <= fim){
 let meio = Math.floor((inicio + fim) /2)
   if(arr[meio] == procurar){
     console.log(`${meio}`);
   }
   if(arr[meio] > procurar){
     fim = meio -1
   } else {
    inicio = meio + 1
   }
}

