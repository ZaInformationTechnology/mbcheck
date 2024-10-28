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
  width: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.phone-input-container:hover {
  background-color: #f1f1f1;
}

.phone-label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.country-code-select {
  display: inline-flex;
  align-items: center;
  border: 2px solid #4a90e2;
  border-right: 0;
  background-color: #e6f7ff;
  padding: 10px;
  color: #007aff;
  font-size: 16px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.country-code-select:hover {
  background-color: #cceeff;
  color: #005bb5;
}

.phone-input {
  flex: 1;
  border: 2px solid #4a90e2;
  background-color: white;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.phone-input:focus {
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
}

.operator-info {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>