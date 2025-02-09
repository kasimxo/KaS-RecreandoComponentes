export default function GenerateDate(): number[][]{
    const arr: Array<Array<number>> = Array(52)
        for(let i = 0; i<arr.length; i++){
        let week: Array<number> = [0,0,0,0,0,0,0]
        for(let j = 0; j<7; j++){
            let val: number = Math.round(Math.random()*10)-5
            if(val<0) val = 0
            week[j] = val
        }
        arr[i] = week
        }
    return arr;
}
