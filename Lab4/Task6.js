function getMeetingInfo(arr) {
    const meetingsAppointment ={};

    for (const day of arr) {
        const[dayOfWeek, name]= day.split(" ");
        if(!meetingsAppointment.hasOwnProperty(dayOfWeek)) {
            meetingsAppointment[dayOfWeek]=name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }
   Object.keys(meetingsAppointment).forEach((dayOfWeek) => {
    console.log(`${dayOfWeek} -> ${meetingsAppointment[dayOfWeek]}`);
   });
}
getMeetingInfo(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
getMeetingInfo(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);