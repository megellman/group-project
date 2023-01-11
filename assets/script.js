// const options = {
// 	method: 'GET',
//     cache: 'default',
//     headers: {
//         'content-type': 'application/json'}
// };

// const url = `https://v6.exchangerate-api.com/v6/01530c6661485ebabecd4c72/latest/USD`
// var response = options + fetch(url)
// var data = response.value


// console.log(url, options)


// Example POST method implementation:
async function postData(url = 'https://v6.exchangerate-api.com/v6/01530c6661485ebabecd4c72/latest/USD', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://v6.exchangerate-api.com/v6/01530c6661485ebabecd4c72/latest/USD', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });