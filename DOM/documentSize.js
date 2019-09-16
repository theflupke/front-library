/**
 * @typedef {object} documentSize_Object
 * @property {number} width
 * @property {number} height
*/
/**
 * Get the current document size
 *
 * @example { width, height } = documentSize()
 *
 * @returns {documentSize_Object} the width and height of the element
 */
export function documentSize() {
    return {
        height: parseInt(document.documentElement.scrollHeight, 10),
        width: parseInt(document.documentElement.scrollWidth, 10)
    }
}
