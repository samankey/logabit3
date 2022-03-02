<template>
  <div>
    <ImageHeader
     :img="'join'"
     :contents="'✋🏻대환영!'"
    />
    <Input :label="'이메일'" :placeholder="'이메일을 입력해주세요!'" :input="'checkEmail'" @checkEmail="checkEmail"/>
    <Input v-model="password" :label="'비밀번호'" :type="'password'" :placeholder="'비밀번호를 입력해주세요! (최소 8글자 이상)'" />
    <Input v-model="passwordCheck" :label="'비밀번호 확인'" :type="'password'" :placeholder="'비밀번호를 다시 입력해주세요!'" />
    <Input v-model="name" :label="'닉네임'" :placeholder="'5글자 이하 한글 닉네임만 가능해요!'"/>
    {{ checkEmail() }}
    <ButtonDefault :text="'가입을 완료하시겠어요?'" :style-type="'join'" />
    <ButtonDefault :text="'이미 계정이 있으신가요?'" />
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';
import Input from '@/components/default/input/input';
import ButtonDefault from '@/components/default/button/buttonDefault';

export default {
  components: {
    ImageHeader,
    Input,
    ButtonDefault
  },

  layout: 'mainPage',

  data () {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      name: ''
    };
  },

  methods: {
    checkEmail (val) {
      this.email = val;
      const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      console.log('여기 찍혀야', this.email);
      return regEmail.test(this.email);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
