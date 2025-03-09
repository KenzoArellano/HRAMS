<template>
    <div class="archived-container">
      <div class="header">
        <h2>Archived Applicants</h2>
      </div>
  
      <div class="top-bar">
        <input type="text" placeholder="Search" class="search-bar" />
        <select class="category-dropdown">
          <option>Category</option>
          <option>Administrative Assistant</option>
          <option>Finance Staff</option>
          <option>College Instructors</option>
        </select>
        <button class="download-btn">Download Report ⬇️</button>
      </div>
  
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name ⬆️</th>
              <th>Email</th>
              <th>Education</th>
              <th>Category</th>
              <th>Application Date ⬆️</th>
              <th>Archived Date ⬆️</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(applicant, index) in applicants" :key="index">
              <td><input type="checkbox" /></td>
              <td>{{ applicant.name }}</td>
              <td>{{ applicant.email }}</td>
              <td>{{ applicant.education }}</td>
              <td>{{ applicant.category }}</td>
              <td>{{ applicant.applicationDate }}</td>
              <td>{{ applicant.archivedDate }}</td>
              <td><button class="view-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="footer">
        <div class="bulk-actions">
          <button>📩</button>
          <button>✉️</button>
          <button>📂</button>
          <button>🗑</button>
        </div>
        <div class="pagination">
          <span>Viewing 10 out of 26 applicants</span>
          <button class="prev-btn">Previous</button>
          <button class="next-btn">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        applicants: [
          { name: "Yeabsire Abebe", email: "applicant@gmail.com", education: "UI UX Designer", category: "Finance Staff", applicationDate: "28/04/2022", archivedDate: "28/04/2022" },
          { name: "Feven Tesfaye", email: "applicant@gmail.com", education: "Backend Engineer", category: "Administrative Assistant", applicationDate: "28/04/2022", archivedDate: "28/04/2022" },
          { name: "Amanuel Beyene", email: "applicant@gmail.com", education: "UI UX Designer", category: "Finance Staff", applicationDate: "28/04/2022", archivedDate: "28/04/2022" },
          { name: "Amanuel Beyene", email: "applicant@gmail.com", education: "UI UX Designer", category: "College Instructors", applicationDate: "28/04/2022", archivedDate: "28/04/2022" },
          { name: "Redwan Husein", email: "applicant@gmail.com", education: "UI UX Designer", category: "Administrative Assistant", applicationDate: "28/04/2022", archivedDate: "28/04/2022" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import './Archived1.css';
  </style>
  