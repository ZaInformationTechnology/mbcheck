<template>
  <div class="country-code-select-container">
    <input
      type="text"
      id="searchCodeCountryName"
      placeholder="Search country code"
      class="country-code-input"
    />
    <div id="countryCodeDropdown" class="country-code-dropdown" style="display: none;">
      <ul id="countryCodeList">
        <!-- Country codes will be dynamically inserted here -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const searchInput = document.getElementById('searchCodeCountryName');
    const dropdown = document.getElementById('countryCodeDropdown');
    const countryCodeList = document.getElementById('countryCodeList');

    const countryCodes = [
      { country: 'Myanmar', code: '95', flag: 'mm-flag.svg' },
      { country: 'Singapore', code: '65', flag: 'sg-flag.svg' },
      // Add more country codes as needed
    ];

    const filterCountryCodes = (searchTerm) => {
      return countryCodes.filter((countryCode) =>
        countryCode.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    const renderCountryCodes = (filteredCodes) => {
      countryCodeList.innerHTML = '';
      filteredCodes.forEach((countryCode) => {
        const listItem = document.createElement('li');
        listItem.className = 'country-code-item';
        listItem.innerHTML = `
          <img src="${countryCode.flag}" alt="" class="country-flag" />
          <span>${countryCode.country}</span>
          <span> (+${countryCode.code})</span>
        `;
        listItem.addEventListener('mousedown', (event) => {
          event.preventDefault();
          selectCountryCode(countryCode);
        });
        countryCodeList.appendChild(listItem);
      });
    };

    const selectCountryCode = (countryCode) => {
      console.log('Selected country code:', countryCode);
      dropdown.style.display = 'none';
      // Emit the selected country code if needed
      // this.$emit('countryCode', countryCode.code);
    };

    searchInput.addEventListener('focus', () => {
      dropdown.style.display = 'block';
    });

    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        dropdown.style.display = 'none';
      }, 200);
    });

    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value;
      const filteredCodes = filterCountryCodes(searchTerm);
      renderCountryCodes(filteredCodes);
    });

    // Initial render
    renderCountryCodes(countryCodes);
  },
};
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