var url = window.location;
  $('#navigation a[href="'+url+'"]').addClass('active');

  $('.bc_navigation a[href="'+url+'"]').addClass('active');

$('.active').attr({
  'aria-current': 'page'
});


/* 8. Progressive Hamburger by @heydonworks(https://twitter.com/heydonworks) http://heydonworks.com
http://heydonworks.com/practical_aria_examples/#hamburger
-----------------------------------------------------------------------------------------
Modified by milk. thank by hiroron
*/

// Set up attributes etc

$('[href="#navigation"]').attr({
  'role': 'button',
  'aria-controls': 'navigation',
  'aria-expanded': 'false'
});

$('body > div').attr({
  'data-nav-visible': 'false'
});

// Clone navigation landmark for landmarks dialog

var landmark = $('#navigation').clone();

landmark.addClass('v-h');
landmark.appendTo('body');
landmark.removeAttr('id');

$('.v-h li').removeAttr('id');
$('.v-h').attr({
  'aria-hidden': 'true'
  });

// Basic open menu function

var openMenu = function() {
  $('body > div').attr({
    'data-nav-visible': 'true'
  });
  $('[href="#navigation"]').attr({
    'aria-expanded': 'true'
  })
  $('#navigation').attr({
  'aria-hidden': 'false'
  });
  setTimeout(function() {
    $('[href="#navigation"]').text('\u00D7');
  }, 520);
return false;
}

// Basic close menu function

var closeMenu = function() {
  $('body > div').attr({
    'data-nav-visible': 'false'
  });
  $('[href="#navigation"]').attr({
    'aria-expanded': 'false'
  });
  $('#navigation').attr({
  'aria-hidden': 'true'
  });
  setTimeout(function() {
    $('[href="#navigation"]').text('\u2261');
  }, 520);
return false;
}

// Run clicks on the navigation button

$('[href="#navigation"]').on('click', function(e) {
  e.preventDefault();
  $(this).attr('aria-expanded') == 'true' ? closeMenu() : openMenu();
});

/* 9. Simple dropdowns by @heydonworks(https://twitter.com/heydonworks) http://heydonworks.com
http://heydonworks.com/practical_aria_examples/#submenus
-----------------------------------------------------------------------------------------
Modified by milk. thank by hiroron
*/

// At end of navigation block, return focus to navigation menu button
$(window).on('load resize', function(){
if ($(window).width() <= 1024) { //If the window size is less than 1024 px

$('#navigation [aria-haspopup],#navigation ul li:has([aria-haspopup])').unbind();

  $('#navigation').attr({
    'aria-hidden': 'true'
  });

$('.v-h').attr({
  'aria-hidden': 'false'
  });

$('.s_nav_btn').attr({
  'aria-hidden': 'false'
  });

$('#navigation ul').prev('a').removeAttr('aria-haspopup', 'true');
$('#navigation ul li').children('ul').removeAttr('aria-hidden', 'true');
$('#navigation ul li').children('ul').removeAttr('aria-label', 'submenu');

$('#navigation ul li:has(ul)').children('a').off('hover');
$('#navigation ul li:has(ul)').off('mouseleave');

$('#navigation li:last a').on('keydown', function(e) {
  if (e.keyCode === 9) {
    if (!e.shiftKey) {
      e.preventDefault();
      $('[href="#navigation"]').focus();
    }
  }
});

// At start of navigation block, refocus close button on SHIFT+TAB

$('#navigation li:first a').on('keydown', function(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      e.preventDefault();
      $('[href="#navigation"]').focus();
    }
  }
});

// If the menu is visible, always TAB into it from the menu button

$('.s_nav_btn [aria-expanded]').on('keydown', function(e) {
  if (e.keyCode === 9) {
    if ($(this).attr('aria-expanded') == 'true') {
      if (!e.shiftKey) {
        e.preventDefault();
        $('#navigation li:first a').focus();
      } else {
        if (e.shiftKey) {
          e.preventDefault();
          $('#wrapper').focus();
        }
      }
    }
  }
});

} else {

$('#navigation').removeAttr('aria-hidden', 'true');

$('.s_nav_btn').attr({
    'aria-hidden': 'true'
  });

$('.v-h').attr({
  'aria-hidden': 'true'
  });

$('#navigation ul').prev('a')
  .attr('aria-haspopup', 'true');

$('#navigation ul li').children('ul')
  .attr('aria-hidden', 'true');

$('#navigation ul li').children('ul')
  .attr('aria-label', 'submenu');


$('#navigation ul li:has([aria-haspopup])').focusin(function(e){
  $(this).addClass('f-nav');
})
.focusout(function(e) {
  $(this).removeClass('f-nav');
});

var showSubmenu = function(dropdown) {
  dropdown.attr('aria-hidden', 'false');
};

var hideSubmenu = function(dropdown) {
  dropdown.attr('aria-hidden', 'true');
};

$('#navigation [aria-haspopup]').on('focus', function(e) {
  var submenu = $(this).next();
  showSubmenu(submenu);
  $(submenu).find('li:first').focus();
  return false;
});

$('#navigation [aria-hidden]').focusout(function(e) {
  if (this.contains(e.relatedTarget)) {
    return true;
  }

  hideSubmenu($('#navigation [aria-label="submenu"]'));
  return true;
});

// When SHIFT+TAB
$('#navigation [aria-haspopup]').on('keydown', function(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      hideSubmenu($('#navigation [aria-label="submenu"]'));
    }
  }
});

$('#navigation [aria-haspopup]').hover(function() {
  showSubmenu($(this).next());
});

$('#navigation [aria-haspopup]').parents('li').mouseleave(function() {
  hideSubmenu($(this).find('[aria-label="submenu"]'));
});

$('#navigation li:last a').off();
$('#navigation li:first a').off();

}
});