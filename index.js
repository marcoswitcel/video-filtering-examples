import { preprocess, preprocessAverage } from './filters/index.js';

/**
 * @typedef {{
 *   video: HTMLVideoElement,
 *   canvas: HTMLCanvasElement,
 *   button: HTMLElement,
 *   width: number,
 *   height: number,
 *   currentPreprocess: (arr: Uint8ClampedArray) => void,
 *   streaming: boolean,
 * }} Context
 */

const context = {
    /** @type {HTMLVideoElement} */ // @ts-expect-error
    video: document.getElementById('webcam'),
    /** @type {HTMLCanvasElement} */ // @ts-expect-error
    canvas: document.getElementById('display'),
    button: document.getElementById('start'),
    width: 320 * 2,
    height: 240 * 2,
    currentPreprocess: preprocess,
    streaming: false,
};


navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream  => {
        context.video.srcObject = stream;
        context.video.play();
        context.streaming = true;
    })
    .catch(erro => {
        console.log('Erro: ', erro);
    })



/**
 * 
 * @param {object} param0 
 * @param {HTMLCanvasElement} param0.canvas
 * @param {HTMLVideoElement} param0.video
 * @param {Context} context
 * @returns 
 */
const setupSizes = ({ canvas, video }, context) => {
    return (event) => {
        context.height = video.videoHeight / (video.videoWidth/context.width);

        if (isNaN(context.height)) {
            context.height = context.width / (4 / 3);
        }

        video.setAttribute('width', context.width.toString());
        video.setAttribute('height', context.height.toString());

        canvas.setAttribute('width', context.width.toString());
        canvas.setAttribute('height', context.height.toString());
    }
};

context.video.addEventListener('canplay', setupSizes(context, context), false);


context.button.addEventListener('click', (event) => {
    if (context.streaming) {
        startRendering(context);
    }
});

/**
 * 
 * @param {Context} context 
 */
function startRendering(context) {
    const { width, height, canvas, video } = context;
    const context2d = canvas.getContext('2d');
   
    console.time('timing');

    context2d.drawImage(video, 0, 0, width, height);
    /** @type {ImageData} */
    const rawData = context2d.getImageData(0, 0, width, height);
    /** @type {Uint8ClampedArray} */
    const arr = rawData.data;

    context.currentPreprocess(arr);

    // Cria um novo objeto do tipo `ImageData`
    let imageData = new ImageData(arr, width);

    // Desenha a nova imagem no canvas
    context2d.putImageData(imageData, 0, 0);

    console.timeEnd('timing');

    requestAnimationFrame(() => startRendering(context));
}
