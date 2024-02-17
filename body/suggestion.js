function reset(){
    var btnReset = document.querySelector('button');
    var inputs = document.querySelector('input');
    
    btnReset.addEventListener('click', () =>{
        inputs.forEach(input => input.value = '');
    }
    );
    }
      function showConfirmBox() {
        // Fetching input values
        var name = document.querySelector('.name-box').value.trim();
        var email = document.querySelector('.email-box').value.trim();
        var dishName = document.querySelector('.dish-box').value.trim();
        var ingredients = document.querySelector('textarea[name="ingredients"]').value.trim();
        var procedure = document.querySelector('textarea[name="procedure"]').value.trim();
    
        // Checking if all required fields are filled
        if (name && email && dishName && ingredients && procedure) {
            // If all fields are filled, show confirmation box
            var confirmBox = confirm("Are you sure you want to submit?");
            if (confirmBox) {
                // If user confirms, submit the form
                document.querySelector('form').submit();
            }
        } else {
            // If any required field is empty, show an alert
            alert("Please fill out all the required fields.");
        }
    }
    