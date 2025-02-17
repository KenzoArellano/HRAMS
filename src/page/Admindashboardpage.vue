<template>
  <div class="main-container">
    <!-- Taskbar Background -->
    <div class="taskbar-background"></div>

    <!-- Taskbar and Navigation -->
    <div class="flex-row-ff">
      <div class="rectangle"></div>
      <div class="group"></div>
      <div class="rectangle-1"></div>
      <span class="dashboard">Dashboard</span>
      <span class="approved">Approved</span>
      <span class="hired">Hired</span>
      <span class="archived">Archived</span>
      <span class="denied">Denied</span>
      <span class="history">History</span>
    </div>

    <!-- Rectangle Section -->
    <div class="rectangle-2"></div>

    <!-- Section Header -->
    <div class="section-header">
      Dashboard
    </div>

    <!-- Job Cards Section (Flex Container) -->
    <div class="job-cards-wrapper">
      <!-- Job Card 1 -->
      <div class="job-card-container">
        <div class="job-card">
          <div class="job-edit-icon"></div>
          <div class="job-details">
            <button class="job-date-btn">
              <span class="job-date">10 May, 2024</span>
            </button>
            <span class="job-title">Administrative <span>Assistant</span></span>
            <button class="job-type-btn">
              <div class="job-time-icon"></div>
              <span class="job-type">Full Time</span>
            </button>
          </div>
        </div>
        <span class="job-applicants">12 applicants</span>
        <button class="job-view-btn">
          <span class="job-view-text">View</span>
        </button>
      </div>

      <!-- Job Card 2 -->
      <div class="job-card-container">
        <div class="job-card">
          <div class="job-edit-icon"></div>
          <div class="job-details">
            <button class="job-date-btn">
              <span class="job-date">15 May, 2024</span>
            </button>
            <span class="job-title">Financial <span>Staff</span></span>
            <button class="job-type-btn">
              <div class="job-time-icon"></div>
              <span class="job-type">Full Time</span>
            </button>
          </div>
        </div>
        <span class="job-applicants">8 applicants</span>
        <button class="job-view-btn">
          <span class="job-view-text">View</span>
        </button>
      </div>

      <!-- Job Card 3 (New) -->
      <div class="job-card-container">
        <div class="job-card">
          <div class="job-edit-icon"></div>
          <div class="job-details">
            <button class="job-date-btn">
              <span class="job-date">20 May, 2024</span>
            </button>
            <span class="job-title">College <span>Instructors</span></span>
            <button class="job-type-btn">
              <div class="job-time-icon"></div>
              <span class="job-type">Full Time</span>
            </button>
          </div>
        </div>
        <span class="job-applicants">5 applicants</span>
        <button class="job-view-btn">
          <span class="job-view-text">View</span>
        </button>
      </div>

      <!-- Job Card 4 (New Container) -->
      <div class="job-card-container">
        <div class="job-card">
          <div class="job-edit-icon"></div>
          <div class="job-details">
            <button class="job-date-btn">
              <span class="job-date">25 May, 2024</span>
            </button>
            <span class="job-title">College <span>Faculty</span></span>
            <button class="job-type-btn">
              <div class="job-time-icon"></div>
              <span class="job-type">Part Time</span>
            </button>
          </div>
        </div>
        <span class="job-applicants">10 applicants</span>
        <button class="job-view-btn">
          <span class="job-view-text">View</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Add your script logic here if needed, such as data or methods.
</script>

<style src="./Admindashboardpage.css"></style>
