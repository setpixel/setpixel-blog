;(function() {

  var WORDSPERMIN = 300;

  var wordsCount = 0;
  var timeText = "";

  $('.article-content p, pre, bloackquote').each(function(){
    wordsCount += this.innerText.split(" ").length;

  });

  var mins = wordsCount / WORDSPERMIN;
  var remain = (mins - Math.floor(mins));
  if (remain > 0 && remain <= 0.3 ) {
    timeText = Math.floor(mins) + " minute read.";
  } else if (remain > 0.3 && remain <= 0.7 ) {
    timeText = Math.floor(mins) + " and a half minute read.";
 } else {
    timeText = (Math.floor(mins)+1) + " minute read.";

  }

  $('.time-to-read .time').html(timeText);


  $('.article-content p a').each(
    function(){
      $(this).html($(this).html().replace(/(\s)/g,'&nbsp;'));
  });



  $('h2,h3,p,figcaption, blockquote').each(
    function(){
      $(this).html($(this).html().replace(/\s([^\s]+)$/g,'&nbsp;$1'));
  });

  $('h2,h3,p,figcaption,blockquote').each(
    function(){
      $(this).html($(this).html().replace(/(\s)(\w+[.])/g,'&nbsp;$2'));
  });

var calcHeights = function(){
  $('.css-slideshow').each(function(){
    if ($(this).attr('data-width')) {
      $(this).css('height', $(this).width() * ($(this).attr('data-height')/$(this).attr('data-width')))
    }
  })
}

calcHeights();


function replacer(match, p1, p2, offset, string){
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return match.substring(0,match.length-1) + '&nbsp;';
}

  $('h1,h2,h3,li,p').each(
    function(){
      //$(this).html($(this).html().replace(/(?:^|(?:[.!?]\s))((\w+)|(\w+'\w+))(,)?\s/g,replacer));
      //$(this).html($(this).html().replace(/(?:^|(?:[.!?]\s))((\w+)|(\w+'\w+))(,)?\s/g,replacer));
  $(this).html($(this).html().replace(/(?:^|(?:[.!?,:]))\s(\w+|(\w'\w))(\s)/g,replacer));


  });

var selectionTweet = function() {
  sel = window.getSelection();
  if (sel.rangeCount) {
    range = sel.getRangeAt(0).cloneRange();
    if (range.toString().length == 0) {
      $('.share-tooltip').css('opacity', 0);
    } else {
      var textString = encodeURIComponent(range.toString().substring(0,100)+"..");
      $('.share-tooltip .twitter').attr('data-text', textString)
      $('.share-tooltip').css('opacity', 1);
      if (range.getClientRects) {
        range.collapse(true);
        var rect = range.getClientRects()[0];
        $('.share-tooltip').offset({top: rect.top+$(window).scrollTop()-$('.share-tooltip').height()-30, left: ($(window).width()/2)-($('.share-tooltip').width()/2)})
        $('.share-tooltip').offset({top: rect.top+$(window).scrollTop()-$('.share-tooltip').height()-30, left: rect.left})
      }
    }
  }
}


$(window).mouseup(selectionTweet);

if (document.URL.split("/").splice(3).join("/") == ""){
  window.history.replaceState({},"", articleURL.split("/").splice(3).join("/") + "/");
}


var rideSidePos = function() {
  clearTimeout(delayTimeout)
  var percent = ($(window).scrollTop()/($(document).height()-$(window).height()-$('.bottom-section').height()));
  var time = Math.floor(mins) - Math.floor(percent*mins);

  if ($(window).scrollTop() > 680) {
    if (($('.bottom-section').position().top - $(window).height()-20) < $(window).scrollTop()) {
      if ($('.ride-side').css('position') !== 'absolute') {
        $('.ride-side').css({bottom: -20})
        $('.ride-side').css({position: 'absolute'});
        $('.ride-side').css({left: 570+20});
        $('.ride-side').css({'-webkit-transition': '0'});
        $('.ride-side .time').html("Whoa! You're all done!");
      }
    } else {
      if (percent > 0.8) {
        $('.ride-side').css({bottom: 0})

      } else {
        $('.ride-side').css({bottom: -65})

      }
      $('.ride-side').css({left: ($(window).width()/2)+(570/2)+20})
      $('.ride-side').css({width: ($(window).width()-570)/2-20})
      $('.ride-side').css({position: 'fixed'});
      $('.ride-side').css({'-webkit-transition': 'bottom 0.4s ease-out'});
      if (time == 0) {
        $('.ride-side .time').html("Almost done...");
      } else {
        $('.ride-side .time').html(time + " minutes to read.");
      }
    }
  } else {
    $('.ride-side').css({bottom: -199})
  }
}

 $(window).scroll(rideSidePos);
 $(window).resize(rideSidePos);
 $(window).resize(calcHeights);


  var delayTimeout;

  if ($(window).width() < 768 ) {
    delayTimeout = window.setTimeout(function(){
      $('html, body').animate({scrollTop:70}, 400);
    }, 2000);
  }
    


  $('.popup').click(function(event) {
    if (event.target.className.indexOf("twitter") !== -1) {
      if ($(event.target).attr('data-text')){
        var url = 'http://twitter.com/share?text=' + $(event.target).attr('data-text') + "&url=" + encodeURIComponent(articleURL); 
      } else {
        var url = 'http://twitter.com/share?text=' + encodeURIComponent(articleTitle) + "&url=" + encodeURIComponent(articleURL); 
      }
    }
    if (event.target.className.indexOf("facebook") !== -1) {
      var url = 'https://www.facebook.com/sharer.php?s=100&p[url]=' + encodeURIComponent(articleURL+"/") + "&p[images][0]=" + encodeURIComponent(articleImage) + "&p[title]=" + encodeURIComponent(articleTitle) + "&p[summary]=" + encodeURIComponent(articleSubtitle + ' ' + articleExcerpt) + "&u=" + encodeURIComponent(articleURL) + "&t=" + encodeURIComponent(articleTitle) ; 
    }
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    var popup = window.open(url, 'twitter', opts);
    event.preventDefault();
    
    var interval = window.setInterval(function() {
        try {
            if (popup == null || popup.closed) {
                window.clearInterval(interval);
                showMailModal();
            }
        }
        catch (e) {
        }
    }, 300);
 
    

    return false;
  });


  var showMailModal = function() {
    if (getCookie("showMail") !== "false" ) {
      if ($(window).width() > 768) {
        $('.modal-underlay').show();
      }
    }
  }

  $('form').each(function() {
    var $thisForm = $(this);
    if ( $thisForm.length > 0 ) {
      $thisForm.find('.button').click(function ( event ) {
        event.preventDefault();
        // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
        //if ( validate_input($form) ) { register($form); }
        register($thisForm);
      });
    }
  });

  function register($form) {
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
      success     : function(data) {
        if (data.result != "success") {
          // Something went wrong, do something to notify the user. maybe alert(data.msg);
          console.log("ERRRROR!!!!!");
          alert(data.msg);
        } else {
            // It worked, carry on...
          console.log("WORKED!!!!!");
          $form.hide();
          setCookie('showMail', 'false', 30)
          closeModal();

        }
      }
    });
  }

  var closeModal = function() {
    $('.modal-underlay').hide();
  }

  $('.close').click(function() {
    setCookie('showMail', 'false', 3)
    closeModal();
  });

  window.setTimeout(showMailModal, 1000*60*1);

  function setCookie(cname,cvalue,exdays)
  {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname)
  {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
      {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
  }

  $('input.email').click(function(){
    $('input.button').show();
  });

}).call(this);