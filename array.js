// let arr = [10, 30, 40];
// arr.push(60);
// console.log(arr);


// arr.pop();
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.unshift(70);
// console.log(arr);

// let a = [3, 5, 7, 8]
// a.map((value,i)=>{
//     console.log(value,i);
// })

/*let ar = [4, 5, 6, 7];
ar.map((value,index)=>{
})
console.log(b);*/

let data = [
  { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
  { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
  { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
  { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
  { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
]
let shortdata = data.filter((value)=>{
    if(value.price < 50 && value.quantity > 5 && value.targetPrice > 50)
    return value;
})
console.log(shortdata);

/*let jsonStr = {"_id":{"$oid":"64c2342de32f4a51b19b924e"},"name":"Electronics","slug":"electronics"}
{"_id":{"$oid":"64c2342de32f4a51b19b924f"},"name":"Home & Kitchen","slug":"home-kitchen"}
{"_id":{"$oid":"64c2342de32f4a51b19b9250"},"name":"Fashion","slug":"fashion"}
{"_id":{"$oid":"64c2342de32f4a51b19b9251"},"name":"Health & Beauty","slug":"health-beauty"}
{"_id":{"$oid":"64c2342de32f4a51b19b9252"},"name":"Sports & Outdoors","slug":"sports-outdoors"}
{"_id":{"$oid":"64c2342de32f4a51b19b9253"},"name":"Toys & Games","slug":"toys-games"}
{"_id":{"$oid":"64c2342de32f4a51b19b9254"},"name":"Automotive","slug":"automotive"}
{"_id":{"$oid":"64c2342de32f4a51b19b9255"},"name":"Books & Stationery","slug":"books-stationery"}
{"_id":{"$oid":"64c2342de32f4a51b19b9256"},"name":"Food & Beverages","slug":"food-beverages"}
{"_id":{"$oid":"64c2342de32f4a51b19b9257"},"name":"Pet Supplies","slug":"pet-supplies"}
{"_id":{"$oid":"64c2342de32f4a51b19b9258"},"name":"Furniture","slug":"furniture"}
{"_id":{"$oid":"64c2342de32f4a51b19b9259"},"name":"Jewelry & Accessories","slug":"jewelry-accessories"}
{"_id":{"$oid":"64c2342de32f4a51b19b925a"},"name":"Garden & Outdoor","slug":"garden-outdoor"}
{"_id":{"$oid":"64c2342de32f4a51b19b925b"},"name":"Electrical Appliances","slug":"electrical-appliances"}
{"_id":{"$oid":"64c2342de32f4a51b19b925c"},"name":"Baby & Kids","slug":"baby-kids"}
{"_id":{"$oid":"64c2342de32f4a51b19b925d"},"name":"Office Supplies","slug":"office-supplies"}
{"_id":{"$oid":"64c2342de32f4a51b19b925e"},"name":"Fitness & Wellness","slug":"fitness-wellness"}
{"_id":{"$oid":"64c2342de32f4a51b19b925f"},"name":"Arts & Crafts","slug":"arts-crafts"}
{"_id":{"$oid":"64c2342de32f4a51b19b9260"},"name":"Music & Instruments","slug":"music-instruments"}
{"_id":{"$oid":"64c2342de32f4a51b19b9261"},"name":"Travel & Luggage","slug":"travel-luggage"}

let obj = JSON.parse(jsonStr);
console.log(obj.name);*/

