import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost';

const app = express();
const dist_path = path.join(import.meta.dirname, '../fsm-frontend/dist/');

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
	next();
})

app.get('/', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.sendFile(dist_path + 'index.html', (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: index.html');
        }
    });
})

app.get('/:name', (req, res, next) => {
    const options = {
        root: dist_path,
		dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const file = req.params.name;
    const file_parts = file.split('.');
    const extension = file_parts[file_parts.length-1];
	if (extension === 'js') {
		res.set('Content-Type', 'text/javascript');
	}
    else if (extension === ('map')) {
        res.set('Content-Type', 'application/json');
    }

    res.sendFile(file, options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: ', file);
        }
    });
})

app.get('/assets/:name', (req, res, next) => {
    const options = {
        root: dist_path + 'assets/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const file = req.params.name;
    const file_parts = file.split('.');
    const extension = file_parts[file_parts.length-1];
    if (extension === 'obj') {
        res.set('Content-Type', 'text/plain');
    }

    res.sendFile(file, options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: ', file);
        }
    });
})


app.listen(port, () => {
    console.log(`Server started at ${url}:${port}`)
});


