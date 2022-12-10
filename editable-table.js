const { assert } = console;

const doomId = 'matrixWrapper'
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

export function setup() {
    const rootElement = document.getElementById(doomId);

    assert(!!rootElement, `O elemento com id ${doomId} não pode ser encontrado`);

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
}
