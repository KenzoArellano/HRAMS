<template>
    <div class="dashboard-container">
      <div class="header">
        <h2><span>Dashboard</span> > Administrative Assistant</h2>
        <input type="text" v-model="searchQuery" placeholder="Search" class="search-bar" />
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th @click="sortBy('name')">Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Education</th>
            <th @click="sortBy('date')">Application Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(applicant, index) in paginatedApplicants" :key="index">
            <td><input type="checkbox" /></td>
            <td>{{ applicant.name }}</td>
            <td>{{ applicant.email }}</td>
            <td>{{ applicant.contact }}</td>
            <td>{{ applicant.education }}</td>
            <td>{{ applicant.date }}</td>
            <td><button class="view-btn">View</button></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <button class="icon-btn"><i class="fas fa-envelope"></i></button>
        <button class="icon-btn"><i class="fas fa-download"></i></button>
        <button class="icon-btn"><i class="fas fa-trash"></i></button>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        currentPage: 1,
        perPage: 10,
        applicants: [
          { name: "yeabsire abebe", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
          { name: "feven tesfaye", email: "applicant@gmail.com", contact: "09222324252", education: "Backend Engineer", date: "28/04/2022" },
          { name: "AMANUEL BEYENE", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
          { name: "redwan husein", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
          { name: "yeabsire abebe", email: "applicant@gmail.com", contact: "09222324252", education: "Backend Engineer", date: "28/04/2022" },
          { name: "feven tesfaye", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
          { name: "AMANUEL BEYENE", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
          { name: "redwan husein", email: "applicant@gmail.com", contact: "09222324252", education: "UI UX Designer", date: "28/04/2022" },
        ],
      };
    },
    computed: {
      filteredApplicants() {
        return this.applicants.filter((applicant) =>
          applicant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      paginatedApplicants() {
        const start = (this.currentPage - 1) * this.perPage;
        return this.filteredApplicants.slice(start, start + this.perPage);
      },
      totalPages() {
        return Math.ceil(this.filteredApplicants.length / this.perPage);
      },
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      sortBy(field) {
        this.applicants.sort((a, b) => (a[field] > b[field] ? 1 : -1));
      },
    },
  };
  </script>
  
  <style src="./Dashboard1.css"></style>
  