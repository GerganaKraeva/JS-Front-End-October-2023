function townInfo(arr) {

    for (const element of arr) {
        let [town, latitude, longitude] = element.split(" | ");
        let towns = {
              town,
              latitude: Number(latitude).toFixed(2),
              longitude: Number(longitude).toFixed(2)
            };
        console.log(towns)    
    }
}

townInfo(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);
