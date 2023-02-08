
let bgColorInput=document.getElementById("bgColorInput")
let fontColorInput=document.getElementById("fontColorInput")
let fontSizeInput=document.getElementById("fontSizeInput")
let fontWeightInput=document.getElementById("fontWeightInput")
let paddingInput=document.getElementById("paddingInput")
let borderRadiusInput=document.getElementById("borderRadiusInput")
let customButton=document.getElementById("customButton")

function apply(){
    let bgcol=bgColorInput.value 
    let fcol=fontColorInput.value
    let fsz=fontSizeInput.value 
    let fwght=fontWeightInput.value 
    let padd=paddingInput.value 
    let brd=borderRadiusInput.value 
    customButton.style.backgroundColor=bgcol
    customButton.style.color=fcol
    customButton.style.fontSize=fsz
    customButton.style.fontWeight=fwght
    customButton.style.padding=padd
    customButton.style.borderRadius=brd
    
}