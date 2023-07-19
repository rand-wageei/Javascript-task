   
        const array1=["t","u","g","x"];
        console.log(array1);

        midd = array1[array1.length >> 1];
        console.log(midd);

      const array = [1,2,8,4,5];
       console.log(array);

       function middle(i) {
         if (array[i] !== undefined) {
              return middle(i+1);
            } else {
             return array[Math.floor(i / 2)];
          }
}

      console.log("middle of array :"  ,middle(0));
