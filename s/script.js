
import {words} from "./modules/words.js"

function $(selector, context = document) {
	return context.querySelector(selector)
}

class Widget {
	#root = $(".widget")

	#hat = []
	#challenge = ""
	#answers = []

	constructor() {
		this.#root.onkeypress = event => {
			if (event.code === "Enter") {
				console.log("enter")
			}
		}
	}

	#pull_from_hat_and_set_answers() {
		if (this.#hat.length === 0)
			this.#hat = words

		const index = Math.floor(Math.random() * this.#hat.length)
		const [chosen] = this.#hat.splice(index, 1)

		const {spanish, english} = chosen
		this.#challenge = spanish
		this.#answers = english
	}

	get #parts() {
		return {
			challenge: $(".challenge", this.#root),
			input: $("input", this.#root),
			answers: $(".answers", this.#root)
		}
	}

	clear_input() {
		this.#parts.input.value = ""
	}

	prompt() {
		this.#pull_from_hat_and_set_answers()
		const {challenge, input} = this.#parts
		challenge.textContent = this.#challenge
		input.value = ""
	}
}

const widget = new Widget()
widget.prompt()
