AFRAME.registerComponent("game-play",{
    schema:{
        elementId: {type:"string",default:"#coin1"}
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.inculdes("#coin")){
                console.log(elementId+" collided")
            }else if(elementId.includes("#fish")){
                console.log(elementId+" collided")
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})