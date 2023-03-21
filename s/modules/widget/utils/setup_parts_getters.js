
export function setup_parts_getters(widget) {
	return {
		get challenge() { return widget.root?.querySelector(".challenge") },
		get input() { return widget.root?.querySelector("input") },
		get answers() { return widget.root?.querySelector(".answers") },
		get count() { return widget.root?.querySelector(".count") },
	}
}
