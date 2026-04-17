// Synchronous
console.log("Start")
console.log("Task 1")
console.log("End")
// Start → Task 1 → End


// Asynchronous
console.log("Start")
setTimeout(() => {
 console.log("Task 1")
}, 2000)
console.log("End")

// Start → End → Task 1


// Promise
const myPromise = new Promise((resolve, reject) => {
 const success = true
 if (success) resolve("Success Data")
 else reject("Error Occurred")
})


//  then() and catch()

function fetchData() {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve("User Data Loaded")
 }, 2000)
 })
}
fetchData()
 .then((data) => console.log(data))
 .catch((err) => console.log(err))




// Sync = wait | Async = don’t wait | Promise = handle future result