const express = require('express');
const router = express.Router();

let jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Amazon',
    location: 'Chennai',
    type: 'Full-time',
    experience: '2+ years',
    salary: '₹10,00,000',
    logo: '/logos/amazon.png',
    posted: '2 days ago',
  },
  // You can add more sample jobs here
];

// GET all jobs
router.get('/', (req, res) => {
  res.json(jobs);
});

// POST a new job
router.post('/', (req, res) => {
  const newJob = req.body;
  if (!newJob || !newJob.title || !newJob.company) {
    return res.status(400).json({ message: 'Invalid job data' });
  }

  const job = { ...newJob, id: jobs.length + 1 };
  jobs.push(job);

  res.status(201).json({ message: 'Job created successfully', job });
});

module.exports = router;
