const compose = (...funcs) => (item) => {
    return funcs.reduceRight((current, fn) => {
        return fn(current)
    }, item);
}

export {compose};
