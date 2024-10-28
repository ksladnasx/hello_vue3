//接口定义，要是需要被接收，必须export暴露否则会说不是组件
export interface person{
    id:string;
    name:string;
    age:number;
    school ?:string
}
