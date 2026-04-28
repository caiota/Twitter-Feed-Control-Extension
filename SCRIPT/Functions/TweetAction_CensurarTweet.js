async function Do_Censura() {
	let SPOILER_ARRAY_LENGTH = SPOILER_ARRAY.length;
	for (var i = 0; i < SPOILER_ARRAY_LENGTH; i++) {
		const image = SPOILER_ARRAY[i];
		image.classList.add("Blur");
	}
	SPOILER_ARRAY = [];
}