import { log } from 'console';
import mongoose from 'mongoose'
import path from 'path'


const home = (req,res)=>{
    console.log(req.body);
    res.status(200).render("home.ejs")
}

const login = (req, res) => {
    const url = new URL(import.meta.url);
    const basePath = path.dirname(url.pathname);
    const options = {
        root: path.join(basePath, '..')
    };
    res.status(200).sendFile('login.html', options)
}

export {home, login}