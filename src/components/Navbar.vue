<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        >Projects</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-3">
            <router-link
              :to="{ name: 'Colors' }"
              class="nav-link active"
              aria-current="page"
              >Colors</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              :to="{ name: 'Calendar' }"
              class="nav-link active"
              aria-current="page"
              >Calendar</router-link
            >
          </li>
          <li class="nav-item px-3">
            <router-link
              :to="{ name: 'Post' }"
              class="nav-link active"
              aria-current="page"
              >Post</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
