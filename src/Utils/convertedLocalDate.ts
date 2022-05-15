export const convertedLocalDate = (data: string, hours = false) => {
  if (hours) {
    return new Date(data).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return new Date(data).toLocaleDateString('ru', {
    month: 'short',
    day: 'numeric',
  });
};
