// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json()) // parse response body
  .then(data => {
    // append the new ID to the DOM
    const body = document.querySelector("body");
    body.innerHTML += `<p>User ID: ${data.id}</p>`;
  })
  .catch(error => {
    // append the error message to the DOM
    const body = document.querySelector("body");
    body.innerHTML += `<p>Error: ${error.message}</p>`;
  });
}


