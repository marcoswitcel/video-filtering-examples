import { preprocess, preprocessAverage } from './filters/index.js';

const context = {
    /** @type {HTMLVideoElement} */ // @ts-expect-error
    video: document.getElementById('webcam'),
    /** @type {HTMLCanvasElement} */ // @ts-expect-error
    canvas: document.getElementById('display'),
    button: document.getElementById('start'),
    width: 320 * 2,
    height: 240 * 2,
    currentPreprocess: preprocess, 
};


navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream  => {
        context.video.srcObject = stream;
        context.video.play();
    })
    .catch(erro => {
        console.log('Erro: ', erro);
    })



/**
 * 
 * @param {object} param0 
 * @param {HTMLCanvasElement} param0.canvas
 * @param {HTMLVideoElement} param0.video
 * @param {object} context
 * @param {number} context.width
 * @param {number} context.height
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
    event.preventDefault();
    startRendering();
})
// Revisar tudo daqui pra baixo
function startRendering() {
    const { width, height, canvas, video } = context;
    var context2d = canvas.getContext('2d');
    if (width && height) {
    //   canvas.width = width;
    //   canvas.height = height;
      console.time('gray')
      context2d.drawImage(video, 0, 0, width, height);

      // rawData ImageData 
      const rawData = context2d.getImageData(0, 0, width, height);

      const arr = rawData.data;

      context.currentPreprocess(arr);

      // Initialize a new ImageData object
      let imageData = new ImageData(arr, width);

      // Draw image data to the canvas
      context2d.putImageData(imageData, 0, 0);
    
      console.timeEnd('gray')
      // var data = canvas.toDataURL('image/png');
      // photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
    requestAnimationFrame(startRendering)
}

function clearphoto() {
    const { width, height, canvas, video } = context;
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
  }