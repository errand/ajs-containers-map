/** @module ErrorRepository
 * Class creating ErrorRepository.
 */
export default class ErrorRepository {
  /**
   * Create a point.
   * @param {map} errors - map of the errors
   */
  constructor() {
    this.errors = new Map([
      [401, 'UNAUTHORIZED'],
      [400, 'BAD REQUEST'],
      [403, 'FORBIDDEN'],
      [404, 'NOT FOUND'],
    ]);
  }

  /**
   * Translates code to user friendly text
   * @param {number} code - key of the errors Map
   * @return {string} text of the value by code key
   */
  translate(code) {
    if (!isNaN(code) && Number.isInteger) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      } else {
      throw new Error('Unknown error');
    }
    } else {
      throw new Error('Error code should be and integer');
    }
  }
}
