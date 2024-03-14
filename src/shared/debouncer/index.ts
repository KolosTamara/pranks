export function debounce<T extends (...args: any) => any>(this: any, func: T, timeout = 300) {
  let timer: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}