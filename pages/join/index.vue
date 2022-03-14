<template>
  <div>
    <ImageHeader
     :img="'join'"
     :contents="'✋🏻대환영!'"
    />
    <Input :label="'이메일'" :placeholder="'이메일을 입력해주세요!'" :input="'checkEmail'" @checkEmail="checkEmail"/>
    <Input :label="'비밀번호'" :type="'password'" :placeholder="'비밀번호를 입력해주세요! (최소 8글자 이상)'" :input="'checkPasswordValid'" @checkPasswordValid="checkPasswordValid" />
    <Input v-model="passwordCheck" :label="'비밀번호 확인'" :type="'password'" :placeholder="'비밀번호를 다시 입력해주세요!'" :input="'checkPassword'" @checkPassword="checkPassword" />
    <Input v-model="name" :label="'닉네임'" :placeholder="'5글자 이하 한글 닉네임만 가능해요!'" :input="'checkNameValid'" @checkNameValid="checkNameValid" />
    <ButtonDefault :text="'가입을 완료하시겠어요?'" :style-type="'join'" :event="'join'" @join="join" />
    <ButtonDefault :text="'이미 계정이 있으신가요?'" :event="'goLogin'" @goLogin="goLogin" />
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
      nickname: ''
    };
  },

  computed: {
    validEmail () {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const valid = regExp.test(this.email);
      return valid;
    }
  },

  methods: {
    goLogin () {
      this.$router.push('/login');
    },

    checkEmail (val) {
      this.email = val;
    },

    checkPasswordValid (val) {
      // 8자리 이상
      this.password = val;
    },

    checkPassword (val) {
      this.passwordCheck = val;

      if (this.password === this.passwordCheck) {
        alert('맞았습니다.')
      } else {
        alert('틀렸습니다.')
      }
    },

    checkNameValid (val) {
      // 5자 이하 한글만, keypress 이용할 것
      // var pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
      // this.value = this.value.replace(pattern, '');
      this.nickname = val;
    },

    async join () {
      if (this.nickname.length > 5 || this.password.length < 8 || !validEmail) {
        return this.$notify({ title: '안맞아요', type: 'informative' });
      }
      
      await this.$axios.post('/user/join', {
        email: this.email,
        password: this.password,
        nickname: this.nickname
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
