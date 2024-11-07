# Nuxt Telecom Operator

A Nuxt 3 composable to get telecom operator names based on phone number prefixes.

## Installation

```bash
npm install nuxt-telecom-operator

<template>
    <div style="margin:100px">
      <h1>Hello Packager Man!</h1>
        <p>Country Code</p>
        <input type="text" v-model="countryCode">
        <p>Enter your phone number:</p>
        <input type="text" v-model="phoneNumber" />
        <div v-show="telecomOperator.logo">
            <p>Your telecom operator is: {{ telecomOperator }}</p>
            <img :src="telecomOperator.logo" alt="">
        </div>
        <p>Component from package</p>
        <PhoneNumberInput />
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { getTelecomOperatorName } from 'za-nuxt-telecom-operator';
  import { PhoneNumberInput } from 'za-nuxt-telecom-operator';
//   import { useCountryCodes } from 'za-nuxt-telecom-operator';
  
  const phoneNumber = ref('');
  const countryCode = ref('');
  
//   const codes = useCountryCodes();

  const telecomOperator = ref(getTelecomOperatorName(phoneNumber.value,countryCode.value));
  watch(
    () => phoneNumber.value, 
    () => {
        telecomOperator.value = getTelecomOperatorName(phoneNumber.value,countryCode.value);
        
    });
  </script>

<style scoped>
  input {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
</style>
  