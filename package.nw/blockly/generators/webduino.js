'use strict';

goog.provide('Blockly.JavaScript.webduino');
goog.require('Blockly.JavaScript');



/*
      .o8
     "888
 .oooo888   .ooooo.  ooo. .oo.  .oo.    .ooooo.
d88' `888  d88' `88b `888P"Y88bP"Y88b  d88' `88b
888   888  888ooo888  888   888   888  888   888
888   888  888    .o  888   888   888  888   888
`Y8bod88P" `Y8bod8P' o888o o888o o888o `Y8bod8P'
*/

Blockly.JavaScript['demo_show_text'] = function (block) {
  var value_show_ = Blockly.JavaScript.valueToCode(block, 'show_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-01-show").innerHTML = ' + value_show_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_text_size'] = function (block) {
  var value_size_ = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-01-show").style.fontSize = ' + value_size_ + '+"px";\n';
  return code;
};


Blockly.JavaScript['demo_text_lineheight'] = function (block) {
  var value_lineheight_ = Blockly.JavaScript.valueToCode(block, 'lineheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-01-show").style.lineHeight = ' + value_lineheight_ + '+"px";\n';
  return code;
};


Blockly.JavaScript['demo_text_color'] = function (block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-01-show").style.color = ' + value_color_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_image_url'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_url_ == '\'\'' || !value_url_) {
    value_url_ = '"//blockly.webduino.io/media/off.jpg"';
  }
  var code = 'document.getElementById("demo-area-03-image").setAttribute("src",' + value_url_ + ');\n';
  return code;
};


Blockly.JavaScript['demo_light_click'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("demo-area-02-light").addEventListener("click", async function(){\n' +
    statements_do_ +
    '});\n';
  return code;
};


Blockly.JavaScript['demo_light_state'] = function (block) {
  var dropdown_state_ = block.getFieldValue('state_');
  var code = 'document.getElementById("demo-area-02-light").className = "' + dropdown_state_ + '";\n';
  return code;
};


Blockly.JavaScript['demo_light_ifelse'] = function (block) {
  var dropdown_state_ = block.getFieldValue('state_');
  var code = 'document.getElementById("demo-area-02-light").className == "' + dropdown_state_ + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['demo_light_toggle'] = function (block) {
  var code = 'if (document.getElementById("demo-area-02-light").className == "on") {\n' +
    '   document.getElementById("demo-area-02-light").className = "off";\n' +
    '} else {\n' +
    '  document.getElementById("demo-area-02-light").className = "on";\n' +
    '}\n';
  return code;
};


Blockly.JavaScript['demo_image_size'] = function (block) {
  var value_w_ = Blockly.JavaScript.valueToCode(block, 'w_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h_ = Blockly.JavaScript.valueToCode(block, 'h_', Blockly.JavaScript.ORDER_ATOMIC);
  var imageWidth = Blockly.JavaScript.variableDB_.getDistinctName(
    'imageWidth', Blockly.Variables.NAME_TYPE);
  var imageHeight = Blockly.JavaScript.variableDB_.getDistinctName(
    'imageHeight', Blockly.Variables.NAME_TYPE);
  var code = 'var ' + imageWidth + ' = ' + value_w_ + ';\n' +
    'var ' + imageHeight + ' = ' + value_h_ + ';\n' +
    'document.getElementById("demo-area-03-image").style.width = ' + imageWidth + '+"px";\n' +
    'document.getElementById("demo-area-03-image").style.height = ' + imageHeight + '+"px";\n';
  return code;
};


Blockly.JavaScript['demo_image_rotate'] = function (block) {
  var value_deg_ = Blockly.JavaScript.valueToCode(block, 'deg_', Blockly.JavaScript.ORDER_ATOMIC);
  var deg = Blockly.JavaScript.variableDB_.getDistinctName(
    'deg', Blockly.Variables.NAME_TYPE);
  var code = 'var ' + deg + ' = ' + value_deg_ + ';\n' +
    'document.getElementById("demo-area-03-image").style.transform = "rotate("+' + deg + '+"deg)";\n';
  return code;
};


Blockly.JavaScript['demo_image_opacity'] = function (block) {
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-03-image").style.opacity = ' + value_opacity_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_image_position'] = function (block) {
  var dropdown_direction_ = block.getFieldValue('direction_');
  var value_position_ = Blockly.JavaScript.valueToCode(block, 'position_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  if (dropdown_direction_ == 'x') {
    code = 'document.getElementById("demo-area-03-image").style.left = ' + value_position_ + '+"px";\n';
  } else {
    code = 'document.getElementById("demo-area-03-image").style.top = ' + value_position_ + '+"px";\n';
  }
  return code;
};


Blockly.JavaScript['demo_pie_refresh'] = function (block) {
  var value_var_ = Blockly.JavaScript.valueToCode(block, 'var_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  code = 'chart.refresh();\n';
  return code;
};


Blockly.JavaScript['demo_pie_auto_refresh'] = function (block) {
  var value_sec_ = Blockly.JavaScript.valueToCode(block, 'sec_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  code = 'chart.autoRefresh(' + value_sec_ + ');\n';
  return code;
};


Blockly.JavaScript['demo_pie_chart'] = function (block) {
  var value_var_ = Blockly.JavaScript.valueToCode(block, 'var_', Blockly.JavaScript.ORDER_NONE);
  var value_title_ = Blockly.JavaScript.valueToCode(block, 'title_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  code = 'var chart = new chartAPI();\n';
  code += 'chart.title(' + value_title_ + ');\n';
  code += 'chart.init(\'demo-area-10-content\');\n';
  code += 'chart.render({\n';
  code += '  data: ' + value_var_ + ',\n';
  code += '  center: [\'50%\', \'40%\'],\n';
  code += '  radius: \'40%\'\n'
  code += '});\n';
  return code;
};


Blockly.JavaScript['chart_object'] = function (block) {
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_help_ = Blockly.JavaScript.valueToCode(block, 'help_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{value: ' + value_value_ + ', name: ' + value_help_ + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['demo_button_click'] = function (block) {
  var dropdown_name_ = block.getFieldValue('name_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("demo-area-05-btn' + dropdown_name_ + '").addEventListener("click",async function(){\n' +
    statements_do_ +
    '});\n';
  return code;
};


Blockly.JavaScript['demo_area_input'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("demo-area-04-color").oninput =async function(_color){\n' +
    '_color = this.value;\n' +
    statements_do_ +
    '};\n';
  return code;
};


Blockly.JavaScript['demo_area_input_color'] = function (block) {
  var code = '_color';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['demo_area_color'] = function (block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-04-area").style.background = ' + value_color_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_range_set'] = function (block) {
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("demo-area-06-input").setAttribute("min",' + value_min_ + ');\n' +
    'document.getElementById("demo-area-06-input").setAttribute("max",' + value_max_ + ');\n' +
    'document.getElementById("demo-area-06-input").setAttribute("step",' + value_step_ + ');\n' +
    'document.getElementById("demo-area-06-input").setAttribute("value",' + value_value_ + ');\n' +
    'document.getElementById("demo-area-06-input").oninput = async function(_value){\n' +
    '  _value = this.value;\n' +
    statements_do_ +
    '};\n';
  return code;
};


Blockly.JavaScript['demo_range_show'] = function (block) {
  var value_show_ = Blockly.JavaScript.valueToCode(block, 'show_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("demo-area-06-input-value").innerHTML = ' + value_show_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_range_input'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("demo-area-06-input").oninput = async function(_value){\n' +
    '_value = this.value;\n' +
    statements_do_ +
    '};\n';
  return code;
};


Blockly.JavaScript['demo_range_input_value'] = function (block) {
  var code = '_value';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['demo_youtube'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type_ = block.getFieldValue('type_');
  var text_id_ = block.getFieldValue('id_');
  var codeAdd;

  function getVideoId(u) {
    var v, vid;
    if (u.indexOf('?v=') != -1) {
      v = u.split('?v=');
      if (v[1].indexOf('&') != -1) {
        vid = v[1].split('&')[0];
      } else {
        vid = v[1];
      }
      return vid;
    } else {
      return u;
    }
  }

  function getListId(u) {
    var l, lid;
    if (u.indexOf('list=') != -1) {
      l = u.split('list=');
      if (l[1].indexOf('&') != -1) {
        lid = l[1].split('&')[0];
      } else {
        lid = l[1];
      }
      return lid;
    } else {
      return u;
    }
  }

  if (dropdown_type_ == 1) {
    codeAdd = '          ' + value_name_ + '.loadVideoById({\n' +
      '            videoId:"' + getVideoId(text_id_) + '"\n' +
      '          });\n'
  } else {
    codeAdd = '          ' + value_name_ + '.loadPlaylist({\n' +
      '            list:"' + getListId(text_id_) + '",\n' +
      '            listType:"playlist",\n' +
      '            index:0\n' +
      '          });\n' +
      '          ' + value_name_ + '.setLoop(true);\n'
  }
  var code =
    'var ' + value_name_ + 'Play, ' + value_name_ + 'Stop, ' + value_name_ + 'Pause;\n' +
    'await new Promise(function (resolve) {\n' +
    '  var tag = document.createElement("script");\n' +
    '  tag.src = "https://www.youtube.com/iframe_api";\n' +
    '  var scptTag = document.getElementsByTagName("script")[0];\n' +
    '  scptTag.parentNode.insertBefore(tag, scptTag);\n' +
    '  window.onYouTubeIframeAPIReady = function () {\n' +
    '    ' + value_name_ + ' = new YT.Player("player", {\n' +
    '      height: "240",\n' +
    '      width: "96%",\n' +
    //'      videoId: "' + text_id_ + '",\n' +
    '      playerVars: {\n' +
    '        autoplay: 1,\n' +
    '        controls: 1\n' +
    '      },\n' +
    '      events: {\n' +
    '        onReady: function (evt) {\n' + codeAdd +
    '          resolve();\n' +
    '        },\n' +
    '        onStateChange: onPlayerStateChange\n' +
    '      }\n' +
    '    });\n' +
    '  };\n' +
    '});\n' +
    'function onPlayerStateChange(event) {\n' +
    '  if(event.data == ' + value_name_ + 'Stop) {\n' +
    '    ' + value_name_ + 'StopCallback();\n' +
    '  }else if(event.data == ' + value_name_ + 'Play){\n' +
    '    ' + value_name_ + 'PlayCallback();\n' +
    '  }else if(event.data == ' + value_name_ + 'Pause){\n' +
    '    ' + value_name_ + 'PauseCallback();\n' +
    '  }\n' +
    '};\n';
  return code;
};


Blockly.JavaScript['demo_youtube_volume'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_volume_ = Blockly.JavaScript.valueToCode(block, 'volume_', Blockly.JavaScript.ORDER_ATOMIC);
  var varA = Blockly.JavaScript.variableDB_.getDistinctName(
    'varA', Blockly.Variables.NAME_TYPE);
  var code = 'var ' + varA + ' = ' + value_volume_ + ';\n' +
    'if (' + varA + ' >= 100) {\n' +
    '  ' + varA + ' = 100;\n' +
    '}\n' +
    variable_name_ + '.setVolume(' + varA + ');\n';
  return code;
};


Blockly.JavaScript['demo_youtube_speed'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_speed_ = block.getFieldValue('speed_');
  var code = variable_name_ + '.setPlaybackRate(' + dropdown_speed_ + ');\n';
  return code;
};


Blockly.JavaScript['demo_youtube_control'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var code;
  if (dropdown_status_ == '1') {
    code = variable_name_ + '.playVideo();\n';
  } else if (dropdown_status_ == '2') {
    code = variable_name_ + '.pauseVideo();\n';
  } else if (dropdown_status_ == '0') {
    code = variable_name_ + '.seekTo(0);\n' + variable_name_ + '.stopVideo();\n';
  }
  return code;
};


Blockly.JavaScript['demo_youtube_status'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var code = variable_name_ + '.getPlayerState() == ' + dropdown_status_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['demo_youtube_id'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);

  function getVideoId(u) {
    var v;
    var vid;
    var regex = /^\'.*\'$/;
    var isUrl = regex.test(u);

    if (!isUrl) {
      return u;
    }

    if (u.indexOf('?v=') != -1) {
      v = u.split('?v=');
      if (v[1].indexOf('&') != -1) {
        vid = v[1].split('&')[0];
      } else {
        vid = v[1];
      }
      return vid.replace(/'/g, "\"");
    } else {
      return u.replace(/'/g, "\"");
    }
  }
  var code = variable_name_ + '.loadVideoById(' + getVideoId(value_id_) + ');\n';
  return code;
};


Blockly.JavaScript['demo_youtube_listcontrol'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_preornext_ = block.getFieldValue('preOrNext_');
  var code = variable_name_ + dropdown_preornext_ + ';\n';
  return code;
};


Blockly.JavaScript['demo_youtube_listnum'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_num_ = Blockly.JavaScript.valueToCode(block, 'num_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.playVideoAt(' + (value_num_ * 1 - 1) + ');\n';
  return code;
};


Blockly.JavaScript['demo_youtube_currenttime'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = 'Math.round(' + variable_name_ + '.getCurrentTime()*10)/10';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['demo_youtube_seekto'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_sec_ = Blockly.JavaScript.valueToCode(block, 'sec_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.seekTo(' + value_sec_ + ');\n';
  return code;
};

Blockly.JavaScript['demo_youtube_callback'] = function (block) {
  var variable_val_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('val_'), Blockly.Variables.NAME_TYPE);
  var dropdown_event_ = block.getFieldValue('event_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code;
  if (dropdown_event_ == 0) {
    code = variable_val_ + 'Stop = 0;\n' +
      'function ' + variable_val_ + 'StopCallback(){\n' +
      statements_do_ + '\n' +
      '}\n';
  } else if (dropdown_event_ == 1) {
    code = variable_val_ + 'Play = 1;\n' +
      'function ' + variable_val_ + 'PlayCallback(){\n' +
      statements_do_ + '\n' +
      '}\n';
  } else if (dropdown_event_ == 2) {
    code = variable_val_ + 'Pause = 2;\n' +
      'function ' + variable_val_ + 'PauseCallback(){\n' +
      statements_do_ + '\n' +
      '}\n';
  }
  return code;
};

//controller
Blockly.JavaScript['demo_controller'] = function (block) {
  var dropdown_event_ = block.getFieldValue('event_');
  var dropdown_btn_ = block.getFieldValue('btn_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var mouseEvent, touchEvent, code;
  if (dropdown_event_ == '1') {
    mouseEvent = '"click"';
  } else if (dropdown_event_ == '2') {
    mouseEvent = '["mousedown","touchstart"]';
  } else if (dropdown_event_ == '3') {
    mouseEvent = '["mouseup","touchend"]';
  }
  var functionGetElement = Blockly.JavaScript.provideFunction_(
    'getElement', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(dom) {',
      '  var element = document.querySelector(dom);',
      '  return element;',
      '}'
    ]);
  var functionName = Blockly.JavaScript.provideFunction_(
    'controllerBtnEvent', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(c,e,callback) {',
      '  if(e!="click"){',
      '    var _u = navigator.userAgent;',
      '    if(_u.indexOf("Android") > -1 || _u.indexOf("iPhone") > -1 || _u.indexOf("iPad") > -1){',
      '      c.addEventListener(e[1], async function(){',
      '        callback();',
      '      });',
      '    }else{',
      '      c.addEventListener(e[0], async function(){',
      '        callback();',
      '      });',
      '    }',
      '  }else{',
      '      c.addEventListener("click", async function(){',
      '        callback();',
      '      });',
      '  }',
      '}'
    ]);
  code = functionName + '(' + functionGetElement + '("#demo-area-09 ' + dropdown_btn_ + '"),' + mouseEvent + ', async function(){\n' +
    statements_do_ +
    '});\n';
  return code;
};

Blockly.JavaScript['demo_controller_show'] = function (block) {
  var value_show_ = Blockly.JavaScript.valueToCode(block, 'show_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.querySelector("#demo-area-09 .btn-show").innerHTML = ' + value_show_ + ';\n';
  return code;
};

Blockly.JavaScript['demo_controller_range'] = function (block) {
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_default_ = Blockly.JavaScript.valueToCode(block, 'default_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_range_ = Blockly.JavaScript.statementToCode(block, 'range_');
  var range = Blockly.JavaScript.variableDB_.getDistinctName(
    'range', Blockly.Variables.NAME_TYPE);
  var p = Blockly.JavaScript.variableDB_.getDistinctName(
    'p', Blockly.Variables.NAME_TYPE);
  var code;
  code = 'var ' + p + ';\n' +
    'var ' + range + ' = document.querySelector(".demo-area-09-input");\n' +
    range + '.setAttribute("min",' + value_min_ + ');\n' +
    range + '.setAttribute("max",' + value_max_ + ');\n' +
    range + '.setAttribute("step",' + value_step_ + ');\n' +
    range + '.setAttribute("value",' + value_default_ + ');\n' +
    p + ' = Math.round((' + value_default_ + '-' + value_min_ + ')*100/(' + value_max_ + '-' + value_min_ + '));\n' +
    range + '.style.backgroundImage = "-webkit-linear-gradient(left ,#246 0%,#246 "+' + p + '+"%,#222 "+' + p + '+"%, #222 100%)";\n' +
    range + '.oninput = async function(){\n' +
    '  var _value = this.value;\n' +
    '  ' + p + ' = Math.round((_value-' + value_min_ + ')*100/(' + value_max_ + '-' + value_min_ + '));\n' +
    '  ' + range + '.style.backgroundImage = "-webkit-linear-gradient(left ,#246 0%,#246 "+' + p + '+"%,#222 "+' + p + '+"%, #222 100%)";\n' +
    statements_range_ +
    '};\n';
  return code;
};


Blockly.JavaScript['demo_controller_range_value'] = function (block) {
  var code = '_value';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['demo_controller_showcolor'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.querySelector("#demo-area-09 .btn-show").style.' + dropdown_type_ + ' = ' + value_color_ + ';\n';
  return code;
};

/*
.88b  d88.  .d88b.  d8888b. d888888b db      d88888b
88'YbdP`88 .8P  Y8. 88  `8D   `88'   88      88'
88  88  88 88    88 88oooY'    88    88      88ooooo
88  88  88 88    88 88~~~b.    88    88      88~~~~~
88  88  88 `8b  d8' 88   8D   .88.   88booo. 88.
YP  YP  YP  `Y88P'  Y8888P' Y888888P Y88888P Y88888P
*/


// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yztfg4
Blockly.JavaScript['mobile_deviceorientation_event'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var dropdown_type_ = block.getFieldValue('type_');
  var code;
  if (dropdown_type_ == 1) {
    code = 'setDeviceOrientationListener(async function(alpha, beta, gamma){\n' +
      statements_do_ +
      '});\n';
  } else {
    code = 'setDeviceMotionListener(async function(x, y, z){\n' +
      statements_do_ +
      '});\n';
  }
  return code;
};

Blockly.JavaScript['mobile_deviceorientation_event_val'] = function (block) {
  var dropdown_val_ = block.getFieldValue('val_');
  var dropdown_round_ = block.getFieldValue('round_');
  var code;
  if (dropdown_round_ == 1) {
    code = 'Math.round(' + dropdown_val_ + ')';
  } else {
    code = 'Math.round(' + dropdown_val_ + '*' + dropdown_round_ + ')/' + dropdown_round_;
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mobile_devicemotion_event_val'] = function (block) {
  var dropdown_val_ = block.getFieldValue('val_');
  var dropdown_round_ = block.getFieldValue('round_');
  var code;
  if (dropdown_round_ == 1) {
    code = 'Math.round(' + dropdown_val_ + ')';
  } else {
    code = 'Math.round(' + dropdown_val_ + '*' + dropdown_round_ + ')/' + dropdown_round_;
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mobile_deviceorientation_event_remove'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var code;
  if (dropdown_type_ == 1) {
    code = 'removeDeviceOrientationListener();\n';
  } else {
    code = 'removeDeviceMotionListener();\n';
  }
  return code;
};



/*
                                .   oooo
                              .o8   `888
ooo. .oo.  .oo.    .oooo.   .o888oo  888 .oo.
`888P"Y88bP"Y88b  `P  )88b    888    888P"Y88b
 888   888   888   .oP"888    888    888   888
 888   888   888  d8(  888    888 .  888   888
o888o o888o o888o `Y888""8o   "888" o888o o888o
*/

Blockly.JavaScript['math_round_digit'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var dropdown_digit_ = block.getFieldValue('digit_');
  var value_round_ = Blockly.JavaScript.valueToCode(block, 'round_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  if (dropdown_digit_ == 0) {
    code = 'Math.' + dropdown_type_ + '(' + value_round_ + ')';
  } else {
    var a = Math.pow(10, dropdown_digit_);
    code = '(Math.' + dropdown_type_ + '((' + value_round_ + ')*' + a + '))/' + a;
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['math_value_conversion'] = function (block) {
  var value_source_ = Blockly.JavaScript.valueToCode(block, 'source_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_omin_ = Blockly.JavaScript.valueToCode(block, 'omin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_omax_ = Blockly.JavaScript.valueToCode(block, 'omax_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmin_ = Blockly.JavaScript.valueToCode(block, 'cmin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmax_ = Blockly.JavaScript.valueToCode(block, 'cmax_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '((' + value_source_ + ' - (' + value_omin_ + ')) * (1/((' + value_omax_ + ')-(' + value_omin_ + ')))) * ((' + value_cmax_ + ')-(' + value_cmin_ + ')) + (' + value_cmin_ + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['number_to_string'] = function (block) {
  var value_number_ = Blockly.JavaScript.valueToCode(block, 'number_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_string_ = block.getFieldValue('string_');
  var code = '(' + value_number_ + ').toString(' + dropdown_string_ + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


/*
    .                                oooo
  .o8                                `888
.o888oo oooo d8b  .oooo.    .ooooo.   888  oooo
  888   `888""8P `P  )88b  d88' `"Y8  888 .8P'
  888    888      .oP"888  888        888888.
  888 .  888     d8(  888  888   .o8  888 `88b.
  "888" d888b    `Y888""8o `Y8bod8P' o888o o888o
*/

Blockly.JavaScript['demo_tracking'] = function (block) {
  var value_var_ = Blockly.JavaScript.valueToCode(block, 'var_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type_ = block.getFieldValue('type_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var statements_standby_ = Blockly.JavaScript.statementToCode(block, 'standby_');
  var share = value_var_ + '.myTracker.on("track", async function(event) {\n' +
    '  if (event.data.length === 0) {\n' +
    '    ' + value_var_ + '.context.clearRect(0, 0, ' + value_var_ + '.canvas.width, ' + value_var_ + '.canvas.height);\n' +
    '    ' + statements_standby_ + '\n' +
    '  } else {\n' +
    '    ' + value_var_ + '.context.clearRect(0, 0, ' + value_var_ + '.canvas.width, ' + value_var_ + '.canvas.height);\n' +
    '    event.data.forEach(async function(data) {\n' +
    '    ' + statements_do_ +
    '      if(data.color){\n' +
    '        ' + value_var_ + '.context.strokeStyle = ' + value_var_ + '.storkColor[data.color];\n' +
    '      }else{\n' +
    '        ' + value_var_ + '.context.strokeStyle = "#f00";\n' +
    '      }\n' +
    '      ' + value_var_ + '.context.lineWidth = 5;\n' +
    '      ' + value_var_ + '.context.strokeRect(data.x, data.y, data.width, data.height-30);\n' +
    '      ' + value_var_ + '.context.font = "11px Helvetica";\n' +
    '      ' + value_var_ + '.context.fillStyle = "#fff";\n' +
    '    });\n' +
    '  }\n' +
    '});\n' +
    'if(webRTC.enable){\n' +
    ' webRTC.ready(function(){\n' +
    '  ' + value_var_ + '.trackerTask = tracking.track("#demo-area-08-video", ' + value_var_ + '.myTracker, {\n' +
    '  camera: false \n' +
    '  });\n' +
    ' });\n' +
    '}else {\n' +
    '  ' + value_var_ + '.trackerTask = tracking.track("#demo-area-08-video", ' + value_var_ + '.myTracker, {\n' +
    '  camera: true \n' +
    '  });\n}\n';
  var code;
  if (dropdown_type_ == 'color') {
    code = value_var_ + ' = {};\n' +
      value_var_ + '.canvas = document.getElementById("demo-area-08-canvas");\n' +
      value_var_ + '.context = ' + value_var_ + '.canvas.getContext("2d");\n' +
      'tracking.ColorTracker.registerColor("red", function(r, g, b) {\n' +
      '  if (r > 160 && g < 80 && b < 80) {\n' +
      '    return true;\n' +
      '  }\n' +
      '  return false;\n' +
      '});\n' +
      'tracking.ColorTracker.registerColor("green", function(r, g, b) {\n' +
      '  if (r < 80 && g > 160 && b < 80) {\n' +
      '    return true;\n' +
      '  }\n' +
      '  return false;\n' +
      '});\n\n' +
      'tracking.ColorTracker.registerColor("blue", function(r, g, b) {\n' +
      '  if (r < 80 && g < 80 && b > 160) {\n' +
      '    return true;\n' +
      '  }\n' +
      '  return false;\n' +
      '});\n\n' +
      value_var_ + '.myTracker = new tracking.ColorTracker(["magenta", "cyan", "yellow", "red", "green", "blue"]);\n' +
      value_var_ + '.storkColor = {\n' +
      '  magenta: "#f0a",\n' +
      '  red: "#f00",\n' +
      '  cyan: "#0ff",\n' +
      '  yellow: "#ff0",\n' +
      '  green: "#0c0",\n' +
      '  blue: "#00f"\n' +
      '};\n\n' +
      share;
  } else if (dropdown_type_ == 'face') {
    code = value_var_ + ' = {};\n' +
      value_var_ + '.canvas = document.getElementById("demo-area-08-canvas");\n' +
      value_var_ + '.context = ' + value_var_ + '.canvas.getContext("2d");\n' +
      value_var_ + '.myTracker = new tracking.ObjectTracker("face");\n' +
      value_var_ + '.myTracker.setInitialScale(4);\n' +
      value_var_ + '.myTracker.setStepSize(0.5);\n' +
      value_var_ + '.myTracker.setEdgesDensity(0.1);\n\n' +
      share;
  }
  return code;
};


Blockly.JavaScript['demo_video_url'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webRTC.startVideo(' + value_url_ + ', "demo-area-08-video");\n';
  return code;
};


Blockly.JavaScript['demo_tracking_face'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_ed_ = block.getFieldValue('ed_');
  var dropdown_ss_ = block.getFieldValue('ss_');
  var dropdown_is_ = block.getFieldValue('is_');
  var code = variable_name_ + '.myTracker.setInitialScale(' + dropdown_is_ + ');\n' +
    variable_name_ + '.myTracker.setStepSize(' + dropdown_ss_ + ');\n' +
    variable_name_ + '.myTracker.setEdgesDensity(' + dropdown_ed_ + ');\n\n';
  return code;
};


Blockly.JavaScript['demo_tracking_action'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_action_ = block.getFieldValue('action_');
  var code = variable_name_ + '.context.clearRect(0, 0, ' + variable_name_ + '.canvas.width, ' + variable_name_ + '.canvas.height);\n' +
    variable_name_ + '.trackerTask.' + dropdown_action_ + '();\n';
  return code;
};


Blockly.JavaScript['demo_tracking_val'] = function (block) {
  var dropdown_val_ = block.getFieldValue('val_');
  var code = '';
  if (dropdown_val_ === 'total') {
    code = 'event.data.length';
  } else if (dropdown_val_ === 'age') {
    code = 'faceAPI.getAge()';
  } else if (dropdown_val_ === 'emotion') {
    code = 'faceAPI.getEmotion()';
  } else {
    code = 'data.' + dropdown_val_;
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
                             o8o
                             `"'
ooo. .oo.  .oo.    .oooo.   oooo  ooo. .oo.
`888P"Y88bP"Y88b  `P  )88b  `888  `888P"Y88b
 888   888   888   .oP"888   888   888   888
 888   888   888  d8(  888   888   888   888
o888o o888o o888o `Y888""8o o888o o888o o888o
*/


Blockly.JavaScript['data_transfer'] = function (block) {
  var variable_data = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('dataCtrl'), Blockly.Variables.NAME_TYPE);
  var dropdown_datatype = block.getFieldValue('dataType');
  var code = variable_data + ' = getDataTransfer(board);\n';
  return code;
};


Blockly.JavaScript['data_string_send'] = function (block) {
  var variable_datactrl = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('dataCtrl'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_datactrl + '.sendString(' + value_name + ');\n';
  return code;
};


Blockly.JavaScript['data_string_receive'] = function (block) {
  var variable_datactrl = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('dataCtrl'), Blockly.Variables.NAME_TYPE);
  var code = variable_datactrl + '.getDataString()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['data_string_callback'] = function (block) {
  var variable_datactrl = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('dataCtrl'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = variable_datactrl + '.onMessage(function(){';
  code += '\n';
  code += statements_name;
  code += '});\n';
  return code;
};


Blockly.JavaScript['data_string_send_callback'] = function (block) {
  var variable_datactrl = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('dataCtrl'), Blockly.Variables.NAME_TYPE);
  var variable_sendstr = Blockly.JavaScript.valueToCode(block, 'sendStr', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = variable_datactrl + '.sendString(' + variable_sendstr + ',function(){';
  code += '\n';
  code += statements_name;
  code += '});\n';
  return code;
};


Blockly.JavaScript['console'] = function (block) {
  var value_console = Blockly.JavaScript.valueToCode(block, 'console', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.log(' + value_console + ');\n';
  return code;
};


Blockly.JavaScript['getdate'] = function (block) {
  var dropdown_date_ = block.getFieldValue('date_');
  var functionName = Blockly.JavaScript.provideFunction_(
    'get_date', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(t) {',
    _getdate.toString().replace(/function _getdate\(\) {\r?\n/, '')
    ]);
  var code = functionName + '("' + dropdown_date_ + '")';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

function _getdate() {
  var varDay = new Date(),
    varYear = varDay.getFullYear(),
    varMonth = varDay.getMonth() + 1,
    varDate = varDay.getDate();
  var varNow;
  if (t == "ymd") {
    varNow = varYear + "/" + varMonth + "/" + varDate;
  } else if (t == "mdy") {
    varNow = varMonth + "/" + varDate + "/" + varYear;
  } else if (t == "dmy") {
    varNow = varDate + "/" + varMonth + "/" + varYear;
  } else if (t == "y") {
    varNow = varYear;
  } else if (t == "m") {
    varNow = varMonth;
  } else if (t == "d") {
    varNow = varDate;
  }
  return varNow;
}



Blockly.JavaScript['gettime'] = function (block) {
  var dropdown_time_ = block.getFieldValue('time_');
  var functionName = Blockly.JavaScript.provideFunction_(
    'get_time', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(t) {',
    _gettime.toString().replace(/function _gettime\(\) {\r?\n/, '')
    ]);
  var code = functionName + '("' + dropdown_time_ + '")';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

function _gettime() {
  var varTime = new Date(),
    varHours = varTime.getHours(),
    varMinutes = varTime.getMinutes(),
    varSeconds = varTime.getSeconds();
  var varNow;
  if (varHours < 10) {
    varHours = '0' + varHours;
  }
  if (varMinutes < 10) {
    varMinutes = '0' + varMinutes;
  }
  if (varSeconds < 10) {
    varSeconds = '0' + varSeconds;
  }
  if (t == "hms") {
    varNow = varHours + ":" + varMinutes + ":" + varSeconds;
  } else if (t == "h") {
    varNow = varHours * 1;
  } else if (t == "m") {
    varNow = varMinutes * 1;
  } else if (t == "s") {
    varNow = varSeconds * 1;
  }
  return varNow;
}


Blockly.JavaScript['board_server'] = function (block) {
  var value_server_ = Blockly.JavaScript.valueToCode(block, 'server_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webduino.WebArduino.DEFAULT_SERVER = webduino.board.Smart.DEFAULT_SERVER = ' + value_server_ + ';\n';
  return code;
};

/*
Blockly.JavaScript['board'] = function (block) {
  var value_device_ = Blockly.JavaScript.valueToCode(block, 'device_', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_check_ = block.getFieldValue('check_');
  var checkbox_multi_ = block.getFieldValue('multi_');
  var dropdown_type_ = block.getFieldValue('type_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var statements_callbacks_ = Blockly.JavaScript.statementToCode(block, 'callbacks_');
  var board = 'board: \'Bit\', ';
  var transport = ', transport: \'mqtt\'';
  var ws = '';
  var type;

  if (dropdown_type_ === '1') {
    // Wi-Fi
    if (checkbox_multi_ === 'TRUE') {
      type = 'boardReady({' + board + 'device: ' + value_device_ + transport + ', multi: true}, async function (board) {\n';
    } else {
      type = 'boardReady({' + board + 'device: ' + value_device_ + transport + '}, async function (board) {\n';
    }
  } else if (dropdown_type_ === '4') {
    // Websocket
    value_device_ = /.+:8080/.test(value_device_) ? value_device_ : value_device_.replace(/'$/, ":8080'");
    if (checkbox_multi_ === 'TRUE') {
      type = 'boardReady({' + board + 'url: ' + value_device_ + ws + ', multi: true }, async function (board) {\n';
    } else {
      type = 'boardReady({' + board + 'url: ' + value_device_ + ws + '}, async function (board) {\n';
    }
  } else if (dropdown_type_ === '5') {
    // Simulator
    if (checkbox_multi_ === 'TRUE') {
      type = 'boardReady({' + board + 'device: ' + value_device_ + ', multi: true, transport: \'message\', window: window.top.frames[0]}, async function (board) {\n';
    } else {
      type = 'boardReady({' + board + 'device: ' + value_device_ + ', transport: \'message\', window: window.top.frames[0]}, async function (board) {\n';
    }
  }


  var code;
  if (checkbox_check_ === 'FALSE') {
    code = type +
      '  board.samplingInterval = ' + dropdown_rate_ + ';\n' +
      statements_callbacks_ +
      '});\n';
  } else if (checkbox_check_ === 'TRUE') {
    code = 'if (window.readyBoardLength) {\n' +
      '  window.readyBoardLength = window.readyBoardLength + 1;\n' +
      '} else {\n' +
      '  window.readyBoardLength = 1;\n' +
      '}\n\n' +
      type +
      '  board.samplingInterval = ' + dropdown_rate_ + ';\n' +
      statements_callbacks_ +
      '  if (window.boardReadyNumber) {\n' +
      '    window.boardReadyNumber = window.boardReadyNumber +1;\n' +
      '  } else {\n' +
      '    window.boardReadyNumber = 1;\n' +
      '  }\n' +
      '  allBoardReady(window.boardReadyNumber);\n' +
      '});\n';
  }
  return code;
}
*/

// keep these 2 blocks for backward compatibility
Blockly.JavaScript['board_ready'] = Blockly.JavaScript['board'];
Blockly.JavaScript['smart_ready'] = Blockly.JavaScript['board'];

Blockly.JavaScript['board_error'] = function (block) {
  var statements_callbacks_ = Blockly.JavaScript.statementToCode(block, 'callbacks_');
  var code = "board.on('error',async function (err) {\n  board.error = err;\n" +
    statements_callbacks_ +
    "});\n";
  return code;
};


Blockly.JavaScript['all_board_ready'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function allBoardReady(boardReadyNumber){\n' +
    '  if(window.boardReadyNumber==window.readyBoardLength){\n' +
    '  ' + statements_do_ +
    '  }\n' +
    '}\n';
  return code;
};


Blockly.JavaScript['board_query_pin_state'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'board.queryPinState(' + value_pin + ', async function(){\n' +
    '  var _localPinVar_ = board.getDigitalPin(' + value_pin + ');\n' +
    statements_do_ + '\n' +
    '});\n';
  return code;
};


Blockly.JavaScript['board_pin_state'] = function (block) {
  var code = '_localPinVar_.state';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['led_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getLed(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['led_state'] = function (block) {
  var variable_led_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('led_'), Blockly.Variables.NAME_TYPE);
  var dropdown_state_ = block.getFieldValue('state_');
  var code = variable_led_ + '.' + dropdown_state_ + '();\n';
  return code;
};


Blockly.JavaScript['led_toggle'] = function (block) {
  var variable_led_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('led_'), Blockly.Variables.NAME_TYPE);
  var code = variable_led_ + '.toggle();\n';
  return code;
};

Blockly.JavaScript['led_blink'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_time_ = Blockly.JavaScript.valueToCode(block, 'time_',
    Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.blink(' + value_time_ + '*1000);\n';
  return code;
};


Blockly.JavaScript['led_intensity'] = function (block) {
  var variable_led_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('led_'), Blockly.Variables.NAME_TYPE);
  var value_intensity_ = Blockly.JavaScript.valueToCode(block, 'intensity_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_led_ + '.intensity = ' + value_intensity_ + ';\n';
  return code;
};


Blockly.JavaScript['led_callback'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_state_ = block.getFieldValue('state_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_name_ + '.' + dropdown_state_ + '(async function(){\n  ' + statements_do_ + '\n});\n';
  return code;
};


Blockly.JavaScript['led_blink_callback'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_time_ = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_name_ + '.blink(' + value_time_ * 1000 + ', async function(){\n  ' + statements_do_ + '\n});\n';
  return code;
};


Blockly.JavaScript['rgbled_new'] = function (block) {
  var dropdown_red_ = block.getFieldValue('red_');
  var dropdown_green_ = block.getFieldValue('green_');
  var dropdown_blue_ = block.getFieldValue('blue_');
  var code = 'getRGBLed(board, bitGPIO(' + dropdown_red_ + '), bitGPIO(' + dropdown_green_ + '), bitGPIO(' + dropdown_blue_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rgbled_new_cathode'] = function (block) {
  var dropdown_red_ = block.getFieldValue('red_');
  var dropdown_green_ = block.getFieldValue('green_');
  var dropdown_blue_ = block.getFieldValue('blue_');
  var code = 'getRGBLedCathode(board, ' + dropdown_red_ + ', ' + dropdown_green_ + ', ' + dropdown_blue_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rgbled_setcolor'] = function (block) {
  var variable_rgbled_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rgbled_'), Blockly.Variables.NAME_TYPE);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_NONE);
  var code = variable_rgbled_ + '.setColor(' + value_color_ + ');\n';
  return code;
};


Blockly.JavaScript['rgbled_setcolor_callback'] = function (block) {
  var variable_rgbled_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rgbled_'), Blockly.Variables.NAME_TYPE);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_NONE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_rgbled_ + '.setColor(' + value_color_ + ' , async function(){\n  ' + statements_do_ + '\n});\n';
  return code;
};

Blockly.JavaScript['timer'] = function (block) {
  var value_secs_ = Blockly.JavaScript.valueToCode(block, 'secs_', Blockly.JavaScript.ORDER_NONE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setTimeout(async function () {\n' + statements_do_ + '}, 1000 * ' + value_secs_ + ');\n';
  return code;
};

Blockly.JavaScript['interval'] = function (block) {
  var value_secs_ = Blockly.JavaScript.valueToCode(block, 'secs_', Blockly.JavaScript.ORDER_NONE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function () {\n' + statements_do_ + '}, 1000 * ' + value_secs_ + ');\n';
  return code;
};

Blockly.JavaScript['delay'] = function (block) {
  var value_secs_ = Blockly.JavaScript.valueToCode(block, 'secs_', Blockly.JavaScript.ORDER_NONE);
  var code = 'await delay(' + value_secs_ + ', true); //delay\n';
  return code;
};


Blockly.JavaScript['pir_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getPir(board, ' + dropdown_pin_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['pir_status'] = function (block) {
  var variable_item_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('item_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var statements_var_ = Blockly.JavaScript.statementToCode(block, 'var_');
  var code = variable_item_ + '.on("' + dropdown_status_ + '", async function(){\n' +
    statements_var_ + '\n' +
    '});\n';
  return code;
};

Blockly.JavaScript['shock_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getShock(board, ' + dropdown_pin_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['shock_event'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var dropdown_event_ = block.getFieldValue('event_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_var_ + '.on("' + dropdown_event_ + '", async function(){\n' +
    '  console.log("' + dropdown_event_ + '");\n' +
    '  ' + statements_do_ + '\n' +
    '});\n';
  return code;
};



Blockly.JavaScript['smart_servo_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('id_');
  var code = 'getSmartServo(board, ' + dropdown_pin_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['smart_servo_set'] = function (block) {
  var variable_pos_ = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_pos_ = Blockly.JavaScript.valueToCode(block,
    'pos_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time_ = Blockly.JavaScript.valueToCode(block,
    'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_pos_ + '.cmd(' + value_time_ + ',' + value_pos_ + ');\n';
  return code;
};


Blockly.JavaScript['smart_servo_set_speed'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_speed_ = Blockly.JavaScript.valueToCode(block,
    'speed_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time_ = Blockly.JavaScript.valueToCode(block,
    'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.speed(' + value_time_ + ',' + value_speed_ + ');\n';
  return code;
};


Blockly.JavaScript['relay_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getRelay(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['relay_state'] = function (block) {
  var variable_relay_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('relay_'), Blockly.Variables.NAME_TYPE);
  var dropdown_state_ = block.getFieldValue('state_');
  var code = variable_relay_ + '.' + dropdown_state_ + '();\n';
  return code;
};


Blockly.JavaScript['servo_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getServo(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['servo_angle_set'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var value_angle_ = Blockly.JavaScript.valueToCode(block, 'angle_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_angle_ <= 5) {
    value_angle_ = 5;
  }
  if (value_angle_ > 270) {
    value_angle_ = 5;
  }
  if (value_angle_ >= 175 && value_angle_ <= 270) {
    value_angle_ = 175;
  }
  var code = variable_var_ + '.angle = ' + value_angle_ + ';\n';
  return code;
};


Blockly.JavaScript['data_firebase'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var text_url_ = block.getFieldValue('url_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = value_name_ + ' = new Firebase("' + text_url_ + '");\n' + statements_do_;
  return code;
};


Blockly.JavaScript['data_firebase_url'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = value_name_ + ' = new Firebase(' + value_url_ + ');\n' + statements_do_;
  return code;
};


Blockly.JavaScript['data_firebase_write'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var statements_write_ = Blockly.JavaScript.statementToCode(block, 'write_');
  var c = '';
  for (var n = 0; n < block.itemCount_; n++) {
    var name = block.getFieldValue('name_' + n) || 'unknow';
    var val = Blockly.JavaScript.valueToCode(block, 'data_' + n) || '""';
    if (n < (block.itemCount_ - 1)) {
      c = c + '  ' + name + ':' + val + ',\n';
    } else {
      c = c + '  ' + name + ':' + val + '\n';
    }
  }
  var code = variable_var_ + '.push({\n' + c +
    '});\n';
  return code;
};


Blockly.JavaScript['data_firebase_data'] = function (block) {
  var text_attr_ = block.getFieldValue('attr_');
  var value_data_ = Blockly.JavaScript.valueToCode(block, 'data_', Blockly.JavaScript.ORDER_ATOMIC);
  var next = block.getNextBlock();
  var code;
  if (next === null) {
    code = text_attr_ + ':' + value_data_;
  } else {
    code = text_attr_ + ':' + value_data_ + ',';
  }
  return code;
};


Blockly.JavaScript['data_firebase_read'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var text_attr_ = block.getFieldValue('attr_');
  var value_read_ = Blockly.JavaScript.valueToCode(block, 'read_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type_ = block.getFieldValue('type_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code;
  if (dropdown_type_ == 1) {
    code = variable_name_ + '.on("value", async function(snapshot) {\n' +
      '  ' + value_read_ + '=[];\n' +
      '  snapshot.forEach(async function(data) {\n' +
      '    if(data.val().' + text_attr_ + '){\n' +
      '      ' + value_read_ + '.push(data.val().' + text_attr_ + ');\n' +
      '    }\n' +
      '  });\n' +
      statements_do_ +
      ' }, function (errorObject) {\n' +
      '   console.log("The read failed: " + errorObject.code);\n' +
      '});\n';
  } else {
    code = variable_name_ + '.limitToLast(1).on("child_added", async function(snapshot){\n' +
      '  ' + value_read_ + ' = snapshot.val().' + text_attr_ + ';\n' +
      statements_do_ +
      '});\n';
  }
  return code;
};


Blockly.JavaScript['data_firebase_clear'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.set({});\n' +
    'console.log("clear ok");\n';;
  return code;
};

//object
Blockly.JavaScript['new_object'] = function (block) {
  var c = '';
  for (var n = 0; n < block.itemCount_; n++) {
    var name = block.getFieldValue('name_' + n) || 'unknow';
    var val = Blockly.JavaScript.valueToCode(block, 'data_' + n) || '""';
    if (n < (block.itemCount_ - 1)) {
      c = c + '  ' + name + ':' + val + ',\n';
    } else {
      c = c + '  ' + name + ':' + val + '\n';
    }
  }
  var code = '{' + c +
    '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['temp_data_set'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var setCookie = Blockly.JavaScript.variableDB_.getDistinctName(
    'setCookie', Blockly.Variables.NAME_TYPE);
  var a = value_name_.split('');
  value_name_ = a.splice(1, (a.length - 2)).join('');
  var code;
  if (dropdown_type_ == 1) {
    code = 'function ' + setCookie + '(c_name,value,expiredays){\n' +
      '  var exdate=new Date();\n' +
      '  exdate.setDate(exdate.getDate()+expiredays);\n' +
      '  document.cookie=c_name+ "=" +escape(value)+\n' +
      '  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());\n' +
      '}\n' +
      setCookie + '("' + value_name_ + '",' + value_value_ + ');\n';
  } else if (dropdown_type_ == 2) {
    code = 'localStorage.' + value_name_ + ' = ' + value_value_ + ';\n';
  } else if (dropdown_type_ == 3) {
    code = 'sessionStorage.' + value_name_ + ' = ' + value_value_ + ';\n';
  }
  return code;
};


Blockly.JavaScript['temp_data_get'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var getCookie = Blockly.JavaScript.variableDB_.getDistinctName(
    'getCookie', Blockly.Variables.NAME_TYPE);
  var a = value_name_.split('');
  value_name_ = a.splice(1, (a.length - 2)).join('');
  var code;
  if (dropdown_type_ == 1) {
    code = '(function(){\n' +
      '  function ' + getCookie + '(c_name){\n' +
      '    if (document.cookie.length>0){\n' +
      '      var c_start=document.cookie.indexOf(c_name + "=");\n' +
      '      if (c_start!=-1){\n' +
      '        c_start=c_start + c_name.length+1;\n' +
      '        var c_end=document.cookie.indexOf(";",c_start);\n' +
      '        if (c_end==-1){\n' +
      '          c_end=document.cookie.length;\n' +
      '          return unescape(document.cookie.substring(c_start,c_end));\n' +
      '        }\n' +
      '      }\n' +
      '    }\n' +
      '    return "";\n' +
      '  }\n' +
      '  return ' + getCookie + '("' + value_name_ + '");\n' +
      '})()';
  } else if (dropdown_type_ == 2) {
    code = 'localStorage.' + value_name_;
  } else if (dropdown_type_ == 3) {
    code = 'sessionStorage.' + value_name_;
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['sound_recognition'] = function (block) {
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_interimresults_ = block.getFieldValue('interimResults_');
  var statements_recognition_ = Blockly.JavaScript.statementToCode(block, 'recognition_');
  var resultLength = Blockly.JavaScript.variableDB_.getDistinctName(
    'resultLength', Blockly.Variables.NAME_TYPE);
  var resultTranscript = Blockly.JavaScript.variableDB_.getDistinctName(
    'resultTranscript', Blockly.Variables.NAME_TYPE);
  var speechRecognition = Blockly.JavaScript.variableDB_.getDistinctName(
    'speechRecognition', Blockly.Variables.NAME_TYPE);
  var inter1, inter2, consoleFinal1, consoleFinal2;
  if (dropdown_interimresults_ == 'on') {
    inter1 = 'false';
    inter2 = 'true';
    consoleFinal1 = '';
    consoleFinal2 = 'console.log("final");\n';
  } else if (dropdown_interimresults_ == 'off') {
    inter1 = 'true';
    inter2 = 'false';
    consoleFinal1 = 'console.log("final");\n';
    consoleFinal2 = '';
  }
  var code = 'async function ' + speechRecognition + '(){\n' +
    '  if (!("webkitSpeechRecognition" in window)) {\n' +
    '    alert("本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)");\n' +
    '  } else{\n' +
    '    window._recognition = new webkitSpeechRecognition();\n' +
    '    window._recognition.continuous = true;\n' +
    '    window._recognition.interimResults = true;\n' +
    '    window._recognition.lang = "' + dropdown_lang_ + '";\n\n' +
    '    window._recognition.onstart = async function() {\n' +
    '      window._recognition.status = true;\n' +
    '      console.log("Start recognize...");\n' +
    '    };\n\n' +
    '    window._recognition.onend = async function() {\n' +
    '      console.log("Stop recognize");\n' +
    '      if(window._recognition.status){\n' +
    '         window._recognition.start();\n' +
    '      }\n' +
    '    };\n\n' +
    '    window._recognition.onresult = async function(event,result) {\n' +
    '      result = {};\n' +
    '      result.resultLength = event.results.length-1;\n' +
    '      result.resultTranscript = event.results[result.resultLength][0].transcript;\n' +
    '      if(event.results[result.resultLength].isFinal===' + inter1 + '){\n' +
    '        console.log(result.resultTranscript);\n' +
    '        ' + statements_recognition_ +
    '        ' + consoleFinal1 +
    '      }else if(event.results[result.resultLength].isFinal===' + inter2 + '){\n' +
    '        ' + consoleFinal2 +
    '      }\n' +
    '    };\n' +
    '    window._recognition.start();\n' +
    '  }\n' +
    '}\n' +
    speechRecognition + '();\n';
  return code;
};


Blockly.JavaScript['sound_recognition_check'] = function (block) {
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code;
  var a = value_text_.split('');
  if (a[0] == '\'') {
    var b = value_text_.replace(/'/g, '');
    code = 'if(result.resultTranscript.indexOf("' + b + '")!== -1){\n' +
      '        ' + statements_do_ +
      '        console.log(event.results[result.resultLength]);\n' +
      '      }\n';
  } else {
    code = 'if(result.resultTranscript.indexOf(' + value_text_ + ')!==-1){\n' +
      '        ' + statements_do_ +
      '      }\n';
  }
  return code;
};

Blockly.JavaScript['sound_recognition_stop'] = function (block) {
  var dropdown_status_ = block.getFieldValue('status_');
  var code;
  if (dropdown_status_ == 'stop') {
    code = 'window._recognition.status = false;\n' +
      'window._recognition.' + dropdown_status_ + '();\n';
  } else {
    code = 'if(!window._recognition.status){\n' +
      '  window._recognition.' + dropdown_status_ + '();\n' +
      '}\n';
  }
  return code;
};



Blockly.JavaScript['sound_recognition_text'] = function (block) {
  var code = 'result.resultTranscript';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['translate_speech'] = function (block) {
  var text_id_ = block.getFieldValue('id_');
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_sex_ = block.getFieldValue('sex_');
  var value_speech_ = Blockly.JavaScript.valueToCode(block, 'speech_', Blockly.JavaScript.ORDER_ATOMIC);
  var body = Blockly.JavaScript.variableDB_.getDistinctName(
    'body', Blockly.Variables.NAME_TYPE);
  var creatAudio = Blockly.JavaScript.variableDB_.getDistinctName(
    'creatAudio', Blockly.Variables.NAME_TYPE);
  var audio = Blockly.JavaScript.variableDB_.getDistinctName(
    'audio', Blockly.Variables.NAME_TYPE);
  var text = Blockly.JavaScript.variableDB_.getDistinctName(
    'text', Blockly.Variables.NAME_TYPE);
  var appID = text_id_;
  var language = dropdown_lang_;
  var format = 'audio/mp3&options=MinSize|' + dropdown_sex_;
  var a = value_speech_.split('');
  value_speech_ = a.splice(1, (a.length - 2)).join('');
  var code = '(function(){\n' +
    '  var ' + body + ' = document.querySelector("body");\n' +
    '  var ' + creatAudio + ' = document.createElement("audio");\n' +
    '  ' + body + '.appendChild(' + creatAudio + ');\n' +
    '  var ' + audio + ' = document.querySelector("audio");\n' +
    '  ' + audio + '.setAttribute("autoplay","true");\n' +
    '  ' + audio + '.setAttribute("src","http://api.microsofttranslator.com/v2/http.svc/speak?appId=' + appID + '&language=' + language + '&format=' + format + '&text=' + value_speech_ + '");\n' +
    '})();\n';
  return code;
};

Blockly.JavaScript['speak'] = function (block) {
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_setting_ = Blockly.JavaScript.valueToCode(block, 'setting_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  if (!value_setting_) {
    code = 'speak(' + value_text_ + ');\n';
  } else {
    code = 'speak(' + value_text_ + ',[' + value_setting_ + ']);\n';
  }
  return code;
};

Blockly.JavaScript['speak_callback'] = function (block) {
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_setting_ = Blockly.JavaScript.valueToCode(block, 'setting_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type_ = block.getFieldValue('type_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  if (!value_setting_) {
    value_setting_ = '"zh-TW",1,1,1';
  }
  var code = 'speak(' + value_text_ + ',[' + value_setting_ + '],async function(){\n' +
    statements_do_ + '\n' +
    '},' + dropdown_type_ + ');\n';
  return code;
};

Blockly.JavaScript['speak_event'] = function (block) {
  var dropdown_event_ = block.getFieldValue('event_');
  var code = 'speakSynth.' + dropdown_event_ + '();\n';
  return code;
};

Blockly.JavaScript['speak_setting_sample'] = function (block) {
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_volume_ = block.getFieldValue('volume_');
  var dropdown_pitch_ = block.getFieldValue('pitch_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var code = '"' + dropdown_lang_ + '",' + dropdown_volume_ + ',' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['status_repeat'] = function (block) {
  var value_times_ = Blockly.JavaScript.valueToCode(block, 'times_', Blockly.JavaScript.ORDER_ATOMIC);
  var repeat = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeat', Blockly.Variables.NAME_TYPE);
  var repeatNum = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeatNum', Blockly.Variables.NAME_TYPE);
  var timer = Blockly.JavaScript.variableDB_.getDistinctName(
    'timer', Blockly.Variables.NAME_TYPE);
  var time = Blockly.JavaScript.variableDB_.getDistinctName(
    'time', Blockly.Variables.NAME_TYPE);
  var repeatDelay = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeatDelay', Blockly.Variables.NAME_TYPE);
  var repeatPromise = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeatPromise', Blockly.Variables.NAME_TYPE);
  var code;
  var codeArray = {};
  codeArray.code = [];
  codeArray.argument = [];
  codeArray.delayTime = [];
  if (value_times_ == 0) {
    value_times_ = 1;
  } else if (value_times_ == 1) {
    value_times_ = 2;
  }
  if (block.itemCount_ == 0) {
    return code = '';
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.JavaScript.statementToCode(block, 'ADD0');
    var time0 = block.getFieldValue('time0');
    if (isNaN(time0 * 1)) {
      code = 'alert("時間格式錯誤！請填入數字！Time format error! Please enter number!");';
    } else {
      code = 'var ' + timer + ', ' + repeatNum + '=0;\n' +
        'var ' + repeat + ' = async function(){\n' +
        '  if(' + repeatNum + '<' + value_times_ + '){\n' +
        '  ' + argument0 +
        '    ' + repeatNum + ' = ' + repeatNum + ' + 1;\n' +
        '    ' + timer + ' = setTimeout(' + repeat + ',' + (time0 * 1000) + ');\n' +
        '  }else{\n' +
        '    ' + repeatNum + '=0;\n' +
        '    clearTimeout(' + timer + ');\n' +
        '  }\n' +
        '};\n' +
        '' + repeat + '();\n';
    }
    return code;
  } else {
    for (var n = 0; n < block.itemCount_; n++) {
      codeArray.argument[n] = Blockly.JavaScript.statementToCode(block, 'ADD' + n);
      codeArray.delayTime[n] = block.getFieldValue('time' + n);
      if (isNaN(codeArray.delayTime[n] * 1)) {
        codeArray.code[n] = '.then(function(){\n' +
          '      alert("時間格式錯誤！請填入數字！Time format error! Please enter number!");\n' +
          '    })';
      } else {
        codeArray.code[n] = '.then(function(){\n' +
          '      ' + codeArray.argument[n] +
          '      return ' + repeatDelay + '(' + (1000 * codeArray.delayTime[n]) + ');\n' +
          '    })';
      }
    }
    var codeContent = codeArray.code.join('');
    code = 'var ' + timer + ', ' + repeatNum + '=0;\n' +
      'var ' + repeat + ' = async function(){\n' +
      '  var ' + time + ';\n' +
      '  var ' + repeatDelay + ' = async function(' + time + '){\n' +
      '    return new Promise(function(resolve){\n' +
      '      ' + timer + ' = setTimeout(resolve,' + time + ');\n' +
      '    });\n' +
      '  };\n' +
      '  var ' + repeatPromise + ' = async function(){\n' +
      '    ' + repeatDelay + '(1)' + codeContent + '.then(async function(){\n' +
      '      if(' + repeatNum + '<' + (value_times_ - 1) + '){\n' +
      '        ' + repeatNum + ' = ' + repeatNum + ' + 1;\n' +
      '        ' + repeatPromise + '();\n' +
      '      }else{\n' +
      '        ' + repeatNum + '=0;\n' +
      '        clearTimeout(' + timer + ');\n' +
      '      }\n' +
      '    });\n' +
      '  };\n' +
      '  ' + repeatPromise + '();\n' +
      '};\n' +
      '' + repeat + '();\n';
    return code;
  }
};


Blockly.JavaScript['status_repeat_forever'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var repeat = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeat', Blockly.Variables.NAME_TYPE);
  var time = Blockly.JavaScript.variableDB_.getDistinctName(
    'time', Blockly.Variables.NAME_TYPE);
  var repeatDelay = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeatDelay', Blockly.Variables.NAME_TYPE);
  var repeatPromise = Blockly.JavaScript.variableDB_.getDistinctName(
    'repeatPromise', Blockly.Variables.NAME_TYPE);
  var code;
  var codeArray = {};
  codeArray.code = [];
  codeArray.argument = [];
  codeArray.delayTime = [];
  if (block.itemCount_ == 0) {
    return code = '';
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.JavaScript.statementToCode(block, 'ADD0');
    var time0 = block.getFieldValue('time0');
    if (isNaN(time0 * 1)) {
      code = 'alert("時間格式錯誤！請填入數字！Time format error! Please enter number!");';
    } else {
      code = 'var ' + repeat + ' = async function(){\n' +
        '  ' + argument0 +
        '    ' + value_name_ + ' = setTimeout(' + repeat + ',' + (time0 * 1000) + ');\n' +
        '};\n' +
        '' + repeat + '();\n';
    }
    return code;
  } else {
    for (var n = 0; n < block.itemCount_; n++) {
      codeArray.argument[n] = Blockly.JavaScript.statementToCode(block, 'ADD' + n);
      codeArray.delayTime[n] = block.getFieldValue('time' + n);
      if (isNaN(codeArray.delayTime[n] * 1)) {
        codeArray.code[n] = '.then(async function(){\n' +
          '      alert("時間格式錯誤！請填入數字！Time format error! Please enter number!");\n' +
          '    })';
      } else {
        codeArray.code[n] = '.then(async function(){\n' +
          '      ' + codeArray.argument[n] +
          '      return ' + repeatDelay + '(' + (1000 * codeArray.delayTime[n]) + ');\n' +
          '    })';
      }
    }
    var codeContent = codeArray.code.join('');
    code = 'var ' + repeat + ' = async function(){\n' +
      '  var ' + time + ';\n' +
      '  var ' + repeatDelay + ' = async function(' + time + '){\n' +
      '    return new Promise(async function(resolve){\n' +
      '      ' + value_name_ + ' = setTimeout(resolve,' + time + ');\n' +
      '    });\n' +
      '  };\n' +
      '  var ' + repeatPromise + ' = async function(){\n' +
      '    ' + repeatDelay + '(1)' + codeContent + '.then(async function(){\n' +
      '        ' + repeatPromise + '();\n' +
      '    });\n' +
      '  };\n' +
      '  ' + repeatPromise + '();\n' +
      '};\n' +
      '' + repeat + '();\n';
    return code;
  }
};


Blockly.JavaScript['status_repeat_stop'] = function (block) {
  var value_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = 'clearTimeout(' + value_name_ + ');\n';
  return code;
};


Blockly.JavaScript['max7219_new'] = function (block) {
  var dropdown_din_ = block.getFieldValue('din_');
  var dropdown_cs_ = block.getFieldValue('cs_');
  var dropdown_clk_ = block.getFieldValue('clk_');
  var code = 'getMax7219(board, ' + dropdown_din_ + ', ' + dropdown_cs_ + ', ' + dropdown_clk_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['max7219_draw'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_code_ = Blockly.JavaScript.valueToCode(block, 'code_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.animateStop();\n' +
    variable_name_ + '.on("0000000000000000");\n' +
    variable_name_ + '.on(' + value_code_ + ');\n';
  return code;
};


Blockly.JavaScript['max7219_animate'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_times_ = Blockly.JavaScript.valueToCode(block, 'times_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list_ = Blockly.JavaScript.valueToCode(block, 'list_', Blockly.JavaScript.ORDER_ATOMIC);
  var varData = Blockly.JavaScript.variableDB_.getDistinctName(
    'varData', Blockly.Variables.NAME_TYPE);
  var code = 'var ' + varData + ' = ' + value_list_ + ';\n' +
    variable_name_ + '.animateStop();\n' +
    variable_name_ + '.on("0000000000000000");\n' +
    variable_name_ + '.animate(' + varData + ',' + value_times_ + ');\n';
  return code;
};


Blockly.JavaScript['max7219_animate_horse'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_times_ = Blockly.JavaScript.valueToCode(block, 'times_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_code_ = Blockly.JavaScript.valueToCode(block, 'code_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_state_ = '"' + block.getFieldValue('state_') + '"';
  var code = variable_name_ + '.animateStop();\n' +
    variable_name_ + '.animate(max7219_horse(' + dropdown_state_ + ',' + value_code_ + '), ' + value_times_ + ');\n';
  return code;

};


Blockly.JavaScript['max7219_stop'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.animateStop();\n';
  return code;
};


Blockly.JavaScript['max7219_off'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.animateStop();\n' +
    variable_name_ + '.off();\n';
  return code;
};

Blockly.JavaScript['max7219_88'] = function (block) {
  var a = [];
  for (var i = 1; i < 65; i++) {
    var j = 'm' + i;
    a[i - 1] = block.getFieldValue(j) == 'TRUE'
  }
  var array = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  for (var k = 0; k < 64; k++) {
    if (a[k] == true) {
      array[Math.floor((k) / 8)][((k + 8) % 8)] = 1;
    }
  }
  var b = '';
  var c = '';
  for (var p = 0; p < 8; p++) {
    for (var q = 7; q > -1; q--) {
      b = b + array[q][p];
    }
    var b2 = parseInt(b, 2);
    var b10 = b2.toString(10);
    var b16 = b2.toString(16);
    if (b10 * 1 < 16) {
      b16 = '0' + b16;
    }
    c = c + b16;
    b = '';
  }
  var code;
  code = '"' + c + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['max7219_val_alphabet'] = function (block) {
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'max7219_alphabet(' + value_value_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['max7219_val_num'] = function (block) {
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
  if (value_value_ * 1 < 0 || value_value_ * 1 > 99) {
    code = '"00000601b1110e00"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  } else {
    code = 'max7219_number(' + value_value_ + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
};

Blockly.JavaScript['max7219_val_img'] = function (block) {
  var dropdown_img_ = block.getFieldValue('img_');
  var code = '"' + dropdown_img_ + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['soil_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getSoil(board, ' + dropdown_pin_ + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['soil_detected'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_detected_ = Blockly.JavaScript.statementToCode(block, 'detected_');
  var code = variable_name_ + '.measure(async function(val){\n' +
    '  ' + variable_name_ + '.detectedVal = val;\n' +
    statements_detected_ +
    '});\n';
  return code;
};


Blockly.JavaScript['soil_val'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.detectedVal';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['soil_stop'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off();\n';
  return code;
};


Blockly.JavaScript['adxl345_new'] = function (block) {
  var dropdown_sda_ = block.getFieldValue('sda_');
  var dropdown_scl_ = block.getFieldValue('scl_');
  var code = 'getADXL345(board)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['adxl345_on'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var code = variable_name_ + '.setSensitivity = 0;\n' +
    variable_name_ + '.setBaseAxis = "x";\n' +
    variable_name_ + '.detect(async function(_x,_y,_z,_r,_p){\n' +
    '  ' + variable_name_ + '._x = _x;\n' +
    '  ' + variable_name_ + '._y = _y;\n' +
    '  ' + variable_name_ + '._z = _z;\n' +
    '  ' + variable_name_ + '._r = _r;\n' +
    '  ' + variable_name_ + '._p = _p;\n' +
    statements_on_ +
    '});\n';
  return code;
};


Blockly.JavaScript['adxl345_val'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_val_ = block.getFieldValue('val_');
  var code = variable_name_ + '.' + dropdown_val_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['adxl345_off'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off();\n';
  return code;
};


Blockly.JavaScript['ssd1306_new'] = function (block) {
  var dropdown_sda_ = block.getFieldValue('sda_');
  var dropdown_scl_ = block.getFieldValue('scl_');
  var code = 'getSSD1306(board)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ssd1306_print'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.print(' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['ssd1306_image'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.save(' + value_value_ + ',function(){' + variable_name_ + '.render();});\n';
  return code;
};

Blockly.JavaScript['ssd1306_clear'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.clear();\n';
  return code;
};

Blockly.JavaScript['ssd1306_text_size'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.textSize = ' + value_value_ + ';\n';
  return code;
};

Blockly.JavaScript['ssd1306_locate'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var locate = block.getFieldValue('locate_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_;

  switch (locate) {
    case 'x':
      code += '.cursorX = ' + value_value_ + ';\n';
      break;
    case 'y':
      code += '.cursorY = ' + value_value_ + ';\n';
      break;
  }
  return code;
};


Blockly.JavaScript['hx711_new'] = function (block) {
  var dropdown_sck_ = block.getFieldValue('sck_');
  var dropdown_dt_ = block.getFieldValue('dt_');
  var code = 'getHX711(board,' + dropdown_sck_ + ',' + dropdown_dt_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['hx711_on'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var code = variable_name_ + '.measure(function(){\n' +
    '  ' + statements_on_ +
    '});\n';
  return code;
};

Blockly.JavaScript['hx711_val'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '._weight';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['hx711_off'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off();\n';
  return code;
};


Blockly.JavaScript['barcode_new'] = function (block) {
  var dropdown_rx_ = block.getFieldValue('rx_');
  var dropdown_tx_ = block.getFieldValue('tx_');
  var code = 'getBarcode(board,' + dropdown_rx_ + ',' + dropdown_tx_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['barcode_on'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var code = variable_name_ + '.scan(function(){\n' +
    '  ' + statements_on_ +
    '});\n';
  return code;
};


Blockly.JavaScript['barcode_val'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '._scanData';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['barcode_off'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off();\n';
  return code;
};


Blockly.JavaScript['joystick_new'] = function (block) {
  var dropdown_vrx_ = block.getFieldValue('vrx_');
  var dropdown_vry_ = block.getFieldValue('vry_');
  var dropdown_sw_ = block.getFieldValue('sw_');
  var code = 'getJoystick(board, ' + dropdown_vrx_ + ', ' + dropdown_vry_ + ', ' + dropdown_sw_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['joystick_on'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var code = variable_name_ + '.on("message",_read_);\n' +
    'async function _read_(_x, _y, _z){\n' +
    '  ' + variable_name_ + '._x = _x;\n' +
    '  ' + variable_name_ + '._y = _y;\n' +
    '  ' + variable_name_ + '._z = _z;\n' +
    statements_on_ +
    '}\n';
  return code;
};


Blockly.JavaScript['joystick_val'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_val_ = block.getFieldValue('val_');
  var code = variable_name_ + '.' + dropdown_val_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['joystick_off'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off("message",_read_);\n';
  return code;
};


Blockly.JavaScript['document_keyboard'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var dropdown_event_ = block.getFieldValue('event_');
  var code = 'document.' + dropdown_event_ + ' = async function(e){\n' +
    '  console.log(e.keyCode);\n' +
    statements_do_ +
    '};\n';
  return code;
};


Blockly.JavaScript['document_keyboard_stop'] = function (block) {
  var code = 'document.onkeydown = function(){};\n' +
    'document.onkeyup = function(){};\n';
  return code;
};


Blockly.JavaScript['document_keycode'] = function (block) {
  var dropdown_keycode_ = block.getFieldValue('keycode_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if(e.keyCode == ' + dropdown_keycode_ + '){\n' +
    '  ' + statements_do_ +
    '}\n';
  return code;
};

Blockly.JavaScript['document_keyboard_konami'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'konami(e.keyCode,async function(){\n' +
    statements_do_ +
    '});\n';
  return code;
};

Blockly.JavaScript['text_indexof'] = function (block) {
  var value_input_ = Blockly.JavaScript.valueToCode(block, 'input_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_state_ = block.getFieldValue('state_');
  var value_indexof_ = Blockly.JavaScript.valueToCode(block, 'indexof_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_input_ + '.indexOf(' + value_indexof_ + ')' + dropdown_state_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['rfid_new'] = function (block) {
  var dropdown_sda_ = block.getFieldValue('sda_');
  var dropdown_sck_ = block.getFieldValue('sck_');
  var dropdown_mosi_ = block.getFieldValue('mosi_');
  var dropdown_miso_ = block.getFieldValue('miso_');
  var code = 'getRFID(board)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['rfid_enter'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var code = variable_name_ + '.read();\n' +
    variable_name_ + '.on("enter",async function(_uid){\n' +
    '  ' + variable_name_ + '._uid = _uid;\n' +
    statements_on_ +
    '});\n';
  return code;
};


Blockly.JavaScript['rfid_uid'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '._uid';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['rfid_if'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_uid_ = Blockly.JavaScript.valueToCode(block, 'uid_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if(' + variable_name_ + '._uid == ' + value_uid_ + '){\n' +
    statements_do_ +
    '}\n';
  return code;
};


Blockly.JavaScript['rfid_leave'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_name_ + '.on("leave",async function(_uid){\n' +
    statements_do_ +
    '});\n';
  return code;
};


Blockly.JavaScript['rfid_stopread'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.stopRead();\n';
  return code;
};


Blockly.JavaScript['google_sheets'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheet_url_ = Blockly.JavaScript.valueToCode(block, 'sheet_url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheet_name_ = Blockly.JavaScript.valueToCode(block, 'sheet_name_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_name_ + '= {};\n' +
    value_name_ + '.sheetUrl = ' + value_sheet_url_ + ';\n' +
    value_name_ + '.sheetName = ' + value_sheet_name_ + ';\n';
  return code;
};


Blockly.JavaScript['google_sheets_write'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var statements_write_ = Blockly.JavaScript.statementToCode(block, 'write_');
  var code = '';
  for (var n = 0; n < block.itemCount_; n++) {
    var val = Blockly.JavaScript.valueToCode(block, 'data_' + n) || '""';
    code = code + variable_var_ + '.column' + n + ' = ' + val + ';\n';
  }
  var code = code + 'writeSheetData(' + variable_var_ + ');\n';
  return code;
};


Blockly.JavaScript['google_sheets_read'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var value_row_ = Blockly.JavaScript.valueToCode(block, 'row_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col_ = Blockly.JavaScript.valueToCode(block, 'col_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'readSheetData({\n' +
    '  row : ' + value_row_ + ',\n' +
    '  col : ' + value_col_ + ',\n' +
    '  sheetUrl : ' + variable_var_ + '.sheetUrl,\n' +
    '  sheetName : ' + variable_var_ + '.sheetName\n' +
    '},function(googleSheetReadData){\n' +
    statements_do_ +
    '});\n';
  return code;
};


Blockly.JavaScript['google_sheets_read_data'] = function (block) {
  var code = 'googleSheetReadData';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_wrap'] = function (block) {
  var code = '"<br/>"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/**
 * 修正 google 積木的 bug
 */
Blockly.JavaScript['colour_rgb'] = function (block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.JavaScript.valueToCode(block, 'RED',
    Blockly.JavaScript.ORDER_COMMA) || 0;
  var green = Blockly.JavaScript.valueToCode(block, 'GREEN',
    Blockly.JavaScript.ORDER_COMMA) || 0;
  var blue = Blockly.JavaScript.valueToCode(block, 'BLUE',
    Blockly.JavaScript.ORDER_COMMA) || 0;
  var functionName = Blockly.JavaScript.provideFunction_(
    'colour_rgb', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(r, g, b) {',
      '  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);',
      '}'
    ]);
  var code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
