const button=document.getElementById("button");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const brush=document.getElementById("brushSize");
const eraser=document.querySelector(".eraser");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

document.querySelector(".eraser").addEventListener("click",function(){
    currentColor="#f0f0f0";
    document.querySelectorAll("[data-color]").forEach(c=>
        c.classList.remove("active"));
    this.classList.add("active");
});
if(brush==null){
    throw new Error("Brush size element not found");
}
let currentColor="black"; 
const black=document.querySelector("[data-color='black']");
black.classList.add("active");
document.querySelectorAll(".color").forEach(color=>{
    color.addEventListener("click",function(){
        document.querySelectorAll(".color").forEach(c=>
            c.classList.remove("active"));  
        currentColor=this.style.backgroundColor;
        this.classList.add("active");
    });
});


let isDrawing=false;
canvas.addEventListener("mousedown",(event)=>{
    isDrawing=true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX,event.offsetY);
});
canvas.addEventListener("mousemove",(event)=>{
    if(isDrawing){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.strokeStyle=currentColor;
        ctx.lineWidth=brush.value;
        ctx.stroke();
    }
});
canvas.addEventListener("mouseup",()=>{
    isDrawing=false;
});
canvas.addEventListener("mouseleave",()=>{
    isDrawing=false;
});
button.addEventListener("click",function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
brush.addEventListener("input",function(){
    document.getElementById("brushSizeValue").textContent=this.value;
});