import firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "AIzaSyCsaCazm4oyHxVICrVQL6r3OTWQpX0MwQg",
    authDomain: "message-list-3d02a.firebaseapp.com",
    databaseURL: "https://message-list-3d02a.firebaseio.com",
    projectId: "message-list-3d02a",
    storageBucket: "message-list-3d02a.appspot.com",
    messagingSenderId: "560305569499"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export function formatDate(date) {
    return moment(date).format('l h:mm a');
}

export function sendMessage(m) {
    return new Promise((resolve, reject) => {
        firebase.database().ref('sent-messages/').push({
            message: m.message,
            sender: m.sender,
            date: Date.now(),
            //date: moment(Date.now()).format('LLLL'),
            subject: m.subject
        }).then(() => {
            resolve();
        });
    });
}