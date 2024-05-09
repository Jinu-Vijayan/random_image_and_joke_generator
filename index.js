const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const PORT = 4000;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const app = express();

app.use(express.json());

app.get("/random-image",async (req,res)=>{
    try{
        const url = 'https://api.unsplash.com/'
        const resp = await axios({
            method : "get",
            url : `${url}photos/random`,
            headers : {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });

        res.status(200).json(resp.data.urls);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message : 'internal server error occured'
        })
    }
})

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : "PAGE NOT FOUND"
    })
})

app.listen(PORT,()=>{
    console.log(`server up and running at ${PORT}`);
})