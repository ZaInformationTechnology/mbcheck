<template>
  <div class="phone-input-container">
    <label for="phone" class="phone-label">
      {{ $t("phone") }}
    </label>
    <div class="input-group">
      <span class="country-code-select">
        <CountryCodeSelectInput :size="'200px'" @countryCode="receivedCountryCode" />
      </span>
      <input
        type="number"
        name="phone"
        id="phone"
        v-model="form.phone"
        @keypress="validateInput"
        class="phone-input"
        placeholder="Enter phone number"
      />
    </div>
    <p v-if="telecomOperator" class="operator-info">
      Operator: {{ telecomOperator }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CountryCodeSelectInput from '../components/CountryCodeSelectInput.vue';
import { getTelecomOperatorName } from '../utils/getTeleComOperator';

const form = ref({
  phone: '',
});

const telecomOperator = ref('');

const receivedCountryCode = (code) => {
  console.log('Country code received:', code);
};

const validateInput = (event) => {
  const regex = /[0-9]/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
};

watch(form, (newVal) => {
  telecomOperator.value = getTelecomOperatorName(newVal.phone);
});
</script>

<style scoped>
.phone-input-container {
  width: 250px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.phone-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  margin-bottom: 8px;
}

.input-group {
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.country-code-select {
  display: inline-flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-right: 0;
  background-color: #f9fafb;
  padding: 8px;
  color: #6b7280;
  font-size: 14px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.phone-input {
  flex: 1;
  border: 1px solid #d1d5db;
  background-color: white;
  padding: 8px;
  font-size: 14px;
  color: #4a4a4a;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
}

.phone-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}

.operator-info {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
}
</style>