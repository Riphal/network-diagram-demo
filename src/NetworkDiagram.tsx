import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { RADIUS, drawNetwork } from "./drawNetwork";
import { Data, Link, Node } from "./data";

// Update this type definition
type SimulationNode = d3.SimulationNodeDatum & Node;
type SimulationLink = d3.SimulationLinkDatum<SimulationNode> & Link;

type NetworkDiagramProps = {
  width: number;
  height: number;
  data: Data;
};

export const NetworkDiagram = ({
  width,
  height,
  data,
}: NetworkDiagramProps) => {
  const links: SimulationLink[] = data.links.map((d) => ({ ...d }));
  const nodes: SimulationNode[] = data.nodes.map((d) => ({ ...d }));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) {
      return;
    }

    const nodeMap = new Map(nodes.map((node) => [node.id, node]));
    const updatedLinks: SimulationLink[] = links.map((link) => ({
      ...link,
      source: nodeMap.get(link.source as string) || link.source,
      target: nodeMap.get(link.target as string) || link.target,
    }));

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink<SimulationNode, SimulationLink>(updatedLinks)
          .id((d) => d.id)
          .distance(30) // Reduce link distance for more compactness
      )
      .force("collide", d3.forceCollide().radius(RADIUS * 1.2))
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.1))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1))
      .force("bounds", () => {
        const padding = RADIUS * 2;
        for (let node of nodes) {
          node.x = Math.max(padding, Math.min(width - padding, node.x!));
          node.y = Math.max(padding, Math.min(height - padding, node.y!));
        }
      })
      .on("tick", () => {
        drawNetwork(context, width, height, nodes, updatedLinks);
      });

    // Increase the number of ticks for better stabilization
    simulation.stop();
    simulation.tick(500);
    drawNetwork(context, width, height, nodes, updatedLinks);
  }, [width, height, nodes, links]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
        width={width}
        height={height}
      />
    </div>
  );
};
