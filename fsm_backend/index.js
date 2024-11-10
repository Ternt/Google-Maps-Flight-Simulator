import express from 'express';
import path from "node:path";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next()
})

app.use('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    console.log('Request Type:', req.method)
    next()
})

app.use(express.static(path.join(__dirname, '../frontend/dist/')));


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
