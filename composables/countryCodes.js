

export const useCountryCodes = () => useState("countryCodes",()=>{
    return {
          countryCodes : [
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
      }
});
