namespace Validation {
  export class ZipCodeValidator {
    isAcceptable(s:string) {
      return s.length === 5 && /^[0-9]+$/.test(s);
    }
  }
}
