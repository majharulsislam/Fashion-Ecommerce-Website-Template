$( document ).ready(function() {

  // top header slide
  $('.top_header_slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
  });

  // banner slide
  $('.banner_area').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000
  });


  // arrivals product slide
  $('.arrivals_product').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<div class="arrival-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="arrival-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
  });


  // product page gallery slider 
  $('.single_product_view_area .slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.single_product_view_area .slider-nav'
  });
  $('.single_product_view_area .slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical:true,
      asNavFor: '.single_product_view_area .slider-for',
      dots: false,
      focusOnSelect: true,
      verticalSwiping:true,
      prevArrow: '',
      nextArrow: '<div class="single_product_view_area slick-custom-arrow-right"><i class="fas fa-chevron-down"></i>',
      responsive: [
      {
          breakpoint: 992,
          settings: {
            vertical: false,
          }
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 580,
        settings: {
          vertical: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 380,
        settings: {
          vertical: false,
          slidesToShow: 2,
        }
      }
      ]
  });


  // DataTables
    $('#mydatatable').DataTable({
      responsive: true,
      searching: false,
      "language": {
        "info":           "_TOTAL_ Item",
        "infoEmpty":      "0 Item",
        "lengthMenu":     "Show _MENU_ per page",
      }
    });


});

// Cart full Product quantity
$(document).ready(function() {

    $('.cart_full_quantity .number .minusq').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.cart_full_quantity .number .plusq').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
});


// Load more items for click load more button homepage
$(document).ready(function(){
    $(".recommended_area .recoment_single_card").slice(0, 5).show();
    $("#loadmore").on("click", function(e){
      e.preventDefault();
      $(".recommended_area .recoment_single_card:hidden").slice(0, 5).slideDown();
      if($(".recommended_area .recoment_single_card:hidden").length == 0) {
        $("#loadmore").text("No More Product").addClass("noContent");
      }
    });
})


// Load more items for click load more button product listing
$(document).ready(function(){
    $(".all_listing_product .col-md-3.col-sm-6").slice(0, 8).show();
    $("#loadmorep").on("click", function(e){
      e.preventDefault();
      $(".all_listing_product .col-md-3.col-sm-6:hidden").slice(0, 4).slideDown();
      if($(".all_listing_product .col-md-3.col-sm-6:hidden").length == 0) {
        $("#loadmorep").text("No More Product").addClass("noContent");
      }
    });
})



// Multistep form

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "ORDER REVIEW";
  } else {
    document.getElementById("nextBtn").innerHTML = "SAVE AND CONTINUE";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("msform").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#msform").validator();

  // when the form is submitted
  $("#msform").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "";

      // let's compose Bootstrap alert box HTML
      var alertBox ='<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText + "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#msform").find(".messages").html(alertBox);
        // empty the form
        $("#msform")[0].reset();
      }
      return false;
    }
  });
});

// Load more items for click load more button checkout
$(document).ready(function(){
  $('#nextBtn').on('click', function() {
    $('.check_input_wrap input').each(function(){
      if($(this).val() == ''){
        $(this).parents(".form-group").addClass("has-danger");
      }
    });
  });
});




