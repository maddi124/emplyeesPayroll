async function loginFormHandler(event) {
    event.preventDefault();

    const employeeID = document.querySelector('#employee-ID').value.trim();
    const password = document.querySelector('#employee-password').value.trim();

    if (employeeID && password) {
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            employeeID,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          document.location.replace('/dashboard/');
        } else {
          alert(response.statusText);
        }
      }

}


document.querySelector('.button').addEventListener('submit', loginFormHandler);