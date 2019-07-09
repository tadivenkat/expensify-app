import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleProvider, database as default};

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