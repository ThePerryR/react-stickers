export function fetch(url, method = 'get', body) {
  return new Promise((resolve, reject) => {
    const opt = {
      method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      }
    };
    if (body) {
      opt.body = body;
    }
    fetch(url, opt)
      .then(res => {
        if (res.status !== 200) {
          throw res.json();
        }
        return res.json();
      })
      .then(resolve)
      .catch(reject);
  });
}