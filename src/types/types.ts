type NodeType = {
  id: number,
  data:{  
    title:string,
    nodeImage?: string,
    text?: string,
    percentage?: number

  };
  onClick?: () => void
}
type NodesType = NodeType[]

type CategrieType = {
  id: number,
  title: string,
  childrenNodes: number[]
}
type CategriesType = CategrieType[]

export type { NodeType, NodesType, CategriesType }