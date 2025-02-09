import fs from 'fs';
import path from 'path';

const targetsDir = path.resolve('src/targets');

const targets = fs.readdirSync(targetsDir).filter((dir) => !dir.endsWith('.ts') && !dir.endsWith('.tsx'));

targets.forEach((targetDir) => {
    const targetName = targetDir.split('-')[1]
    console.log(targetName)
    if (targetName === "Template") return
    const versions = fs.readdirSync(path.join(targetsDir, targetDir))
        .filter((dir) => !dir.endsWith('.ts') && !dir.endsWith('.tsx')
            && !dir.endsWith('.md'));
    const imports = versions
        .map((d) => `export { default as ${d} } from './${d}/target';`)
        .join("\n");

    fs.writeFileSync(path.join(targetsDir, targetDir, `componentIndex.ts`), imports);
})





console.log("Archivo index.ts generado correctamente en src/targets/")