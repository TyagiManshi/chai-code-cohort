const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded( { extended: false } ));

// Routes

// We want to render HTML on the server instead of sending raw JSON for browser
// This route renders an HTML list of user names from MOCK_DATA.json.
// .map() loops through users and generates <li> elements.
// .join('') removes commas from the array output.

app.get('/users', (req, res) => {
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

    // Express provides two objects: 'req' (the incoming request) and 'res' (the outgoing response).
    // The request body contains the data sent by the client (usually in JSON format).
    // To access this data, we use 'req.body'.

    const body = req.body;
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length})
    })
})

app.patch('/api/users/:id', (req,res) => {
    // TODO: Edit the user with id 
    const id = Number(req.params.id)
    fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {

        let users = JSON.parse(data);     // Parse the existing data into an array of users
        const user = users.find(user => user.id === id);

        // Update the user with new data from the request body
        Object.assign(user, req.body);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            return res.json({ status: "success", message: "User updated successfully" });
        });
    });
})

app.delete('/api/users/:id', (req,res) => {
    // TODO: Delete the user with id 
    const id = Number(req.params.id);
    
    const index = users.findIndex(user => user.id === id);
   
    // Remove the user from the array
    users.splice(index, 1);
        
    // Write the updated users list back to the file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        return res.json({ status: "success", message: "User deleted successfully" });
    });
})





// Since the route is same, we can also do this for good practice
// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         return res.json(user);
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