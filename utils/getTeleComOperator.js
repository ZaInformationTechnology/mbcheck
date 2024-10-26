// composables/useTelecomOperator.js

import { format_phone } from './phoneFormatter';

export const getTelecomOperatorName = (phoneNumber) => {
    if (!phoneNumber) {
      return 'Phone number is required';
    }

    // Check if the phone number length is between 6 and 11
    if (phoneNumber.length < 8 || phoneNumber.length > 11) {
        return 'invalid_phone_number';
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

    return telecomOperators[prefix] || 'unknown_telecom_operator';
};

module.exports = {
    getTelecomOperatorName,
}