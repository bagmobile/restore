const compose = (...funcs) => (item) => {
    console.log(funcs);
    return funcs.reduceRight((current, fn) => {
        console.log(current);
        return fn(current)
    }, item);
}

export {compose};
