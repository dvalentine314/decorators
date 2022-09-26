export function tinkerDecorator(target:any, name:any, descriptor:any) {
  //descriptor.writable = false;
  //return descriptor;

  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args:any) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
}


/**
 * https://www.sitepoint.com/javascript-decorators-what-they-are/
*/
