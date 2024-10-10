import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  image?: string;
}

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
  value: number;
}

export type Data = {
  nodes: Node[];
  links: Link[];
};

export const data = {
  nodes: [
    {
      id: "Myriel",
      group: "team1",
      image:
        "https://unsplash.com/photos/WNoLnJo7tS8/download?force=true&w=640",
    },
    {
      id: "Anne",
      group: "team1",
      image:
        "https://unsplash.com/photos/v0zVmWULYTg/download?force=true&w=640",
    },
    {
      id: "Gabriel",
      group: "team1",
      image:
        "https://unsplash.com/photos/v1z1q9JEE4s/download?force=true&w=640",
    },
    {
      id: "Mel",
      group: "team1",
      image:
        "https://unsplash.com/photos/8I-ht65iRww/download?force=true&w=640",
    },
    {
      id: "Yan",
      group: "team1",
      image:
        "https://unsplash.com/photos/gCzjhZUnp_w/download?force=true&w=640",
    },
    {
      id: "Tom",
      group: "team1",
      image:
        "https://unsplash.com/photos/Nv4QHkTVEaI/download?force=true&w=640",
    },
    {
      id: "Cyril",
      group: "team1",
      image:
        "https://unsplash.com/photos/Y9dr8NIT2AM/download?force=true&w=640",
    },
    {
      id: "Tuck",
      group: "team1",
      image:
        "https://unsplash.com/photos/YiUi00uqK4k/download?force=true&w=640",
    },
    {
      id: "Antoine",
      group: "team1",
      image:
        "https://unsplash.com/photos/JyVcAIUAcPM/download?force=true&w=640",
    },
    {
      id: "Rob",
      group: "team1",
      image:
        "https://unsplash.com/photos/B5Ef8xgEIOQ/download?force=true&w=640",
    },
    {
      id: "Napoleon",
      group: "team1",
      image:
        "https://unsplash.com/photos/rFUFqjEKzfY/download?force=true&w=640",
    },
    {
      id: "Toto",
      group: "team1",
      image:
        "https://unsplash.com/photos/gxD8hCmi0IQ/download?force=true&w=640",
    },
    {
      id: "Tutu",
      group: "team1",
      image:
        "https://unsplash.com/photos/v-Vdti9R7_k/download?force=true&w=640",
    },
    {
      id: "Titi",
      group: "team1",
      image:
        "https://unsplash.com/photos/6VhPY27jdps/download?force=true&w=640",
    },
    {
      id: "Tata",
      group: "team1",
      image:
        "https://unsplash.com/photos/pWkk7iiCoDM/download?force=true&w=640",
    },
    {
      id: "Turlututu",
      group: "team1",
      image:
        "https://unsplash.com/photos/TMgQMXoglsM/download?force=true&w=640",
    },
    {
      id: "Tita",
      group: "team1",
      image:
        "https://unsplash.com/photos/A-NVHPka9Rk/download?force=true&w=640",
    },
    {
      id: "Leo",
      group: "team1",
      image:
        "https://unsplash.com/photos/jLx_2p8JYJo/download?force=true&w=640",
    },
    {
      id: "Paul",
      group: "team1",
      image:
        "https://unsplash.com/photos/JUAVC17Alf0/download?force=true&w=640",
    },
    {
      id: "Julie",
      group: "team1",
      image:
        "https://unsplash.com/photos/OQptScaMJeA/download?force=true&w=640",
    },
    {
      id: "Sara",
      group: "team1",
      image:
        "https://unsplash.com/photos/_cvwXhGqG-o/download?force=true&w=640",
    },
    {
      id: "Emma",
      group: "team1",
      image:
        "https://unsplash.com/photos/wc3K9-ck7_k/download?force=true&w=640",
    },
    {
      id: "Sophia",
      group: "team1",
      image:
        "https://unsplash.com/photos/vMV6r4VRhJ8/download?force=true&w=640",
    },
    {
      id: "James",
      group: "team1",
      image:
        "https://unsplash.com/photos/f_FpXTGr2t0/download?force=true&w=640",
    },
    {
      id: "John",
      group: "team1",
      image:
        "https://unsplash.com/photos/7kEpUPB8vNk/download?force=true&w=640",
    },
    {
      id: "Lucas",
      group: "team1",
      image:
        "https://unsplash.com/photos/l5d8g7wd9_A/download?force=true&w=640",
    },
    {
      id: "Nina",
      group: "team1",
      image:
        "https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=640",
    },
    {
      id: "Isabella",
      group: "team1",
      image:
        "https://unsplash.com/photos/QXevDflbl8A/download?force=true&w=640",
    },
    {
      id: "Oliver",
      group: "team1",
      image:
        "https://unsplash.com/photos/qC9LRZLN_HU/download?force=true&w=640",
    },
    {
      id: "Liam",
      group: "team1",
      image:
        "https://unsplash.com/photos/vGgn0xLdy8s/download?force=true&w=640",
    },
    {
      id: "Mia",
      group: "team1",
      image:
        "https://unsplash.com/photos/GMZnNSyFKfo/download?force=true&w=640",
    },
    {
      id: "Mason",
      group: "team1",
      image:
        "https://unsplash.com/photos/XkKCui44iM0/download?force=true&w=640",
    },
    {
      id: "Henry",
      group: "team1",
      image:
        "https://unsplash.com/photos/qC0N_j4MiWw/download?force=true&w=640",
    },
    {
      id: "Ethan",
      group: "team1",
      image:
        "https://unsplash.com/photos/MP0bgaS_d1c/download?force=true&w=640",
    },
    {
      id: "Sophie",
      group: "team1",
      image:
        "https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true&w=640",
    },
    {
      id: "Emily",
      group: "team1",
      image:
        "https://unsplash.com/photos/FBXuXp57eM0/download?force=true&w=640",
    },
    {
      id: "Chloe",
      group: "team1",
      image:
        "https://unsplash.com/photos/Cm7oKel-X2Q/download?force=true&w=640",
    },
    {
      id: "Zoe",
      group: "team1",
      image:
        "https://unsplash.com/photos/PXl_S152rBM/download?force=true&w=640",
    },
    {
      id: "Ben",
      group: "team1",
      image:
        "https://unsplash.com/photos/qvSaGQsASkM/download?force=true&w=640",
    },
    {
      id: "Noah",
      group: "team1",
      image:
        "https://unsplash.com/photos/6anudmpILw4/download?force=true&w=640",
    },
    {
      id: "Elena",
      group: "team1",
      image:
        "https://unsplash.com/photos/7KLa-xLbSXA/download?force=true&w=640",
    },
    {
      id: "Lily",
      group: "team1",
      image:
        "https://unsplash.com/photos/eMP4sYPJ9x0/download?force=true&w=640",
    },
    {
      id: "Grace",
      group: "team1",
      image:
        "https://unsplash.com/photos/NDuPLKYRXQU/download?force=true&w=640",
    },
    {
      id: "Ava",
      group: "team1",
      image:
        "https://unsplash.com/photos/j8u9Ee7jzaA/download?force=true&w=640",
    },
    {
      id: "David",
      group: "team1",
      image:
        "https://unsplash.com/photos/kfJkpeI6Lgc/download?force=true&w=640",
    },
    {
      id: "Matthew",
      group: "team1",
      image:
        "https://unsplash.com/photos/eWMUCoHdSc4/download?force=true&w=640",
    },
    {
      id: "Charlie",
      group: "team1",
      image:
        "https://unsplash.com/photos/3TLl_97HNJo/download?force=true&w=640",
    },
    {
      id: "Alice",
      group: "team1",
      image:
        "https://unsplash.com/photos/Ds0ZIA5gzc4/download?force=true&w=640",
    },
    {
      id: "Jacob",
      group: "team1",
      image:
        "https://unsplash.com/photos/lUaaKCUANVI/download?force=true&w=640",
    },
  ],
  links: [
    { source: "Myriel", target: "Anne", value: 1 },
    { source: "Myriel", target: "Gabriel", value: 1 },
    { source: "Myriel", target: "Mel", value: 1 },
    { source: "Anne", target: "Gabriel", value: 1 },
    { source: "Anne", target: "Mel", value: 1 },
    { source: "Gabriel", target: "Mel", value: 1 },
    { source: "Yan", target: "Tom", value: 1 },
    { source: "Yan", target: "Cyril", value: 1 },
    { source: "Yan", target: "Tuck", value: 1 },
    { source: "Tom", target: "Cyril", value: 1 },
    { source: "Tom", target: "Tuck", value: 1 },
    { source: "Cyril", target: "Tuck", value: 1 },
    { source: "Antoine", target: "Rob", value: 1 },
    { source: "Antoine", target: "Napoleon", value: 1 },
    { source: "Antoine", target: "Toto", value: 1 },
    { source: "Rob", target: "Napoleon", value: 1 },
    { source: "Rob", target: "Toto", value: 1 },
    { source: "Napoleon", target: "Toto", value: 1 },
    { source: "Tutu", target: "Titi", value: 1 },
    { source: "Tutu", target: "Tata", value: 1 },
    { source: "Tutu", target: "Turlututu", value: 1 },
    { source: "Titi", target: "Tata", value: 1 },
    { source: "Titi", target: "Turlututu", value: 1 },
    { source: "Tata", target: "Turlututu", value: 1 },
    { source: "Tita", target: "Leo", value: 1 },
    { source: "Tita", target: "Paul", value: 1 },
    { source: "Tita", target: "Julie", value: 1 },
    { source: "Leo", target: "Paul", value: 1 },
    { source: "Leo", target: "Julie", value: 1 },
    { source: "Paul", target: "Julie", value: 1 },
    { source: "Sara", target: "Emma", value: 1 },
    { source: "Sara", target: "Sophia", value: 1 },
    { source: "Sara", target: "James", value: 1 },
    { source: "Emma", target: "Sophia", value: 1 },
    { source: "Emma", target: "James", value: 1 },
    { source: "Sophia", target: "James", value: 1 },
    { source: "John", target: "Lucas", value: 1 },
    { source: "John", target: "Nina", value: 1 },
    { source: "John", target: "Isabella", value: 1 },
    { source: "Lucas", target: "Nina", value: 1 },
    { source: "Lucas", target: "Isabella", value: 1 },
    { source: "Nina", target: "Isabella", value: 1 },
    { source: "Oliver", target: "Liam", value: 1 },
    { source: "Oliver", target: "Mia", value: 1 },
    { source: "Oliver", target: "Mason", value: 1 },
    { source: "Liam", target: "Mia", value: 1 },
    { source: "Liam", target: "Mason", value: 1 },
    { source: "Mia", target: "Mason", value: 1 },
    { source: "Henry", target: "Ethan", value: 1 },
    { source: "Henry", target: "Sophie", value: 1 },
    { source: "Henry", target: "Emily", value: 1 },
    { source: "Ethan", target: "Sophie", value: 1 },
    { source: "Ethan", target: "Emily", value: 1 },
    { source: "Sophie", target: "Emily", value: 1 },
    { source: "Chloe", target: "Zoe", value: 1 },
    { source: "Chloe", target: "Ben", value: 1 },
    { source: "Chloe", target: "Noah", value: 1 },
    { source: "Zoe", target: "Ben", value: 1 },
    { source: "Zoe", target: "Noah", value: 1 },
    { source: "Ben", target: "Noah", value: 1 },
    { source: "Elena", target: "Lily", value: 1 },
    { source: "Elena", target: "Grace", value: 1 },
    { source: "Elena", target: "Ava", value: 1 },
    { source: "Lily", target: "Grace", value: 1 },
    { source: "Lily", target: "Ava", value: 1 },
    { source: "Grace", target: "Ava", value: 1 },
    { source: "David", target: "Matthew", value: 1 },
    { source: "David", target: "Charlie", value: 1 },
    { source: "David", target: "Alice", value: 1 },
    { source: "Matthew", target: "Charlie", value: 1 },
    { source: "Matthew", target: "Alice", value: 1 },
    { source: "Charlie", target: "Alice", value: 1 },
    { source: "Jacob", target: "Myriel", value: 1 },
    { source: "Jacob", target: "Yan", value: 1 },
    { source: "Jacob", target: "Antoine", value: 1 },
    { source: "Myriel", target: "Yan", value: 1 },
    { source: "Antoine", target: "Tutu", value: 1 },
    { source: "Tita", target: "Sara", value: 1 },
    { source: "John", target: "Oliver", value: 1 },
    { source: "Henry", target: "Chloe", value: 1 },
    { source: "Elena", target: "David", value: 1 },
  ],
};

// Add this new configuration object at the end of the file
export const forceConfig = {
  strength: -400,
  distance: 100,
  center: 0.1,
  collision: 60,
};
