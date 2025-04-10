// const express = require('express');
// const cors = require('cors'); // <--- Add this
// const app = express();
// const jobRoutes = require('./routes/jobs');

// app.use(cors()); // <--- Add this
// app.use(express.json());

// app.use('/api/jobs', jobRoutes);

// app.get('/', (req, res) => {
//   res.send('Backend is running. Use /api/jobs to access job data.');
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
const express = require('express');
const cors = require('cors');
const app = express();
const jobs = require('./data/jobs.json');

app.use(cors());
app.use(express.json());

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

// ✅ Add this default route
app.get('/', (req, res) => {
  res.send('Job Backend is Running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
