// Function to Create a user
function createUser() {
    const user = {
        Id: document.getElementById('Id').value,
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        phoneNumber: document.getElementById('phone').value
    };

    fetch('https://reqres.in/api/users', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
    .then(res => {
        if(!res.ok) {
            console.log('Problem with adding the user');
            return;
        }

        return res.json();
    })
    .then(data => {
        console.log('User added:', data);
    })
    .catch(error => {
        console.log(error);
    });
}

// Function to Update a user
function updateUser() {
    const user = {
        Id: document.getElementById('Id').value,
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        phoneNumber: document.getElementById('phone').value
    };

    // For simplicity, using a fixed ID. In a real-world scenario, you might want to input or select which user to update.
    fetch('https://reqres.in/api/users/55', {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
    .then(res => {
        if(!res.ok) {
            console.log('Problem with updating the user');
            return;
        }

        return res.json();
    })
    .then(data => {
        console.log('User updated:', data);
    })
    .catch(error => {
        console.log(error);
    });
}

// Function to Delete a user
function deleteUser() {
    // For simplicity, using a fixed ID. In a real-world scenario, you might want to input or select which user to delete.
    fetch('https://reqres.in/api/users/55', {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if(!res.ok) {
            console.log('Problem with deleting the user');
            return;
        }

        // return res.json();
    })
    .then(() => {
        console.log('User deleted');
    })
    .catch(error => {
        console.log(error);
    });
}
