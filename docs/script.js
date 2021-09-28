// モバイル・タブレットでのヘッダーメニュー表示
$(function(){
  $('.headerMenuP').click(function(){
    
    if($('.headerMenu').hasClass('open')){
      $('.headerMenu').removeClass('open');
      $('.headerMenu').slideUp();
    } else {
      $('.headerMenu').addClass('open')
      $('.headerMenu').slideDown();
    }
  });
});

// PCでのメニュー表示
$(function(){
  $('.pcjquery').hover(function(){
    $("ul:not(:animated)", this).slideDown();
}, function(){
    $("ul.ulDown",this).slideUp();
  });
});
