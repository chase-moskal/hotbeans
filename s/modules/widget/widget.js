
import {words} from "../words.js"
import {setup_state} from "./utils/setup_state.js"
import {initialize_html} from "./utils/initialize_html.js"
import {setup_parts_getters} from "./utils/setup_parts_getters.js"
import {setup_pull_next_challenge} from "./utils/setup_pull_next_challenge.js"

export class Widget {
	root = initialize_html()

	constructor() {
		this.root.onkeyup = event => {
			if (event.code === "Enter")
				this.#on_enter_press()
		}
	}

	prompt() {
		this.#pull_next_challenge()
		this.#parts.input.value = ""
	}

	#state = setup_state(() => this.#render())
	#parts = setup_parts_getters(this)

	#pull_next_challenge = setup_pull_next_challenge(
		words,
		({challenge, answers}) => {
			this.#state.apply({challenge, answers, show_answers: false})
		}
	)

	#on_enter_press() {
		const {input} = this.#parts
		const {answers, count} = this.#state.data

		const candidate = input.value.toLowerCase()
		const correct = answers.includes(candidate)

		if (correct) {
			this.#state.apply({count: count + 1})
			this.prompt()
		}
		else {
			this.#state.apply({show_answers: true})
			input.value = ""
		}
	}

	#render() {
		const state = this.#state.data
		const {challenge, answers, count} = this.#parts
		challenge.textContent = state.challenge
		answers.textContent = state.answers.join(", ")
		count.textContent = state.count
		if (state.show_answers)
			answers.setAttribute("data-show", "")
		else
			answers.removeAttribute("data-show")
	}
}
