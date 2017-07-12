define(function(require, exports, module) {

    var $ = require("jquery");

    var Alpaca = $.alpaca;

    Alpaca.Fields.CustomCKEditorField = Alpaca.Fields.CKEditorField.extend(
    /**
     * @lends Alpaca.Fields.CustomCKEditorField.prototype
     */
    {
        /**
         * @see Alpaca.Fields.TextField#getFieldType
         */
        getFieldType: function() {
            return "custom-ckeditor-field";
        },

        /**
         * @see Alpaca.Fields.TextField#setup
         */
        setup: function()
        {
            this.base();
        },

        afterRenderControl: function(model, callback)
        {
            var self = this;
            self.base(model, function(){
                callback();
            });
        },

        /**
         * @see Alpaca.Fields.TextField#handleValidate
         */
        handleValidate: function()
        {
            return this.base();
        }

        /* builder_helpers */
        ,

        /**
         * @private
         * @see Alpaca.Fields.TextField#getSchemaOfOptions
         */
        getSchemaOfOptions: function() {

            return Alpaca.merge(this.base(), {
                "properties": {
                    "writerRules": {
                        "title": "Writer Rules",
                        "description": "Rules for generated markup",
                        "type": "string", // <-- should be an array of objects!!
                        "default": "",
                        "readonly": true
                    }
                }
            });

        },

        /**
         * @private
         * @see Alpaca.Fields.TextField#getOptionsForOptions
         */
        getOptionsForOptions: function() {
            return Alpaca.merge(this.base(), {
                "fields": {
                    "writerRules": {
                        "type": "text"
                    }
                }
            });
        },

        /**
         * @see Alpaca.Fields.TextField#getTitle
         */
        getTitle: function() {
            return "Custom ckeditor Field";
        },

        /**
         * @see Alpaca.Fields.TextField#getDescription
         */
        getDescription: function() {
            return "Allow output markup rule overrides to ckeditor";
        }

        /* end_builder_helpers */
    });

    Alpaca.registerMessages({
        "noDependentField": "No dependent field found"
    });
    
    Alpaca.registerFieldClass("custom-ckeditor", Alpaca.Fields.CustomCKEditorField);

});

