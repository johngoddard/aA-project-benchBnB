export const fetchBenches = (filters, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filters,
    success,
    error: () => console.log('error')
  });
};
