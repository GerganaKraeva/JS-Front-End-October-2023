function dictionary(textInJson) {
    let terms = {};
    let termsInfo = [];

    for (const text of textInJson) {
        let object = JSON.parse(text);
        for (const key in object) {
            terms[key] = object [key];   
        }        
    }

    for (const key in terms) {
        termsInfo.push(` ${key} => Definition: ${terms[key]}`);
    }
    termsInfo.sort((a,b) => (a).localeCompare(b));

    termsInfo.forEach(element => {
        element=`Term:`+element;
        console.log(element);
    });
}

dictionary([

    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
    
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
    
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}'
    
    ]);