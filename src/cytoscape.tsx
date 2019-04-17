import React from 'react';
import cytoscape, { CytoscapeOptions } from 'cytoscape';
import {nodes, edges} from './data';
import './cytoscape.css';

type state = {};
type props = {}

export default class Cytoscape extends React.Component<state, props> {
  constructor(props: any) {
    super(props);

  }

  componentDidMount() {
    let cytoscapeOptions: CytoscapeOptions = {
      container: document.getElementById('cy'),
      userZoomingEnabled: true,
      layout: {
              name: 'grid',
              cols: 2
      },

      style: [
        {
          "selector": 'node',
          'style': {
            // 'shape': 'data(faveShape)',
            'shape': 'data(faveShape)',
            'height': 100,
            'width': 100,
            'content': 'data(name)',
            "text-valign": "bottom",
            "text-halign": "center",
            "text-wrap": 'wrap',
            "text-max-width": 40,
            'text-outline-width': 2,
            'pie-i-background-color': 'red',
            'pie-size': '100%',
            'text-outline-color': 'data(faveColor)',
            'background-color': 'data(faveColor)',

            'color': '#fff'
          }
        },
        {
          'selector': 'node:selected',
          'style': {
            'border-width': 3,
            'border-color': '#333'
          }
        },
        {
          'selector': 'edge',
          'style': {
            'curve-style': 'bezier',
            'opacity': 0.666,
            'width': 'mapData(strength, 70, 100, 2, 6)',
            'target-arrow-shape': 'triangle',
          //   'source-arrow-shape': 'circle',
            'line-color': 'data(faveColor)',
            'source-arrow-color': 'data(faveColor)',
            'target-arrow-color': 'data(faveColor)'
          }
        },
        {
          'selector': 'edge.dashed',
          'style': {
            'line-style': 'dashed',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      elements: {
        nodes: nodes,
        edges: edges
      }
    };

    let cytoscapeInstance = cytoscape(cytoscapeOptions);
    cytoscapeInstance.ready(() => {
      // document.getElementById('toggleZoom').addEventListener('click', toggleZoom);
      cytoscapeInstance.on('select', 'node', function(e){
        console.log(e.target)
        cytoscapeInstance.animate({
            center: {
                eles: e.target,
            },
            zoom: {
              level: 2,
              position: e.target._private.position
            },
          }, {
          duration: 500
          });
      });

      cytoscapeInstance.on('unselect', 'node', function(e){
        cytoscapeInstance.animate({
          zoom: { level: 1, position: e.target._private.position },
          center: { eles: cytoscapeInstance.$('nodes')},
        }, {
        duration: 500
        });
      });

      function toggleZoom() {
        cytoscapeInstance.zoomingEnabled(!cytoscapeInstance.zoomingEnabled());
      }
    })
  }

  render() {
    return (
      <div id="cy" className="graph"></div>
    );
  }
}