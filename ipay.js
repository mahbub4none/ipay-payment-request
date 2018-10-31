<script>
$('#card').click(function(){
      var tpc = $('#total_payable').val();
      var subscriber_id = $('#subscriber_id').val();
      var c = confirm("You will be redirect to payment gateway. Are you sure?");
      if(c){
        var createRequestObject = {
          amount:tpc,
          referenceId:subscriber_id,
          description:"Buy COL Package 2",
          successCallbackUrl:"http://register.colbd.com/success/reference/"+subscriber_id,
          failureCallbackUrl:"http://register.colbd.com/failure/reference/"+subscriber_id,
          cancelCallbackUrl:"http://register.colbd.com/cancel/reference/"+subscriber_id
        };

        $.ajax({
          type: "POST",
          beforeSend: function(request) {
            request.setRequestHeader("Authorization", "Bearer 01ce6ed0-adfe-44c2-9f2d-a539a78f92c5");
            request.setRequestHeader("Content-type", "application/json");
          },
          url: "https://demo.ipay.com.bd/api/pg/order",
          data: JSON.stringify(createRequestObject),
          dataType: "json",
          success: function(msg) {
            window.location.href = msg.paymentUrl;
          }
        });

      }
    });
</script>
