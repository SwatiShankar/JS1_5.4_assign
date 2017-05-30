var EmployeeDetails= [		// variable Employee details is an array of objects. It has 5 different objects
	 {
		empName  	: "Ganu",
		empAge   	: 24,
		empSalary	: 30000,
		empAddress	: {
					City  		: "Bangalore",
					State		: "Karnataka",
					pinCode 	: 560076
					  }	
	}
	,
	{
		empName  	: "Manu",
		empAge   	: 24,
		empSalary	: 40000,
		empAddress	: {
					City  		: "Bangalore",
					State		: "Karnataka",
					pinCode 	: 560076
					  }
	},
	{
		empName  	: "Anu",
		empAge   	: 25,
		empSalary	: 36000,
		empAddress	: {
					City  		: "Mysore",
					State		: "Karnataka",
					pinCode 	: 576555
					  	}
	},
	{
		empName  	: "Maanvi",
		empAge   	: 26,
		empSalary	: 25000,
		empAddress	: {
					City  		: "Hubli",
					State		: "Karnataka",
					pinCode 	: 574655
						}
	},
	{
		empName  	: "Saanvi",
		empAge   	: 27,
		empSalary	: 22000,
		empAddress	: {				//nested object
					City  		: "Mangalore",
					State		: "Karnataka",
					pinCode 	: 560076
					  }
	}
];

console.log("Displaying the details stored in fourth index of the array");

console.log("Name of fourth employee : " + EmployeeDetails[3].empName);	//accessing the name of the employee indexed at 3rd position of the array

console.log("Age of the employee : " + EmployeeDetails[3]["empAge"]);	// age of the employee

console.log("Salary of employee : " + EmployeeDetails[3].empSalary);

console.log("Employee's address is : " + EmployeeDetails[3].empAddress.City + ", " +EmployeeDetails[3].empAddress.State + " , " + EmployeeDetails[3].empAddress.pinCode); 	// compete address of the employee