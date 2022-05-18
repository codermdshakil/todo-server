const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ttt3f.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function main() {

    try {
        await client.connect();
        
    }
    catch (e) {
        console.log(e);
    }
    finally {

        // client.close() 

    }
}

main().catch(console.error);












app.get('/', async (req, res) => {
    res.send('Yah my server is running');
})

app.listen(port, () => {
    console.log('Lostening to port', port)
})




