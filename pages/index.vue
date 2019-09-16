<template lang="pug">
  section#home
    form-quote
</template>

<script>
import Header from '@/components/common/Header'
import FormQuote from '@/components/FormQuote'

export default {
  layout: 'interseguro',
  data () {
    return {}
  },
  components: {
    'header-is': Header,
    FormQuote
  }
}
</script>
