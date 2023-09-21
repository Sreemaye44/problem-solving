
const cors = require('cors')
const jwt= require('jsonwebtoken')
const express = require('express');
const { access } = require('fs');

const app = express();

app.use(cors())
app.use(express.json())

const uri = ``;
const client = new MongoClient(uri, {})

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('unauthorized');
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, access_token, function (err, decoded) {
        if (err) {
            return res(403).send({message: 'forbidden access'})
        }

        req.decoded = decoded;
        next();
    })


    async function run() {
        try {
            const userCollection = client.db('dbName').collection('user')


            const verifyAdmin = async (req, res, next)=>{
                const decodedEmail = req.decoded.email;
                const query = { email: decodedEmail };
                const user = await userCollection.findOne(query);

                if (user.role !== 'admin') {
                    res.status(403).send({message:'forbidden access'})
                }
                next();

            }
        }
        catch {
            
        }
        finally {
            
        }
    }
}