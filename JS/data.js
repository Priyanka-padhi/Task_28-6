$("#okbtn").click(function () {
  let text_val = $("#text").val();

  if( text_val != ''){
  $("#text").val('');
  $("#outputTable tbody").append(`<tr><td>${text_val}</td><td><input type="button" class="done" id="donebtn" name="donebtn" value="Done"><input type="button" class="undone" id="undonebtn" name="undonebtn" value="Undone"><input type="button" class="delete" id="deletebtn" name="deletebtn" value="Delete"></td><td class="remark"></td></tr>`)

  }

  $(".done").click(function () {
    $(this).parent().siblings(".remark").html('');
    $(this).parent().siblings(".remark").html('&#9989;');
  
  });

  $(".undone").click(function () {
    $(this).parent().siblings(".remark").html('');
    $(this).parent().siblings(".remark").html('&#x274C;');
  
    $(".delete").click(function () {
      var rowCount = $('#outputTable tr').length;
      if(rowCount >3){
        $(this).parent().parent().remove();
      }
    });
  
  });
});



