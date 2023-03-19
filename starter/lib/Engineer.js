// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// import Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
      
        super (name, id, email);

        this.github = github; 
    }


    getGithub () {
        return this.github;
    }

  
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 