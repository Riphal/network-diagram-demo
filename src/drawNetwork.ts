import { Link, Node } from "./data";

export const RADIUS = 10;

export const drawNetwork = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  links: Link[]
) => {
  context.clearRect(0, 0, width, height);

  // Draw the links first
  links.forEach((link) => {
    const source = link.source as Node;
    const target = link.target as Node;
    context.beginPath();
    context.moveTo(source.x!, source.y!);
    context.lineTo(target.x!, target.y!);
    context.stroke();
  });

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    if (node.image) {
      const img = new Image();
      img.src = node.image;
      img.onload = () => {
        context.save();
        context.beginPath();
        context.arc(node.x!, node.y!, RADIUS, 0, 2 * Math.PI);
        context.clip();
        context.drawImage(
          img,
          node.x! - RADIUS,
          node.y! - RADIUS,
          RADIUS * 2,
          RADIUS * 2
        );
        context.restore();
      };
    } else {
      context.beginPath();
      context.moveTo(node.x + RADIUS, node.y);
      context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
      context.fill();
    }
  });
};
