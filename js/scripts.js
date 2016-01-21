$(document).ready(function(event){
  $("form#CountChocula").submit(function(){
    var countTo = $('input#captain').val();
    var countBy = $('input#mate').val();
    var result = CountBy(countTo, countBy);



    for (i = 0; i  > countTo ; i += countBy) {
      result.push(i*countBy);
    }
    return result;

  event.preventDefault();
});

});
