import moment from "moment";

//Задача 1

function ordersByClients(clientsInfo, clientsOrder)
{
    let result = [];
    for (let cl of clientsInfo)
    {
        //проверка на формат полей
        if (cl.hasOwnProperty('firstName')
            && cl.hasOwnProperty('lastName')
            && cl.hasOwnProperty('phoneNumber')
            && (String(cl.phoneNumber).length <= 11
                || !Number(cl.phoneNumber)))
        {
            //поиск заказов клиента. добавляется столько записей, сколько за клиентом найдено заказов
            let ords = clientsOrder.filter(el => el.name === cl.firstName + ' '+cl.lastName)
            for (let ord of ords)
            {
                result.push({name: ord.name, phoneNumber: cl.phoneNumber,order: ord.order})
            }
        }
    }
    return result;
}

//Задача 2

const findLastUsers = (users) => {
    //удаление дублей и проверка формата элементов массива
    let deletedDoubles = users.filter((us, pos) =>
        us.hasOwnProperty('userId')&&
        us.hasOwnProperty('timestamp')&&
        !users.slice(0, pos).find(el => el.userId === us.userId)&&
        !users.slice(pos+1, users.length).find(el => el.userId === us.userId)&&
        Date.parse(us.timestamp))
    //сортировка по дате
    let data = deletedDoubles.sort((a, b) => moment(a.timestamp, 'DD.MM.YYYY') - moment(b.timestamp, 'DD.MM.YYYY'))
    //выбор первых десяти
    return data.slice(0, 10)
}