
export function setup_state(update) {
	let state = {
		challenge: "",
		answers: [],
		show_answers: false,
		count: 0,
	}

	return {
		get data() {
			return state
		},
		set data(new_data) {
			state = Object.freeze(structuredClone(new_data))
			update(state)
		},
		apply(new_data) {
			this.data = {...this.data, ...new_data}
		},
	}
}
