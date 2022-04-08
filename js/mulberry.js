export function mulberry32(a = ~~(Math.random() * 4294967296))
{
	return {
		next()
		{
			a |= 0; a = a + 0x6D2B79F5 | 0;
			var t = Math.imul(a ^ a >>> 15, 1 | a);
			t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
			return ((t ^ t >>> 14) >>> 0) / 4294967296;
		},
		randRange(min, max)
		{
			return map(this.next(), [0, 1], [min, max]);
		},
		randIntRange(min, max)
		{
			return Math.floor(this.randRange(min, max + 1));
		},
		/**
		 * @template T
		 * @param {{value: T, weight: number}[]} options 
		 */
		selectWeighted(options)
		{
			let total = options.reduce((total, current) => total + current.weight, 0);
			let rand = this.next();
			for (let option of options)
			{
				rand -= option.weight / total;
				if (rand < 0)
					return option.value;
			}
		},
	}
}
function map(val, [fromMin, fromMax], [toMin, toMax])
{
	return (val - fromMin) / (fromMax - fromMin) * (toMax - toMin) + toMin;
}