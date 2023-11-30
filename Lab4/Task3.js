function convertJsonToObject(textJson) {
    let object = JSON.parse(textJson)

    for (const entries of Object.entries(object)) {
        const [key, value] = entries;
        console.log(`${key}: ${value}`)
    }
}
convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');