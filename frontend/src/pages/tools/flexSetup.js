import "flexslider/flexslider.css";

import $ from "jquery";

import "flexslider/jquery.flexslider";

const flexSetup = () => {
  $(".flexslider").flexslider({
    animation: "slide",
    start: function (slider) {
      $("body").removeClass("loading");
    },
    flexDirectionNav: false,
    controlNav: false,
  });
};

export default flexSetup;
