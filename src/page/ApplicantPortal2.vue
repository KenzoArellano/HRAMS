<template>
  <div class="applicant-container">
    <!-- Separate Header Container -->
    <div class="header-container">
      <header>
        <h1>HRAMS Portal</h1>
        <p>
          Welcome to the HRAMS Portal of the Human Resource Office at the University of the Immaculate Conception (UIC). 
          This platform allows applicants to submit their required documents securely and efficiently.
        </p>
      </header>
    </div>

    <!-- Separate Form Content -->
    <div class="form-content">
      <h2>Instructions</h2>
      <p class="instructions-text">
        Please complete all fields and upload the required documents: Resume, TOR, Diploma, and Application Letter.
      </p>

      <!-- Application Form -->
      <form @submit.prevent="submitForm">
        <div class="form-grid">
          <!-- Floating Label Input Fields -->
          <div class="input-group">
            <input type="text" v-model="form.lastName" required />
            <label>Last Name</label>
          </div>

          <div class="input-group">
            <input type="text" v-model="form.firstName" required />
            <label>First Name</label>
          </div>

          <div class="input-group">
            <input type="text" v-model="form.middleName" />
            <label>Middle Name</label>
          </div>

          <div class="input-group">
            <input type="email" v-model="form.email" required />
            <label>Email Address</label>
          </div>

          <div class="input-group">
            <input type="text" v-model="form.contact" required />
            <label>Contact Number</label>
          </div>

          <div class="input-group">
            <input type="text" v-model="form.address" required />
            <label>Complete Address</label>
          </div>

          <!-- Floating Label for Select Dropdown -->
          <div class="input-group">
            <select v-model="form.education" required>
              <option disabled value="">Select Bachelor's Degree</option>
              <option>Bachelor of Science in Accountancy (BSA)</option>
              <option>Bachelor of Science in Architecture (BSA)</option>
              <option>Bachelor of Science in Business Administration (BSBA)</option>
              <option>Bachelor of Science in Civil Engineering (BSCE)</option>
              <option>Bachelor of Science in Computer Engineering (BSCpE)</option>
              <option>Bachelor of Science in Computer Science (BSCS)</option>
              <option>Bachelor of Science in Criminology (BSCrim)</option>
              <option>Bachelor of Science in Electrical Engineering (BSEE)</option>
              <option>Bachelor of Science in Elementary Education (BSEd)</option>
              <option>Bachelor of Science in Hospitality Management (BSHM)</option>
              <option>Bachelor of Science in Information Technology (BSIT)</option>
              <option>Bachelor of Science in Mechanical Engineering (BSME)</option>
              <option>Bachelor of Science in Medical Technology (BSMT)</option>
              <option>Bachelor of Science in Nursing (BSN)</option>
              <option>Bachelor of Science in Pharmacy (BSPharm)</option>
              <option>Bachelor of Science in Psychology (BSPsych)</option>
              <option>Bachelor of Science in Secondary Education (BSEd)</option>
              <option>Bachelor of Science in Social Work (BSSW)</option>
              <option>Bachelor of Science in Tourism Management (BSTM)</option>
            </select>
            <label>Highest Educational Attainment</label>
          </div>
        </div>

        <!-- Submit and Cancel Buttons -->
        <div class="buttons">
          <button type="submit" class="submit-btn">Submit</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicantPortal2',
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        contact: "",
        address: "",
        education: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      alert("Your application has been submitted successfully!");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

/* Enable Scrolling */
html, body {
  height: 100%;
  overflow-y: auto;
  margin: 0;
  padding: 0;
}

.applicant-container {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Header Container */
.header-container {
  width: 100%;
  max-width: 100%;
}

header {
  background-image: url('/image/BACKGROUND.png'); /* Background Image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

/* Header Text */
header h1 {
  font-size: 40px;
  font-weight: 700;
}

header p {
  font-size: 18px;
  max-width: 50%;
}

/* Form Content */
.form-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
}

/* Ensure form expands for scrolling */
form {
  display: flex;
  flex-direction: column;
}

/* Updated Form Grid Layout */
.form-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column */
  gap: 20px;
  margin-bottom: 20px;
}

/* Floating Label Input Fields */
.input-group {
  position: relative;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  background: transparent;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 0 5px;
  font-size: 14px;
  color: gray;
  transition: all 0.3s ease-in-out;
}

/* Move label up when the input is focused or has value */
.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group select:focus + label,
.input-group select:not([value=""]) + label {
  top: 0;
  font-size: 12px;
  color: black;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}

.submit-btn {
  background-color: green;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-btn {
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}
</style>
