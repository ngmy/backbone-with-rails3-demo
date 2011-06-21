var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Posts();
        Backbone.history.start();
    }
};
