
const { min, max, round } = Math;

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
        const gray = (
            max(arrIn[i+0], arrIn[i+1], arrIn[i+2]) + min(arrIn[i+0], arrIn[i+1], arrIn[i+2])
        ) / 2;
        
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
        arrOut[i + 0] = round((arrIn[i + 0] + 1) / 64) * 64 - 1;    // R value
        arrOut[i + 1] = round((arrIn[i + 1] + 1) / 64) * 64 - 1;  // G value
        arrOut[i + 2] = round((arrIn[i + 2] + 1) / 64) * 64 - 1;    // B value
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
        const gray = max(arrIn[i + 0], arrIn[i + 1], arrIn[i + 2]);
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
        const gray = min(arrIn[i + 0], arrIn[i + 1], arrIn[i + 2]);
        arrOut[i + 0] = gray;    // R value
        arrOut[i + 1] = gray;  // G value
        arrOut[i + 2] = gray;    // B value
        arrOut[i + 3] = 255;  // A value
    }
}

/**
 * Monta filtros baseados em uma matriz de pesos (convolution kernel)
 * @param {number[][]} convolutionKernel 
 * @returns {(imageDataIn: ImageData, imageDataOut: ImageData) => void}
 */
export function makeFilter(convolutionKernel) {
    const factorsMatrix = convolutionKernel;
    /**
     * @param {ImageData} imageDataIn
     * @param {ImageData} imageDataOut
     * @return {void}
     */
    return function filter(imageDataIn, imageDataOut) {
        const bufferIn = imageDataIn.data;
        const bufferOut = imageDataOut.data;
        const imageWidth = imageDataIn.width;
        const bufferLenght = bufferIn.length;
    
        for (let i = 0, iter = 0; i < bufferLenght; i += 4) {
            iter = i + 1;
            // borda azul 
            if (   iter < imageWidth*4 
                || iter > bufferLenght - imageWidth * 4
                || (iter % (imageWidth * 4)) < 2
                || (iter % (imageWidth * 4)) > (imageWidth * 4 - 4)
            ) {
    
                bufferOut[i + 0] = 0;
                bufferOut[i + 1] = 0;
                bufferOut[i + 2] = 255;
                bufferOut[i + 3] = 255;
                continue;
            }
            
            let sumR = 0;
            let sumG = 0;
            let sumB = 0;
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    const factor = factorsMatrix[k+1][j+1];
                    let index = i + (j * 4) + (k * imageWidth * 4);
                    sumR += bufferIn[index + 0] * factor;
                    sumG += bufferIn[index + 1] * factor;
                    sumB += bufferIn[index + 2] * factor;
                }
            }

            bufferOut[i + 0] = sumR;    // R value
            bufferOut[i + 1] = sumG;  // G value
            bufferOut[i + 2] = sumB;    // B value
            bufferOut[i + 3] = 255;  // A value
        }
    }
}

export const filterEdgeDetection1 = makeFilter([
    [-1, 1, 0],
    [-1, 1, 0],
    [-1, 1, 0]
]);

/**
 * Gausian Blur
 * @url https://aryamansharda.medium.com/image-filters-gaussian-blur-eb36db6781b1#:~:text=TLDR%3A%20A%20Gaussian%20blur%20is,values%20for%20the%20blurred%20image.
 */
export const filterEdgeDetection2 = makeFilter([
    [4, 0, 0],
    [0, 0, 0],
    [0, 0, -4],
]);
