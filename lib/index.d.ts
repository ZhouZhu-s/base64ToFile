/**
 * Converts a base64 encoded string to a blob object.
 * 将base64编码的字符串转换为blob对象
 * @param {string} base64 - the base64 encoded string to convert.
 * @return {Promise<Blob>} A blob object representing the converted base64 string.
 * @throws {Error} If the base64 parameter is undefined or null.
 * @throws {Error} If the file type cannot be determined from the base64 string.
 */
export declare const base64ToBlob: (base64: string) => Promise<Blob>;
/**
 * Converts a base64 encoded string to a File object and returns it.
 * 将base64编码的字符串转换为File对象并返回
 * @param {string} base64 - The base64 encoded string to be converted to a File object.
 * @param {string} fileName - The name of the file to be created.
 * @return {Promise<File>} The created File object.
 */
export declare const base64ToFile: (base64: string, fileName: string) => Promise<File>;
/**
 * Returns a file URL from a base64 encoded string and a file name.
 * base64编码的字符串和文件名返回文件URL
 * @param {string} base64 - The base64 encoded string to be converted.
 * @param {string} fileName - The name of the resulting file.
 * @return {Promise<string>} A URL that can be used to access the resulting file.
 */
export declare const base64ToFileUrl: (base64: string, fileName: string) => Promise<string>;
/**
 * Converts a File object to a base64 encoded string.
 * 将File对象转换为base64编码的字符串
 * @param {File} file - The file to be converted.
 * @return {Promise<string>} A promise that resolves with the base64 encoded string,
 * or rejects with an error.
 */
export declare const fileToBase64: (file: File) => Promise<string>;
