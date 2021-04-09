<template>
  <div class="home">
    <h1>Si esta funcionando</h1>
    <p>{{ nombre }}</p>
    <p>{{ apellido }}</p>
    <p>{{ nombreCompleto }}</p>
    <button @click="cambiarNombre">Cambiar nombre</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      nombre: "Andy",
      apellido: "Arciniega",
      edad: 20,
    };
  },

  methods: {
    cambiarNombre() {
      this.nombre == "Andy"
        ? (this.nombre = "Pedrito")
        : (this.nombre = "Andy");
    },
  },

  computed: {
    nombreCompleto() {
      return `${this.nombre} ${this.apellido}`;
    },
  },
};
</script>
