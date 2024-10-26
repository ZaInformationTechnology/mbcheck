<template>
  <div class="w-[250px]">
    <div class="relative mt-1">
      <div class="flex">
        <label for="phone"
          id="floating_filled"
          autocomplete="off"
          class="rounded-tl-lg py-4 pl-3 w-[100px] text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff5100] hover:border-b-[#ff5100] peer"
        >
          <CountryCodeSelectInput :size="'200px'" @countryCode="receivedCountryCode"
          />
      </label>
        <input
          
          required
          type="text"
          id="floating_filled"
          autocomplete="off"
          onkeypress="return /[0-9]/i.test(event.key)"
          class="block rounded-tr-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff5100] peer"
          placeholder=" "
          maxlength="11"
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-[104px] peer-focus:text-[#ff5100] peer-focus:dark:text-[#ff5100] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >Phone</label
        >
        <div v-if="phone_operator.logo" class="absolute right-0 top-0 mt-3 mr-2">
          <img class="w-[20px] h-[20px]" :src="phone_operator.logo" alt="phone" />
        </div>
      </div>

      <span
        for="password  "
        class="absolute text-sm text-gray-500 right-0 mr-3 -mt-9"
      >
        <div class="block text-sm font-medium text-indigo-500"></div>
      </span>
    </div>
    <!-- <small class="text-red-500 text-xs p-2">{{phoneError}}</small> -->

    <div>
      <p class="mt-2 text-xs text-red-600">
        <!-- data -->
      </p>
    </div>
  </div>
  </template>
  <script setup>
  import { ref, onMounted, defineProps, defineEmits, watch } from 'vue'
  import CountryCodeSelectInput from './CountryCodeSelectInput.vue'
  import { getTelecomOperatorName } from '../utils/getTeleComOperator'
  import { format_phone } from '../utils/phoneFormatter'

  const searchCodeCountryName = ref('')
  const showCountryCodeContainer = ref(false)
  const selectedCountryCode = ref({
    country : 'Myanmar',
    code : '95',
    flag : 'mm-flag.svg',
  })


  // checking operators with helper function
    const phone_operator = ref('')
    watch(
      () => form.value.phone,
      (value) => {
        phone_operator.value = getTelecomOperatorName(format_phone(value))
      }
    )


  const countryCodes = ref([
                {
                    country : 'Myanmar',
                    code : '95',
                    flag : 'myanmarFlag.svg',
                    
                },
                {
                    country : 'Singapore',
                    code : '65',
                    flag : 'singaporeFlag.svg',
                },
                {
                    country : 'Thailand',
                    code : '66',
                    flag : 'thaiFlag.svg',
                },
                {
                    country : 'Malaysia',
                    code : '60',
                    flag : 'malayFlag.svg',
                },
                {
                    country : 'China',
                    code : '86',
                    flag : 'chinaFlag.svg',
                },
                {
                    country : 'USA',
                    code : '1',
                    flag : 'usaFlag.svg',
                },
                {
                    country : 'Japan',
                    code : '81',
                    flag : 'japanFlag.svg',
                },
                {
                    country : 'South Korea',
                    code : '82',
                    flag : 'koreaFlag.svg',
                },
                {
                    country : 'India',
                    code : '91',
                    flag : 'indiaFlag.svg',
                },
            ])
  let countryCodeData = ref(null)
  
  const emits = defineEmits(['countryCode'])
  const props = defineProps({
    size: {
      type: String,
      required: false,
    },
  })
  
  onMounted(() => {
    emits('countryCode', selectedCountryCode.value.code)
    filterCountryCode()
  })
  
  function filterCountryCode() {
    if (searchCodeCountryName.value) {
      countryCodeData.value = countryCodes.value?.countryCodes.filter((data) =>
        data.country
          .toLocaleLowerCase()
          .includes(searchCodeCountryName.value.toLocaleLowerCase())
      )
    } else {
      countryCodeData.value = countryCodes.value?.countryCodes;
    }
  }
  
  function selectCountryCode(countryCode) {
    emits('countryCode', countryCode.code)
    selectedCountryCode.value = countryCode
    showCountryCodeContainer.value = !showCountryCodeContainer
    searchCodeCountryName.value = ''
  }
  //searchCodeCountryName တန်ဖိုးပြောင်းလဲတိုင်း filterCountryCode function ကို အလုပ်လုပ်စေချင်လို့ watch သုံးပါသည်။
  watch(
    () => searchCodeCountryName.value,
    () => {
      filterCountryCode()
    }
  )
  </script>
  
  <style scoped>
  /* scoped က  style တွေ ကို လက်ရှိ component မှာပဲ effect ဖြစ်အောင်သုံးထားတာပါ။ */
  
  .country-code-container::-webkit-scrollbar {
    display: none !important;
  }
  
  input {
    border: none;
    outline: none;
    box-shadow: none !important;
  }
  </style>
  