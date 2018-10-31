<script>
$('#card').click(function(){
      var tpc = $('#total_payable').val();
      var subscriber_id = $('#subscriber_id').val();
      var c = confirm("You will be redirect to payment gateway. Are you sure?");
      if(c){
        var createRequestObject = {
          amount:tpc,
          referenceId:subscriber_id,
          description:"Buy Package 2",
          successCallbackUrl:"http://register.com/success/reference/"+subscriber_id,
          failureCallbackUrl:"http://register.com/failure/reference/"+subscriber_id,
          cancelCallbackUrl:"http://register.com/cancel/reference/"+subscriber_id
        };

        $.ajax({
          type: "POST",
          beforeSend: function(request) {
            request.setRequestHeader("Authorization", "Bearer aaaaaaaa-xxxx-yyyy-zzzz-bbbbbbbbbbb");// set the authorization api key
            request.setRequestHeader("Content-type", "application/json");
          },
          url: "https://demo.ipay.com.bd/api/pg/order", // sandbox url
          data: JSON.stringify(createRequestObject),
          dataType: "json",
          success: function(msg) {
            window.location.href = msg.paymentUrl;
          }
        });

      }
    });
</script>
