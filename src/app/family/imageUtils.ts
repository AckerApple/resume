function blobToFile(
  theBlob: Blob, fileName:string
 ):File{
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
}

export function maxResizeImage(
  file:File,
  MAX_WIDTH = 800,
  MAX_HEIGHT = 600,
  mime?:string
):Promise<File>{
  return resizeImageToCanvas(
    file,
    MAX_WIDTH,
    MAX_HEIGHT
  ).then(canvas=>
    <Promise<any>>new Promise((res,rej)=>{
      canvas.toBlob(blob=>{
        res( blobToFile(blob,file.name) )
      }, mime || file.type, 1)
    })
  )
}

export function fileToImgTag(
  file:File
):Promise<any>{
  return new Promise((res,rej)=>{
    var img = document.createElement("img");
    var reader = new FileReader();  
    reader.onload = function(e) {
      img.src = e.target['result']
      res( img )
    }
    reader.readAsDataURL(file);
  })
}

//declare var canvas:any
export function resizeImageToCanvas(
  file:File,
  MAX_WIDTH = 800,
  MAX_HEIGHT = 600
):Promise<any>{
  return fileToImgTag( file )
  .then(img=>{
    const canvas = document.createElement('canvas')
    //var ctx = canvas.getContext("2d");
    //ctx.drawImage(img, 0, 0);

    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas
  })
 //var dataurl = canvas.toDataURL("image/png");
}