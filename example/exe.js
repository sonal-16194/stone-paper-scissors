// const student = {
//     Name : "sonal patel",
//     Address : "115 shriji prevesh",
//     rank_no :"1",
//     marks : "94",
//     printMarks : function () {
//         console.log ("print sonal's marks :" ,this.marks);
//     }

// };


// const empolyee = {
//     calTax () {
//         console.log ("tax rate is 10%");
//     },
// };

// const sonal = {
//     salary : 50000 ,
//     calTax () {
//         console.log ("tax rate is 20%");
//     },

// };
// sonal.__proto__ = empolyee;

// class ------------------------------class-------------- 

// class Toyoto {
//     constructor(brand,mileage) {
//         console.log("the execution is start")
//         this.brand =brand;
//         this.mileage = 25;
//     }
//     start () {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }    

// }

// let forutuner = new Toyoto("fortuner");

//---------------------------------- inheritance ---------------------------------------
// class person {
//     constructor(name) {
        
//         this.humble = "humble";
//         this.name = name;
//     }
//     eat(){
//         console.log("the can eat");
//         }
//         sleep () {
//             console.log("they can sleep");
//         }
//         work() {
//             console.log("they can work");
//         }
// }
// class Engginer extends person {
//     constructor (name) {
       
//         super(name); //to invoke parent class constuctor
        
        
//     }
//     write() {
//         super.eat();
//         console.log("they can write");
//     }


// }
// let Enggsobj = new Engginer("sonal");
// let engperson = new person("jay");



//-------------------------------practice question 1-----------------------------------

// let Data = "some secrate data";
// class user {
//     constructor (name,Email) {
//         this.name = name;
//         this.Email = Email;
//     }
//     viewData () {
//         console.log("some data: " ,Data);
//     }
// }

// class std extends user {
    
//        viewData() {
//         console.log ("they paly");
//     }
// }
// let std1 = new user ("sonal","abc@email.com");
// let std2 = new user ("jay","abc12@email.com");
// let std3 = new user ("ronak","abc123@email.com");
// let stds = new std();

//---------------------------try-catch-----------------------
//  let a = 10;
//  let b = 20;
//  console.log(a+b);
//  console.log(a+b);
//  try {
//  console.log(a+c);
//  } catch (err)
//  {
//      console.log(err);
//  }
//  console.log(a+b);
//  console.log(a+b);


//----------------------Api calls--------------------------------------------


const url = "https://emojihub.yurace.pro/api/all/category/";


// const getFact =  async () => {
//     let response =  await fetch(url);
//     console.log(response); //json format
//     let data =await response.json();
//     console.log(data);
// };

function getFacts () {
    fetch(url)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        console.log(data);
        console.log(data[0].text);
    })

    }

