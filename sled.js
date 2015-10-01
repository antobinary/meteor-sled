toggleLeftDrawer = function() {
  if($('.sl-left-drawer').hasClass('sl-left-drawer-out')) {
    $('.sl-left-drawer').removeClass('sl-left-drawer-out');
  } else {
    $('.sl-left-drawer').addClass('sl-left-drawer-out');
  }
}

toggleRightDrawer = function() {
  if($('.sl-right-drawer').hasClass('sl-right-drawer-out')) {
    $('.sl-right-drawer').removeClass('sl-right-drawer-out');
  } else {
    $('.sl-right-drawer').addClass('sl-right-drawer-out');
  }
}

toggleLeftArrowClockwise = function() {
  if($('.sl-ham-la-cw').hasClass('sl-toggled-on')) {
    $('.sl-ham-la-cw').removeClass('sl-toggled-on');
  } else {
    $('.sl-ham-la-cw').addClass('sl-toggled-on');
  }
}

toggleRightArrowClockwise = function() {
  if($('.sl-ham-ra-cw').hasClass('sl-toggled-on')) {
    $('.sl-ham-ra-cw').removeClass('sl-toggled-on');
  } else {
    $('.sl-ham-ra-cw').addClass('sl-toggled-on');
  }
}

toggleFAB = function() {
  if($('.sl-fab-container').hasClass('sl-left-hr-dbl-fab')) {
    if($('.sl-fab-container').hasClass('sl-fab-open')) {
      $('.sl-fab-trigger').css('transform',
        'rotate(' + Math.round(180 * Math.asin($('.sl-fab-trigger').css('transform').split('(')[1].split(',')[1]) / Math.PI) + 'deg)');
      $('.sl-fab-container > .sl-fab-btn:nth-child(2)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(2)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(3)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(3)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(4)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(4)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(5)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(5)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(6)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(6)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(7)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(7)').css('opacity'));
      $('.sl-fab-container').removeClass('sl-fab-open');
      $('.sl-fab-container').addClass('sl-fab-closed');
    } else {
      $('.sl-fab-trigger').css('transform',
        'rotate(' + Math.round(180 * Math.asin($('.sl-fab-trigger').css('transform').split('(')[1].split(',')[1]) / Math.PI) + 'deg)');
      $('.sl-fab-container > .sl-fab-btn:nth-child(2)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(2)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(3)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(3)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(4)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(4)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(5)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(5)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(6)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(6)').css('opacity'));
      $('.sl-fab-container > .sl-fab-btn:nth-child(7)').css('opacity', $('.sl-fab-container > .sl-fab-btn:nth-child(7)').css('opacity'));
      $('.sl-fab-container').removeClass('sl-fab-closed');
      $('.sl-fab-container').addClass('sl-fab-open');
    }
  }
}
