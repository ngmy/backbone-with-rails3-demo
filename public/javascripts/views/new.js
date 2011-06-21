App.Views.Edit = Backbone.View.extend({
    initialize: function(){
        this.model = this.options.model;
        this.render();
    },

    render: function() {
        // 新しいpostを作成
        var post = new this.model({title: "test", body: "test", published: true});
        post.save();
    }
});
