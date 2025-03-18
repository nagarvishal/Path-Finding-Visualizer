let temp;
for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 40; i++) {
        temp = document.createElement("div");
        temp.setAttribute("class", "unvisited");
        temp.style.position = "absolute";
        temp.style.width = "20px";
        temp.style.height = "20px";
        temp.style.border = "0.5px solid gray";
        temp.style.left = i * 20 + i + 400;
        temp.style.top = j * 20 + j + 100;
        temp.style.backgroundColor = "while";
        document.body.appendChild(temp);
    }
}
let div = document.querySelectorAll(".unvisited"); 
const SETSD = function(){
    div[0].textContent = 'S';
    div[0].classList.remove("unvisited"); div[0].classList.remove("visited");
    div[0].setAttribute("class", "source");
    div[799].textContent = 'D';
    div[799].classList.remove("unvisited"); div[799].classList.remove("visited");
    div[799].setAttribute("class", "destination");
}
SETSD();
const clearBoard = function(){
    for(let i=0;i<div.length;i++){
        div[i].classList.remove("source");
        div[i].classList.remove("destination");
        div[i].classList.remove("visited");
        div[i].classList.remove("unvisited");
        div[i].setAttribute("class","unvisited");
        div[i].textContent = "";
    }
    SETSD();
}
const board = document.querySelector(".clear");
board.addEventListener("click",function(){
    clearBoard();
})
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
let maze = document.querySelector("#maze");
maze.addEventListener("click", function () {
    var value = maze.options[maze.selectedIndex].value;
    if (value == 1) {
        let Array1 = [];
        for (let i = 0; i < 20; i++) {
            Array1[i] = [];
        }
        for(let i=0;i<20;i++){
            for(let j=0;j<40;j++){
                if(i%2==0) Array1[i][j]=1;else Array1[i][j]=0;
            }
        }
        let random;
        let index;
        for(let i=0;i<20;i++){
            if(i%2==0){
                if(i==0){
                    for(let j=0;j<40;j=j+10){
                        random = getRandomInt(10);
                        Array1[i][j+random]=0;
                    }
                }
                else{
                    for(let j=0;j<40;j=j+10){
                        for(index=0;index<=9;index++){
                            if(Array1[i-1][j+index]==1)break;
                        }
                        if(index==0){
                            random = getRandomInteger(1,10);Array1[i][j+random]=0;
                        }
                        else if(index==9){
                            random = getRandomInteger(0,9);Array1[i][j+random]=0;
                        }
                        else{
                                random=getRandomInteger(0,index);
                                Array1[i][j+random]=0;random = getRandomInteger(index+1,10);
                                Array1[i][j+random]=0;
                        }
                    }
                }
            }
            else{
                    for(let j=0;j<40;j=j+10){
                        while(1){
                            random = getRandomInt(10);
                            if(Array1[i-1][j+random]!=0){
                                Array1[i][j+random]=1;
                                break;
                            }
                        }       
                    }
               }
        }
        console.log(Array1);
        let row=0;
        let timer = setInterval(function(){
            if(row==20){
                SETSD();
                clearInterval(timer);
            }
            for(let col=0;col<40;col++){
                if(Array1[row][col]==1){
                    div[row*40+col].classList.remove("unvisited");
                    div[row*40+col].setAttribute("class","visited");
                }
            }
            row++;
        },100)
    }
    else if (value == 2) {
        let Array1 = [];
        for (let i = 0; i < 20; i++) {
            Array1[i] = [];
        }
        for(let i=0;i<40;i++){
            for(let j=0;j<20;j++){
                if(i%2==0) Array1[j][i]=1;else Array1[j][i]=0;
            }
        }
        let random;
        let index;
        for(let i=0;i<40;i++){
            if(i%2==0){
                if(i==0){
                    for(let j=0;j<20;j=j+10){
                        random = getRandomInt(10);
                        Array1[j+random][i]=0;
                    }
                }
                else{
                    for(let j=0;j<20;j=j+10){
                        for(index=0;index<=9;index++){
                            if(Array1[j+index][i-1]==1)break;
                        }
                        if(index==0){
                            random = getRandomInteger(1,10);Array1[j+random][i]=0;
                        }
                        else if(index==9){
                            random = getRandomInteger(0,9);Array1[j+random][i]=0;
                        }
                        else{
                                random=getRandomInteger(0,index);
                                Array1[j+random][i]=0;random = getRandomInteger(index+1,10);
                                Array1[j+random][i]=0;
                        }
                    }
                }
            }
            else{
                    for(let j=0;j<20;j=j+10){
                        while(1){
                            random = getRandomInt(10);
                            if(Array1[j+random][i-1]!=0){
                                Array1[j+random][i]=1;
                                break;
                            }
                        }       
                    }
               }
        }
        console.log(Array1);
        let col=0;
        let timer = setInterval(function(){
            if(col==40){
                SETSD();
                clearInterval(timer);
            }
            for(let row=0;row<20;row++){
                if(Array1[row][col]==1){
                    div[row*40+col].classList.remove("unvisited");
                    div[row*40+col].setAttribute("class","visited");
                }
            }
            col++;
        },100)
    }
    else if (value == 3) {
    }
    else if (value == 4) {
        let index;
        for(let i=0;i<300;i++){
            index=getRandomInt(799);
            div[index].classList.remove("unvisited");
            div[index].setAttribute("class","visited");
        }
        SETSD();
    }
    else if (value == 5) {
    }
    else {

    }
    maze.value= "0";
})

document.body.addEventListener("pointerdown", e => {
    temp = checking(e);
    console.log(e);
    console.log(e.x);
    console.log(e.y);
    if (temp == 1 || temp == 0) {
        positionPointer(e);
    }
    else if (temp == 2) {
        const dydiv = document.createElement("div"); dydiv.textContent = "S";
        document.body.appendChild(dydiv);
        dydiv.setAttribute("class", "dynamicpoint")
        pointerPosition(e, dydiv);
    }
    else {
        if (temp == 3) {
            const dydiv = document.createElement("div"); dydiv.textContent = "D";
            document.body.appendChild(dydiv);
            dydiv.setAttribute("class", "dynamicpoint")
            pointerPosition(e, dydiv);
        }
    }
})
document.body.addEventListener("pointermove", e => {
    if (temp == 1 || temp == 0) {
        positionPointer(e);
    }
    else if (temp == 2 || temp == 3) {
        const dydiv = document.querySelector(".dynamicpoint");
        pointerPosition(e, dydiv);
    }
})
document.body.addEventListener("pointerup", e => {
    if (temp == 1 || temp == 0) {
        positionPointer(e); temp = -1;
    }
    else if (temp == 2 || temp == 3) {
        const dydiv = document.querySelector(".dynamicpoint");
        dropdyDiv(dydiv, e, temp); temp = -1;
        dydiv.remove();
    }
})
const checking = function (e) {
    for (let i = 0; i < div.length; i++) {
        if (((div[i].offsetTop <= e.y) && (div[i].offsetTop + div[i].offsetHeight >= e.y)) && ((div[i].offsetLeft <= e.x) && (div[i].offsetLeft + div[i].offsetWidth >= e.x))) {
            if (div[i].classList.contains("unvisited"))
                return (0);
            else if (div[i].classList.contains("visited"))
                return (1);
            else if (div[i].classList.contains("source")) {
                div[i].classList.remove("source"); div[i].textContent = "";
                div[i].setAttribute("class", "unvisited");
                return (2);
            }
            else {
                div[i].classList.remove("destination"); div[i].textContent = "";
                div[i].setAttribute("class", "unvisited");
                return (3);
            }
        }
    }
}
const dropdyDiv = function (dydiv, e, temp) {
    for (let i = 0; i < div.length; i++) {
        if (((div[i].offsetTop <= e.y) && (div[i].offsetTop + div[i].offsetHeight >= e.y)) && ((div[i].offsetLeft <= e.x) && (div[i].offsetLeft + div[i].offsetWidth >= e.x))) {
            if (temp == 2) {
                div[i].classList.remove("unvisited"); div[i].classList.remove("visited");
                div[i].setAttribute("class", "source");
                div[i].textContent = dydiv.textContent;
                break;
            }
            else if (temp == 3) {
                div[i].classList.remove("unvisited"); div[i].classList.remove("visited");
                div[i].setAttribute("class", "destination");
                div[i].textContent = dydiv.textContent;
                break;
            }
        }
    }
}
const pointerPosition = function (e, dydiv) {
    dydiv.style.left = `${e.pageX}px`;
    dydiv.style.top = `${e.pageY}px`;
}
function positionPointer(e) {
    console.log(e);
    for (let i = 0; i < div.length; i++) {
        if (((div[i].offsetTop <= e.y) && (div[i].offsetTop + div[i].offsetHeight >= e.y)) && ((div[i].offsetLeft <= e.x) && (div[i].offsetLeft + div[i].offsetWidth >= e.x))) {
            if (div[i].classList.contains("visited")) {
                div[i].classList.remove("visited");
                div[i].setAttribute("class", "unvisited");
            }
            else if (div[i].classList.contains("unvisited")) {
                div[i].classList.remove("unvisited");
                div[i].setAttribute("class", "visited");
            }
            else {

            }
        }
    }
}
const creatStack = function()
{
    let Stack = Object.create(creatStack.prototype);
    Stack.head = null;
    return(Stack);
}
creatStack.prototype.creatNode = function(data1)
{
    let temp = {
        data:data1,next:null
    }
    return(temp);
}
creatStack.prototype.isempty = function(){
    if(this.head==null)return(true);return(false);
}
creatStack.prototype.insert = function(data)
{
    let temp = this.creatNode(data);
    if(this.head==null){
        this.head=temp;return;
    }
    temp.next=this.head;this.head=temp;return;
}
creatStack.prototype.delet = function()
{
    if(this.head==null)return(-1);
    let temp=this.head;this.head=temp.next;
    return(temp.data);
}
const creatQueue = function()
{
    let Queue = Object.create(creatQueue.prototype);
    Queue.front=null;
    Queue.rear=null;
    return(Queue);
}
creatQueue.prototype.creatNode = function(data1)
{
    let temp = {
        data:data1,next:null
    }
    return(temp);
}
creatQueue.prototype.insert = function(data)
{
    let temp = this.creatNode(data);
    if(this.front==null&&this.rear==null){this.front=temp;this.rear=temp;return;
    }
    this.rear.next=temp;this.rear=temp;
    return;
}
creatQueue.prototype.delet = function()
{
    if(this.front==null)return(-1);
    let temp=this.front.data;
    if(this.front==this.rear){this.front=null;this.rear=null;return(temp);
    }
    this.front=this.front.next;return(temp);

}
creatQueue.prototype.isempty = function()
{
    if(this.front==null)return(true);return(false);
}
const creatGraph1 = function(rows,cols)
{
    const Graph = Object.create(creatGraph1.prototype);
    Graph.V=rows*cols;
    Graph.E=0;
    Graph.row=rows;
    Graph.col=cols;
    Graph.Adj = [];
    return(Graph);
}
creatGraph1.prototype.display = function(){
    for(let i=0;i<this.Adj.length;i++){
        console.log(this.Adj[i]);
    }
    return;
}
creatGraph1.prototype.creatLinkNode = function(){
    let node = {
        vertex:-1,
        row:-1,
        col:-1,
        cost:0,
        next:null,
    }
    return(node);
}
creatGraph1.prototype.creatNode = function(){
    let node = {
        vertex:-1,
        cost:0,
        parent:-1,
    }
    return(node);
}
creatGraph1.prototype.swaping = function(Array1,index1,index2)
{
    let temp = Array1[index1];Array1[index1]=Array1[index2];
    Array1[index2]=temp;
    return;
}
creatGraph1.prototype.inserting = function(Array1,vertex1,cost,parent){
    let temp = this.creatNode();
    temp.vertex=vertex1;temp.cost=cost;temp.parent=parent;
    let index=Array1.length;
    Array1.push(temp);
    while(index>0){
        if(Array1[index].cost < Array1[Math.floor((index-1)/2)].cost){
            this.swaping(Array1,index,Math.floor((index-1)/2));
            index=Math.floor((index-1)/2);
        }
        else
             break;
    }
    return;
}
creatGraph1.prototype.deleting = function(Array1)
{
    if(Array1.length==0)return(null);
    let index=0;
    let temp = Array1[index];
    Array1[index]=Array1[Array1.length-1];
    Array1.length = Array1.length-1;
    while(2*index+1 <= Array1.length-1){
        if(2*index+1 == Array1.length-1){
            if(Array1[index].cost > Array1[2*index+1].cost){
                this.swaping(Array1,index,2*index+1);index=2*index+1;
            }
            else 
                break;
        }
        else{
            if((Array1[index].cost > Array1[2*index+1].cost) || (Array1[index].cost > Array1[2*index+2].cost)){
                if(Array1[2*index+1].cost <= Array1[2*index+2].cost){
                    this.swaping(Array1,index,2*index+1);index=2*index+1;
                }
                else{
                    this.swaping(Array1,index,2*index+2);index=2*index+2;
                }
            }
            else 
                break;
        }
    }
    return(temp);
}
creatGraph1.prototype.absolute = function(row1,col1,row2,col2)
{
    let sum=0;
    if(row1>row2)sum=sum+row1-row2;
    else sum=sum+row2-row1;
    if(col1>col2)sum=sum+col1-col2;
    else sum=sum+col2-col1;
    return(sum);
}
creatGraph1.prototype.bestFirstSearch = function(source,destination)
{
    let Array1 = [];
    let Array2 = [];
    let ver = source;
    let temp = this.Adj[ver];
    let temp1 = this.Adj[destination];
    let temp2;
    let stage = [];
    for(let i=0;i<this.V;i++)stage.push(0);
    stage[ver]=stage[ver]+1;
    this.inserting(Array1,source,this.absolute(temp.row,temp.col,temp1.row,temp1.col),-1);
    let p=0;
    while(Array1.length!=0){
        temp = this.deleting(Array1);
        if(temp==null)break;stage[temp.vertex]=stage[temp.vertex]+1;
        Array2.push(temp);
        if(temp.vertex==destination){
            p=1;
            break;
        }
        ver=temp.vertex;
        temp2=this.Adj[ver].next;
        while(temp2!=null){
            if(stage[temp2.vertex]==0){
                stage[temp2.vertex]=stage[temp2.vertex]+1;
                this.inserting(Array1,temp2.vertex,this.absolute(temp2.row,temp2.col,temp1.row,temp1.col),temp.vertex);
            }
            temp2=temp2.next;
        }
    }
    if(p==0){
        for(let i=0;i<Array2.length;i++){
            Array2[i]=Array2[i].vertex;
        }
        return([Array2,[]]);
    }
    Array1 = [];
    console.log(Array2);
    const Graph1 = creatGraph(this.row,this.col);
    for(let i=0;i<Graph1.V;i++){
        Graph1.Adj[i]=Graph1.creatLinkNode();Graph1.Adj[i].vertex=i;Graph1.Adj[i].cost=0;
        Graph1.Adj[i].next=null;
    }
    for(let i=1;i<Array2.length;i++){
        Graph1.insert(Array2[i].vertex,Array2[i].parent);
    }
    ver = destination;
    temp=Graph1.Adj[ver];Array1.push(temp.vertex);
    while(temp.vertex!=source){
        ver=temp.next.vertex;temp=Graph1.Adj[ver];Array1.push(temp.vertex);
    }
    for(let i=0;i<Array2.length;i++){
        Array2[i]=Array2[i].vertex;
    }
    Array1.reverse();
    return([Array2,Array1]);
}

creatGraph1.prototype.insert = function(row1,col1,row2,col2)
{
    let ver1 = row1*this.col+col1;
    let ver2 = row2*this.col+col2;
    let temp = this.creatLinkNode();
    temp.vertex=ver2;
    temp.row=row2;
    temp.col=col2;
    temp.cost=1;
    temp.next=null;
    let temp1 = this.Adj[ver1];
    while(temp1.next!=null)temp1=temp1.next;
    temp1.next=temp;
    return;
}
creatGraph1.prototype.construct = function(rows,cols,div)
{
    let ver;
    for(let i=0;i<this.row;i++){
        for(let j=0;j<this.col;j++){
            ver=i*this.col+j;
            this.Adj[ver]=this.creatLinkNode();
            this.Adj[ver].vertex=ver;
            this.Adj[ver].cost=0;
            this.Adj[ver].col=j;
            this.Adj[ver].row=i;
            this.Adj[ver].next=null;
        }
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(!div[i*cols+j].classList.contains("visited")){
                if(i+1<rows){
                    if(!div[(i+1)*cols+j].classList.contains("visited")){
                        this.insert(i,j,i+1,j);
                    }
                }
                if(i-1>=0){
                    if(!div[(i-1)*cols+j].classList.contains("visited")){
                        this.insert(i,j,i-1,j);
                    }
                }
                if(j+1<cols){
                    if(!div[i*cols+j+1].classList.contains("visited")){
                        this.insert(i,j,i,j+1);
                    }
                }
                if(j-1>=0){
                    if(!div[i*cols+j-1].classList.contains("visited")){
                        this.insert(i,j,i,j-1);
                    }
                }
            }
        }
    }
}
const creatGraph = function(rows,cols)
{
    const Graph = Object.create(creatGraph.prototype);
    Graph.V=rows*cols;
    Graph.E=0;
    Graph.row=rows;
    Graph.col=cols;
    Graph.Adj=[];
    return(Graph);
}
const creatHeap = function(source,destination,n)
{
    const heap = Object.create(creatHeap.prototype);
    heap.Array1 = [];
    heap.n=n;
    heap.capacity=n;
    heap.m1 = new Map();
    temp=heap.creatHeapNode();
    temp.vertex=source;temp.cost=0;temp.parent=-1;
    heap.Array1.push(temp);
    heap.m1.set(source,0);
    p=1;
    for(let i=0;i<heap.capacity;i++){
        if(i!=source){
            temp=heap.creatHeapNode();temp.vertex=i;temp.cost=Infinity;temp.parent=-1;
            heap.Array1[p]=temp;
            heap.m1.set(temp.vertex,p);
            p++;           
        }
    }
    return(heap);
}
creatHeap.prototype.swaping1 = function(vertex1,index1,vertex2,index2)
{
    this.m1.set(vertex1,index1);
    this.m1.set(vertex2,index2);
    return;
}
creatHeap.prototype.swaping2 = function(index1,index2)
{
    let temp = this.Array1[index1];this.Array1[index1]=this.Array1[index2];
    this.Array1[index2]=temp;
    return;
}
creatHeap.prototype.delet = function()
{
    let index=0;
    let temp =  this.Array1[index];this.m1.delete(temp.vertex);
    this.Array1[index]=this.Array1[this.n-1];this.m1.set(this.Array1[index].vertex,index);
    this.n=this.n-1;
    this.Array1.pop();
    while(2*index+1<=this.n-1){
        if(2*index+1==this.n-1){
            if(this.Array1[2*index+1].cost<this.Array1[index].cost){
                this.swaping1(this.Array1[index].vertex,2*index+1,this.Array1[2*index+1].vertex,index);
                this.swaping2(index,2*index+1);
                index=2*index+1;
            }
            else{
                break;
            }
        }
        else{
            if((this.Array1[2*index+1].cost < this.Array1[index].cost)||(this.Array1[2*index+2].cost < this.Array1[index].cost)){
                if(this.Array1[2*index+1].cost < this.Array1[2*index+2].cost){
                    this.swaping1(this.Array1[index].vertex,2*index+1,this.Array1[2*index+1].vertex,index);
                    this.swaping2(index,2*index+1);
                    index=2*index+1;
                }
                else{
                    this.swaping1(this.Array1[index].vertex,2*index+2,this.Array1[2*index+2].vertex,index);
                    this.swaping2(index,2*index+2);
                    index=2*index+2;
                }
            }
            else{
                break;
            }
        }
    }
    return(temp);
}
creatHeap.prototype.isempty = function()
{
    if(this.Array1.length==0)return(true);return(false);
}
creatHeap.prototype.creatHeapNode = function(){
    let node = {
        vertex:-1,
        cost:0,
        parent:-1,
    }
    return(node);
}
creatHeap.prototype.Edith = function(temp,temp1)
{
    if(this.m1.has(temp1.vertex)){
        let index=this.m1.get(temp1.vertex);
        if(this.Array1[index].cost > temp.cost+temp1.cost){
            this.Array1[index].cost = temp.cost+temp1.cost;
            this.Array1[index].parent = temp.vertex;
            while(index>0){
                if(this.Array1[index].cost < this.Array1[Math.floor((index-1)/2)].cost){
                    this.swaping1(this.Array1[index].vertex,Math.floor((index-1)/2),this.Array1[Math.floor((index-1)/2)].vertex,index);
                    this.swaping2(index,Math.floor((index-1)/2));
                    index=Math.floor((index-1)/2);
                }
                else break;
            }
            return;
        }
    }
    return;
}
creatGraph.prototype.dijkstras = function(source,destination)
{
    let Array1 = [];
    let temp;
    let temp1;
    let temp2;
    const heap = creatHeap(source,destination,this.V);
    let stage = [];
    while(!heap.isempty()){
        temp=heap.delet();
        Array1.push(temp);
        if(temp.vertex==destination){
            break;
        }
        temp1=this.Adj[temp.vertex].next;
        while(temp1!=null){
            heap.Edith(temp,temp1);temp1=temp1.next;
        }
    }
    console.log(Array1);
    const Graph1 = creatGraph(this.row,this.col);
    for(let i=0;i<Graph1.V;i++){
        Graph1.Adj[i]=this.creatLinkNode();Graph1.Adj[i].vertex=i;Graph1.Adj[i].cost=0;
        Graph1.Adj[i].next=null;
    }
    for(let i=0;i<Array1.length;i++){
        if(Array1[i].parent!=-1){
            Graph1.insert(Array1[i].parent,Array1[i].vertex);
        }
    }
    let [Array2,Array3]=Graph1.defthFirstSearch(source,destination);
    let Array4 = [];
    for(let i=0;i<Array1.length;i++){
        if(Array1[i].cost!=Infinity){Array4.push(Array1[i].vertex);
        }
    }
    console.log(Array4);
    console.log(Array2);
    console.log(Array3);
    return([Array4,Array2,Array3]);
}
creatGraph.prototype.creatLinkNode = function()
{
    let node = {
        vertex:-1,
        cost:1,
        next:null
    }
    return(node);
}
creatGraph.prototype.display = function()
{
    let i;
    let temp;
    for(i=0;i<this.V;i++){
        console.log(i);
        temp=this.Adj[i].next;
        while(temp!=null){
            console.log("-->",temp.vertex);temp=temp.next;
        }
    }
    return;
}
creatGraph.prototype.insert = function(vertex1,vertex2)
{
    let temp = this.creatLinkNode();
    temp.vertex=vertex2;
    temp.cost=1;
    temp.next=null;
    let temp1=this.Adj[vertex1];
    while(temp1.next!=null)temp1=temp1.next;
    temp1.next=temp;
    return;
}

creatGraph.prototype.construct = function(rows,cols,div){
    for(let i=0;i<this.V;i++){
        this.Adj[i]=this.creatLinkNode();
        this.Adj[i].vertex=i;
        this.Adj[i].cost=0;
        this.Adj[i].next=null;
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(!div[i*cols+j].classList.contains("visited")){
                if(i+1<rows){
                    if(!div[(i+1)*cols+j].classList.contains("visited")){
                        this.insert(i*cols+j,(i+1)*cols+j);
                    }
                }
                if(i-1>=0){
                    if(!div[(i-1)*cols+j].classList.contains("visited")){
                        this.insert(i*cols+j,(i-1)*cols+j);
                    }
                }
                if(j+1<cols){
                    if(!div[i*cols+j+1].classList.contains("visited")){
                        this.insert(i*cols+j,i*cols+j+1);
                    }
                }
                if(j-1>=0){
                    if(!div[i*cols+j-1].classList.contains("visited")){
                        this.insert(i*cols+j,i*cols+j-1);
                    }
                }
            }
        }
    }
    return;
}
creatGraph.prototype.returnPath = function(source,destination){
    let ver=destination;
    let Array1 = [];
    Array1.push(ver);
    let temp=this.Adj[ver];
    while(temp.vertex!=source){
        ver=temp.next.vertex;temp=this.Adj[ver];Array1.push(temp.vertex);
    }
    return(Array1);
}
creatGraph.prototype.solve = function(source,destination)
{
    const Graph1 = creatGraph(this.row,this.col);
    for(let i=0;i<Graph1.V;i++){
        Graph1.Adj[i]=Graph1.creatLinkNode();Graph1.Adj[i].vertex=i;
        Graph1.Adj[i].cost=1;
        Graph1.Adj[i].next=null;
    }
    let p=0;
    let temp;
    let Array1=[];
    let Array2=[];
    let stage = [];
    for(let i=0;i<this.V;i++)stage.push(0);
    let ver=source;
    let Queue1 = creatQueue();Queue1.insert(ver);
    stage[ver]=stage[ver]+1;Array2.push(ver);
    let Queue2 = creatQueue();
    let Queue3;
    Array1.push(Array2);Array2=[];
    while(!Queue1.isempty()){
        while(!Queue1.isempty()){
            ver=Queue1.delet();temp=this.Adj[ver].next;
            while(temp!=null){
                if(stage[temp.vertex]==0){
                    Array2.push(temp.vertex);stage[temp.vertex]=stage[temp.vertex]+1;
                    Graph1.insert(temp.vertex,ver);Queue2.insert(temp.vertex);
                    if(temp.vertex==destination){
                        p=1;
                        break;
                    }
                }
                temp=temp.next;
            }
        }
        Queue3 = Queue2;Queue2=Queue1;Queue1=Queue3;
        Array1.push(Array2);Array2=[];
        if(p==1)break;
    }
    if(p==1){
        return([Array1,Graph1.returnPath(source,destination)]);
    }
    else{
        return([Array1,[]]);
    }
}
creatGraph.prototype.DFS = function(root,stage,passed,source,destination,p,Array1,Array2)
{
    if(stage[root.vertex]==1){
        stage[root.vertex]=stage[root.vertex]+1;
        passed[root.vertex]=passed[root.vertex]+1;
        Array1.push(root.vertex);
        Array2.push(root.vertex);
        if(root.vertex==destination){
            p[0]=1;return;
        }
        let temp = root.next;
        while(temp!=null){
            if(passed[temp.vertex]==0){
                if(stage[temp.vertex]==0){
                    stage[temp.vertex]=stage[temp.vertex]+1;
                    this.DFS(this.Adj[temp.vertex],stage,passed,source,destination,p,Array1,Array2);
                    stage[temp.vertex]=0;
                    if(p[0]==1)return;
                }
            }
            temp=temp.next;
        }
        Array2.pop();return;
    }
    else return;
}
creatGraph.prototype.defthFirstSearch = function(source,destination)
{
    let stage = [];
    let passed = [];
    for(let i=0;i<this.V;i++){
        stage.push(0);passed.push(0);
    }
    ver=source;
    let p = [0];
    let Array1 = [];
    let Array2 = [];
    stage[ver]=stage[ver]+1;
    this.DFS(this.Adj[ver],stage,passed,source,destination,p,Array1,Array2,);
    stage[ver]=0;
    if(p[0]==0)Array2=[];
    return([Array1,Array2]);
}
creatGraph.prototype.bidirectionalBFS = function(source,destination)
{
    const Array1 = [];
    const Graph = creatGraph(this.row,this.col);
    for(let i=0;i<this.V;i++){
        Graph.Adj[i]=this.creatLinkNode();Graph.Adj[i].vertex=i;Graph.Adj[i].cost=0;
        Graph.Adj[i].next=null;
    }
    const Queue1 = creatQueue();
    const Queue2 = creatQueue();
    let ver1 = source;
    let ver2 = destination;
    let stage1 = [];
    let stage2 = [];
    for(let i=0;i<this.V;i++){
        stage1.push(0);stage2.push(0);
    }
    let i=0;
    Queue1.insert(ver1);stage1[ver1]=stage1[ver1]+1;
    Queue2.insert(ver2);stage2[ver2]=stage2[ver2]+1;
    let temp;
    let p=0;
    let commonVertex=-1;
    Array1.push(ver1);
    Array1.push(ver2);
    while((!Queue1.isempty())||(!Queue2.isempty())){
        if(i%2==0&&(!Queue1.isempty())){
            ver1 = Queue1.delet();stage1[ver1]=stage1[ver1]+1;
            temp=this.Adj[ver1].next;
            while(temp!=null){
                if(stage2[temp.vertex]!=0){
                    commonVertex=temp.vertex;Array1.push(temp.vertex);
                    Graph.insert(temp.vertex,ver1);p=1;break;
                }
                else{
                    if(stage1[temp.vertex]==0){
                        Array1.push(temp.vertex);
                        stage1[temp.vertex]=stage1[temp.vertex]+1;Graph.insert(temp.vertex,ver1);
                        Queue1.insert(temp.vertex);
                    }
                }
                temp=temp.next;
            }
        }
        else if(i%2==1&&(!Queue2.isempty())){
            ver2 = Queue2.delet();stage2[ver2]=stage2[ver2]+1;
            temp=this.Adj[ver2].next;
            while(temp!=null){
                if(stage1[temp.vertex]!=0){
                    Array1.push(temp.vertex);
                    commonVertex=temp.vertex;Graph.insert(temp.vertex,ver2);p=1;break;
                }
                else{
                    if(stage2[temp.vertex]==0){
                        Array1.push(temp.vertex);
                        stage2[temp.vertex]=stage2[temp.vertex]+1;Graph.insert(temp.vertex,ver2);
                        Queue2.insert(temp.vertex);
                    }
                }
                temp=temp.next;
            }
        }
        else{}
        i=i+1;
        if(commonVertex!=-1)break;
    }
    console.log(Array1);
    console.log(Graph);
    if(commonVertex==-1)return[[Array1],[]]
    let Array2 = [];
    let Array3 = [];
    Array2.push(commonVertex);
    if(Graph.Adj[commonVertex].next.next==null){
        temp=Graph.Adj[commonVertex];
        while(temp.vertex!=source){
            temp=temp.next;
            Array2.push(temp.vertex);
            temp=Graph.Adj[temp.vertex];
        }
        Array2.reverse();
        return([Array1,Array2]);
    }
    else{
        temp=Graph.Adj[commonVertex];
        while(temp.vertex!=source&&temp.vertex!=destination){
            temp=temp.next;Array2.push(temp.vertex);temp=Graph.Adj[temp.vertex];
        }
        temp=Graph.Adj[Graph.Adj[commonVertex].next.next.vertex];
        Array3.push(temp.vertex);
        while(temp.vertex!=source&&temp.vertex!=destination){
            temp=temp.next;Array2.push(temp.vertex);temp=Graph.Adj[temp.vertex];
        }
        if(Array2[Array2.length-1]==source){
            Array2.reverse();
            for(let i=0;i<Array3.length;i++){
                Array2.push(Array3[i]);
            }
            return([Array1,Array2]);
        }
        else{
            Array3.reverse();
            for(let i=0;i<Array2.length;i++)Array3.push(Array2[i]);
            return([Array1,Array3]);
        }
    }
}
let selector = document.querySelector("#algorithm");
console.log(selector);
console.log(selector.getAttribute("value"));
console.log(selector.textContent);
let visualize = document.querySelector(".visualize");
console.log(visualize);
visualize.addEventListener("click", (e) => {
    let source=null;
    let destination=null;
    for(let i=0;i<div.length;i++){
        if(div[i].classList.contains("source"))source=i;

        if(div[i].classList.contains("destination"))destination=i;
    }
    var value = selector.options[selector.selectedIndex].value;
    console.log(value);
    if(value==0){
    }
    else if(value==1){
    }
    else if(value==2){
        const Graph = creatGraph(20,40);
        Graph.construct(20,40,div);
        Graph.display();
        if(source!=null&&destination!=null){
            let [Array1,Array2,Array3] = Graph.dijkstras(source,destination);
            const function2 = function(){
                let k=1;
                let timer = setInterval(()=>{
                    if(k==Array3.length){
                        clearInterval(timer);return;
                    }
                    if(Array3[k]!=destination){
                        div[Array3[k]].childNodes[0].classList.remove("path3");
                        div[Array3[k]].childNodes[0].setAttribute("class","path2");
                    }
                    k++;
                },50)
            }
            const function1 = function(){
                let j=1;
                let timer = setInterval(()=>{
                    if(j==Array2.length){
                        function2();clearInterval(timer);return;
                    }
                    if(Array2[j]!=destination){
                        div[Array2[j]].childNodes[0].classList.remove("path1");
                        div[Array2[j]].childNodes[0].setAttribute("class","path3");
                    }
                    j++;
                },50)
            }
            let i=1;
            let timer = setInterval(()=>{
                if(i==Array1.length){
                    function1();
                    clearInterval(timer);return;
                }
                if(Array1[i]!=destination){
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class","path1");
                    div[Array1[i]].appendChild(newDiv);
                }
                i++;
            },20)
        }
    }
    else if(value==3){
        const Graph = creatGraph(20,40);
        Graph.construct(20,40,div);
        Graph.display();
        if(source!=null&&destination!=null){
            let [Array1,Array2]=Graph.solve(source,destination);
            console.log(Array1);
            console.log(Array2);
            const function2 = function(){
                if(Array2.length!=0){
                    let i=1;
                    let timer = setInterval(()=>{
                        if(i==Array2.length-1){
                            clearInterval(timer);return;
                        }
                        div[Array2[i]].childNodes[0].classList.remove("path1");
                        div[Array2[i]].childNodes[0].setAttribute("class","path2");
                        i++;
                    },100)
                }
            }
            let j=1;
            let timer = setInterval(()=>{
                if(j==Array1.length){
                    console.log(div[4]);
                    console.log(div[4].childNodes);
                    function2();
                    clearInterval(timer);return;
                }
                for(let i=0;i<Array1[j].length;i++){
                    if(Array1[j][i]!=destination){
                        newDiv = document.createElement("div");
                        newDiv.setAttribute("class","path1");
                        div[Array1[j][i]].appendChild(newDiv);
                    }
                }
                j++;
            },100)
        }
    }
    else if(value==4){
        const Graph = creatGraph(20,40);
        Graph.construct(20,40,div);
        Graph.display();
        if(source!=null&&destination!=null){
            let [Array1,Array2] = Graph.defthFirstSearch(source,destination);
            const function2 = function(){
                if(Array2.length!=0){
                    let j=1;
                    let timer = setInterval(()=>{
                        if(j==Array2.length){
                            clearInterval(timer);return;
                        }
                        if(Array2[j]!=destination){
                            div[Array2[j]].childNodes[0].classList.remove("path1");
                            div[Array2[j]].childNodes[0].setAttribute("class","path2");
                        }
                        j++;
                    },100)
                }
            }
            let i=1;
            let timer = setInterval(()=>{
                if(i==Array1.length){
                    function2();clearInterval();return;
                }
                if(Array1[i]!=destination){
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class","path1");
                    div[Array1[i]].appendChild(newDiv);
                }
                i++;
            },100)
        }
    }
    else if(value==5){
        const Graph = creatGraph(20,40);
        Graph.construct(20,40,div);
        Graph.display();
        if(source!=null&&destination!=null){
            let [Array1,Array2] = Graph.bidirectionalBFS(source,destination);
            console.log(Array1);
            console.log(Array2);
            const function1 = function(){
                let  j=0;
                let timer = setInterval(()=>{
                    if(j==Array2.length){
                        clearInterval(timer);return;
                    }
                    if(Array2[j]!=source&&Array2[j]!=destination){
                        div[Array2[j]].childNodes[0].classList.remove("path1");
                        div[Array2[j]].childNodes[0].setAttribute("class","path2");
                    }
                    j++;
                },100)
            }
            let i = 0;
            let timer  = setInterval(()=>{
                if(i==Array1.length){
                    function1()
                    clearInterval(timer);return;
                }
                if(Array1[i]!=destination&&Array1[i]!=source){
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class","path1");
                    div[Array1[i]].appendChild(newDiv);
                }
                i++;
            })
        }
    }
    else if(value==6){
        const Graph = creatGraph1(20,40);
        Graph.construct(20,40,div);
        Graph.display();
        if(source!=null&&destination!=null){
            let [Array1,Array2]=Graph.bestFirstSearch(source,destination);
            const function2 = function(){
                if(Array2.length!=0){
                    let j=1;
                    let timer = setInterval(()=>{
                        if(j==Array2.length){
                            clearInterval(timer);return;
                        }
                        if(Array2[j]!=destination){
                            div[Array2[j]].childNodes[0].classList.remove("path1");
                            div[Array2[j]].childNodes[0].setAttribute("class","path2");
                        }
                        j++;
                    },50)
                }
            }
            let i=1;
            let timer = setInterval(()=>{
                if(i==Array1.length){
                    function2();clearInterval();return;
                }
                if(Array1[i]!=destination){
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class","path1");
                    div[Array1[i]].appendChild(newDiv);
                }
                i++;
            },50)
        }
    }
    else if(value==7){

    }
    else if(value==8){

    }
    else{

    }
})



// let allDivs = document.querySelectorAll(".helping");
// console.log(allDivs);
// if(((div[i].offsetTop<=e.y)&&(div[i].offsetTop+div[i].offsetHeight>=e.y))&&((div[i].offsetLeft<=e.x)&&(div[i].offsetLeft+div[i].offsetWidth >= e.x))){
//     div[i].setAttribute("class","blocked");
//     console.log("helloworld");
// }
// let newDiv;
// let i=1;
// let timer = setInterval(()=>{
//     if(i==30){
//         clearInterval(timer);
//     }
//     newDiv = document.createElement("div");
//     newDiv.setAttribute("class","path2");
//     div[i].appendChild(newDiv);
//     i++;
// },100)

