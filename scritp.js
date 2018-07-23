
//Function to get form values

const getInputValues = (id) => {
    return document.getElementById(id).value
    }
    
//LIsten for form submit

const submitForm = (e) => {
    e.preventDefault()
    
    //get values
    const name = getInputValues('name')
    const email = getInputValues('email')
    const company = getInputValues('company')
    const message = getInputValues('message')
    const phone = getInputValues('phone')

    console.log(name)
}


document.getElementById('contactForm').addEventListener('submit', submitForm)