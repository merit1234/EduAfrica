$(document).ready(function () {
    (function ($) {
      "use strict";
  
      jQuery.validator.addMethod(
        "answercheck",
        function (value, element) {
          return this.optional(element) || /^\bcat\b$/.test(value);
        },
        "type the correct answer -_-"
      );
  
      // validate contactForm form
      $(function () {
        $("#contactForm").validate({
          errorClass: "error",
          rules: {
            name: {
              required: true,
              minlength: 2,
            },
            subject: {
              required: true,
              minlength: 4,
            },
            number: {
              required: true,
              minlength: 5,
            },
            email: {
              required: true,
              email: true,
            },
            message: {
              required: true,
              minlength: 20,
            },
          },
          messages: {
            name: {
              required: "Required",
              minlength: "Your name must consist of at least 2 characters",
            },
            subject: {
              required: "Required",
              minlength: "Your subject must consist of at least 4 characters",
            },
            number: {
              required: "Required",
              minlength: "Your Number must consist of at least 5 characters",
            },
            email: {
              required: "Required",
            },
            message: {
              required: "Required",
            },
          },
          submitHandler: function (form, event) {
            event.preventDefault(); // Prevent form submission
  
            // Show success modal
            $("#success").fadeIn();
            $(".modal").modal("hide");
            $("#success").modal("show");
  
            // Optionally, you can reset the form or disable the inputs
            $("#contactForm :input").attr("disabled", "disabled");
            $("#contactForm").fadeTo("slow", 1, function () {
              $(this).find(":input").attr("disabled", "disabled");
              $(this).find("label").css("cursor", "default");
            });
            $("#successOkBtn").on("click", function () {
              // Enable inputs and clear the form
              $("#contactForm :input").removeAttr("disabled").val("");
              $("#contactForm").validate().resetForm(); // Reset validation messages
              $("#contactForm")[0].reset(); // Reset form fields
            });
          },
        });
      });
    })(jQuery);
  });