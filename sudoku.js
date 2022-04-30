const grid1 = [
    [".", "7", "9", "1", "4", ".", ".", "2", "."],
    ["3", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
]

const grid2 = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
]


function solution(arr) {
    let resultBoolean = true
    const cubes = {};
    const columnElements = {}
    arr.forEach((row, i) => {
        const rowElements = []
        const x = Math.floor(i / 3)
        row.forEach((el, j) => {
            const y = Math.floor(j / 3)
            if (Number(el)) {
                rowElements.push(Number(el))
                columnElements[j] = columnElements[j] || []
                columnElements[j].push(Number(el))
                cubes['' + x + y] = cubes['' + x + y] || []
                cubes['' + x + y].push(Number(el))
            }
        })
        if(rowElements.length > new Set(rowElements).size){
            resultBoolean = false
        }
    })

    return resultBoolean && Object.values(columnElements).reduce((acc,current) => {
        if (current.length > new Set(current).size){
            acc=false
        }
        return acc
    },true) && Object.values(cubes).reduce((acc,current) => {
        if (current.length > new Set(current).size){
            acc=false
        }
        return acc
    },true)
}



console.log('grid1', solution(grid1))
console.log('grid2', solution(grid2))