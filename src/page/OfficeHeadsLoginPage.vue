<template>
  <div class="main-container">
    <div class="rectangle"></div>
    <div class="african-american-employer">
      <div class="xceltech-high-resolution"></div>
      <span class="hr-applicant-management">HR Applicant Management System</span>
      <div class="rectangle-1"></div>
      <span class="manage-applicants">Manage all new applicants with comfort.</span>
    </div>

    <span class="log-in">Log In</span>
    <span class="login-account">Login to your account.</span>

    <!-- Email Field -->
    <span class="email">Email</span>
    <input v-model="email" type="email" class="rectangle-2" placeholder="Enter your email" />

    <!-- Password Field -->
    <span class="password">Password</span>
    <input v-model="password" type="password" class="rectangle-3" placeholder="Enter your password" />

    <!-- Remember Me Checkbox -->
    <div class="remember-me-container">
      <input type="checkbox" id="rememberMe" v-model="rememberMe" class="rectangle-4" />
      <label for="rememberMe" class="remember-me">Remember me</label>
    </div>

    <!-- Sign In Button -->
    <button class="rectangle-button" @click="handleLogin">
      <span class="sign-in-span">Sign In</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reactive variables for form inputs
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// Function to handle login
const handleLogin = () => {
  // Hardcoded email and password for now (simulate a login)
  const validEmail = 'Admin123';
  const validPassword = '123';

  if (!email.value || !password.value) {
    alert('Please enter both email and password.');
    return;
  }

  // Check if entered credentials match the hardcoded values
  if (email.value === validEmail && password.value === validPassword) {
    alert(`Login successful for ${email.value}`);
    // Here you can perform further actions, like showing a success message
  } else {
    alert('Invalid email or password. Please try again.');
  }
};
</script>

<style src="./Adminloginpage.css"></style>
