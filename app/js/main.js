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

(() => {
	const tabsItem = document.querySelectorAll('.tabs__links-item')
	const tabsBlock = document.querySelectorAll('.tabs__content-item')
	
	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabsBlock.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem.forEach((tab) => {
				tab.classList.remove('active')
			})
			tabsItem[index].classList.add('active')
			tabsBlock[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.team__swiper', {
  loop: true,
	spaceBetween: 30,
	grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
		clickable: true
  },
});


document.getElementById('open_form_btn').addEventListener("click", function(){
	document.getElementById('my-pop-up').classList.add('open')
})

document.getElementById('close_form_pop_up').addEventListener("click", function(){
	document.getElementById('my-pop-up').classList.remove('open')
})

document.querySelector('#my-pop-up .pop_up__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById('my-pop-up').addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove('open');
});