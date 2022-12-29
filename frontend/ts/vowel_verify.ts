

const vowelVerify = (phrase:string) => {
    const vowel: string[] = ['A','a','E','e','I','i','O','o','U','u'];
    const phraseSubstring:string = phrase.substring(0,1);

    // if(vowel.indexOf(phraseSubstring) >= 0) {
    //     alert('match')
    // }else{
    //     alert('No match')
    // }

    for(let i of phraseSubstring){
        for(let j of vowel){
            if(i === j){
                alert("match")
            } else {
                alert('No match')
            }
        }
    }


    // for (let i of vowel){
    // const matched = phraseSplit.match(i)
    //     if(matched) {
    //         alert('matched');
    //         // break
    //     }
    //     else {
    //         alert('not matched');
    //         // break
    //     }
    // }


    // for (let i of vowel){
    //     if(phrase === i){
    //     }
    //     list.push(phrase);
    //     console.log(list)
    // }
}

// vowelVerify('eas');
