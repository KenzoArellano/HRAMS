<template>
  <div class="applicant-container">
    <div class="header-container">
      <header>
        <h1>HRAMS Portal</h1>
        <p>
          Welcome to the HRAMS Portal of the Human Resource Office at the University of the Immaculate Conception (UIC). 
          This platform allows applicants to submit their required documents securely and efficiently.
        </p>
      </header>
    </div>

    <div class="form-content">
      <h2>Instructions</h2>
      <p class="instructions-text">
        Please complete all fields and upload the required documents: Resume, TOR, Diploma, and Application Letter.<br>
        <ul>
          <li>Accepted Formats: PDF, JPG, PNG (use ZIP for multiple files).</li>
          <li>If the form doesn’t load, try logging out of Google or clearing your browser cache.</li>
        </ul>
        By submitting this form, you agree that UIC may collect and use your personal information (name, address, contact details, and documents) for:
        <ul>
          <p><strong>a)</strong> Processing your job Application</p>
          <p><strong>b)</strong> Verifying your qualifications</p>
          <p><strong>c)</strong> Employment-related records and communication</p>
        </ul>
      </p>

      <form @submit.prevent="submitForm">
        <div class="form-grid">
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

          <div class="input-group">
            <select v-model="form.education" required>
              <option disabled value="">Select Bachelor's Degree</option>
              <option>Bachelor of Science in Information Technology (BSIT)</option>
              <option>Bachelor of Science in Computer Science (BSCS)</option>
              <option>Bachelor of Science in Nursing (BSN)</option>
              <option>Bachelor of Science in Accountancy (BSA)</option>
            </select>
            <label>Bachelor's Degree</label>
          </div>
        </div>

        <div class="document-upload">
          <h2>Upload Required Documents</h2>
          <div class="file-input-group" v-for="(label, index) in documentLabels" :key="index">
            <label>{{ label }}</label>
            <input type="file" required />
          </div>
        </div>

        <div class="terms-container">
          <h2>Terms and Conditions</h2>
          <ul>
            <li><strong>Submissions</strong> are subject to review and verification.</li>
            <li>Only <strong>complete</strong> applications will be processed.</li>
            <li>False information or forged documents will result in <strong>disqualification or termination</strong>.</li>
            <li>Data will be used only for <strong>employment purposes</strong> and handled according to UIC’s privacy policy.</li>
          </ul>
        </div>

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
      documentLabels: [
        "Upload Transcript of Records (TOR)",
        "Upload Diploma",
        "Upload Application Letter",
        "Upload Resumé"
      ]
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

<!-- Import the CSS file -->
<style scoped src="./ApplicantPortal2.css"></style>