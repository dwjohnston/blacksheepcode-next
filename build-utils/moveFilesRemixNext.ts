import * as fs from 'fs-extra';
import * as path from 'path';

const sourceDir = path.join('src', 'routes', 'test');
const targetDir = path.join('src', 'app', 'test');

async function updateImports(filePath: string): Promise<string> {
    const content = await fs.readFile(filePath, 'utf8');
    const updatedContent = content.replace(/import\s+\{.*\}\s+from\s+["'][.\/]+components\//g, match => {
        return match.replace(/["'][.\/]+components\//, '"@/components/');
    });
    return updatedContent;
}

async function moveFiles() {
    try {
        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            const sourceFilePath = path.join(sourceDir, file);
            const fileNameWithoutExtension = path.parse(file).name;
            const targetFolderPath = path.join(targetDir, fileNameWithoutExtension);
            const targetFilePath = path.join(targetFolderPath, 'page.mdx');

            // Create the target directory if it doesn't exist
            await fs.ensureDir(targetFolderPath);

            // Update imports in the file content
            const updatedContent = await updateImports(sourceFilePath);


            console.log(`Copying ${sourceFilePath} to ${targetFilePath}...`)
            // Write the updated content to the new file location
            await fs.writeFile(targetFilePath, updatedContent);
            console.log("Success.")

        }

        console.log('Files moved and imports updated successfully');
    } catch (error) {
        console.error('Error moving files:', error);
    }
}

moveFiles();



