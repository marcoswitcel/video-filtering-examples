import {
    preprocessAverage,
    preprocessAverageBy2,
    preprocessShades,
    preprocessShades2,
    preprocessRed,
    preprocessGreen,
    preprocessBlue,
    preprocessMax,
    preprocessMin,
} from './filters/index.js';

/**
 * @typedef {{
 *   video: HTMLVideoElement,
 *   canvas: HTMLCanvasElement,
 *   button: HTMLElement,
 *   width: number,
 *   height: number,
 *   currentPreprocess: (imageDataIn: ImageData, imageDataOut: ImageData) => void,
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
    currentPreprocess: preprocessAverage,
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
    const imageDataIn = context2d.getImageData(0, 0, width, height);

    /**
     * @obs com os filtros atuais a entrada e a saída podem ser a mesma imagem,
     * pois eles alteram pixel e pixel e precisam apenas da informação uma vez.
     * Para os futuros filtros baseados em múltiplos pixels, precisarei armazenar o novo
     * valor de cada pixel em um buffer diferente.
     */
    context.currentPreprocess(imageDataIn, imageDataIn);

    // Desenha a nova imagem no canvas
    context2d.putImageData(imageDataIn, 0, 0);

    console.timeEnd('timing');

    requestAnimationFrame(() => startRendering(context));
}

/** @type {NodeListOf<HTMLInputElement>} */
const radios = document.querySelectorAll('.radio-input');

const map = {
    average: preprocessAverage,
    averageBy2: preprocessAverageBy2,
    shades: preprocessShades,
    shades2: preprocessShades2,
    preprocessRed: preprocessRed,
    preprocessGreen: preprocessGreen,
    preprocessBlue: preprocessBlue,
    preprocessMax: preprocessMax,
    preprocessMin: preprocessMin,
};

radios.forEach((radioElement) => {
    radioElement.addEventListener('change', (event) => {
        const newPreprocess = map[radioElement.value];
        if (newPreprocess) {
            context.currentPreprocess = newPreprocess;
        }
    });
})