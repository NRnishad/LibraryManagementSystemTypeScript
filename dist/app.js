"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LibraryController_1 = require("./controllers/LibraryController");
const app = (0, express_1.default)();
const port = 3000;
const libraryController = new LibraryController_1.LibraryController();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.get('/', (req, res) => libraryController.getAllItems(req, res));
app.post('/checkout/:id', (req, res) => libraryController.checkOutItem(req, res));
app.post('/checkin/:id', (req, res) => libraryController.checkInItem(req, res));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
