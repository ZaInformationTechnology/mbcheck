// composables/useTelecomOperator.js

import { format_phone } from '../utils/phoneFormatter';

export const getTelecomOperatorName = (phoneNumber) => {
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

    const formattedPhoneNumber = format_phone(phoneNumber);
    const prefix = formattedPhoneNumber.substring(0, 3);

    if (telecomOperators[prefix].name === "MPT" || telecomOperators[prefix].name === "MEC") {
        return phoneNumber.length < 8 || phoneNumber.length > 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
      }else{
        return phoneNumber.length < 11 || phoneNumber.length > 11 ? 'Invalid phone number' : telecomOperators[prefix] || 'Unknown number';
      }
  };
  