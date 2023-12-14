<template>
  <div class="pagination center">
    <div class="pagination__item">
      <a href="#"
        ><img src="img/Ellipse4.svg" alt="elipse" class="pagination__elipse"
      /></a>
      <a class="pagination__counter" href="">01</a>
    </div>
    <div class="pagination__item">
      <a href="#"
        ><img src="img/Ellipse5.svg" alt="elipse" class="pagination__elipse"
      /></a>
      <a class="pagination__counter" href="">02</a>
    </div>
    <div class="pagination__item">
      <a href="#"
        ><img src="img/Ellipse5.svg" alt="elipse" class="pagination__elipse"
      /></a>
      <a class="pagination__counter" href="">03</a>
    </div>
    <div class="pagination__item">
      <a href="#"
        ><img
          src="img/Elipse-latest.svg"
          alt="elipse"
          class="pagination__elipse"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 61px;
  margin-bottom: 200px;
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
  }
  &__counter {
    position: absolute;
  }
}
</style>
