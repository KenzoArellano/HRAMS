<template>
    <div class="job-card">
      <div class="date">{{ date }}</div>
      <h3 class="title">{{ title }}</h3>
      <div class="job-type">
        <span :class="type === 'Full Time' ? 'full-time' : 'part-time'">{{ type }}</span>
      </div>
      <ul class="requirements">
        <li v-for="(req, index) in requirements" :key="index">✔ {{ req }}</li>
      </ul>
      <button class="apply-btn" @click="applyNow">Apply Now</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobCard',
    props: {
      date: String,
      title: String,
      type: String,
      requirements: Array,
    },
    methods: {
      applyNow() {
        this.$emit('apply'); // Emit the 'apply' event to handle the action in parent
      },
    },
  };
  </script>
  
  <style scoped>
  .job-card {
    background: var(--card-bg, #fff); /* Fallback color */
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 280px;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .date {
    background: #f4f4f4;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: inline-block;
  }
  
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .job-type span {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .full-time {
    background: #c8f7c5;
    color: #2c7a2c;
  }
  
  .part-time {
    background: #cbe2ff;
    color: #1a56db;
  }
  
  .requirements {
    list-style: none;
    padding: 0;
    font-size: 0.9rem;
    text-align: left;
    color: #555;
  }
  
  .requirements li {
    margin-bottom: 6px;
  }
  
  .apply-btn {
    background: #000;
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    margin-top: 12px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .apply-btn:hover {
    background: #444;
  }
  </style>
  