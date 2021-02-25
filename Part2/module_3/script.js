let list = {
    name: '',
    count: 0,
    isBuy: '',
    price: 0,
    setAll: function(...args) {
        this.name = args[0];
        this.count = +args[2];
        this.price = +args[1];
        this.isBuy = args[3];
    },
    setBuyStatus: function(isBuy) {
        this.isBuy = isBuy;
    },
    incrementCount: function() {
        this.count++;
    },
    getBuyStatus: function() {
        return this.isBuy;
    },
    getName: function() {
        return this.name;
    },
    getAllPrice: function() {
        return +(this.price * this.count);
    },

    getCount: function() {
        return this.count;
    },
    getPrice: function() {
        return this.price;
    },
    getAll: function() {
        return 'Товар:' + this.name + ', Ціна: ' + this.price + ' , Кількість: ' + this.count + ', Купленый:' + this.isBuy;
    }
}

let clas = {
    name: '',
    countSitter: 0,
    department: '',
    setAll: function(...args) {
        this.name = args[0];
        this.countSitter = args[1];
        this.department = args[2];
    },
    getName: function() {
        return this.name;
    },
    getDepartment: function() {
        return this.department;
    },
    getAll: function() {
        return 'Ауд:' + this.name + ', Кількість місць: ' + this.countSitter + ', Факультет:' + this.department;
    },
    getCountSitter: function() {
        return this.countSitter;
    },
}
let group = {
    name: '',
    amountStudents: 0,
    department: '',
    setAll: function(...args) {
        this.name = args[0];
        this.amountStudents = args[1];
        this.department = args[2];
    },
    getAmountStudents: function() {
        return this.amountStudents;
    }
}

function createMass(arr, typeOfList) {

    arr[0] = {...typeOfList };
    arr[1] = {...typeOfList };
    arr[2] = {...typeOfList };
    arr[3] = {...typeOfList };
    arr[0].setAll('Хліб', 16, 1, true);
    arr[1].setAll('Молоко', 30, 2, true);
    arr[2].setAll('Цукор', 20, 2, false);
    arr[3].setAll('Чай', 40, 1, false);
    return arr;
}

let arr = [];
createMass(arr, list);

let listClas = [];
let listGroup = [];

newGroup = {...group };
newGroup.setAll('344ск', 15, 'ІФТКН');


listClas[0] = {...clas };
listClas[0].setAll('106', 20, 'ІФТКН');
listClas[1] = {...clas };
listClas[1].setAll('101', 15, 'Історичний');
listClas[2] = {...clas };
listClas[2].setAll('105', 14, 'ІФТКН');

function printClas(shopList) {

    console.log('___________________');
    for (let i = 0; i < shopList.length; i++)
        console.log(shopList[i].getAll());

}

function printClasByDepartment(list, department) {
    console.log('___________________');
    for (let i = 0; i < list.length; i++)
        if (list[i].getDepartment() == department) console.log(list[i].getAll());
}

function printClassByGroup(clas, group) {
    console.log('___________________');

    for (let i = 0; i < clas.length; i++) {

        if (clas[i].getCountSitter() >= group.getAmountStudents()) console.log(clas[i].getAll());
    }
}

function sortClasByCountSitter(list) {
    let temp = {...list }
    for (let j = 0; j < list.length; j++)
        for (let i = 1; i < list.length; i++)
            if (list[i - 1].getCountSitter() > list[i].getCountSitter()) {
                temp = list[i];
                list[i] = list[i - 1];
                list[i - 1] = temp;
            }
}

function sortClasByName(list) {
    let temp = {...list }
    for (let j = 0; j < list.length; j++)
        for (let i = 1; i < list.length; i++)
            if (list[i - 1].getName() > list[i].getName()) {
                temp = list[i];
                list[i] = list[i - 1];
                list[i - 1] = temp;
            }
}

//----------------Task1 AND TASK2---------------------
function sortProductsByStatus(shopList) {
    let temp = {...list }
    for (let j = 0; j < shopList.length; j++)
        for (let i = 1; i < shopList.length; i++)
            if (shopList[i - 1].getBuyStatus() > shopList[i].getBuyStatus()) {
                temp = shopList[i];
                shopList[i] = shopList[i - 1];
                shopList[i - 1] = temp;
            }
}

function printProducts(shopList) {

    sortProductsByStatus(shopList);
    for (let i = 0; i < shopList.length; i++)
        console.log(shopList[i].getAll());
    console.log('_________________________________')
}

function addToList(shopList, item) {

    for (let i = 0; i < shopList.length; i++) {
        console.log()
        if (shopList[i].getName() == item.getName()) {
            shopList[i].incrementCount();
            break;
        } else {
            if (i != shopList.length - 1) continue;
            shopList.push(item);
            break;
        }
    }
}


function buyProduct(shopList, nameTovar) {
    for (let i = 0; i < shopList.length; i++) {
        if (shopList[i].getName() == nameTovar) shopList[i].setBuyStatus(true);
    }
}

function printChek(shopList) {

    let sum = 0;
    let max = arr[0].getAllPrice();

    for (let i = 0; i < shopList.length; i++) {
        let str = 'Покупки:';
        str += shopList[i].getName() + ' - ' + shopList[i].getCount() + '*' + shopList[i].getPrice() + '=' +
            shopList[i].getAllPrice() + ' ';
        sum += shopList[i].getAllPrice();
        if (max < shopList[i].getAllPrice()) max = shopList[i].getAllPrice();
        console.log(str);

    }
    console.log('Сума:' + sum);
    console.log('Найдорожча покупка: ' + max);
    console.log('Середня вартість товару:' + sum / ++shopList.length);
}


//----------------Task1 AND TASK2---------------------


let newTovar = {...list };
newTovar.setAll('Кока-Кола', 15, 2, false);
addToList(arr, newTovar);

///------------
buyProduct(arr, 'Кока-Кола');
printProducts(arr);
printChek(arr);
///---------------

sortClasByCountSitter(listClas);
printClas(listClas);
sortClasByName(listClas);
printClas(listClas);
printClasByDepartment(listClas, 'Історичний');
printClassByGroup(listClas, newGroup);