
/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessAverage(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
             
        const gray = (arrIn[i + 0] + arrIn[i + 1] + arrIn[i + 2])/3

        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessAverageBy2(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = ( Math.max(arrIn[i + 0] , arrIn[i + 1] , arrIn[i + 2]) + Math.min(arrIn[i + 0] , arrIn[i + 1] , arrIn[i + 2]) ) / 2
        
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessShades(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        
        const NumberOfShades = 25;
        const ConversionFactor = 255 / (NumberOfShades - 1)
        const AverageValue = (arrIn[i + 0] , arrIn[i + 1] , arrIn[i + 2]) / 3
        const gray = ~~((AverageValue / ConversionFactor) + 0.1) * ConversionFactor

        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessShades2(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        arrOut[i + 0] = Math.round( (arrIn[i + 0] + 1) / 64) * 64 - 1;    // R value
        arrOut[i + 1] = Math.round( (arrIn[i + 1] + 1) / 64) * 64 - 1;  // G value
        arrOut[i + 2] = Math.round( (arrIn[i + 2] + 1) / 64) * 64 - 1;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessRed(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = arrIn[i + 0]
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessGreen(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = arrIn[i + 1]
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessBlue(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = arrIn[i + 2]
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessMax(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = Math.max(arrIn[i + 0], arrIn[i + 1], arrIn[i + 2]);
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function preprocessMin(imageDataIn, imageDataOut) {
    const arrIn = imageDataIn.data;
    const arrOut = imageDataOut.data;
    // Itera sobre cada pixel
    for (let i = 0; i < arrIn.length; i += 4) {
        const gray = Math.min(arrIn[i + 0], arrIn[i + 1], arrIn[i + 2]);
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * @param {ImageData} imageDataIn
 * @param {ImageData} imageDataOut
 * @return {void}
 */
export function filter(imageDataIn, imageDataOut) {
    const bufferIn = imageDataIn.data;
    const bufferOut = imageDataOut.data;
    const imageWidth = imageDataIn.width;
    const bufferLenght = bufferIn.length;

    const factorsMatrix = [
        [-1, 1, 0],
        [-1, 1, 0],
        [-1, 1, 0]
    ];

    for (let i = 0; i < bufferLenght; i += 4) {
        // if (i+1 < imageWidth) continue;
        // if (i+1 > (bufferLenght/4) - imageWidth) continue;

        const mod = (i+1) % imageWidth;
        if (mod > 1 || mod < imageWidth - 1) {
            let sumR = 0;
            let sumG = 0;
            let sumB = 0;
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    const factor = factorsMatrix[k+1][j+1];
                    sumR += bufferIn[i + 0] * factor;
                    sumG += bufferIn[i + 1] * factor;
                    sumB += bufferIn[i + 2] * factor;
                }
            }

            bufferOut[i + 0] = sumR;    // R value
            bufferOut[i + 1] = sumG;  // G value
            bufferOut[i + 2] = sumB;    // B value
            bufferOut[i + 3] = 255;  // A value
        }
    }
}
