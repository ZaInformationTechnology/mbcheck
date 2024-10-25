<template>
    <div>
        <div
        @click="showCountryCodeContainer = !showCountryCodeContainer"
        class="w-full h-full select-none flex items-center gap-1 pr-2 border-r border-gray-300"
      >
        <img
          class="w-[28px]"
          :src="'https://access.cdndata.cloud/marketplace/svg/' + selectedCountryCode.flag"
          alt=""
          srcset=""
        />
        <span>+{{ selectedCountryCode.code }}</span>
      </div>
    
      <div :class="!showCountryCodeContainer && 'hidden'"
        class="select-none absolute rounded-[5px] z-[100] top-[60px] bg-gray-50 left-0 right-0 p-[4px]"
      >
        <div class="my-0.5 gap-1 mb-2 flex">
          <input
            v-model="searchCodeCountryName"
            type="text"
            class="placeholder:text-start placeholder:text-[12px] placeholder:font-normal text-[12px] rounded-[5px] w-full pl-3"
            placeholder="Myanmar"
          />
          <button
            @click="filterCountryCode"
            class="bg__theme p-[10px] rounded-[5px]"
          >
            <img src="https://access.cdndata.cloud/marketplace/svg/search-icon.svg" alt="" srcset="" />
          </button>
        </div>
        <ul
        :class=" size ? `max-h-[${size}]` : `max-h-[200px]`" class=" country-code-container  scroll-smooth overflow-scroll flex-col flex gap-1 pb-2"
        >
          <li
            @click="selectCountryCode(countryCode)"
            class="hover:bg-gray-100 text-[12px] font-[400] rounded-[5px] bg-white px-[8px] py-[12px] flex items-center justify-start gap-2"
            v-for="(countryCode, index) in countryCodeData"
            :key="index"
          >
            <img class="w-[28px]" :src="'https://access.cdndata.cloud/marketplace/svg/' + countryCode.flag" alt="" srcset="" />
            <span>{{ countryCode.country }}</span>
            <span> (+{{ countryCode.code }})</span>
          </li>
        </ul>
      </div>
    </div>
    </template>
    <script setup>
    import { ref, onMounted, defineProps, defineEmits, watch } from 'vue'
    import useCountryCodes from '~/composables/useCountryCodes'
    
    const searchCodeCountryName = ref('')
    const showCountryCodeContainer = ref(false)
    const selectedCountryCode = ref({
      country : 'Myanmar',
      code : '95',
      flag : 'mm-flag.svg',
    })
    const countryCodes = ref([
        [
              {
                  country : 'Myanmar',
                  code : '95',
                  flag : 'mm-flag.svg',
                  
              },
              {
                  country : 'Singapore',
                  code : '65',
                  flag : 'singapore-flag.svg',
              },
              {
                  country : 'Thailand',
                  code : '66',
                  flag : 'thai-flag.svg',
              },
              // {
              //     country : 'Malaysia',
              //     code : '60',
              //     flag : 'malaysia-flag.svg',
              // },
              // {
              //     country : 'China',
              //     code : '86',
              //     flag : 'china-flag.svg',
              // },
              // {
              //     country : 'USA',
              //     code : '1',
              //     flag : 'US-flag.svg',
              // },
              // {
              //     country : 'Japan',
              //     code : '81',
              //     flag : 'japan-flag.svg',
              // },
              // {
              //     country : 'South Korea',
              //     code : '82',
              //     flag : 'korea-flag.svg',
              // },
              // {
              //     country : 'India',
              //     code : '91',
              //     flag : 'india-flag.svg',
              // },
          ]
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
    