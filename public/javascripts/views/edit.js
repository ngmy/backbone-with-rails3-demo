App.Views.Edit = Backbone.View.extend({
    events: {
        "submit form": "save"
    },

    initialize: function(){
        this.model = this.options.model;
        this.render();
    },

    save: function() {
        // postを更新
        var title = this.$('[name=title]').val();
        var body  = this.$('[name=body]').val();
        this.model.save({title: title, body: body, published: true});
    },

    render: function() {
        var out = "<form>";
        out += "<p>";
        out += "<label for='title'>タイトル</label>";
        out += "<br>";
        out += "<input name='title' type='text' value='";
        out += (this.model.escape('title') || '');
        out += "'/>";
        out += "</p>";
        out += "<p>";
        out += "<label for='body'>本文</label>";
        out += "<br>";
        out += "<textarea name='body'>";
        out += (this.model.escape('body') || '');
        out += "</textarea>";
        out += "</p>";
        out += "<p>";

        var submit_text = this.model.isNew() ? "作成" : "編集"; 
    
        out += "<button>" + submit_text + "</button>";
        out += "</p>";
        out += "</form>";

        $(this.el).html(out);
        $("#app").html(this.el);
    }
});
