var Post = Backbone.Model.extend({
    url: function() {
        var base = "posts";
        if (this.isNew()) {
            return base;
        } else {
            return base + "/" + this.id;
        }
    }
});
