function convertToJSON(name, lastName, hairColor) {
    const object = {
        name,
        lastName,
        hairColor
    }
    const objectToJSON = JSON.stringify(object);
    console.log(objectToJSON)
}

convertToJSON('George', 'Jones', 'Brown');