// Initialize Firebase
var config = {
    apiKey: "AIzaSyCijoiHxd1Emqzd_ZpE8NpiL9wHFWISjEM",
    authDomain: "simons-contact-form.firebaseapp.com",
    databaseURL: "https://simons-contact-form.firebaseio.com",
    projectId: "simons-contact-form",
    storageBucket: "simons-contact-form.appspot.com",
    messagingSenderId: "453542599700"
};
firebase.initializeApp(config);

//Reference messeges collection
const messagesRef = firebase.database().ref(`messages`)
//Function to get form values

const getInputValues = (id) => {
    return document.getElementById(id).value
}

//LIsten for form submit
const showAlert = ()=>{
    document.querySelector('.alert').style.display = 'block'
}
const hideAlert = () => {
    setTimeout(()=>{
        document.querySelector('.alert').style.display = 'none'
    },3000)
}
const submitForm = (e) => {
    e.preventDefault()
    //get values
    const name = getInputValues('name')
    const email = getInputValues('email')
    const company = getInputValues('company')
    const message = getInputValues('message')
    const phone = getInputValues('phone')

    saveMessage(name, company,email,phone,message)
    //show alert
    showAlert()
    hideAlert()
    document.getElementById('contactForm').reset()

}

//Save message to firebase

const saveMessage = (name, company, email, phone, message) =>{
    const newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}

document.getElementById('contactForm').addEventListener('submit', submitForm)