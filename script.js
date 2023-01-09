//ДЗ 1-2

function range(){
    
    console.log(arguments.length)} // 4
    
range(1,2,3,4)

//ДЗ 1-3

let numA = +prompt('Введіть перше число')
let numB = +prompt('Введіть друге число')

function numComparison(A, B) {
    if(A < B) {
        alert ("-1, перше число менше")
    }
    else if (A > B){
        alert("1, перше число більше")
    }
    else if (A == B){
        alert("0, числа рівні")
    }
}
numComparison(numA, numB)


//ДЗ 1-4

let fNum = +prompt('Введіть число')

function factorial(f) {
    let count = 1
    for (i=1; i <= fNum; i++) {
    count *=i
    }
    alert(`Факторіал числа ${fNum} дорівнює ${count}`)
}
factorial(fNum)

//ДЗ 1-5

let n1 = prompt('Введіть перше число')
let n2 = prompt('Введіть друге число')
let n3 = prompt('Введіть трете число')

function numF(A, B, C) {
    let nums = A + B + C
    alert(nums)
}
numF(n1, n2, n3)

//ДЗ 1-6

let lenght = +prompt('Введіть довжину прямокутника')
let width = +prompt('Введіть ширину прямокутника')

function area(L, W){
let sum = 0

if (L == 0 && W == 0) {
    alert('Введено не вірні значення')
    }
else if (L != 0 && W != 0){
    sum = L*W
    alert(`Площа прямокутника = ${sum}`)
    }
else if ((L==0 || W == 0) && L != W ){
    sum = (L*L) + (W*W)
    alert(`Площа квадрата = ${sum}`)
    }
}
area(lenght, width)

