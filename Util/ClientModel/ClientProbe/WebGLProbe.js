
function getUnmaskedInfo(gl) {
  var unMaskedInfo = {
    renderer: '',
    vendor: ''
  };

  var dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (dbgRenderInfo != null) {
    unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
    unMaskedInfo.vendor   = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
  }

  return unMaskedInfo;
}

var WebGLProbe = function(){
};

WebGLProbe.prototype = {
  getResult: function () {
    document.body.innerHTML += '<canvas style="display: none" id="probe-canvas" width="0" height="0"></canvas>';
    var canvas = document.getElementById('probe-canvas');

    if(canvas) {
      var gl = canvas.getContext('experimental-webgl');

      var result = {
        vendor: getUnmaskedInfo(gl).vendor,
        renderer: getUnmaskedInfo(gl).renderer
      };

      var element = document.getElementById('probe-canvas');
      element.outerHTML = "";

      return result;
    } else {
      return {
        vendor: 'Unknown',
        renderer: 'Unknown'
      }
    }
  }
};

