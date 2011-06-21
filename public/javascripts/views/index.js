App.Views.Index = Backbone.View.extend({
    initialize: function(){
        this.posts = this.options.posts;
        this.render();
    },
  
    render: function() {
        var out = "<a href='#new'>新規作成</a>";

        if (this.posts.length > 0) {
            out += "<ul>";
            _(this.posts).each(function(item) {
                out += "<li>";
                out += "<a href='#posts/" + item.id + "'>" + item.escape("title") + "</a>";
                out += "</li>";
            });
            out += "</ul>";
        } else {
            out += "<h3>コメントがありません</h3>"; 
        }

        $(this.el).html(out);
        $("#app").html(this.el);
    }
});
