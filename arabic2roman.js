/**
 * Convierte números arábigos (enteros positivos) a números romanos.
 * @param {Integer} arabic rango: 1..3999
 * @returns String
 * @author Javier Guerra
 */
function arabic2Roman(arabic)
{
    let roman = '';

    if (
        !isNaN(arabic) &&
        Number.isInteger(arabic) &&
        arabic >= 1 &&
        arabic <= 3999
    ) {
        const sign = 'IVXLCDM';
        const maps = ['1', '11', '111', '12', '2', '21', '211', '2111', '13'];
        const temp = arabic.toString();
        let pos = 0;

        for (let i = temp.length - 1; i >= 0; i--)
        {
            const digit = parseInt(temp[i]);

            if (digit) // no es cero
            {
                const code = maps[digit - 1];
                let str = '';

                for (let j = 0; j <= (code.length - 1); j++)
                    str += sign[pos + parseInt(code[j]) - 1];

                roman = str + roman;
            }

            if (i) pos += 2;
        }
    }

    return roman;
}

// Testing
const str = '12.3';
const num = 12.3;
const nu2 = 4000;
const nu3 = 0;
const nu4 = -1;
const min = 1;
const max = 3999;
console.log(str, arabic2Roman(str));
console.log(num, arabic2Roman(num));
console.log(nu2, arabic2Roman(nu2));
console.log(nu3, arabic2Roman(nu3));
console.log(nu4, arabic2Roman(nu4));
console.log(min, arabic2Roman(min));
console.log(max, arabic2Roman(max));
for (let i = 1; i <= 5; i++) {
    const arabic = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(arabic, arabic2Roman(arabic));
}
