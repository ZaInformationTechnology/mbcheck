<template>
  <div class="country-code-select-container">
    <input type="text" id="searchCodeCountryName" placeholder="Search country code" class="country-code-input" />
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
      {country: 'Thailand',code: '66',flag: 'thai-flag.svg'},
      {
          country : 'Malaysia',
          code : '60',
          flag : 'malaysia-flag.svg',
      },
      {
          country : 'China',
          code : '86',
          flag : 'china-flag.svg',
      },
      {
          country : 'USA',
          code : '1',
          flag : 'US-flag.svg',
      },
      {
          country : 'Japan',
          code : '81',
          flag : 'japan-flag.svg',
      },
      {
          country : 'South Korea',
          code : '82',
          flag : 'korea-flag.svg',
      },
      {
          country : 'India',
          code : '91',
          flag : 'india-flag.svg',
      },
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
  padding: 10px;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s;
}

.country-code-input:focus {
  border-color: #007aff;
  outline: none;
}

.country-code-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
}

.country-code-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.country-code-item:hover {
  background-color: #007aff;
  color: white;
}

.country-flag {
  width: 24px;
  height: 16px;
  margin-right: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>