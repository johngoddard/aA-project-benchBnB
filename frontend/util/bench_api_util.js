export const fetchBenches = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    success,
    error: () => console.log('error')
  });
};
