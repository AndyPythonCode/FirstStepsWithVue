<template>
  <section class="text-center">
    <h1>Posts</h1>
    <p class="posts" v-for="post in posts" :key="post.id">
      <router-link
        :to="{
          name: 'PostDetail',
          params: { id: post.id },
        }"
      >
        {{ post.title }}
      </router-link>
    </p>
  </section>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      posts: [
        { id: 1, title: "Uno", description: "Uno description" },
        { id: 2, title: "Dos", description: "Dos description" },
        { id: 3, title: "Tres", description: "Tres description" },
        { id: 4, title: "Cuatros", description: "Cuatros description" },
      ],
    };
  },
};
</script>

<style>
.posts {
  background-color: #f4f4f4;
  max-width: 600px;
  margin: 12px auto;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  color: #444;
  font-size: 1.2rem;
}

.posts a {
  text-decoration: none;
}

.posts:hover {
  background-color: #ddd;
}
</style>