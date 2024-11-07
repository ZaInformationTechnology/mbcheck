// composables/useTelecomOperator.js

import { format_phone_mm, format_phone_th } from '../utils/phoneFormatter';

export const getTelecomOperatorName = (phoneNumber,countryCode) => {
    switch(countryCode) {
        case '95':
            return getMyanmarTeleComOperators(format_phone_mm(phoneNumber));
        case '66':
            return getThailandTeleComOperators(phoneNumber);
        case '65':
            return getSingaporeTeleComOperators(phoneNumber);
        default:
            return 'Unsupported country code';
    }
};

export function getMyanmarTeleComOperators(phoneNumber) {
    if (!phoneNumber) {
        return 'Phone number is required';
      }
    
      const telecomOperators = {
        "099": { name: "Ooredoo", logo: "https://access.cdndata.cloud/marketplace/svg/ooredoo.svg" },
        "097": { name: "Telenor", logo: "https://access.cdndata.cloud/marketplace/svg/atom.svg" },
        "096": { name: "MyTel", logo: "https://access.cdndata.cloud/marketplace/svg/mytel.svg" },
        "093": { name: "MEC", logo: "https://access.cdndata.cloud/marketplace/svg/mec.svg" }
    };
    
    const mptPrefixes = ["098", "095", "094", "092"];
    mptPrefixes.forEach(prefix => {
        telecomOperators[prefix] = { name: "MPT", logo: "https://access.cdndata.cloud/marketplace/svg/mpt.svg" };
    });
    
    const formattedPhoneNumber = format_phone_mm(phoneNumber);
    const prefix = formattedPhoneNumber.substring(0, 3);
    
    if (telecomOperators[prefix].name === "MPT" || telecomOperators[prefix].name === "MEC") {
      return phoneNumber.length < 8 || phoneNumber.length > 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    }else{
      return phoneNumber.length !== 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    }
}

export function getThailandTeleComOperators(phoneNumber) {
    if (!phoneNumber) {
        return 'Phone number is required';
      }

      const telecomOperators = {};

    const dtacPrefixes = ["085","089", "084"];

    dtacPrefixes.forEach(prefix => {
        telecomOperators[prefix] = { name: "DTAC", logo: "https://access.cdndata.cloud/marketplace/svg/dtac-logo.svg" };
    });

    const trueMoveHPrefixes = ["083","088"];
    trueMoveHPrefixes.forEach(prefix => {
        telecomOperators[prefix] = {name: "TrueMove", logo: "https://access.cdndata.cloud/marketplace/svg/truemoveh-logo.svg"};
    })

    const aisPrefixes = ["080","081","090"];
    aisPrefixes.forEach(prefix=> {
        telecomOperators[prefix] = {name: "AIS", logo: "https://access.cdndata.cloud/marketplace/svg/ais-logo.svg"};
    })
    // const formattedPhoneNumber = format_phone(phoneNumber);
    // let phone = phoneNumber.toString();
    // phone ='0'+phone.replace(/[^0-9+]/g, "");
    let phone = format_phone_th(phoneNumber);
    const prefix = phone.substring(0, 3);
    console.log('prefix number', phone);
    
    console.log('prefix', prefix);
    
    return phone.length !== 10 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
    
}

export function getSingaporeTeleComOperators(phoneNumber) {
    // return 'Singapore Telecom Operators';
    if (!phoneNumber) {
        return 'Phone number is required';
      }

      const telecomOperators = {};

    const singtelPrefixes = ["812","813", "821","831","840", "850", "860","910","912", "932"];

    singtelPrefixes.forEach(prefix => {
        telecomOperators[prefix] = { name: "Singtel", logo: "https://access.cdndata.cloud/marketplace/svg/singtel-logo.svg" };
    });

    const starHubPrefixes = ["820","825","832","838","848","851","861","981","982"];
    starHubPrefixes.forEach(prefix => {
        telecomOperators[prefix] = {name: "StarHub", logo: "https://access.cdndata.cloud/marketplace/svg/starhub-logo.svg"};
    })

    const m1Prefixes = ["818","819","823","824","836","844","845","968","969"];
    m1Prefixes.forEach(prefix=> {
        telecomOperators[prefix] = {name: "M1", logo: "https://access.cdndata.cloud/marketplace/svg/m1-logo.svg"};
    })

    const tpgTelecomPrefixes = ["878","890","891","892","893","895"];
    tpgTelecomPrefixes.forEach(prefix=> {
        telecomOperators[prefix] = {name: "TPG Telecom", logo: "https://access.cdndata.cloud/marketplace/svg/tpg-telecom-logo.svg"};
    })
    // const formattedPhoneNumber = format_phone(phoneNumber);
    // let phone = phoneNumber.toString();
    // phone ='0'+phone.replace(/[^0-9+]/g, "");
    let phone = format_phone_sg(phoneNumber);
    const prefix = phone.substring(0, 3);
    console.log('prefix number', phone);
    
    console.log('prefix', prefix);
    
    return phone.length !== 10 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
}


export function getCountryCodes() {
    return [
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

module.exports = {
    getTelecomOperatorName,
}