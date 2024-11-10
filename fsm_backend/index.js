import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
	next();
})

app.get('/', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.sendFile(path.join(import.meta.dirname, '../fsm_frontend/dist/index.html'), (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: index.html');
        }
    });
})

app.get('/dist/:name', (req, res, next) => {
    const options = {
        root: path.join(import.meta.dirname, '../fsm_frontend/dist/'),
		dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const fileName = req.params.name;
    res.set('Content-Type', 'text/javascript');
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: ', fileName);
        }
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


