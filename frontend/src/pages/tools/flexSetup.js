import "flexslider/flexslider.css";

import $ from "jquery";

import "flexslider/jquery.flexslider";

const flexSetUp = () => {
  $(".flexslider").flexslider({
    animation: "slide",
    start: function (slider) {
      $("body").removeClass("loading");
    },
    flexDirectionNav: false,
    controlNav: false,
  });
};

export default flexSetUp;
