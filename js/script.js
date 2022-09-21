$(document).ready(function () {

    $("#formOne").submit(function (event){
      
      event.preventDefault();

      const inputtedAddress = $("#writersAddress").val();
      const inputtedTown = $("#writersTown") .val();
      const inputtedLga = $("#writersLga").val();
      const inputtedState = $("#writersState").val();
      const inputtedDate = $("#writersDate").val();
      
      const inputtedNames = $("#name").val();
      const inputtedTitle= $("#title").val();
      const inputtedRecipentsAddress =$("#recipentsAddress").val();
      const inputtedCompany= $("#company").val();
      const inputtedSalutation = $("#salutation").val();

      const inputtedHeader = $("#header").val();

      const inputtedBody = $("#body").val();

      const inputtedClosing = $("#close").val().toUpperCase();

 

      $(".writersAddress").text(inputtedAddress);
  
      $(".writersTown").text(inputtedTown);
  
      $(".writersLga").text(inputtedLga);
  
      $(".writersState").text(inputtedState);
  
      $(".writersDate").text(inputtedDate);

      $(".name").text(inputtedNames);

      $(".title").text(inputtedTitle);

      $(".recipentsAddress").text(inputtedRecipentsAddress);
  
      $(".company").text(inputtedCompany);
      $(".salutation").text(inputtedSalutation);

      $(".header").text(inputtedHeader);

      $(".body").text(inputtedBody);
      
      $(".close").text(inputtedClosing);
  
      $("#story").show();
      event.preventDefault();
    })
  })
