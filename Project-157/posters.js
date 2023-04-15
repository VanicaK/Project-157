AFRAME.registerComponent("comics-posters",{
    createPoster:function(){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible","true")
        entityEl.setAttribute("geometry",{
            primitive: "plane",
            width: 20,
            heigh: 28
        })
        entityEl.setAttribute("position",{x:0,y:5,z:0.1})
        entityEl.setAttribute("material",{src:item.url})
        const container=document.querySelector("#poster-container")
        container.appendChild(entityEl)
    },
    init:function () {
        createPoster()
    },
})