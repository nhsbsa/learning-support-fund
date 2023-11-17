/*!
Copyright (c) 2011, 2012 Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input
License is there: https://github.com/julienw/jquery-trap-input/blob/master/LICENSE
This is version 1.2.0.
*/
(function (a, b) {
  function d(a) {
    if (a.keyCode === 9) {
      var b = !!a.shiftKey;
      e(this, a.target, b) && (a.preventDefault(), a.stopPropagation())
    }
  }

  function e(a, b, c) {
    var d = i(a),
      e = b,
      f, g, h, j;
    do {
      f = d.index(e), g = f + 1, h = f - 1, j = d.length - 1;
      switch (f) {
        case -1:
          return !1;
        case 0:
          h = j;
          break;
        case j:
          g = 0
      }
      c && (g = h), e = d.get(g);
      try {
        e.focus()
      } catch (k) { }
    } while (b === b.ownerDocument.activeElement);
    return !0
  }

  function f() {
    return this.tabIndex > 0
  }

  function g() {
    return !this.tabIndex
  }

  function h(a, b) {
    return a.t - b.t || a.i - b.i
  }

  function i(b) {
    var c = a(b),
      d = [],
      e = 0;
    return m.enable && m.enable(), c.find("a[href], link[href], [draggable=true], [contenteditable=true], :input:enabled, [tabindex=0]").filter(":visible").filter(g).each(function (a, b) {
      d.push({
        v: b,
        t: 0,
        i: e++
      })
    }), c.find("[tabindex]").filter(":visible").filter(f).each(function (a, b) {
      d.push({
        v: b,
        t: b.tabIndex,
        i: e++
      })
    }), m.disable && m.disable(), d = a.map(d.sort(h), function (a) {
      return a.v
    }), a(d)
  }

  function j() {
    return this.keydown(d), this.data(c, !0), this
  }

  function k() {
    return this.unbind("keydown", d), this.removeData(c), this
  }

  function l() {
    return !!this.data(c)
  }
  var c = "trap.isTrapping";
  a.fn.extend({
    trap: j,
    untrap: k,
    isTrapping: l
  });
  var m = {};
  a.find.find && a.find.attr !== a.attr && function () {
    function e(a) {
      var d = a.getAttributeNode(c);
      return d && d.specified ? parseInt(d.value, 10) : b
    }

    function f() {
      d[c] = d.tabIndex = e
    }

    function g() {
      delete d[c], delete d.tabIndex
    }
    var c = "tabindex",
      d = a.expr.attrHandle;
    m = {
      enable: f,
      disable: g
    }
  }()
})(jQuery);

//Show Dialog

function showDialog() {
  if ($('.dialog').length > 0) {
    var dialogData = {
      lastFocus: null
    };


    $('a[data-toggle=dialog]').on('click', function (e) {

      e.preventDefault();
      e.stopPropagation();

      var anchor = $(this);
      var data = '#' + anchor.attr('data-target');

      openDialog(data, anchor); // Pass data value into function

    });


    // Open dialog

    function openDialog(data, anchor) {

      dialogData.lastFocus = anchor;

      var dialog = $(data);

      dialog.attr('aria-hidden', 'false')
        .find('.dialog-content').focus()
        .attr('tabindex', '-1');

      dialog.trap();
    }


    // Close dialog only if visible

    function closeDialog() {


      var dialog = $('.dialog[aria-hidden=false]');


      dialog.attr('aria-hidden', 'true')
        .find('.dialog-content').blur()
        .attr('tabindex', '0');


      dialog.untrap();

    }


    // Stop bubbling

    $('.dialog-holder').on('click', function (e) {

      e.stopPropagation();

    });


    $('.dialog-close').on('click', function (e) {

      e.preventDefault();
      e.stopPropagation();

      closeDialog();

    });


    $('.dialog-cancel').on('click', function (e) {

      e.preventDefault();
      e.stopPropagation();

      closeDialog();

    });

    // Document binding events

    $(document).bind({

      click: function (e) {

        closeDialog();

      },

      keyup: function (e) {

        if (e.keyCode == 27) {

          closeDialog();

        }

      }

    });


  }


}

// Settings for sortable tables https://github.com/joequery/Stupid-Table-Plugin
(function (c) {
  c.fn.stupidtable = function (b) {
    return this.each(function () {
      var a = c(this);
      b = b || {};
      b = c.extend({}, c.fn.stupidtable.default_sort_fns, b);
      a.data("sortFns", b);
      a.on("click.stupidtable", "thead th", function () {
        c(this).stupidsort()
      })
    })
  };
  c.fn.stupidsort = function (b) {
    var a = c(this),
      g = 0,
      f = c.fn.stupidtable.dir,
      e = a.closest("table"),
      k = a.data("sort") || null;
    if (null !== k) {
      a.parents("tr").find("th").slice(0, c(this).index()).each(function () {
        var a = c(this).attr("colspan") || 1;
        g += parseInt(a, 10)
      });
      var d;
      1 == arguments.length ?
        d = b : (d = b || a.data("sort-default") || f.ASC, a.data("sort-dir") && (d = a.data("sort-dir") === f.ASC ? f.DESC : f.ASC));
      e.trigger("beforetablesort", {
        column: g,
        direction: d
      });
      e.css("display");
      setTimeout(function () {
        var b = [],
          l = e.data("sortFns")[k],
          h = e.children("tbody").children("tr");
        h.each(function (a, e) {
          var d = c(e).children().eq(g),
            f = d.data("sort-value");
          "undefined" === typeof f && (f = d.text(), d.data("sort-value", f));
          b.push([f, e])
        });
        b.sort(function (a, b) {
          return l(a[0], b[0])
        });
        d != f.ASC && b.reverse();
        h = c.map(b, function (a) {
          return a[1]
        });
        e.children("tbody").append(h);
        e.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc");
        a.data("sort-dir", d).addClass("sorting-" + d);
        e.trigger("aftertablesort", {
          column: g,
          direction: d
        });
        e.css("display")
      }, 10);
      return a
    }
  };
  c.fn.updateSortVal = function (b) {
    var a = c(this);
    a.is("[data-sort-value]") && a.attr("data-sort-value", b);
    a.data("sort-value", b);
    return a
  };
  c.fn.stupidtable.dir = {
    ASC: "asc",
    DESC: "desc"
  };
  c.fn.stupidtable.default_sort_fns = {
    "int": function (b, a) {
      return parseInt(b, 10) - parseInt(a, 10)
    },
    "float": function (b, a) {
      return parseFloat(b) - parseFloat(a)
    },
    string: function (b, a) {
      return b.localeCompare(a)
    },
    "string-ins": function (b, a) {
      b = b.toLocaleLowerCase();
      a = a.toLocaleLowerCase();
      return b.localeCompare(a)
    }
  }
})(jQuery);

//Table sortable

// TO DO: 
// 1. Add in aria-sort to th
// 2. Change link to button
// 3. Add indicator into button
// 4. Style button to fill th

function tableSortable() {
  if ($('.js-table-sortable').length > 0) {
    var min = 5;

    $('.js-table-sortable').each(function () {
      $this = $(this);
      var rows = $this.find('tbody tr').length;
      if (rows >= min) {
        $this.find('thead [data-sort]').wrapInner( "<a href='#' class='table-header__button'></a>");
        $this.find('thead [data-sort]').addClass('sortable'); // add classes for link styling purposes
        $this.stupidtable(); // initiate plugin
      }
    });
  }
}
//Document ready

(function () {
  showDialog();
  tableSortable();
})();