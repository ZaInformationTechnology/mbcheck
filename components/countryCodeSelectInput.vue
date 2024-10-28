<template>
  <div class="country-code-select-container">
    <input
      type="text"
      v-model="searchCodeCountryName"
      @focus="showCountryCodeContainer = true"
      @blur="hideCountryCodeContainer"
      placeholder="Search country code"
      class="country-code-input"
    />
    <div v-if="showCountryCodeContainer" class="country-code-dropdown">
      <ul>
        <li
          v-for="countryCode in filteredCountryCodes"
          :key="countryCode.code"
          @mousedown.prevent="selectCountryCode(countryCode)"
          class="country-code-item"
        >
          <img :src="countryCode.flag" alt="" class="country-flag" />
          <span>{{ countryCode.country }}</span>
          <span> (+{{ countryCode.code }})</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['countryCode']);

const searchCodeCountryName = ref('');
const showCountryCodeContainer = ref(false);
const selectedCountryCode = ref({
  country: 'Myanmar',
  code: '95',
  flag: 'mm-flag.svg',
});
const countryCodes = ref([
  {
    country: 'Myanmar',
    code: '95',
    flag: 'mm-flag.svg',
  },
  {
    country: 'Singapore',
    code: '65',
    flag: 'sg-flag.svg',
  },
  // Add more country codes as needed
]);

const filteredCountryCodes = computed(() => {
  return countryCodes.value.filter((countryCode) =>
    countryCode.country.toLowerCase().includes(searchCodeCountryName.value.toLowerCase())
  );
});

const selectCountryCode = (countryCode) => {
  selectedCountryCode.value = countryCode;
  showCountryCodeContainer.value = false;
  emit('countryCode', countryCode.code);
};

const hideCountryCodeContainer = () => {
  setTimeout(() => {
    showCountryCodeContainer.value = false;
  }, 200);
};

// Debugging statements
watch(showCountryCodeContainer, (newVal) => {
  console.log('showCountryCodeContainer:', newVal);
});
</script>

<style scoped>
.country-code-select-container {
  position: relative;
  width: 100%;
}

.country-code-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  color: #4a4a4a;
}

.country-code-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.country-code-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.country-code-item:hover {
  background-color: #f9fafb;
}

.country-flag {
  width: 20px;
  height: 14px;
  margin-right: 8px;
}
</style>