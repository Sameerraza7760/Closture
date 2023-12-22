//CLOSURE

function callApi(method) {
  return function (url) {
    console.log(`fething the data from ${url} using ${method}`);
  };
}

const url = "http://example.cpm/api";
callApi("GET")(url);
//   const api=callApi('GET')
//   api(url)

// 1 IN THIS THE CLOSTURE IS THAT WHEN  THE FILE IS EXCUTE SO ITS PLACED ON   CALLSTACK AND ITS MAKE A GLOBAL CONTEXT AND IF ANY VALRIABLE I THE FILE  SO THE BOK IN GLOBAL CONTEXT
// WHOSE VARIABLE IS PLACED
//2 WHEN ANY FUNCTION RUN SO ITS MAKE A COTEXT IN CALLSTACK AND IF VARIABLE IN THIS FUNCTION SO IN CALLSTACK CONTEXT OF FUNCTION INSIDE THE VARAIBLE
//STORE AND WHEN FUNCTION IS FINISHED MEAN COMPLETE THE EXCUTION IN CALLSTACK THE CONTEXT OF FUNCTION IS GOINT OUT OF THE CALLSTACK

//NOW WHAT IS CLOSTURE

//THE CLOSTURE IS THAT
//
// function callApi(method) {
//     return function (url) {
//       console.log(`fething the data from ${url} using ${method}`);
//     };
//   }

//   const url = "http://example.cpm/api";
//   callApi("GET")(url);

// IN THIS CASE WHEN THIS FUNCTION RUN SO IT PLACED IN CALLSTACK AND AFTER FINISHED THIS FUNCTION SAY THE CALLSTACK THAT SAVE MY VIARIBLE
// IN HERE BECASUE MY INNER FUNCTION USED THIS VARIBLE IN THERE BODY IN THIS CASE THE PERAMETER IS ALSO CALLED VARIBLE MEAN LOCAL
//VARIABLE
//THATS CALLED CLOSTURE

// now the colsture in real projects

// let count=0
//  const updateCount=()=>{
//     count ++
//  }

//  updateCount() // 1
//  updateCount()// 2
//  updateCount() // 3
//
//   SO IN THIS CASE THERE IS A MISTAKE IN CODE BECAUSE WE NOT USED CLOSTYRE IN THAT THE MISTAKE IS THAT O EASILY CHANGE THE VAIRABLE
//COUNT OUTSIDE THE FUNCTION AND ITS A BUG FOR EXAMPLE

// count=5
//now the when function called its value is 5 thats why

//  const updateCount=()=>{
//     let _count=0
//     _count ++
//  }

//  updateCount()
// AND NOW IN THIS CASE  WHEN THE FUNCTION IS CALLED ITS RESET AND AGAIN AND AGAIN THE VALUE SHOULD BE ZERO

//NOW WE USED CLOSTURE IN THIS
// const updateCount = () => {
//   let _count = 0;

//   return function () {
//     _count++;
//     return _count
//   };

// };

// updateCount();

// there is no bug in this thats why closture is important

//ECOMEERCE WEBSITE USED IN THIS CASE REAL PROJECTS

function cartCounter() {
  let _count = 0; //make a global variable

  function updateCount(val) {
    _count += val;
  }
  return {
    increament() {
      updateCount(1);
    },
    decreament() {
      updateCount(-1);
    },
    value() {
      return _count;
    },
  };
}

const cartCounter = cartCounter();
cartCounter.increament(); //its incre the count value
cartCounter.decreament(); // its decrea the count value
console.log(cartCounter.value); // it return a update value from cartCounterfunction

//

// now we used another real life projects in thiis closture case

function useState(initail) {
  let _state = initail;
  function setState(value) {
    _state = value;
  }
  function getState() {
    return _state;
  }

  return [getState,setState]
}


function Counter(){
    const [count,setCount]=useState(0)
    return {
        click(){
            setCount(count()+1)
        },
        render(){
            console.log('value',count())
        }
    }
}

const Counter=Counter()
Counter.click()
Counter.render()//1


Counter.click()
Counter.render()//2

Counter.click()
Counter.render()//3


/////////////////////// Closture end//////////////