import 'jest-preset-angular/setup-jest';

const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    // eslint-disable-next-line no-null/no-null
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () =>
    ({
      getPropertyValue: () => ['-webkit-appearance']
    })
});

Object.defineProperty(document.body.style, 'transform', {
  value: () =>
    ({
      enumerable: true,
      configurable: true
    })
});

Object.defineProperty(window, 'pendo', {
  value: { initialize: () => {} }
});

/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;
