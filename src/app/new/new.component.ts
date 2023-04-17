import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';



interface CourseNode {
  name:string;
  children?:CourseNode[]
}

const TREE_DATA : CourseNode[]  = [
  {
    name:'Angular',
    children:[
      {
        name:"Introduction for Angular"
      },
      {
        name:"Detail in Angular"
      },
    ]
  },
  {
    name:'React',
    children:[
      {
        name:"Introduction for React",
        children:[
          {
            name:"React Native"
          },
          {
            name:"React Raw"
          }
        ]
      },
      {
        name:"Definition for React",
        children:[
          {
            name:"React Power",
            children:[
              {
                name:"Delux"
              },
              {
                name:"Vue Js",
                children:[
                  {
                    name:"VUE"
                  }
                ]
              }
            ]
          },
          {
            name:"React Clone"
          }
        ]
      },
    ]
  }
]









@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {

 nestedDataSource = new MatTreeNestedDataSource<CourseNode>()

 nestedTreeControl = new NestedTreeControl<CourseNode>(node =>node.children )


  ngOnInit(): void {
    this.nestedDataSource.data = TREE_DATA
  }

  constructor() 
  {}


  hasNestedChild(index:number,node:CourseNode){
    return node!.children!.length > 0
  }

   
}
