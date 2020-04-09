let nurseries = []

export const getNurseries = () =>
  fetch('http://localhost:8088/nurseries')
    .then((res) => res.json())
    .then((parsedNurseries) => (nurseries = parsedNurseries))

export const useNurseries = () => nurseries.slice()
