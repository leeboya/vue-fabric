const createFabricObj=function(imgId, pos) {
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

 const bindSeletUnSelectEvent=function(imgObj,_this) {

    imgObj
      .on("selected", function(options) {
        _this.optionSelect = true;
        if(_this.canvas.getActiveObject().lockMovementX){
          _this.unclock=false;
          return

        }
        _this.unclock=true;
      })
      .on("deselected", function(options) {
        _this.optionSelect = false;
      });
  }
  const createCanvas=function(canvasId) {
    return new fabric.Canvas(canvasId); //声明画布
  }

  const Copy=function(_this) {
    _this.canvas.getActiveObject().clone(function(cloned) {
      _this._clipboard = cloned;
    });
  }
  const Paste=function(_this) {
    _this._clipboard.clone(function(clonedObj) {
      _this.canvas.discardActiveObject();
      clonedObj.set({
        left: clonedObj.left + 50,
        top: clonedObj.top + 50,
        evented: true
      });
      if (clonedObj.type === "activeSelection") {
        // active selection needs a reference to the canvas.
        clonedObj.canvas = _this.canvas;
        clonedObj.forEachObject(function(obj) {
          this.canvas.add(obj);
        });
        // this should solve the unselectability
        clonedObj.setCoords();
      } else {
        _this.canvas.add(clonedObj);
      }
      _this._clipboard.top += 30;
      _this._clipboard.left += 30;
      _this.canvas.setActiveObject(clonedObj);
      _this.canvas.requestRenderAll();
      _this.fabricAction.bindSeletUnSelectEvent(clonedObj,_this);
      _this.optionSelect = true;
    });
  }

  const startCrop=function(_this) {

    _this.canvas.remove(_this.cutRect.el);
    if (_this.canvas.getActiveObject()) {
      _this.cutRect.object = _this.canvas.getActiveObject();

      if (_this.cutRect.lastActive !== _this.cutRect.object) {
        console.log("different object");
      } else {
        console.log("same object");
      }
      if (
        _this.cutRect.lastActive &&
        _this.cutRect.lastActive !== _this.cutRect.object
      ) {
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
      _this.cutRect.el.left = _this.canvas.getActiveObject().left;
      _this.cutRect.selection_object_left = _this.canvas.getActiveObject().left;
      _this.cutRect.selection_object_top = _this.canvas.getActiveObject().top;
      _this.cutRect.el.top = _this.canvas.getActiveObject().top;
      _this.cutRect.el.width =
      _this.canvas.getActiveObject().width *
      _this.canvas.getActiveObject().scaleX;
      _this.cutRect.el.height =
      _this.canvas.getActiveObject().height *
      _this.canvas.getActiveObject().scaleY;
      _this.canvas.add(_this.cutRect.el);
      _this.canvas.setActiveObject(_this.cutRect.el);
    } else {
      alert("Please select an object or layer");
    }
  }
 const crop=function(_this) {
    var left = _this.cutRect.el.left - _this.cutRect.object.left;
    var top = _this.cutRect.el.top - _this.cutRect.object.top;
    left *= 1;
    top *= 1;
    var width = _this.cutRect.el.width * 1;
    var height = _this.cutRect.el.height * 1;
    _this.cutRect.object.clipTo = function(ctx) {
      ctx.rect(
        -(_this.cutRect.el.width / 2) + left,
        -(_this.cutRect.el.height / 2) + top,
        parseInt(width * _this.cutRect.el.scaleX),
        parseInt(_this.cutRect.el.scaleY * height)
      );
    };
    _this.canvas.remove(_this.canvas.getActiveObject());
    _this.cutRect.lastActive = _this.cutRect.object;
    _this.canvas.renderAll();
  }
export default {createFabricObj,bindSeletUnSelectEvent,createCanvas,Copy,Paste,startCrop,crop}