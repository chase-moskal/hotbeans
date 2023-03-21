
export function setup_pull_next_challenge(words, update) {
	let hat = []

	return () => {
		if (hat.length === 0)
			hat = words

		const index = Math.floor(Math.random() * hat.length)
		const [chosen] = hat.splice(index, 1)
		const {spanish, english} = chosen

		update({
			challenge: spanish,
			answers: english.map(text => text.toLowerCase()),
		})
	}
}
