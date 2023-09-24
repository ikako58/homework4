const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(users => {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
      `;
      userList.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
