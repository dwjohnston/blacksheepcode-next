import fs from "fs-extra";
import path from "path";
import { compile } from "@mdx-js/mdx"
import remarkFrontmatter from "remark-frontmatter";
const inputDir = path.join('src', 'routes');
const outputDir = path.join('src', 'generated', 'mdx');

async function compileMDXFiles(inputPath, outputPath) {
    const entries = await fs.readdir(inputPath, { withFileTypes: true });

    await fs.ensureDir(outputPath);

    for (const entry of entries) {
        const inputFilePath = path.join(inputPath, entry.name);
        const outputFilePath = path.join(outputPath, entry.name.replace('.mdx', '.js'));

        if (entry.isDirectory()) {
            await compileMDXFiles(inputFilePath, path.join(outputPath, entry.name));
        } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
            const mdxContent = await fs.readFile(inputFilePath, 'utf-8');
            const compiledJS = await compile(mdxContent, {
                remarkPlugins: [[remarkFrontmatter, 'yaml']]
            });

            await fs.writeFile(outputFilePath, String(compiledJS));
            console.log(`Compiled: ${inputFilePath} -> ${outputFilePath}`);
        }
    }
}

compileMDXFiles(inputDir, outputDir)
    .then(() => console.log('All MDX files compiled successfully!'))
    .catch(error => console.error('Error compiling MDX files:', error));