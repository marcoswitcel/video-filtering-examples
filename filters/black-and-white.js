
/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessAverage(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
             
        const gray = (arr[i + 0] + arr[i + 1] + arr[i + 2])/3

        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessAverageBy2(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = ( Math.max(arr[i + 0] , arr[i + 1] , arr[i + 2]) + Math.min(arr[i + 0] , arr[i + 1] , arr[i + 2]) ) / 2
        
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessShades(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        
        const NumberOfShades = 25;
        const ConversionFactor = 255 / (NumberOfShades - 1)
        const AverageValue = (arr[i + 0] , arr[i + 1] , arr[i + 2]) / 3
        const gray = ~~((AverageValue / ConversionFactor) + 0.1) * ConversionFactor

        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessShades2(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        arr[i + 0] = Math.round( (arr[i + 0] + 1) / 64) * 64 - 1;    // R value
        arr[i + 1] = Math.round( (arr[i + 1] + 1) / 64) * 64 - 1;  // G value
        arr[i + 2] = Math.round( (arr[i + 2] + 1) / 64) * 64 - 1;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessRed(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = arr[i + 0]
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessGreen(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = arr[i + 1]
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessBlue(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = arr[i + 2]
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessMax(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = Math.max(arr[i + 0], arr[i + 1], arr[i + 2]);
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessMin(imageDataIn, imageDataOut) {
    const arr = imageDataIn.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arr.length; i += 4) {
        const gray = Math.min(arr[i + 0], arr[i + 1], arr[i + 2]);
        arr[i + 0] = gray;    // R value
        arr[i + 1] = gray;  // G value
        arr[i + 2] = gray;    // B value
        arr[i + 3] = 255;  // A value
    }
}
