/**
 * @Description : Sort data
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 20/12/2022 17:07
 * @File        : sort.js
 * @IDE         : WebStorm
 */


/**
 * @Description : Sort data by multiple type (A-Z, Z-A, Date, ...)
 * @param {Array} data
 * @returns {Array}
 * @public
 */

class Sort {
    constructor(data) {
        this.data = data;
    }

    /**
     * @Description : Sort data by date
     * @param latestFirst {Boolean}
     * @example: data = [{date: '2029-12-20'}, {date: '2021-12-21'}]
     * @example: new Sort(data).byDate(true) => [{date: '2029-12-20'}, {date: '2021-12-21'}]
     * @example: new Sort(data).byDate(false) => [{date: '2021-12-21'}, {date: '2029-12-20'}]
     * @returns {Array}
     */
     byDate(latestFirst = true) {
         return this.data.sort((a, b) => {
             const dateA = new Date(a.date);
             const dateB = new Date(b.date);
             return latestFirst ? dateB - dateA : dateA - dateB;
         });
    }

    /**
     * @Description : Sort data by alphabet, won't change the original data
     * @param order {boolean} true = A-Z, false = Z-A
     * @example: data = [{name: 'c'}, {name: 'B'}, {name: 'A'}]
     * @example: new Sort(data).byAlphabet(true) => [{name: 'A'}, {name: 'B'}, {name: 'c'}]
     * @example: new Sort(data).byAlphabet(false) => [{name: 'c'}, {name: 'B'}, {name: 'A'}]
     * @returns {Array}
     * @public
     */
    byAlphabet(order = true) {
        return this.data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            return order ? nameA < nameB ? -1 : 1 : nameA > nameB ? -1 : 1;
        });
    }

    /**
     * @Description : Sort data by length, won't change the original data
     * @param order {boolean} true = longest first, false = shortest first
     * @example: data = [{name: 'ccc'}, {name: 'A'}, {name: 'BB'}]
     * @example: new Sort(data).byLength(true) => [{name: 'ccc'}, {name: 'BB'}, {name: 'A'}]
     * @example: new Sort(data).byLength(false) => [{name: 'A'}, {name: 'BB'}, {name: 'ccc'}]
     * @returns {Array}
     * @public
     */
    byLength(order = true) {
        return this.data.sort((a, b) => {
            const nameA = a.name.length;
            const nameB = b.name.length;
            return order ? nameB - nameA : nameA - nameB;
        });
    }
}

/** @debug */
// const data = [
//     {name: 'CcC', date: '2029-12-20'},
//     {name: 'A', date: '2021-12-21'},
//     {name: 'BB', date: '2022-12-21'},
// ];
// console.log(new Sort(data).byDate(true));
// console.log(new Sort(data).byDate(false));
// console.log(new Sort(data).byAlphabet(true));
// console.log(new Sort(data).byAlphabet(false));
// console.log(new Sort(data).byLength(true));
// console.log(new Sort(data).byLength(false));

/** @export */
export default Sort;
