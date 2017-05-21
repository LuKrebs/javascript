function main() {
  var colorClass = "";
  
  $(".select-color").on('click', function() {
    var selectedColor = $(this).attr('class');
    switch (selectedColor) {
      case "select-color cyan not-selected":
        colorClass = 'cyan';
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');
        break;
      case "select-color yellow not-selected":
        colorClass = 'yellow';
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');
        break;
      case "select-color magenta not-selected":
        colorClass = 'magenta';
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');
        break;
    }
  });
  $(".box").on('click', function() {
    var test = $(this).attr('class');
    if (test === "box") {
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box yellow" && colorClass === "yellow") {
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box magenta" && colorClass === "magenta") {
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box cyan" && colorClass === "cyan") {
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box cyan" && colorClass === "yellow") {
      $(this).removeClass('cyan');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box cyan" && colorClass === "magenta") {
      $(this).removeClass('cyan');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box yellow" && colorClass === "magenta") {
      $(this).removeClass('yellow');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box yellow" && colorClass === "cyan") {
      $(this).removeClass('yellow');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box magenta" && colorClass === "cyan") {
      $(this).removeClass('magenta');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box magenta" && colorClass === "yellow") {
      $(this).removeClass('magenta');
      $(this).toggleClass(colorClass);    
    }
    else if (test === "box yellow magenta" && colorClass === "magenta") {
      $(this).removeClass('magenta');
      $(this).removeClass('yellow');
    }
    else if (test === "box cyan magenta" && colorClass === "magenta") {
      $(this).removeClass('magenta');
      $(this).removeClass('cyan');
    }
    else if (test === "box cyan yellow" && colorClass === "yellow") {
      $(this).removeClass('yellow');
      $(this).removeClass('cyan');
    }
  });
  $(".toggle-blink").on('click', function() {
    if (colorClass) {
      $(this).toggleClass('opacity');
      var x = setInterval(function() {
        $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
      }, 350);
    }
  });
}

$(document).ready(main);

/* toggle-blink not-selected opacity
toggle-blink not-selected */