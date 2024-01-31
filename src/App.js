// import Mers from "../src/assets/img/Mers.jpg"
// import Bmw from "../src/assets/img/Bmw.jpg"
// import Camry from "../src/assets/img/Camry.jpg"
// import Priora from "../src/assets/img/Priora.jpg"
// import Zeekr from "../src/assets/img/Zeekr.jpg"



let cars = [
  {
    model: 'Mers',
    price: 5600000,
    amout: 3
  },
  {
    model: 'BMW',
    price: 6400000,
    amout: 10
  },
  {
    model: 'Camry',
    price: 5100000,
    amout: 16
  },
  {
    model: 'Priora',
    price: 1600000,
    amout: 6
  },
  {
    model: 'Zeekr001',
    price: 5600000,
    amout: 12
  },
]

function App() {

  //Дз 30
  // const array = [22, 0, -45, 1001, 8, -6,-0.1, 101, 2.5, -55555]
  // const positive = array.filter(item =>{
  //   return item > 0;
  // })
  // console.log(positive);

  // const messages = [
  //   {
  //   message:'hello', 
  //   error:true
  //   },
  //   {
  //     message:'javascript',
  //     error:false
  //   },
  //   {
  //     message:'expo', 
  //     error:true
  //   },
  //   {
  //     message:'react', 
  //     error:true
  //   },
  //   {
  //     message:'angular', 
  //     error:false
  //   },
  //   {
  //     message:'es6', 
  //     error:false
  //   },
  // ]
  // const filter1 = messages.filter(item =>{
  //   return item.error == false
  // })
  // console.log(filter1);

  // const words = ['экспо','js','react','css','angular','vue','html']
  // const map1 = words.map(item =>{
  //   if(item.length < 5){
  //     return item = "*"
  //   }else{
  //     return item
  //   }
  // })
  // console.log(map1);

  // const sendMessage = (message) => {
  //   
  // }

  // const half = (num) => num / 2;
  // console.log(half(6));

  // const consoleLog = () => console.log('Expo');
  // consoleLog();

  // const concatWords = (first,second) => first + second;
  // console.log(concatWords("hello","react"));

  

  // function justText(){
  //   console.log('expo');
  // }
  // justText();

  // function logging(text){
  //   console.log(text);
  // }
  // logging('hello');

  // function add(x,y){
  //   const z = 3;

  //   return z*x*y;
  // }
  // console.log(add(10,20));

  // function onlyPositive(num){
  //   if(num < 0){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }
  // console.log(onlyPositive(-100));

  let carsPrice = cars.filter(car =>{
    return car.price >= 5500000
  })


  return (
    <div className="container p-4">
      <div className="flex justify-between">
        {
          carsPrice.map(car =>{

            return (
              <div className="flex border rounden-lg border-slate-700">
                <p className="p-3">Model:{car.model}</p>
                <p className="p-3">Price:{car.price}</p>
                <p className="p-3">Аmout:{car.amout}</p>
              </div>
            )

          })
        }
      </div>
    </div>
  );
}

export default App;
