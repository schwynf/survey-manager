const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use((req, res) => {
    (process.env.NODE_ENV === 'production') ? res.sendFile(path.join(__dirname, "./client/build/index.html")) : res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, () => {
    console.log('Process ' + process.pid + ' is listening to all incoming requests on port: ' + PORT)
})

