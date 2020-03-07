$(document).ready(function(){
  $(".play").hide();
  $(".control").click(function(){
    var target_name = $(this).parent().attr("target");
    var target =  $("#" + target_name);
    var type = $(this).attr("type");
    var operation = select_operation(type);
    operation(target);
  });
  $("#set").click(function(){
    $(".init").hide();
    $(".play").show();
  });
  $("#reset").click(function(){
    $(".play").hide();
    $(".init").show();
    $(".counter").text(0);
    $("#energy_total").text(40);
  });
});

function select_operation(type){
  switch(type){
    case "inc":
      return inc;
    case "dec":
      return dec;
    case "use":
      return use;
    case "del":
        return del;
  }
};

function inc(target){
  var total = get_total();
  var value = get_value(target);
  if(total > 0){
    total--;
    value++;
    set_total(total);
    set_value(target, value);
  }
};

function dec(target){
  var total = get_total();
  var value = get_value(target);
  if(value > 0){
    total++;
    value--;
    set_total(total);
    set_value(target, value);
  }
};

function use(target){
  var value = get_value(target);
  var value_r = get_reserve(target);
  if(value > 0){
    value--;
    value_r++;
    set_value(target, value);
    set_reserve(target, value_r);
  }
};

function del(target){
  var value = get_value(target);
  if(value > 0){
    value--;
    set_value(target, value);
  }
};

function get_value(target){
  return parseInt(target.text());
};

function set_value(target, val){
  target.text(val);
};

function get_total(){
  return get_value($("#energy_total"));
};

function set_total(val){
  set_value($("#energy_total"), val)
};

function get_reserve(target){
  return get_value($("#" + target.attr("id") + "_res"));
};

function set_reserve(target, val){
  set_value($("#" + target.attr("id") + "_res"), val);
};