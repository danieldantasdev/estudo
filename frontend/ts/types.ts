class MyClass {
    constructor(options: { myProp: number }) {
        Object.assign(this, options)
    }

    get time() {
        return Date.now()
    }

    doMath(base: number) {
        return (base * 2) / 1.4
    }
}

const instance = new MyClass({ myProp: 42 })

console.log(instance)
console.log(instance.time)
console.log(instance.doMath(15))

type ProgrammingLanguages = 'C' | 'C++' | 'C#'

const favoriteLanguage = (language: ProgrammingLanguages) => {
    return `Minha linguagem favorita é ${language}`
}

const language = favoriteLanguage('C')

console.log(language)
