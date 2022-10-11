// nested object-->{{}}
/*let course=
{
    book:"js",
    bookId: "24",
    bookPrice:500,
    address:
   {
         company:"prograd",  //key:value
         Country:"India"
    },
    greeting()
    {
        let msg=this.book+this.bookId+this.bookPrice+this.address.company
        console.log(msg) 
    }
}
course.greeting()*/
//array object
/*let dessert=[
    {
        name:"cupcakes",
        type:"desert",
        flavor:"red-velvet"
    },
    {
        name:"ice-cream",
        type:"desert",
        flavor:"vanilla"
    },
    {
        name:"milkshake",
        type:"desert",
        flavor:"chocolate",
    }
]
// for iterating elements use foreach loop
dessert.forEach(function(value,index,array)
{
    console.log(value,index,array)
})*/

/*let course=
{
    book:"js",
    bookId: "24",
    bookPrice:500,
    otherbooks:["java","c","c++"],
    address:
   {
         company:"prograd",  //key:value
         Country:"India"
    },
    showbook()
    {
        let msg=this.otherbooks
        this.otherbooks.forEach(function(value){
            console.log(msg)
        }
        )
        
    }
}
course.showbook()*/
/*let need=
    {
        title:"java",
        author:"dhnaush",
        bookid:23,
        books:["css","prabhas",76],
        nothing:
        {
            company:"prograd",
            country:"germ"
        },
    
    showpaper()
    {
        let msg=this.books
        this.books.forEach(function(some)
        {
            console.log(msg)
        })
        
    }
}
    need.showpaper()*/
    /*for(var i=1;i<=10;i++)
    {
        console.log("the number is: "+i);
    }*/
   /* let a = Math.pow(2,2);
    let b = Math.pow(1,1)
   // document.getElementById("demo").innerHTML = a + "<br>" + b ;
   console.log(a)*/
   /*let sam= [
    {
        firstname:"ram",
        lastname:"varun"
    },
    {
        firstname:"sandeep",
        lastname:"rahul"
    },
   ]
   arr=sam.map(function(kathi)
   {
    return kathi
   })
   console.log(arr)*/  
   /*let small=
   [                                     \\pending question and solution
    {
        course:"mern",
        company:"prograd"
    },
    {
         name:"js",
         company:"prograd1"
    },
    ]
    let some=this.small.course.filter(function(value)
    {
        return value
    }
    )
    console.log(some);*/
    
/*function test(radius)
{
    return  2*Math.PI*radius
}
function some()
{
    return test(5)
}
console.log(some(test));*/
//function:1
/*const foods=["pizza","burger","fingerchips","donuts","springRoll"];
const modifiedFood=foods.slice(1,4)
console.log(modifiedFood)
//function:2
const modifiedFood=["pizza","burger","fingerchips","donuts","springRoll"];
modifiedFood.splice(2,0,"noodles");
modifiedFood.splice(3,0,"icecream");

console.log(modifiedFood)
//function:3
const number=[12,324,213,4,2,3,45,4234]
const isEven=number.filter(function(value)
{
    return value % 2 ===0;
})
console.log(isEven)*/

//function4:reject
/*let numberArray= [12,324,213,4,2,3,45,4234];
const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = numberArray => {
    const filtered = numberArray.filter(el => !isPrime(el));
    return filtered;
 };
 console.log(filterPrime(numberArray));*/
//function 5:map
/*const myArray = [11, 34, 20, 5, 53, 16]
let findSquareOfNUmbers = myArray.map(function(item){
    return item*item;
});
console.log(findSquareOfNUmbers);*/
//function:reduce
const myArray1 = [2, 3, 5, 10];
let multiplyArr = myArray1.reduce((multiply,item) => multiply*item);
console.log(multiplyArr);