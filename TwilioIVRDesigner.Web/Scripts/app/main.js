(function () {
  
  var nextContainer = 2,
      baseConnectorStyle = { lineWidth: 2, strokeStyle: 'blue',  },
      gatherEndpointOptions = { isSource: true, isTarget: true, connectorStyle: baseConnectorStyle, maxConnections: 3 },
      sayEndpointOptions = { isSource: true, isTarget: true, connectorStyle: baseConnectorStyle },
      endpointOptions = { isSource: true, isTarget: true, connectorStyle: baseConnectorStyle, maxConnections: 1 };

  jsPlumbInit = function () {
    jsPlumb.Defaults.Container = $("#designer-canvas");

    jsPlumb.draggable($(".window"), {
      containment: "parent"
    });

    jsPlumb.bind("dblclick", function (connection, originalEvent) {
      console.info("double click on connection from " + connection.sourceId + " to " + connection.targetId);
    });
  };

  mainViewInit = function () {

    $(document).on("click", ".twilio-gather", null, function (evt) {
      $("#twilio-item-properties").text(evt + " " + $(this).text());
    });

    $(document).on("click", ".twilio-say", null, function (evt) {
      $("#twilio-item-properties").text(evt + " " + $(this).text());
    });

    

    $("#btnAddGatherVerb").click(function () {
      var twilioGatherDiv = document.createElement("div");
      twilioGatherDiv.setAttribute("class", "window twilio-gather");
      twilioGatherDiv.id = "container" + nextContainer++;
      $(twilioGatherDiv).text("<Gather2>");

      $("#designer-canvas").append($(twilioGatherDiv));

      var ep1 = jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'TopCenter' }, gatherEndpointOptions);
      var ep2 = jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'BottomCenter' }, gatherEndpointOptions);

      jsPlumb.draggable($(".window"), {
        containment: "parent"
      });

      $(twilioGatherDiv).dblclick(function (evt) {
        jsPlumb.deleteEndpoint(ep1);
        jsPlumb.deleteEndpoint(ep2);
        this.remove();
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

      var ep = jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'TopCenter' }, sayEndpointOptions);
      var ep2 = jsPlumb.addEndpoint(twilioGatherDiv.id, { anchor: 'BottomCenter' }, sayEndpointOptions);


      $(twilioGatherDiv).dblclick(function (evt) {
        jsPlumb.deleteEndpoint(ep);
        jsPlumb.deleteEndpoint(ep2);
        this.remove();
      });
    });

    var window3Endpoint = jsPlumb.addEndpoint('container0', { anchor: "BottomCenter" }, endpointOptions);
  };

  $(document).ready(function () {
    jsPlumbInit();
    mainViewInit();
  });
  
})();
