
const basicURL = "https://raw.githubusercontent.com/WendigoCompany/Assets/main/ChatUni/";

export const getImage =()=>{
    const imageType = sessionStorage.getItem("image");
    let imageIndex= sessionStorage.getItem("level") ;

    if (imageType !== null) {
    } 
  return basicURL + imageIndex + ".png";
}