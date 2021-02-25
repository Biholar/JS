console.log(data);


let newData = JSON.parse(JSON.stringify(data));


newData.splice(5, 1);


newData.forEach(element => {
    delete element.id;
});


newData.map(x => {

    x.name = x.name.charAt(0).toUpperCase() + x.name.slice(1).toLowerCase();
    x.url = 'http: //' + x.url;
    x.description = x.description.slice(0, 14);
    // let newDate = function(date) {
    //     let tmpDate = new Date(date);
    //     return (tmpDate.getFullYear()) + '/' +
    //         (tmpDate.getMonth() + 1) + '/' +
    //         tmpDate.getDate() + ' ' +
    //         tmpDate.getHours() + ':' +
    //         tmpDate.getMinutes();
    // };
    x.date = moment(x.date).format('MMMM Do YYYY, h:mm:ss a');
    x.isVisible = x.params.status;
    x.params = x.params.status + '=>' + x.params.progress;
})

function printData(data) {
    console.log(data);
}
printData(newData);