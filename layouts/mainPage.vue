<template>
  <div class="main">
    <ContainerWrap class="container ft_Black_100">
      <NavBar />
      <Nuxt class="layout" />
      <Toast />
    </ContainerWrap>
    <div class="footer Caption ft_Black_20">developed by samankeyc, undefinedp</div>
  </div>
</template>

<script>
import ContainerWrap from '@/components/default/default/containerWrap';
import NavBar from '@/components/default/default/navBar';
import Toast from '@/components/default/default/toast';

export default {
  components: {
    ContainerWrap,
    NavBar,
    Toast
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .container {
    margin-bottom: 5rem;
  }

  .footer {
    position: absolute;
    bottom: 1rem;
  }
}
</style>
