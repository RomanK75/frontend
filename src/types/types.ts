type NodeType = {
  id: number,
  data:{  
    title:string,
    nodeImage: string,
    parentsNode?: number,
    childrenNode?: number[],
    text?: string,
    percentage: number
  };
  onClick?: () => void
}
type NodesType = NodeType[]

export type { NodeType, NodesType }