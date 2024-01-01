(() => {
	const burgerOpen = document.querySelector('.header__box-burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigation = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	burgerClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();