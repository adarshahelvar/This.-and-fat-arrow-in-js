class student{
    static count=0; 
    constructor(name,age,phoneNumber,marks){
         this.name=name;
       this.age=age;
         this.phoneNumber=phoneNumber;
        this.marks=marks;
student.countStudent();
    }
static countStudent(){

       

    return(student.count++);     

}

      checkElegibility(){
        if(this.marks>=40){
            console.log(`${this.name} age ${this.age} eligible`);
        } 
        else if(this.marks<40) {
            console.log(` ${this.name} age ${this.age} Not eligible`);

        }
    }
          eligibleForPlacements = () => { 
            if(this.marks>=40) {
                console.log(` ${this.name} is eligible for placement`);
            }
            else if(this.marks<40){
                console.log(` ${this.name} is not eligible for placement`);
            }
    }
}
const adarsh = new student('adarsh',24,1234,41);
const varsha = new student('varsha',24,1234,38);
const rakshitha = new student('rakshitha',24,1234,16);
const shravan = new student('shravan',24,1234,41);
const ramya = new student('ramya',24,1234,21);
console.log(student.countStudent());
adarsh.checkElegibility();
varsha.checkElegibility();
rakshitha.checkElegibility();
shravan.checkElegibility();
ramya.checkElegibility();
adarsh.eligibleForPlacements();
varsha.eligibleForPlacements();
rakshitha.eligibleForPlacements();
shravan.eligibleForPlacements();
ramya.eligibleForPlacements();
