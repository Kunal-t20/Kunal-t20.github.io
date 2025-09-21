// server/index.js (example)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: true })); // change origin to specific client URL in prod

app.get('/', (req,res)=> res.send('API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
