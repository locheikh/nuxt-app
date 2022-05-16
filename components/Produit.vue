<template>
<div>
    name: {{name}}
    price: {{price}}
</div>
</template>

<script>
export default {
  name: 'NuextProduit',
  props:['name','price']
}
</script>