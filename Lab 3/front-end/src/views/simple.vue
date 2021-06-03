<template>
  <div class="w-100 mt-5 d-flex justify-content-center flex-wrap">
    <div class="calculator">
      <output>{{ $store.state.model.output }}</output>
      <div class="keyboard">
        <btn
          v-bind:type="type"
          v-for="(item, id) in $store.state.model.simpleButtons"
          v-bind:key="id"
          v-bind:id="id"
          v-bind:item="item"
        />
      </div>
    </div>
    <div class="ms-3">
      <div class="history">
        <div
          class="history-item"
          v-for="item in $store.state.model.history"
          v-bind:key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="button-wrapper">
        <button @click="clear()" class="clear">Clear</button>
      </div>
    </div>
  </div>
</template>


<script>
import btn from "@/components/button.vue";

export default {
  components: {
    btn,
  },
  data() {
    return {
      type: "simple",
    };
  },
  created() {
    this.$store.dispatch("LOAD");
  },
  methods: {
    clear() {
      this.$store.dispatch("CLEAR");
    },
  },
};
</script>
<style scoped>
.history {
  border: 2px solid #198754;
  border-radius: 10px !important;
  overflow: auto;
  height: 430px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.history-item {
  font-weight: 500;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
}
.clear {
  text-align: center;
  border: 2px solid #198754;
  border-radius: 20%;
  width: 70px;
  background-color: #198754;
  border-color: #198754;
  color: white;
}
.clear:hover {
  background-color: #125a38;
  border-color: #125a38;
  transform: scale(1.1);
  color: white;
  transition: 0.3s;
}
.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>