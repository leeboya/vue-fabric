
const createFabricObj = function (imgId, pos) {
  var dom = document.getElementById(imgId);
  return new fabric.Image(dom, {
    //设置图片在canvas中的位置和样子
    left: pos.left,
    top: pos.top,
    width: pos.width,
    height: pos.height,
    angle: pos.angle
  });
}

const bindSeletUnSelectEvent = function (imgObj, _this) {
  imgObj
    .on("selected", function (options) {
      _this.$store.commit("setOptionSelect",true);
      if (_this.$store.state.fabricObj.canvas.getActiveObject().lockMovementX) {
        _this.$store.commit("setUnclock",false);
        return
      }
      _this.$store.commit("setUnclock",true);
    })
    .on("deselected", function (options) {
      _this.$store.commit("setOptionSelect",false);
    });
}
const createCanvas = function (canvasId) {
  return new fabric.Canvas(canvasId); //声明画布
}

const Copy = function (_this) {
  _this.$store.state.fabricObj.canvas.getActiveObject().clone(function (cloned) {
    _this.$store.commit("setClipboard",cloned);
  });
}
const Paste = function (_this) {
 _this.$store.state.fabricObj._clipboard.clone(function (clonedObj) {
    _this.$store.state.fabricObj.canvas.discardActiveObject();
    clonedObj.set({
      left: clonedObj.left + 50,
      top: clonedObj.top + 50,
      evented: true
    });
    if (clonedObj.type === "activeSelection") {
      clonedObj.canvas = _this.$store.state.fabricObj.canvas;
      clonedObj.forEachObject(function (obj) {
        _this.$store.state.fabricObj.canvas.add(obj);
      });
      clonedObj.setCoords();
    } else {
      _this.$store.state.fabricObj.canvas.add(clonedObj);
    }
    _this.$store.state.fabricObj._clipboard.top += 30;
    _this.$store.state.fabricObj._clipboard.left += 30;
    _this.$store.state.fabricObj.canvas.setActiveObject(clonedObj);
    _this.$store.state.fabricObj.canvas.requestRenderAll();
    _this.fabricAction.bindSeletUnSelectEvent(clonedObj, _this);
    _this.$store.commit("setOptionSelect",true);

  });
}

const startCrop = function (_this) {
  _this.$store.state.fabricObj.canvas.remove(_this.cutRect.el);
  if (_this.$store.state.fabricObj.canvas.getActiveObject()) {
    _this.cutRect.object = _this.$store.state.fabricObj.canvas.getActiveObject();
 
    if ( _this.cutRect.lastActive &&_this.cutRect.lastActive !== _this.cutRect.object ) {
      _this.cutRect.lastActive.clipTo = null;
    }

    _this.cutRect.el = new fabric.Rect({
      fill: "rgba(0,0,0,0.3)",
      originX: "left",
      originY: "top",
      stroke: "#ccc",
      strokeDashArray: [2, 2],
      opacity: 1,
      width: 1,
      height: 1,
      borderColor: "#36fd00",
      cornerColor: "green",
      hasRotatingPoint: false
    });
    _this.cutRect.el.left = _this.$store.state.fabricObj.canvas.getActiveObject().left;
    _this.cutRect.selection_object_left = _this.$store.state.fabricObj.canvas.getActiveObject().left;
    _this.cutRect.selection_object_top = _this.$store.state.fabricObj.canvas.getActiveObject().top;
    _this.cutRect.el.top = _this.$store.state.fabricObj.canvas.getActiveObject().top;
    _this.cutRect.el.width =
    _this.$store.state.fabricObj.canvas.getActiveObject().width *
    _this.$store.state.fabricObj.canvas.getActiveObject().scaleX;
    _this.cutRect.el.height =
    _this.$store.state.fabricObj.canvas.getActiveObject().height *
    _this.$store.state.fabricObj.canvas.getActiveObject().scaleY;
    _this.$store.state.fabricObj.canvas.add(_this.cutRect.el);
    _this.$store.state.fabricObj.canvas.setActiveObject(_this.cutRect.el);
    return
  }
  alert("Please select an object or layer");

}
const crop = function (_this) {
  var left = _this.cutRect.el.left - _this.cutRect.object.left;
  var top = _this.cutRect.el.top - _this.cutRect.object.top;
  left *= 1;
  top *= 1;
  var width = _this.cutRect.el.width * 1;
  var height = _this.cutRect.el.height * 1;
  _this.cutRect.object.clipTo = function (ctx) {
    ctx.rect(-(_this.cutRect.el.width / 2) + left,-(_this.cutRect.el.height / 2) + top,parseInt(width * _this.cutRect.el.scaleX),parseInt(_this.cutRect.el.scaleY * height));
  };
  _this.$store.state.fabricObj.canvas.remove(_this.$store.state.fabricObj.canvas.getActiveObject());
  _this.cutRect.lastActive = _this.cutRect.object;
  _this.$store.state.fabricObj.canvas.renderAll();
}
const lockOption = function (_this) {
  if (_this.$store.state.fabricObj.unclock) {
    _this.$store.state.fabricObj.canvas.getActiveObject().lockMovementX = true;
    _this.$store.state.fabricObj.canvas.getActiveObject().lockMovementY = true;
    _this.$store.state.fabricObj.canvas.getActiveObject().lockRotation = true;
    _this.$store.state.fabricObj.canvas.getActiveObject().lockScalingX = true;
    _this.$store.state.fabricObj.canvas.getActiveObject().lockScalingY = true;
    _this.$store.commit("setUnclock",false);
    return;
  }
  _this.$store.state.fabricObj.canvas.getActiveObject().lockMovementX = false;
  _this.$store.state.fabricObj.canvas.getActiveObject().lockMovementY = false;
  _this.$store.state.fabricObj.canvas.getActiveObject().lockRotation = false;
  _this.$store.state.fabricObj.canvas.getActiveObject().lockScalingX = false;
  _this.$store.state.fabricObj.canvas.getActiveObject().lockScalingY = false;
  _this.$store.commit("setUnclock",true);


}
export default { createFabricObj, bindSeletUnSelectEvent, createCanvas, Copy, Paste, startCrop, crop ,lockOption}