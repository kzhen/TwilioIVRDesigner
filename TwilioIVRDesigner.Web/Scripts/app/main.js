(function () {
  
  var nextContainer = 2,
      baseConnectorStyle = { lineWidth: 2, strokeStyle: 'blue' },
      gatherEndpointOptions = { isSource: true, isTarget: true, connectorStyle: baseConnectorStyle, maxConnections: 3 },
      sayEndpointOptions = { isSource: true, isTarget: true, connectorStye: baseConnectorStyle },
      endpointOptions = { isSource: true, isTarget: true, connectorStyle: { lineWidth: 2, strokeStyle: 'blue' } };

  jsPlumbInit = function () {
    jsPlumb.Defaults.Container = $("#designer-canvas");
    // your jsPlumb related init code goes here
    //var e0 = jsPlumb.addEndpoint("container0");

    jsPlumb.draggable($(".window"), {
      containment: "parent"
    });
  };

  mainViewInit = function () {

    $(document).on("click", ".twilio-gather", null, function (evt) {
      $("#twilio-item-properties").text(evt);
    });

    $("#btnAddGatherVerb").click(function () {
      var twilioGatherDiv = document.createElement("div");
      twilioGatherDiv.setAttribute("class", "window twilio-gather");
      twilioGatherDiv.id = "container" + nextContainer++;
      $(twilioGatherDiv).text("<Gather2>");

      $("#designer-canvas").append($(twilioGatherDiv));

      jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'TopCenter' }, gatherEndpointOptions);
      jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'BottomCenter' }, gatherEndpointOptions);

      jsPlumb.draggable($(".window"), {
        containment: "parent"
      });
    });

    $("#btnAddSayVerb").click(function () {

      var id = nextContainer++;
      var twilioGatherDiv = document.createElement("div");
      twilioGatherDiv.setAttribute("class", "window twilio-say");
      twilioGatherDiv.id = "container" + id;
      $(twilioGatherDiv).text("<Say - " + id + ">");

      $("#designer-canvas").append($(twilioGatherDiv));

      jsPlumb.draggable($(".window"), {
        containment: "parent"
      });

      jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'TopCenter' }, sayEndpointOptions);
    });

    var window3Endpoint = jsPlumb.addEndpoint('container0', { anchor: "BottomCenter" }, endpointOptions);
  };

  $(document).ready(function () {
    jsPlumbInit();
    mainViewInit();
  });
  
})();
