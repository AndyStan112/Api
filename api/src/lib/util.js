export function tap(fn) {
  return (val) => {
    fn(val);

    return val;
  };
}

export async function getJSONIfOK(response) {
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
