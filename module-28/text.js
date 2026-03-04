


      const data = async() => {

        const res =fetch('https://jsonplaceholder.typicode.com/todos/1')

        
    //   .then(response => response.json())
    //   .then(json => console.log(json))

        console.log("Hello");
        const json = await res.json()
        console.log(true);
      }

data()

