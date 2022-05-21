const minus = $('.minus');
const plus = $('.plus');
let sum = 0;

function counterUp(e) {
  const target = $(e.currentTarget);
  const targetCounter = target.prev('.value');
  let targetVal = parseInt(targetCounter.text());

  targetCounter.text((targetVal + 1));

  if (targetVal >= 0) {
    let price = parseFloat(target.data('price'));
    sum+= price
  }

  totalView();
}

function counterDown(e) {
  const target = $(e.currentTarget);
  const targetCounter = target.next('.value');
  let targetVal = parseInt(targetCounter.text());

  if (targetVal > 0) {
    targetCounter.text((targetVal - 1));
    let price = parseFloat(target.data('price'));
    sum-= price
  }

  totalView();
}

function totalView() {
  const total = $('.total');
  if (!isNaN(sum)) {
    if (sum < 1500) {
      total.html(
        sum + '&#8381;&nbsp;+&nbsp;390&#8381;&nbsp;доставка'
      )
    } else {
      total.html(
        sum + '&#8381;'
      )
    }
  
    if (sum == 0) {
      total.html('')
    }
  }

}

plus.on('click', counterUp);
minus.on('click', counterDown);