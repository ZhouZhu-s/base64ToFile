var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Converts a base64 encoded string to a blob object.
 * 将base64编码的字符串转换为blob对象
 * @param {string} base64 - the base64 encoded string to convert.
 * @return {Promise<Blob>} A blob object representing the converted base64 string.
 * @throws {Error} If the base64 parameter is undefined or null.
 * @throws {Error} If the file type cannot be determined from the base64 string.
 */
export const base64ToBlob = (base64) => __awaiter(void 0, void 0, void 0, function* () {
    if (!base64)
        throw new Error("base64 parameter is required");
    const mimeType = base64.split(";base64")[0].split(":")[1];
    if (!mimeType)
        throw new Error("get file type error");
    if (window.atob) {
        const binaryString = window.atob(base64.split(",")[1]);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new Blob([bytes], { type: mimeType });
    }
    else {
        const res = yield fetch(base64);
        const blob = yield res.blob();
        return blob;
    }
});
/**
 * Converts a base64 encoded string to a File object and returns it.
 * 将base64编码的字符串转换为File对象并返回
 * @param {string} base64 - The base64 encoded string to be converted to a File object.
 * @param {string} fileName - The name of the file to be created.
 * @return {Promise<File>} The created File object.
 */
export const base64ToFile = (base64, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!base64 || !fileName) {
        throw new Error("base64 and fileName are required");
    }
    const mimeType = base64.split(";base64")[0].split(":")[1];
    if (!mimeType) {
        throw new Error("get file type error");
    }
    const blob = yield base64ToBlob(base64);
    const file = new File([blob], fileName, { type: mimeType });
    return file;
});
/**
 * Returns a file URL from a base64 encoded string and a file name.
 * base64编码的字符串和文件名返回文件URL
 * @param {string} base64 - The base64 encoded string to be converted.
 * @param {string} fileName - The name of the resulting file.
 * @return {Promise<string>} A URL that can be used to access the resulting file.
 */
export const base64ToFileUrl = (base64, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!base64 || !fileName) {
        throw new Error("base64 and fileName are required");
    }
    const file = yield base64ToFile(base64, fileName);
    return URL.createObjectURL(file);
});
/**
 * Converts a File object to a base64 encoded string.
 * 将File对象转换为base64编码的字符串
 * @param {File} file - The file to be converted.
 * @return {Promise<string>} A promise that resolves with the base64 encoded string,
 * or rejects with an error.
 */
export const fileToBase64 = (file) => {
    if (!file) {
        throw new Error("file is required");
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
    });
};
