$(document).ready(function(){
  $(".identity").submit(function(event){
    event.preventDefault();
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var street1Input = $("input#street1").val();
    var street2Input = $("input#street2").val();
    var zipcodeInput = $("input#zipcode").val();
    var phoneInput = $("input#phone").val();
    var emailInput = $("input#email").val()

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".street1").text(street1Input);
    $(".street2").text(street2Input);
    $(".zipcode").text(zipcodeInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);

    $("#list1").prepend("<li>"+name1Input+"</li>");
    $("#list2").prepend("<li>"+name1Input+" "+name2Input+" | "+street1Input+" "+street2Input+" "+zipcodeInput+" | "+phoneInput+" | "+emailInput+"</li>").hide();

    $("#list1").click(function(){
      $("#list2").toggle();
    })
  });

});
