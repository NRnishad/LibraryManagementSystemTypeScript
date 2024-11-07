import express from 'express';
import { LibraryController } from './controllers/LibraryController';

const app = express();
const port = 3000;
const libraryController = new LibraryController();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => libraryController.getAllItems(req, res));
app.post('/checkout/:id', (req, res) => libraryController.checkOutItem(req, res));
app.post('/checkin/:id', (req, res) => libraryController.checkInItem(req, res));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});