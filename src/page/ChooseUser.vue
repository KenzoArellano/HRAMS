<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold">HRAMS Portal</h1>
        <p class="text-gray-600 mt-2">
          Welcome to the HRAMS Portal of the Human Resource Office at the University of the
          Immaculate Conception (UIC). This platform allows applicants to submit their required
          documents securely and efficiently.
        </p>
      </div>

      <h2 class="text-lg font-bold mb-4">CHOOSE YOUR USER NOW!</h2>

      <div class="flex gap-6">
        <button @click="navigateTo('ApplicantPortal1')" class="user-button bg-green-200">
          As Applicant<br /><span>Login Now</span>
        </button>
        <button @click="navigateTo('AdminLoginPage')" class="user-button bg-purple-200">
          As HR Admin<br /><span>Login Now</span>
        </button>
        <button @click="navigateTo('OfficeHeadsLoginPage')" class="user-button bg-blue-200">
          As Office Heads<br /><span>Login Now</span>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: "ChooseUser",
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.user-button {
  @apply px-6 py-4 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg;
  text-align: center;
  min-width: 180px;
}
.user-button span {
  display: block;
  font-size: 14px;
  font-weight: normal;  
  color: #333;
}
</style>
