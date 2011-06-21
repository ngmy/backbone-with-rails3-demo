App.Controllers.Posts = Backbone.Controller.extend({
    routes: {
        "":           "index",
        "new":        "newPost",
        "posts/:id":  "edit"
    },

    index: function() {
        $.getJSON("/posts", function(data) {
            if (data) {
                // postの一覧を取得
                new Error({ message: 'コメントが見つかりません。' });
                //var posts = _(data).map(function(i) { return new Post(i); });
                //new App.Views.Index({ posts: posts });
            } else {
                new Error({ message: 'コメントが見つかりません。' });
            }
        });
    },

    newPost: function() {
        new App.Views.Edit({ model: new Post() });
    },

    edit: function(id) {
        var post = new Post({ id: id });
        post.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: post });
            },
            error: function() {
                new Error({ message: 'コメントの読み込みに失敗しました。' });
            }
        });
    }
});
