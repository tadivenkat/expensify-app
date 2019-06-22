import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtA1LojGSUyohC1M2ftWbJFvS-c5VbT6A",
    authDomain: "expenses-app-89ab3.firebaseapp.com",
    databaseURL: "https://expenses-app-89ab3.firebaseio.com",
    projectId: "expenses-app-89ab3",
    storageBucket: "expenses-app-89ab3.appspot.com",
    messagingSenderId: "511320351973",
    appId: "1:511320351973:web:31379561e37e449d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;



// export const getExpenses = () => {
//     const expenses = [];
//     database.ref('expenses').once('value').
//     then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         return expenses;
//     }).catch((error) => {
//             console.log('Error fetching expenses', error);
//     });
// };

//Write to the root
// database.ref().set({
//     name: "Amma, Naanna!",
//     mother: {
//         name: "T Kanaka Durga",
//         location: "Hyderabad",
//         dob: "10-may-1956",
//         physicalAttributes: {
//             weight: 65,
//             height: 63
//         }
//     },
//     father: {
//         name: "T Papa Rao",
//         location: "Hyderabad",
//         dob: "18-jun-1948",
//         physicalAttributes: {
//             weight: 60,
//             height: 66
//         }
//     }
// }).then(() => {
//     console.log("Successfully written to the database.");
// }).catch((error) => {
//     console.log("Error:", error);
// });

// // set method is not recommended for update. Use update instead.
// database.ref('mother/physicalAttributes/weight').set(63).then(() => {
//     console.log("mother attributes updated.");
// }).catch((error) => {
//     console.log("Error during update of mother attributes:", error);
// });
// database.ref('father/physicalAttributes/weight').set(64);

// database.ref('users').push({
//     username: 'tadivenkat',
//     email: {
//         email: "tadivenkat",
//         verified: false
//     },
//     cellphone: {
//         number: 8106136308,
//         verified: true        
//     }
// });

// database.ref('users').push({
//     username: 'mendusanthi',
//     email: {
//         email: "mendusanthi@gmail.com",
//         verified: true
//     },
//     cellphone: {
//         number: 827605299,
//         verified: true        
//     }
// });

// database.ref('users').push({
//     username: 'pranathi',
//     email: {
//         email: "pranathi@gmail.com",
//         verified: false
//     },
//     cellphone: {
//         number: 7093016465,
//         verified: true        
//     }
// });

// // Subscibe to the changes in users data and fetch them in an array every time the data changes.
// const onUsersChange = database.ref('users').on(
//     'value', 
//     (snapshot) => {
//         const users = [];
//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log("users", users);
//     },
//     (error) => {
//         console.log("Error fetching users data", error);
//     }
// );

// // other events: child_changed, child_removed, child_added
// // Subscribe to a user change event
// const onUserChange = database.ref('users').on(
//         'child_changed', 
//         (snapshot) => {
//             console.log("user", snapshot.val());
//         }, 
//         (error) => {

//         }
// );

// // Fetch the entire data 
// database.ref().once('value').then((snapshot) => {
//     console.log("Whole data", snapshot.val());
// }).catch((error) => {
//     console.log("Error while fetching:", error);
// });

// // Subscribe to the data changes
// const onDataChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log("Error while fetching the data", error);
// });

// // Unsubscibe to the data changes after 61 seconds
// setTimeout(() => {
//     database.ref().off('value', onDataChange);
//     console.log("Unsubscribed from data changes.");
// }, 61000);