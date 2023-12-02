function getEmployeesInfo(arr) {
    arr.forEach(employee => {
        const employeeName = employee;
        const employeeNumber = employee.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`);
    });
}

getEmployeesInfo([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);