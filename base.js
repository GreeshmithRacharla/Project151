AFRAME.registerComponent("base", {
    schema : {
        radius : { type : "number", deafult : 150},
        height : { type : "number", deafult : 3}
    },

    init : function() {
        this.el.setAttribute("geometry", {
            primitive : "cylinder",
            radius : this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", {color: "#1769aa"});
    }
});