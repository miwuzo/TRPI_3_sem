// //1
let numbers =[1, 2, 3];
let [first] = numbers;
console.log(first);

// //2
// let user={
//     name: "Name",
//     age: 10,
//     }
// let admin = {
//     admin: true,
//     ...user
//     };
// console.log(`${admin.admin}, ${admin.name}, ${admin.age}`);

// // //3
// let store ={
//     state: {  //1 уровень
//             profilePage:{  //2 уровень
//                         posts:[  //3 уровень
//                             {id: 1, massage: 'Hi', likesCount: 12},
//                             {id: 2, message: 'By', likesCount: 1},
//                               ],
//                         newPostText: 'About me',
//                         },
//             dialogsPage: {
//                         dialogs: [
//                             {id: 1, name: 'Valera'},
//                             {id: 2, name: 'Andrey'},
//                             {id: 3, name: 'Sasha'},
//                             {id: 4, name: 'Viktor'},
//                                  ],
//                         messages:[
//                             {id: 1, message: 'hi'},
//                             {id: 2, message: 'hi hi'},
//                             {id: 3, message: 'hi hi hi'},
//                                  ],
//                         },
//             sidebar:[],
//             },
// }

// let {state:{profilePage: {posts}, dialogsPage:{dialogs, messages} } } = store;
// console.log("likesCount:");
// posts.forEach(element => {
//     console.log(element.likesCount);
// });
// console.log(messages);
// console.log(dialogs.filter((dialog) => dialog.id % 2 == 0));

// //map - это метод массива, который создает новый массив, применяя функцию к каждому элементу исходного массива.
// let newMessages = messages.map(function(m){
//     return m = {id: m.id, message: "Hello user"};
// })

// console.log(newMessages);


// // //4
// let tasks = [
//     {id: 1, title: "HTML&CSS", isDone: true},
//     {id: 2, title: "JS", isDone: true},
//     {id: 3, title: "ReactJS", isDone: false},
//     {id: 4, title: "Rest API", isDone: false},
//     {id: 5, title: "GraphQL", isDone: false},
// ];

// tasks = [...tasks, {id: 6, title: "C#", isDone: false},]
// console.log(tasks);


// //5
// function sumValues(x, y, z){
//     return x + y + z;
// }

// console.log(sumValues(...[1, 2, 3]));

// let array = [1,2,3];
// console.log(sumValues(...array));