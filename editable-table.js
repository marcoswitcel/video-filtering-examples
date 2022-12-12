import { makeFilter } from './filters/index.js';

const { assert } = console;

const rootElementId = 'matrixWrapper'
const buttonElementId = 'matrix-apply';
const errorClass = 'error';

/**
 * 
 * @param {NodeListOf<HTMLTableCellElement>} nodes celulas da tabela
 * @returns {number[][]|null}
 */
function convertListOfNodesToArray(nodes) {
    const result = [];
    let row;
    for (let i = 0; i < nodes.length; i++) {

        if (i % 3 === 0) {
            row = [];
            result.push(row);
        }
        assert(typeof row === 'object', 'A essa altura a row deve estar sempre inicializada');

        const tdElement = nodes[i];
        const textValue = tdElement.innerText;
        const numericValue = Number(textValue);

        if (isNaN(numericValue)) return null;
        row.push(numericValue);
    }

    return result;
}

/**
 * @param {import('./index.js').Context} context Informações contextuais
 */
export function setup(context) {
    const rootElement = document.getElementById(rootElementId);
    const buttonElement = document.getElementById(buttonElementId);

    assert(!!rootElement, `O elemento com id ${rootElementId} não pode ser encontrado`);
    assert(!!buttonElement, `O elemento com id ${buttonElementId} não pode ser encontrado`);

    rootElement.querySelectorAll('td').forEach(tdElement => {
        tdElement.addEventListener('keypress', () => {
            const textValue = tdElement.innerText;
            const numericValue = Number(textValue);

            if (isNaN(numericValue)) {
                tdElement.classList.add(errorClass)
            } else {
                tdElement.classList.remove(errorClass)
            }
        })
    });

    buttonElement.addEventListener('click', () => {
        const tdElements = rootElement.querySelectorAll('td');
        assert(!!tdElements.length, "Não conseguiu achar os elementos 'td'");
        const matrix = convertListOfNodesToArray(tdElements);
        context.currentPreprocess = makeFilter(matrix);
    });
}
