// // Helpers to convert data, etc.

// export const timeAgo = (date: Date) => {
    
//     var DBdate = date.toString();
//     var currentDate = new Date();

//     var diference = currentDate.getTime() - DBdate.getTime()
    
//     if (diference > dayOnMiliseconds){

//     }
//     else {
//         var hours = Math.trunc( diference / 3600000 )
//         var residuo = diference % 3600000
//         var minutes = Math.trunc( residuo / 60000 )

//         if (hours > 1) text = 'Active ' + minutes + ' minutes a go.'
//         else  text = 'Active ' + hours + ' hours ' + minutes + ' minutes a go.'
//     }

//     return text
// }