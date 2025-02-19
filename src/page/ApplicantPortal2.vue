<template>
    <div class="portal-container">
      <header>
        <h1>HRAMS Portal</h1>
        <p>Welcome to the HRAMS Portal of the Human Resource Office at the University of the Immaculate Conception (UIC). 
        This platform allows applicants to submit their required documents securely and efficiently.</p>
      </header>

      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <form @submit.prevent="submitForm" class="space-y-4">
          <input v-model="form.lastName" type="text" placeholder="Last Name" class="input-field" required />
          <input v-model="form.firstName" type="text" placeholder="First Name" class="input-field" required />
          <input v-model="form.middleName" type="text" placeholder="Middle Name" class="input-field" />
          <input v-model="form.email" type="email" placeholder="Email Address" class="input-field" required />
          <input v-model="form.contact" type="tel" placeholder="Contact Number" class="input-field" required />
          <input v-model="form.address" type="text" placeholder="Complete Address" class="input-field" required />
          
          <select v-model="form.education" class="input-field" required>
            <option value="">Highest Educational Attainment</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>

          <div>
            <label class="block font-medium">Upload Required Documents</label>
            <input type="file" @change="handleFileUpload($event, 'tor')" class="input-file" />
            <input type="file" @change="handleFileUpload($event, 'diploma')" class="input-file" />
            <input type="file" @change="handleFileUpload($event, 'applicationLetter')" class="input-file" />
            <input type="file" @change="handleFileUpload($event, 'resume')" class="input-file" />
          </div>

          <p class="text-xs text-gray-600">By submitting, you confirm that all information is accurate.</p>
          
          <div class="flex justify-between">
            <button type="submit" class="btn-submit">Submit</button>
            <button type="button" class="btn-cancel" @click="resetForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "ApplicantPortal2",
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
        files: {
          tor: null,
          diploma: null,
          applicationLetter: null,
          resume: null,
        },
      },
    };
  },
  methods: {
    handleFileUpload(event, type) {
      this.form.files[type] = event.target.files[0];
    },
    submitForm() {
      console.log("Form Submitted", this.form);
    },
    resetForm() {
      this.form = {
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        contact: "",
        address: "",
        education: "",
        files: {
          tor: null,
          diploma: null,
          applicationLetter: null,
          resume: null,
        },
      };
    },
  },
};
</script>

<style scoped>
.portal-container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 1400px;
  margin: auto;
  text-align: center;
}

header {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.input-field {
  @apply w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.input-file {
  @apply w-full p-2 border rounded-md;
}

.btn-submit {
  @apply px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700;
}

.btn-cancel {
  @apply px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700;
}
</style>
