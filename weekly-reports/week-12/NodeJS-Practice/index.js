const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 8000;


// Routes

// We want to render HTML on the server instead of sending raw JSON for browser
// This route renders an HTML list of user names from MOCK_DATA.json.
// .map() loops through users and generates <li> elements.
// .join('') removes commas from the array output.

app.get('/', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
})

// REST APIs

app.get('/api/users', (req, res) => {
    // Send the users array as a JSON response
    return res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post('/api/users', (req,res) => {
    // TODO: Create new user
    return res.json({ status: "pending"})
})

app.patch('/api/users/:id', (req,res) => {
    // TODO: Edit the user with id 
    return res.json({ status: "pending"})
})

app.put('/api/users/:id', (req,res) => {
    // TODO: Edit the user with id 
    return res.json({ status: "pending"})
})

app.delete('/api/users/:id', (req,res) => {
    // TODO: Delete the user with id 
    return res.json({ status: "pending"})
})





// Since the route is same, we can also do this for good practice
// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         return res.json(user);
//     })
//     .put((req,res) => {
//         // TODO: Edit the user with id 
//         return res.json({ status: "pending"})
//     })
//     .patch((req,res) => {
//         // TODO: Edit the user with id 
//         return res.json({ status: "pending"})
//     })
//     .delete((req,res) => {
//         // TODO: Delete the user with id 
//         return res.json({ status: "pending"})
//     })




app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`))