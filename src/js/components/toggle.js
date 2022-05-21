function toggleBlock(event) {
  const target = $(event.currentTarget);
  const targetBody = target.parent().find('.js-toggle--block');

  targetBody.slideToggle();
}

$('.js-toggle--click').on('click', toggleBlock);