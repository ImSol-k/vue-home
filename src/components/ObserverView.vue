<template>
    <div ref="observerElement"></div>
</template>
 
<script>
export default {
  data() {
    return {
      observer: null,
      observerOptions: {
        rootMargin: '0px',
        threshold: 1.0
      }
    };
  },
  mounted() {
    this.createObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    createObserver() {
      console.log("ob시작")
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // 관찰 대상이 교차되었을 때 intersect 이벤트를 호출합니다.
          console.log("ob-if")
          this.$emit('show');
        } else {
          console.log("ob-else")
          this.$emit('hidden');	
          console.log("ob에러")
        }
      }, this.observerOptions);
 
      const observerElement = this.$refs.observerElement;
      this.observer.observe(observerElement);
      console.log("ob끝")
    }
  }
};
</script>

<style>

</style>