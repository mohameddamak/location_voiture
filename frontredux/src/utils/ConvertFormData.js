export const buildFormData = (formData, data, parentKey) => {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        // Handle array values by appending each element separately
        data[key].forEach((item, index) => {
          buildFormData(formData, item, `${parentKey}[${key}][${index}]`);
        });
      } else {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      }
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
};