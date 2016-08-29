export const fetchBenches = (filters, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filters,
    success,
    error: () => console.log('error')
  });
};

export const postBench = (bench, success, error) => {
  $.ajax({
   method: 'POST',
   url: '/api/benches/',
   data: {bench: bench},
   success,
   error
 });
};
