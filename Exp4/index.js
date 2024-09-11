
class Person {
    constructor(name, email, mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    displayDetails = () => {
        return `Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`;
    };
}


class Student extends Person {
    constructor(name, email, mobile, rollNo) {
        super(name, email, mobile);
        if (rollNo === 0) throw new Error("Roll No cannot be zero!");
        this.rollNo = rollNo;
    }


    displayDetails() {
        return `${super.displayDetails()}, Roll No: ${this.rollNo}`;
    }
}


function processForm(event) {
    event.preventDefault();

 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    
    if (mobile.length !== 9) {
        alert("Mobile number must be exactly 9 digits!");
        return;
    }

    
    let person;
    try {
        person = new Person(name, email, mobile);  
        generateReceipt(person, message);
    } catch (error) {
        alert(error.message);
    }
}

function generateReceipt(person, message) {
    const receiptDiv = document.getElementById('receipt');
    const currentDate = new Date();

    receiptDiv.innerHTML = `
        <h3>Receipt</h3>
        <p>${person.displayDetails()}</p>
        <p>Message: ${message}</p>
        <p>Date: ${currentDate.toDateString()}</p>
    `;
}
