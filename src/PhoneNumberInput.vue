<template>
  <div class="phone-input-container">
    <label for="phone" class="phone-label">
      Phone Number
    </label>
    <div class="input-group">
      <span class="country-code-select">
        <CountryCodeSelectInput id="countryCodeSelect" />
      </span>
      <input
        type="number"
        name="phone"
        id="phone"
        class="phone-input"
        placeholder="Enter phone number"
      />
    </div>
    <p id="operatorInfo" class="operator-info" style="display: none;">
      Operator: <span id="operatorName"></span>
    </p>
  </div>
</template>

<script>
import CountryCodeSelectInput from '../components/CountryCodeSelectInput.vue';
import { getTelecomOperatorName } from '../utils/getTeleComOperator';

export default {
  components: {
    CountryCodeSelectInput,
  },
  mounted() {
    const phoneInput = document.getElementById('phone');
    const operatorInfo = document.getElementById('operatorInfo');
    const operatorName = document.getElementById('operatorName');

    phoneInput.addEventListener('input', () => {
      const phoneNumber = phoneInput.value;
      const operator = getTelecomOperatorName(phoneNumber);
      if (operator) {
        operatorName.textContent = operator;
        operatorInfo.style.display = 'block';
      } else {
        operatorInfo.style.display = 'none';
      }
    });

    phoneInput.addEventListener('keypress', (event) => {
      const regex = /[0-9]/;
      if (!regex.test(event.key)) {
        event.preventDefault();
      }
    });
  },
};
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