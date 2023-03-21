
export function initialize_html() {
	const div = document.createElement("div")
	div.className = "widget"
	div.innerHTML = `
		<p class="challenge"></p>
		<input type="text"/>
		<footer>
			<p class="answers"></p>
			<p class="count"></p>
		</footer>
	`
	return div
}
