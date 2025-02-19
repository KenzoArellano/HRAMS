<template>
  <div class="header-container">
    <header>
      <h1>HRAMS Portal</h1>
      <p>
        Welcome to the HRAMS Portal of the Human Resource Office at the University of the Immaculate Conception (UIC). 
        This platform allows applicants to submit their required documents securely and efficiently.
      </p>
    </header>
  </div>

  <div class="portal-container">
    <section class="instructions">
      <h2>Get Started!</h2>
      <ol>
        <li>Choose the Job Position</li>
        <li>Upload Required Information and Documents</li>
        <li>Submit and Wait for HR Confirmation</li>
      </ol>
    </section>

    <section class="jobs">
      <JobCard 
        date="10 May, 2024" 
        title="Administrative Assistant" 
        type="Full Time"
        :requirements="[ 
          'Bachelor\'s Degree Graduate',
          'Proficient with Microsoft Suite and Google Suite',
          'At least one (1) year of work experience',
          'Good human relations, analytical skills, and effective leadership'
        ]"
        @apply="navigateToApplicantPortal2"
      />

      <JobCard 
        date="1 June, 2024" 
        title="Finance Staff" 
        type="Full Time"
        :requirements="[ 
          'Bachelor\'s Degree in Business Administration or Accounting',
          'Typing skills for accurate data entry',
          'Experience in payroll and benefits administration',
          'Fresh graduates may apply'
        ]"
        @apply="navigateToApplicantPortal2"
      />

      <JobCard 
        date="5 June, 2024" 
        title="College Instructors" 
        type="Full Time"
        :requirements="[ 
          'Bachelor\'s Degree Graduate',
          'Proficient with Microsoft Suite and Google Suite',
          'At least one (1) year of work experience',
          'Good human relations, analytical skills, and effective leadership'
        ]"
        @apply="navigateToApplicantPortal2"
      />

      <JobCard 
        date="11 July, 2024" 
        title="College Faculty" 
        type="Part Time"
        :requirements="[ 
          'Bachelor\'s Degree Graduate',
          'Proficient with Microsoft Suite and Google Suite',
          'At least one (1) year of work experience',
          'Good human relations, analytical skills, and effective leadership'
        ]"
        @apply="navigateToApplicantPortal2"
      />
    </section>
  </div>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
  components: {
    JobCard,
  },
  methods: {
    navigateToApplicantPortal2() {
      this.$router.push('/applicant-portal2'); // Redirect to ApplicantPortal2
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

/* Global Container */
.applicant-container {
  font-family: 'Arial', sans-serif;
  padding: 0;
  margin: 0;
}

/* Separate Header Container */
.header-container {
  width: 100%;
  max-width: 100%;
}

header {
  background-image: url('/image/BACKGROUND.png'); /* Background Image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px; /* Fixed Height */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

/* Header Title */
header h1 {
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

/* Updated Paragraph Style */
header p {
  font-size: 18px;
  max-width: 50%;
  font-family: 'Arial', sans-serif;
  font-weight: normal;
  line-height: 1.4;
}

/* Main Content Container */
.portal-container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 1400px;
  margin: auto;
  text-align: center;
}

.instructions {
  text-align: left;
  margin-bottom: 20px;
}

.instructions ol {
  padding-left: 20px;
}

.jobs {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
