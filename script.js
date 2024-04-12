
$(document).ready(function(){


   $('.btn-submit').click(function(e){
        e.preventDefault();
        var formData = $("#MyForm").serializeArray().reduce(function (obj, item) {
                           obj[item.name] = item.value;
                           return obj;
                       }, {});
            
            var isEmpty = false;
            
            for (var key in formData) {
                if (formData[key] === "") {
                    isEmpty = true;
                    break;
                }
            }

            if (isEmpty) 
            {
                swal("Empty field", "Please fill required fileds *", "warning");
                playErrorAudio();
            } 
            else 
            {
                swal("Success", "Form is ready for submit.", "success");
            }
   });


   function playErrorAudio()
   {
      var audioPlayer = document.getElementById("audioPlayer");   
      audioPlayer.play();
      setTimeout(function() {
        audioPlayer.pause();
      }, 2000);
   }


});
