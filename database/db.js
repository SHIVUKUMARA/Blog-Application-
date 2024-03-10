const mongoose = require('mongoose');

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.pedjj5f.mongodb.net/blogapp?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
