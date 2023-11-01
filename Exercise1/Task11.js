function speedLimit(speed, zone) {
    let isInLimit=true;
    let maxSpeed;
    let status="";
    let diff=0;
    switch(zone) {

        case "motorway":
            if ( speed > 130) {
                isInLimit=false;
            }
            maxSpeed=130;
            break;
        case "interstate":
            if ( speed > 90) {
                isInLimit=false;
            }
            maxSpeed=90;
            break;
        case "city":
            if ( speed > 50) {
                isInLimit=false;
            }
            maxSpeed=50;
             break;
        case "residential":
            if ( speed > 20) {
                isInLimit=false;
            }
            maxSpeed=20;
             break;
    }


    if(isInLimit){
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`)
    } else {
        diff=speed-maxSpeed;
        if(diff <= 20 ) {
            status="speeding";
        } else if(diff <= 40) {
            status="excessive speeding";
        } else {
            status="reckless driving";
        }
        console.log(`The speed is ${speed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`)
    }
}
speedLimit(40, "city");
speedLimit(21, "residential");
speedLimit(120, "interstate");
