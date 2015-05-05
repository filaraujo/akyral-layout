

(function() {
  var Polymer = window.Polymer;

  var author = {
    name: 'Filipe Araujo',
    github: 'github.com/filaraujo'
  };

  Polymer({
    is: 'akyral-layout',

    properties: {
      /**
       * The `author` property defines the initial author, setting
       * this value will add another author
       */
      author: {
        readOnly: true,
        type: Object,
        value: function() {
          return author;
        }
      },

      /**
       * The `drawerPosition` property denotes the position of the drawer
       */
      drawerPosition: {
        reflectToAttribute: true,
        type: String,
        value: 'left'
      },

      /**
       * The `open` property denotes whether the drawer is opened
       */
      open: {
        reflectToAttribute: true,
        type: Boolean,
        value: false
      },

      /**
       * The `type` property denotes the type of layout
       */
      type: {
        reflectToAttribute: true,
        type: String,
        value: 'slide'
      }
    },

    /**
     * The `closeDrawer` method will close the drawer
     */
    closeDrawer: function() {
      this.open = false;
    },

    /**
     * The `openDrawer` method will open the drawer
     */
    openDrawer: function() {
      this.open = true;
    },

    /**
     * The `toggleDrawer` method will toggle the drawer open and closed
     */
    toggleDrawer: function() {
      this.open = !this.open;
    }

  });

}());
