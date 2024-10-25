// utils/phoneFormatter.js

export const format_phone = (originalNumber) => {
    if (!originalNumber) {
      return;
    }
    let phone = originalNumber.toString();
    phone = phone.replace(/[^0-9+]/g, "");
    if (phone.startsWith("+959")) {
      return phone.replace("+959", "09");
    }
    if (phone.startsWith("959")) {
      return phone.replace("959", "09");
    }
    if (phone.startsWith("09")) {
      return phone;
    }
    if (
      !phone.startsWith("+959") &&
      !phone.startsWith("959") &&
      !phone.startsWith("09")
    ) {
      if (phone.startsWith("9")) {
        return phone.replace("9", "09");
      }
      return "09" + phone;
    }
    return phone;
  };