<template>
  <div>
    <h1>List colors {{ colorLength }}</h1>
    <ul>
      <li v-for="color in colors" :key="color">
        {{ color }}
        <div @click="deleteColor(color)" class="eliminar">X</div>
      </li>
      <input v-model="color" placeholder="Add color" type="text" />
      <button class="btn btn-outline-primary" @click="addColor">
        New Color
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Colors",
  data() {
    return {
      colors: ["Azul", "Verde", "Amarillo", "Rojo"],
      color: "",
    };
  },

  methods: {
    addColor() {
      if (!this.color == "") {
        this.colors.push(this.color);
        this.color = "";
      } else {
        alert("I need a value");
      }
    },
    deleteColor(color) {
      this.colors.pop(color);
    },
  },

  computed: {
    colorLength() {
      return this.colors.length;
    },
  },
};
</script>

<style>
.eliminar {
  background: blue;
  color: #fff;
  display: inline;
  margin-left: 5px;
  padding: 2px;
  border-radius: 50%;
  font-size: 14px;
}
li {
  margin-bottom: 5px;
}

.eliminar:hover {
  cursor: pointer;
}
</style>