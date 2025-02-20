import fs from 'fs';
import path from 'path';

const targetsDir = path.resolve('src/targets');

const targets = fs.readdirSync(targetsDir).filter((dir) => !dir.endsWith('.ts') && !dir.endsWith('.tsx'));

let componentIndexContent = ""

targets.forEach((targetDir) => {
    const targetName = targetDir.split('-')[1]
    console.log(targetName)
    if (targetName === "Template") return

    const versions = fs.readdirSync(path.join(targetsDir, targetDir))
        .filter((dir) => !dir.endsWith('.ts') && !dir.endsWith('.tsx')
            && !dir.endsWith('.md'));
  
    let imports = "";
    let targets = `const ${targetName}Array = {\n`;
    let exports = `export { ${targetName}Array as ${targetDir.split("-")[1]} };\n`;
    versions.forEach((el) => {
        imports += `import ${el}${targetName} from './${targetDir}/${el}/target';\n`;
        targets += `${el}:  ${el}${targetName},\n`;
    })
    targets += "};\n";
    const fullContent = `${imports}\n${targets}\n${exports}`;
    componentIndexContent += fullContent
})

fs.writeFileSync(path.join(targetsDir, `componentIndex.ts`), componentIndexContent);

console.log("Archivo index.ts generado correctamente en src/targets/")
