const path = require("path");
const fs = require("fs").promises;
const rutaArchivo = "./";
async function makeDir(nameDir,ruta){
    try {
      
      const dir = path.join(__dirname,`docs/${nameDir}`);
      console.log("Estoy dentro de la funcion y dir es:",dir)
      //await fs.mkdir(dir, {recursive: true});
      console.log("Los directorios fueron creados");
      const file = path.join(ruta, "Informe.doc");
      const contents = await fs.readFile(file, "utf-8");
      console.log(contents)
      //await contents.toFile(path.join(__dirname,`docs/${nameDir}`));
    } catch (error) {
      console.error(error.message);
    }
  }

  makeDir("chema",rutaArchivo);