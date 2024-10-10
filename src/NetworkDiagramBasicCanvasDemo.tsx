import { data } from "./data";
import { NetworkDiagram } from "./NetworkDiagram";

export const NetworkDiagramBasicCanvasDemo = ({
  width = 1024,
  height = 768,
}) => {
  if (width === 0) {
    return null;
  }
  return <NetworkDiagram data={data} width={width} height={height} />;
};
