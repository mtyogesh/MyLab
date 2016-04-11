"use strict";

function clipString(t) {
    return t.length > 25 ? String(t).substr(0, 25) + "..." : t
}

function logger(t) {}

function createElements() {
    var t = d3.select(document.getElementById("svgChart"));
    t.selectAll("*").remove(), connectorsSvg = t.append("g").attr("class", "connectors"), arcsSvg = t.append("g").attr("class", "arcs"), bubblesSvg = t.append("g").attr("class", "bubbles"), bubbleLabelsSvg = t.append("g").attr("class", "bubbleLabels")
}

function setupLayout() {
    bubbleLayout = d3.layout.pack().sort(null).padding(1.5), chordLayout = d3.layout.chord().padding(.06), diagonal = d3.svg.diagonal.radial()
}

function resize() {
    var t = 835,
        e = 900,
        n = 550,
        r = 600;
    outerRadius = r / 2, innerRadius = outerRadius - 120, bubbleRadius = innerRadius - 50, connectorRadius = innerRadius - 20, bubblesTranslateX = outerRadius - innerRadius + (innerRadius - bubbleRadius) + 128, bubblesTranslateY = outerRadius - innerRadius + (innerRadius - bubbleRadius) + 0, arcsTranslateX = outerRadius + 128, arcsTranslateY = outerRadius + 0, d3.select(document.getElementById("chartArea")).style("width", t + "px"), chartTitle.style("width", e - 30 + "px"), d3.select(document.getElementById("svgChart")).style("width", e + "px").style("height", n + "px"), arcsSvg.attr("transform", "translate(" + arcsTranslateX + "," + arcsTranslateY + ")"), connectorsSvg.attr("transform", "translate(" + arcsTranslateX + "," + arcsTranslateY + ")"), bubblesSvg.attr("transform", "translate(" + bubblesTranslateX + "," + bubblesTranslateY + ")"), bubbleLabelsSvg.attr("transform", "translate(" + bubblesTranslateX + "," + bubblesTranslateY + ")"), bubbleLayout.size([2 * bubbleRadius, 2 * bubbleRadius]);
    var a = vizLevelByName[focusEntity.type].level;
    switch (a) {
        case 0:
        default:
            CHART_LABEL = NODE_TYPE_1, ARC_FILL = NODE_TYPE_2, ARC_LABEL_FILL = NODE_TYPE_2, CONNECTOR_FILL = NODE_TYPE_2, BUBBLE_FILL = NODE_TYPE_3;
            break;
        case 1:
            CHART_LABEL = NODE_TYPE_2, ARC_FILL = NODE_TYPE_3, ARC_LABEL_FILL = NODE_TYPE_3, CONNECTOR_FILL = NODE_TYPE_3, BUBBLE_FILL = NODE_TYPE_1;
            break;
        case 2:
            CHART_LABEL = NODE_TYPE_3, ARC_FILL = NODE_TYPE_1, ARC_LABEL_FILL = NODE_TYPE_1, CONNECTOR_FILL = NODE_TYPE_1, BUBBLE_FILL = NODE_TYPE_2
    }
}

function initialize() {
    createElements(), setupLayout(), resize(), buildArcs(), buildBubbles(), logger("initialize()")
}

function addNavListRow(t, e, n) {
    var r = $("<tr />");
    t.append(r), r.append($("<td" + (e.highlight ? ' style="color:' + n + '"' : "") + ">" + clipString(e.name) + "</td>"))
}

function onMouseOverNavList(t) {
    $("#navListTable").empty();
    var e = "#FFFFFF",
        n = vizLevelByIndex[t - 1].list;
    1 === t ? e = NODE_TYPE_1 : 2 === t ? e = NODE_TYPE_2 : 3 === t && (e = NODE_TYPE_3), n.forEach(function(t) {
        addNavListRow($("#navListTable"), t, e)
    })
}

function onMouseOutNavList() {
    $("#navListTable").empty()
}

function loadJson(t, e) {
    return $.ajax({
        url: t
    }).done(function(t, n, r) {
        e && e(t)
    }).fail(function(t, e, n) {
        logger("Error retrieving json data: " + n)
    })
}

function buildGraph(t) {
    graph = new Graph;
    var e = t.length - 1,
        n = 0;
    t.forEach(function(t, e) {
        var r = {
            level: e,
            name: t.name,
            list: []
        };
        vizLevelByName[t.name] = r, vizLevelByIndex[e] = r, t.list.forEach(function(e) {
            r.list.push({
                name: e.name ? e.name : e.code,
                relevance: e.relevance,
                popularity: e.popularity
            });
            var a = graph.addNode(e.code);
            a.code = e.code, a.name = e.name ? e.name : e.code, a.type = t.name, a.relevance = e.relevance, a.popularity = e.popularity, a.relevance > n && (n = a.relevance, focusEntity = a)
        }), r.list.sort(popularityDesc)
    }), t.forEach(function(n, r) {
        n.list.forEach(function(n) {
            var a = r === e ? 0 : r + 1;
            n.connections.forEach(function(e, r) {
                0 !== e && graph.addEdge(n.code, t[a].list[r].code, e)
            })
        })
    })
}

function buildTitleMap(t) {
    titleMap = {}, t.forEach(function(t) {
        var e = t.sourceCode + "_" + t.targetCode;
        titleMap.hasOwnProperty(e) || (titleMap[e] = []), t.title && "" !== t.title && titleMap[e].push(t.title)
    })
}

function addRelationship(t, e, n) {
    "undefined" == typeof t[e] && (t[e] = []), t[e].push(n)
}

function weightDesc(t, e) {
    var n = t.weight,
        r = e.weight;
    return r > n ? 1 : n > r ? -1 : 0
}

function popularityDesc(t, e) {
    var n = t.popularity,
        r = e.popularity;
    return r > n ? 1 : n > r ? -1 : 0
}

function updateChartData() {
    arcData = [], arcDataById = {}, bubbleData = [], bubblesById = {}, relationships = [], relationshipsByArcId = {}, relationshipsByBubbleId = {};
    var t = [],
        e = graph.getOutEdgesOf(focusEntity.code);
    e.sort(weightDesc), e.forEach(function(e) {
        t.push(graph.getNode(e.toId))
    });
    var n = [],
        r = graph.getInEdgesOf(focusEntity.code);
    r.sort(weightDesc), r.forEach(function(t) {
        n.push(graph.getNode(t.fromId))
    }), t.sort(popularityDesc), n.sort(popularityDesc);
    var a = 0,
        i = 0;
    n.forEach(function(e) {
        var n = !1,
            r = {
                id: e.code,
                name: e.name,
                type: e.type,
                value: e.popularity
            };
        t.forEach(function(t) {
            var o = graph.getEdge(t.code, e.code);
            if ("undefined" != typeof o) {
                !n && MAX_BUBBLES > i && (bubbleData.push(r), bubblesById[r.id] = r, n = !0, i++);
                var s = {
                    id: t.code,
                    name: t.name,
                    type: t.type,
                    value: 1
                };
                if (arcDataById[s.id] ? bubblesById[r.id] && arcDataById[s.id].value++ : MAX_ARCS > a && (a++, arcData.push(s), arcDataById[s.id] = s), arcDataById[s.id] && bubblesById[r.id]) {
                    var l = {
                        id: s.id + "_" + r.id,
                        arcId: s.id,
                        bubbleId: r.id
                    };
                    relationships.push(l), addRelationship(relationshipsByArcId, l.arcId, l), addRelationship(relationshipsByBubbleId, l.bubbleId, l)
                }
            }
        })
    })
}

function updateData(t) {
    vizName = t.eventTitle, vizType = t.eventSource + (t.eventDate ? ", " + t.eventDate : ""), buildGraph(t.nodeSets), buildTitleMap(t.titles), updateChartData()
}

function loadData(t, e) {
    var n = [];
    n.push(loadJson(t, function(t) {
        updateData(t)
    })), $.when.apply($, n).then(function() {
        e && e()
    })
}

function updateLabels() {
    title.text(vizType), subtitle.text(vizName), chartTitle.text(focusEntity.name), chartTitle.attr("class", "");
    var t = "hcChartTitle";
    "forward" === drillDirection ? t += " hcChartTitleForward" : "backward" === drillDirection && (t += " hcChartTitleBackward"), setTimeout(function() {
        chartTitle.attr("class", t)
    }, 10), chartTitle.style("color", CHART_LABEL), hcListItem1.text(vizLevelByIndex[0].name), hcListItem2.text(vizLevelByIndex[1].name), hcListItem3.text(vizLevelByIndex[2].name)
}

function buildArcs() {
    arcs = [], arcsById = {};
    var t = [],
        e = [],
        n = [],
        r = [],
        a = 0;
    arcData.forEach(function(t) {
        t.name in r || (e[a] = t.id, n[a] = t.name, r[t.name] = a++)
    }), arcData.forEach(function(e) {
        var n = r[e.name],
            i = t[n];
        if (!i) {
            i = t[n] = [];
            for (var o = -1; ++o < a;) i[o] = 0
        }
        i[r[e.name]] = Number(e.value)
    }), chordLayout.matrix(t), arcs = chordLayout.chords(), arcs.forEach(function(t, r) {
        t.id = e[r], t.label = n[r], t.angle = (t.source.startAngle + t.source.endAngle) / 2;
        var a = {};
        a.startAngle = t.source.startAngle, a.endAngle = t.source.endAngle, a.index = t.source.index, a.value = t.source.value, a.currentAngle = t.source.startAngle, a.currentConnectorAngle = t.source.startAngle, a.source = t.source, a.relatedConnectors = [], arcsById[t.id] = a, r++
    });
    for (var i in arcsById) arcsById.hasOwnProperty(i) && relationshipsByArcId.hasOwnProperty(i) && (arcsById[i].relatedConnectors = relationshipsByArcId[i]);
    logger("buildArcs()")
}

function updateArcs() {
    var t = arcsSvg.selectAll("g.arcs").data(arcs, function(t) {
            return t.id + "_" + t.angle
        }),
        e = t.enter().append("g").attr("class", "arcs");
    e.append("text").attr("class", "arc").attr("dx", function(t, e) {
        var n = 180 * t.angle / Math.PI;
        return 180 > n ? "10px" : "-10px"
    }).attr("dy", "3px").style("fill", ARC_LABEL_FILL).on("mouseover", function(t) {
        onMouseOver(t, "arc")
    }).on("mouseout", function(t) {
        onMouseOut(t, "arc")
    }).on("click", function(t) {
        onMouseClick(t, "arcText")
    }), e.append("path").attr("class", "arcOutline").style("fill-opacity", 0).style("stroke", function(t) {
        return ARC_STROKE
    }).style("stroke-width", function(t) {
        return 1
    }).style("stroke-opacity", ARC_STROKE_OFF_OPACITY).style("stroke-dasharray", function(t) {
        return "5, 5"
    }).attr("d", function(t, e) {
        var n = d3.svg.arc(t, e).innerRadius(innerRadius - 20).outerRadius(innerRadius);
        return n(t.source, e)
    }), e.append("circle").attr("class", "arcLabelDot").style("fill", function(t) {
        return ARC_FILL
    }).style("fill-opacity", .9).attr("r", function(t) {
        return 2
    }).attr("transform", function(t) {
        var e = (innerRadius + 17) * Math.cos(t.angle - DEGREES_90),
            n = (innerRadius + 17) * Math.sin(t.angle - DEGREES_90);
        return "translate(" + e + "," + n + ")"
    }), t.selectAll("text").attr("text-anchor", function(t) {
        return t.angle > Math.PI ? "end" : null
    }).attr("transform", function(t) {
        var e = (innerRadius + 20) * Math.cos(t.angle - DEGREES_90),
            n = (innerRadius + 20) * Math.sin(t.angle - DEGREES_90);
        return "translate(" + e + "," + n + ")"
    }).text(function(t) {
        return clipString(t.label)
    }).attr("id", function(t) {
        return "t_" + t.id
    }), t.exit().remove(), logger("updateArcs()")
}

function buildBubbles() {
    var t = [],
        e = {};
    e.children = bubbleData, t = bubbleLayout.nodes(e), t.forEach(function(t) {
        1 === t.depth && (t.relatedConnectors = relationshipsByBubbleId[t.id])
    }), logger("buildBubbles()")
}

function updateBubbles() {
    var t = bubblesSvg.selectAll("g.bubble").data(bubbleData, function(t, e) {
            return t.id + "_" + t.value + "_" + t.r
        }),
        e = t.enter().append("g").attr("class", "bubble");
    e.append("circle").attr("class", "bubble").attr("id", function(t) {
        return "b_" + t.id
    }).style("fill", function(t) {
        return BUBBLE_FILL
    }).style("fill-opacity", BUBBLE_FILL_OFF_OPACITY).on("mouseover", function(t) {
        onMouseOver(t, "bubble")
    }).on("mouseout", function(t) {
        onMouseOut(t, "bubble")
    }).on("click", function(t) {
        onMouseClick(t, "bubble")
    }).attr("r", function(t) {
        return 0
    }).transition().duration(800).ease("elastic").attr("r", function(t) {
        return t.r - 1
    }), e.append("circle").attr("class", "bubbleHighlight").style("fill-opacity", 0).style("stroke", HIGHLIGHT).style("stroke-width", 2).style("stroke-opacity", 1), e.append("circle").attr("class", "bubbleCenter").style("fill", function(t) {
        return "#FFFFFF"
    }).style("fill-opacity", 1).attr("r", function(t) {
        return t.r > 75 ? 3 : 2
    });
    var n = e.append("g").attr("id", function(t) {
        return "bh_" + t.id
    }).style("opacity", 0);
    n.append("circle").attr("class", "bubbleCenterHighlight").style("fill", function(t) {
        return "#FFF"
    }).style("fill-opacity", 1), t.attr("transform", function(t) {
        return "translate(" + t.x + "," + t.y + ")"
    }), t.selectAll(".bubbleCenterHighlight").attr("r", function(t) {
        return 4
    }), t.exit().remove().transition().duration(500).style("opacity", 0), logger("updateBubbles()")
}

function updateBubbleLabels() {
    var t = bubbleLabelsSvg.selectAll("g.bubbleLabels").data(bubbleData, function(t, e) {
            return t.id + "_" + t.value + "_" + t.r
        }),
        e = t.enter().append("g").attr("class", "bubbleLabels"),
        n = e.append("g");
    e.append("text").attr("id", function(t) {
        return "t_" + t.id.toString().replace(/&/g, "")
    }).text(function(t) {
        return clipString(t.name)
    }).style("font-size", function(t) {
        return 18 * Math.min(1, Math.max(.5, 2 * t.r / bubbleRadius)) + "px"
    }).attr("dy", function(t, e) {
        var n = "-3px",
            r = this.getBBox().height;
        return r >= 22 ? n = "-5px" : r > 15 && (n = "-4px"), n
    }).attr("dx", function(t, e) {
        if (t.textLength = this.getComputedTextLength(), t.textHeight = this.getBBox().height, t.x > bubbleRadius) return "35px";
        var n = t.textLength + 35;
        return "-" + n + "px"
    }), n.append("path").attr("id", function(t) {
        return "p_" + t.id.toString().replace(/&/g, "")
    }).style("fill", CALLOUT_BACKGROUND).style("stroke", CALLOUT_BACKGROUND).style("stroke-width", 1.5).attr("class", "bubbleLabel").attr("d", function(t, e) {
        var n = t.textLength + 40,
            r = 25 * (t.textHeight / 22);
        return t.x > bubbleRadius ? "M 0,0 L " + n + ",0 L " + n + ",-" + r + " L 35,-" + r + " L 15,0 Z" : "M 0,0 L -" + n + ",0 L -" + n + ",-" + r + " L -35,-" + r + " L -15,0 Z"
    }), t.attr("transform", function(t) {
        return "translate(" + t.x + "," + t.y + ")"
    }), t.exit().remove().transition().duration(500).style("opacity", 0), logger("updateBubbleLabels()")
}

function drawArc(t, e) {
    var n = {},
        r = arcsById[t.arcId],
        a = arcDataById[t.arcId];
    n.startAngle = r.currentAngle, r.currentAngle = r.currentAngle + Number(1) / a.value * (r.endAngle - r.startAngle), n.endAngle = r.currentAngle;
    var i = d3.svg.arc(t, e).innerRadius(connectorRadius).outerRadius(innerRadius);
    return i(n)
}

function updateConnectors(t) {
    function e(t) {
        var e = {},
            n = {},
            r = {},
            a = {},
            i = {},
            o = arcsById[t.arcId],
            s = arcDataById[t.arcId],
            l = bubblesById[t.bubbleId],
            c = connectorRadius,
            u = (c * Math.cos(o.currentConnectorAngle - DEGREES_90), c * Math.sin(o.currentConnectorAngle - DEGREES_90), o.currentConnectorAngle - DEGREES_90);
        o.currentConnectorAngle = o.currentConnectorAngle + Number(1) / s.value * (o.endAngle - o.startAngle);
        var d = o.currentConnectorAngle - DEGREES_90;
        return n.x = c * Math.cos(u), n.y = c * Math.sin(u), e.x = l.x - (arcsTranslateX - bubblesTranslateX), e.y = l.y - (arcsTranslateY - bubblesTranslateY), i.x = c * Math.cos(d), i.y = c * Math.sin(d), r.source = n, r.target = e, a.source = e, a.target = i, [r, a]
    }
    var n = connectorsSvg.selectAll("g.connectors").data(t, function(t, e) {
            return t.id
        }),
        r = n.enter().append("g").attr("class", "connectors");
    r.append("g").append("path").attr("class", "arc").attr("id", function(t) {
        return "a_" + t.id
    }).style("fill", function(t) {
        return ARC_FILL
    }).style("fill-opacity", CONNECTOR_ARC_OFF_OPACITY).attr("d", function(t, e) {
        return drawArc(t, e)
    }).on("mouseover", function(t) {
        onMouseOver(t, "connector")
    }).on("mouseout", function(t) {
        onMouseOut(t, "connector")
    }).on("click", function(t) {
        onMouseClick(t, "arc")
    }), r.append("path").attr("class", "connector").attr("id", function(t) {
        return "c_" + t.id
    }).style("stroke", function(t) {
        return CONNECTOR_STROKE
    }).style("stroke-width", function(t) {
        return 1
    }).style("stroke-opacity", CONNECTOR_STROKE_OFF_OPACITY).style("fill", function(t) {
        return CONNECTOR_FILL
    }).style("fill-opacity", CONNECTOR_OFF_OPACITY).attr("d", function(t, n) {
        t.connectors = e(t);
        var r = diagonal(t.connectors[0], n);
        return r += "L" + String(diagonal(t.connectors[1], n)).substr(1), r += "A" + connectorRadius + "," + connectorRadius + " 0 0, 0 " + t.connectors[0].source.x + "," + t.connectors[0].source.y
    }).on("mouseover", function(t) {
        onMouseOver(t, "connector")
    }).on("mouseout", function(t) {
        onMouseOut(t, "connector")
    }), n.exit().remove(), logger("updateConnectors()")
}

function onMouseOver(t, e) {
    if (!drilling) {
        var n = [],
            r = [];
        if ("bubble" === e) {
            if (t.depth < 1) return;
            for (var a in arcsById)
                if (arcsById.hasOwnProperty(a)) {
                    for (var i = !1, o = 0; o < t.relatedConnectors.length; o++)
                        if (a === t.relatedConnectors[o].arcId.toString()) {
                            i = !0;
                            break
                        }
                    i || n.push(a)
                }
            for (var s in bubblesById) bubblesById.hasOwnProperty(s) && s !== t.id.toString() && r.push(s);
            highlightConnectors(t, !0)
        } else if ("connector" === e) {
            for (var l in arcsById) arcsById.hasOwnProperty(l) && l !== t.arcId.toString() && n.push(l);
            for (var c in bubblesById) bubblesById.hasOwnProperty(c) && c !== t.bubbleId.toString() && r.push(c);
            highlightConnector(t, !0)
        } else if ("arc" === e) {
            for (var u in arcsById) arcsById.hasOwnProperty(u) && u !== t.id.toString() && n.push(u);
            var d = arcsById[t.id].relatedConnectors;
            for (var b in bubblesById)
                if (bubblesById.hasOwnProperty(b)) {
                    for (var p = !1, h = 0; h < d.length; h++)
                        if (b === d[h].bubbleId.toString()) {
                            p = !0;
                            break
                        }
                    p || r.push(b)
                }
            highlightConnectors(arcsById[t.id], !0)
        }
        hideArcLabels(n, !0), hideBubbleLabels(r, !0), updateContentArea(t, e)
    }
}

function onMouseOut(t, e) {
    if (!drilling) {
        var n = [];
        for (var r in arcsById) arcsById.hasOwnProperty(r) && n.push(r);
        hideArcLabels(n, !1);
        var a = [];
        for (var i in bubblesById) bubblesById.hasOwnProperty(i) && a.push(i);
        hideBubbleLabels(a, !1), "bubble" === e ? highlightConnectors(t, !1) : "connector" === e ? highlightConnector(t, !1) : "arc" === e && highlightConnectors(arcsById[t.id], !1), clearContentArea()
    }
}

function hideArcLabels(t, e) {
    t.forEach(function(t) {
        var n = d3.select(document.getElementById("t_" + t));
        n.transition().duration(550).style("opacity", e === !0 ? 0 : 1)
    })
}

function hideBubbleLabels(t, e) {
    t.forEach(function(t) {
        var n = d3.select(document.getElementById("t_" + t.toString().replace(/&/g, "")));
        n.transition().duration(550).style("opacity", e === !0 ? 0 : 1);
        var r = d3.select(document.getElementById("p_" + t.toString().replace(/&/g, "")));
        r.transition().duration(550).style("opacity", e === !0 ? 0 : 1)
    })
}

function highlightConnector(t, e) {
    var n = d3.select(document.getElementById("b_" + t.bubbleId));
    n.transition().duration(e === !0 ? 75 : 550).style("fill-opacity", e === !0 ? BUBBLE_FILL_ON_OPACITY : BUBBLE_FILL_OFF_OPACITY);
    var r = d3.select(document.getElementById("bh_" + t.bubbleId));
    r.transition().duration(e === !0 ? 75 : 550).style("opacity", e === !0 ? 1 : 0);
    var a = d3.select(document.getElementById("c_" + t.id));
    a.transition().duration(e === !0 ? 150 : 550).style("fill-opacity", e === !0 ? CONNECTOR_ON_OPACITY : CONNECTOR_OFF_OPACITY).style("stroke-opacity", e === !0 ? CONNECTOR_STROKE_ON_OPACITY : CONNECTOR_STROKE_OFF_OPACITY);
    var i = d3.select(document.getElementById("a_" + t.id));
    i.transition().duration(e === !0 ? 300 : 550).style("fill-opacity", e === !0 ? CONNECTOR_ARC_ON_OPACITY : CONNECTOR_ARC_OFF_OPACITY);
    var o = d3.select(document.getElementById("t_" + t.arcId));
    o.transition().duration(400).style("opacity", 1)
}

function highlightConnectors(t, e) {
    t.relatedConnectors.forEach(function(t) {
        highlightConnector(t, e)
    })
}

function arcFall(t) {
    t.attrTween("d", function(t) {
        {
            var e = {},
                n = arcsById[t.arcId];
            arcDataById[t.arcId]
        }
        e.startAngle = n.startAngle, e.endAngle = n.endAngle;
        var r = d3.interpolate(innerRadius - 20, 0),
            a = d3.interpolate(innerRadius, 20);
        return function(t) {
            e.innerRadius = r(t), e.outerRadius = a(t);
            var n = d3.svg.arc();
            return n(e)
        }
    })
}

function onMouseClick(t, e) {
    if (clearContentArea(), "bubble" === e) {
        drilling = !0, drillDirection = "forward";
        var n = d3.select(document.getElementById("b_" + t.id));
        n.transition().style("fill-opacity", .3).attr("transform", function(t) {
            var e = bubbleRadius - t.x,
                n = bubbleRadius - t.y;
            return "translate(" + e + ", " + n + ")"
        }).duration(550).ease("exp-in").attr("r", function(t) {
            return innerRadius
        }).each("end", function() {
            focusEntity = graph.getNode(t.id), updateArcBubbleChart(), drilling = !1
        })
    } else if ("arc" === e || "arcText" === e) {
        drilling = !0, drillDirection = "backward";
        var r, a;
        "arc" === e ? (r = t.id, a = t.arcId) : (r = arcsById[t.id].relatedConnectors[0].id, a = t.id);
        var i = d3.select(document.getElementById("a_" + r));
        i.style("fill-opacity", 1).transition().duration(550).ease("exp-in").call(arcFall, this).each("end", function() {
            focusEntity = graph.getNode(a), updateArcBubbleChart(), drilling = !1
        })
    }
}

function addContentRow(t, e) {
    if (-1 === currentTable.indexOf(e)) {
        currentTable.push(e);
        var n = $("<tr />");
        t.append(n), n.append($("<td>" + e + "</td>"))
    }
}

function updateContentArea(t, e) {
    if (contentArea.empty(), currentTable = [], "bubble" === e) t.relatedConnectors.forEach(function(t) {
        titleMap[t.id].forEach(function(t) {
            addContentRow(contentArea, t)
        })
    });
    else if ("connector" === e) titleMap[t.id].forEach(function(t) {
        addContentRow(contentArea, t)
    });
    else if ("arc" === e) {
        var n = arcsById[t.id].relatedConnectors;
        n.forEach(function(t) {
            titleMap[t.id].forEach(function(t) {
                addContentRow(contentArea, t)
            })
        })
    }
    contentArea.attr("class", "fadeVisible")
}

function clearContentArea() {
    contentArea.attr("class", "fadeHidden")
}

function initArcBubbleChart() {
    initialize(), updateLabels(), updateArcs(), updateConnectors(relationships), updateBubbles(), updateBubbleLabels()
}

function updateArcBubbleChart() {
    updateChartData(), resize(), buildArcs(), buildBubbles(), updateLabels(), updateArcs(), updateConnectors(relationships), updateBubbles(), updateBubbleLabels()
}
var Graph, hasProp = {}.hasOwnProperty;
Graph = function() {
    function t() {
        this.nodes = {}, this.nodeSize = 0, this.edgeSize = 0
    }
    return t.prototype.addNode = function(t) {
        return this.nodes[t] ? void 0 : (this.nodeSize++, this.nodes[t] = {
            outEdges: {},
            inEdges: {}
        }, this.nodes[t])
    }, t.prototype.getNode = function(t) {
        return this.nodes[t]
    }, t.prototype.removeNode = function(t) {
        var e, n, r, a, i;
        if (n = this.nodes[t], !n) return void 0;
        a = n.outEdges;
        for (r in a) hasProp.call(a, r) && this.removeEdge(t, r);
        i = n.inEdges;
        for (e in i) hasProp.call(i, e) && this.removeEdge(e, t);
        return this.nodeSize--, delete this.nodes[t], n
    }, t.prototype.addEdge = function(t, e, n) {
        var r, a, i;
        return null == n && (n = 1), this.getEdge(t, e) ? void 0 : (a = this.nodes[t], i = this.nodes[e], a && i ? (r = {
            fromId: t,
            toId: e,
            weight: n
        }, a.outEdges[e] = r, i.inEdges[t] = r, this.edgeSize++, r) : void 0)
    }, t.prototype.getEdge = function(t, e) {
        var n, r;
        return n = this.nodes[t], r = this.nodes[e], n && r ? n.outEdges[e] : void 0
    }, t.prototype.removeEdge = function(t, e) {
        var n, r, a;
        return r = this.nodes[t], a = this.nodes[e], (n = this.getEdge(t, e)) ? (delete r.outEdges[e], delete a.inEdges[t], this.edgeSize--, n) : void 0
    }, t.prototype.getInEdgesOf = function(t) {
        var e, n, r, a;
        r = this.nodes[t], n = [], a = null != r ? r.inEdges : void 0;
        for (e in a) hasProp.call(a, e) && n.push(this.getEdge(e, t));
        return n
    }, t.prototype.getOutEdgesOf = function(t) {
        var e, n, r, a;
        e = this.nodes[t], n = [], a = null != e ? e.outEdges : void 0;
        for (r in a) hasProp.call(a, r) && n.push(this.getEdge(t, r));
        return n
    }, t.prototype.getAllEdgesOf = function(t) {
        var e, n, r, a, i, o, s;
        if (r = this.getInEdgesOf(t), a = this.getOutEdgesOf(t), 0 === r.length) return a;
        for (i = this.getEdge(t, t), e = n = 0, o = r.length; o >= 0 ? o > n : n > o; e = o >= 0 ? ++n : --n)
            if (r[e] === i) {
                s = [r[r.length - 1], r[e]], r[e] = s[0], r[r.length - 1] = s[1], r.pop();
                break
            }
        return r.concat(a)
    }, t.prototype.forEachNode = function(t) {
        var e, n, r;
        r = this.nodes;
        for (e in r) hasProp.call(r, e) && (n = r[e], t(n, e))
    }, t.prototype.forEachEdge = function(t) {
        var e, n, r, a, i, o;
        i = this.nodes;
        for (n in i)
            if (hasProp.call(i, n)) {
                r = i[n], o = r.outEdges;
                for (a in o) hasProp.call(o, a) && (e = o[a], t(e))
            }
    }, t
}();
var MAX_ARCS = 5,
    MAX_BUBBLES = 5,
    NODE_TYPE_1 = "#1478ba",
    NODE_TYPE_2 = "#7b3890",
    NODE_TYPE_3 = "#05a9a9",
    ARC_FILL = NODE_TYPE_1,
    ARC_LABEL_FILL = NODE_TYPE_1,
    ARC_STROKE = "#FFFFFF",
    CONNECTOR_FILL = NODE_TYPE_1,
    CONNECTOR_STROKE = "#FFFFFF",
    BUBBLE_FILL = NODE_TYPE_2,
    CHART_LABEL = NODE_TYPE_3,
    CALLOUT_BACKGROUND = "#CCC",
    HIGHLIGHT = "#C5B358",
    ARC_STROKE_OFF_OPACITY = .9,
    BUBBLE_FILL_ON_OPACITY = .8,
    BUBBLE_FILL_OFF_OPACITY = .5,
    CONNECTOR_ARC_ON_OPACITY = .9,
    CONNECTOR_ARC_OFF_OPACITY = 0,
    CONNECTOR_ON_OPACITY = .9,
    CONNECTOR_OFF_OPACITY = .22,
    CONNECTOR_STROKE_ON_OPACITY = .9,
    CONNECTOR_STROKE_OFF_OPACITY = .4,
    TOOLTIP_OPACITY = "0.9",
    DEGREES_90 = 1.57079633,
    graph, titleMap = {},
    focusEntity = {},
    vizName = "",
    vizType = "",
    vizLevelByName = {},
    vizLevelByIndex = [],
    arcs = [],
    arcsById = {},
    arcData = [],
    arcDataById = {},
    bubbleData = [],
    bubblesById = {},
    drilling = !1,
    drillDirection = "forward",
    relationships = [],
    relationshipsByArcId = {},
    relationshipsByBubbleId = {},
    bubbleLayout, chordLayout, diagonal, arcsSvg, bubblesSvg, bubbleLabelsSvg, connectorsSvg, outerRadius, innerRadius, bubbleRadius, connectorRadius, bubblesTranslateX, bubblesTranslateY, arcsTranslateX, arcsTranslateY, title = d3.select(document.getElementById("hcTitle")),
    subtitle = d3.select(document.getElementById("hcSubTitle")),
    chartTitle = d3.select(document.getElementById("hcChartTitle")),
    contentArea = $("#contentAreaTable"),
    hcListItem1 = d3.select(document.getElementById("hcListItem1")),
    hcListItem2 = d3.select(document.getElementById("hcListItem2")),
    hcListItem3 = d3.select(document.getElementById("hcListItem3")),
    formatNumber = d3.format(",.0f"),
    formatCurrency = function(t) {
        return "$" + formatNumber(t)
    },
    currentTable;
//loadData("4019_July7_2015.json", initArcBubbleChart);