// функция обеденяющая названия колонок таблиц данных с соответствующими значениями в справочнике descr
function combine(data, descr) {
    let validData = [];
    let actualDescript= [];
    for (let i = 0; i < descr.length; i++) {
        if (data[0][descr[i].origin]) {
            let counter = 0;
            for (let j = 0; j < data.length; j++) {
                if (validData[counter]) {
                    validData[counter][descr[i].origin] = data[j][descr[i].origin]
                    counter++;
                } else {
                    validData[counter] = {};
                    validData[counter][descr[i].origin] = data[j][descr[i].origin];
                    counter++;
                }
            }
            actualDescript.push(descr[i])
        }

    }
    return {
        description: actualDescript,
        data: validData
    }
}



module.exports = combine;