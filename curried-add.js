function curriedAdd(total) {
    if (total === undefined) {
        return 0
    };
	const addNum = (num) => {
		if (num === undefined) return total;
		total += num;
		return addNum;
	};
    return addNum;
}

module.exports = { curriedAdd };
