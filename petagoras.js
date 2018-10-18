let ort = (a,b) => {
    let tri = []
    for (let i = 0; i <= 99; i++) {
        tri.push(i)
    }
    let trisquare = tri.map(x => x ** 2)
    let crossorth = (a**2)+(b**2)
    for (let j = 0 ; j < trisquare.length ; j++) {
        if(crossorth == trisquare[j]) {
            console.log(`triangle with length ${a} and ${b} is an orthagonal triangle`)
        } 
    }
}

ort(3,4)
ort(5,12)
ort(13,14)