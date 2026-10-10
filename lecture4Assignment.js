const prompt = require(`prompt-sync`)()

main()
function main() {
    console.log(removeEven([1, 2, 3, 4, 5, 6, 7, 8]))
    console.log(removeDupes([1,2,3,3,3,4,5,6,7,7,8,2,2]))
    console.log(checkNum([1,2,3,4,5,6],5))
    console.log(arrMaps([118,117,120]))

    function removeEven(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                arr.splice(i, 1)
                i--
            }
        }
        return arr
    }

    function removeDupes(arr){
        let set = new Set(arr)
        return set
    }

    function checkNum(arr,num){
        for(let i=0; i<arr.length; i++) if (arr[i] == num) return true
        return false
    }

    function arrMaps(arr){
        let map = new Map()
        for(let i=0; i<arr.length; i++){
            map.set(arr[i], String.fromCharCode(arr[i]))
        }
        return map
    }
}