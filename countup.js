  const animationDuration = 2000;
	const frameDuration = 1000 / 60;
	const totalFrames = Math.round(animationDuration / frameDuration);
	const easeOutQuad = t => t * (2 - t);

	const animateCountUp = el => {
		let frame = 0;
		const countTo = parseInt(el.innerHTML, 10);
		const counter = setInterval(() => {
			frame++;
			const progress = easeOutQuad(frame / totalFrames);
			const currentCount = Math.round(countTo * progress);
			if (parseInt(el.innerHTML, 10) !== currentCount) {
				el.innerHTML = currentCount;
			}
			if (frame === totalFrames) {
				clearInterval(counter);
			}
		}, frameDuration);
	};
	const runAnimations = () => {
		const countupEls = document.querySelectorAll('.countup');
		countupEls.forEach(animateCountUp);
	};

	let showedCounter;

	window.addEventListener("scroll", () => {
		if (!showedCounter) {
			let pos = $(this).scrollTop();
			let el = document.getElementsByClassName("counter")[0].offsetTop;

			if (pos + window.innerHeight > el) {
				runAnimations();
				showedCounter = true;
			}
		}
	});
