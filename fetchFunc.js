export async function fetchFunc(url) {
  try {
    const res = await fetch(url);
    const fact = await res.json();
    return fact;
  } catch (err) {
    return console.error(err);
  }
}
